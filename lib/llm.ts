import { GoogleGenAI, Type } from "@google/genai";
import { topKBySimilarity } from "./similarity";
import { OFFERS } from "./catalog";
import embedded from "./catalog-embedded.json";

const RANK_MODEL = "gemini-2.5-flash";
const EMBED_MODEL = "gemini-embedding-001";
const EMBED_DIMS = 768;
const TOP_K = 8;

export type Match = { offerId: string; reason: string };

export type UserProfile = {
  profession: "Education" | "Healthcare";
  city: string;
  shift?: "Day" | "Night" | "Mixed";
  interests: string[];
};

type EmbeddedOffer = {
  id: string;
  brand: string;
  category: string;
  headline: string;
  description: string;
  embedding: number[];
};

const EMBEDDED_OFFERS: EmbeddedOffer[] = (embedded as {
  offers: EmbeddedOffer[];
}).offers;

function buildClient() {
  const key = process.env.GOOGLE_API_KEY;
  if (!key) throw new Error("GOOGLE_API_KEY is not set");
  return new GoogleGenAI({ apiKey: key });
}

async function embedQuery(
  ai: GoogleGenAI,
  query: string,
): Promise<number[]> {
  const resp = await ai.models.embedContent({
    model: EMBED_MODEL,
    contents: query,
    config: {
      taskType: "RETRIEVAL_QUERY",
      outputDimensionality: EMBED_DIMS,
    },
  });
  const values = resp.embeddings?.[0]?.values;
  if (!values || values.length === 0) {
    throw new Error("Empty query embedding from Gemini");
  }
  return values;
}

function describeProfile(p: UserProfile): string {
  const parts = [
    `Profession: ${p.profession}`,
    `City: ${p.city}`,
  ];
  if (p.shift) parts.push(`Shift pattern: ${p.shift}`);
  if (p.interests.length) {
    parts.push(`Interests: ${p.interests.join(", ")}`);
  }
  return parts.join(" | ");
}

export async function semanticSearch(
  query: string,
  profile: UserProfile,
): Promise<Match[]> {
  const ai = buildClient();

  const queryVec = await embedQuery(ai, query);
  const candidates = topKBySimilarity(queryVec, EMBEDDED_OFFERS, TOP_K);

  const shortlist = candidates.map((c) => ({
    offerId: c.id,
    brand: c.brand,
    category: c.category,
    headline: c.headline,
    description: c.description,
  }));

  const prompt = `You are the personalized search ranker for oolee, a discount platform for Australian teaching and nursing professionals.

You receive:
1. A shortlist of 8 offers pre-selected by vector similarity to the user's query.
2. The original user query.
3. A user profile.

Your job: pick 3 to 5 of these offers that best fit the user's intent AND their profile, ranked best first. Write one short sentence per match explaining why it fits this specific user.

Weight the profile aggressively when ranking. Examples of how to apply it:
- If the user is a night-shift nurse and the query is about cars or tyres, prioritise mobile or at-home services over in-store options.
- If "Wellness" is in the user's interests, weight wellness and recovery brands higher on close calls.
- If "Travel" is in the user's interests, weight travel partners higher on relevant queries.
- If the user is in Education, weight teacher-relevant items (planners, classroom-friendly gear, weekend escapes during school holidays) higher than nurse-specific ones.
- If profession is Healthcare and the query relates to feet, shoes, or being on your feet, prioritise comfort and durability.

Only pick offers from the shortlist. Do not invent offers. The reasoning sentence MUST mention either the user's profile (profession, shift, or an interest) or a specific query word.

SHORTLIST:
${JSON.stringify(shortlist)}

USER QUERY:
${query}

USER PROFILE:
${describeProfile(profile)}`;

  const resp = await ai.models.generateContent({
    model: RANK_MODEL,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          matches: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                offerId: { type: Type.STRING },
                reason: { type: Type.STRING },
              },
              required: ["offerId", "reason"],
            },
          },
        },
        required: ["matches"],
      },
    },
  });

  const text = resp.text ?? "";
  let parsed: { matches?: Match[] } = {};
  try {
    parsed = JSON.parse(text);
  } catch {
    return [];
  }

  const matches = (parsed.matches ?? []).filter((m) =>
    OFFERS.some((o) => o.id === m.offerId),
  );

  return matches.slice(0, 5);
}

export const DEFAULT_PROFILE: UserProfile = {
  profession: "Healthcare",
  city: "Adelaide",
  shift: "Night",
  interests: ["Wellness & Beauty", "Everyday & Food"],
};
