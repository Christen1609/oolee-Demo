import { GoogleGenAI } from "@google/genai";
import { OFFERS } from "../lib/catalog";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { config as loadEnv } from "dotenv";

loadEnv({ path: ".env.local" });

const EMBED_MODEL = "gemini-embedding-001";
const DIMS = 768;
const OUT_PATH = join("lib", "catalog-embedded.json");

async function main() {
  const key = process.env.GOOGLE_API_KEY;
  if (!key) {
    console.error("GOOGLE_API_KEY missing from environment");
    process.exit(1);
  }
  const ai = new GoogleGenAI({ apiKey: key });

  const texts = OFFERS.map(
    (o) => `${o.brand} ${o.category} ${o.headline} ${o.description}`,
  );

  console.log(
    `Embedding ${texts.length} offers with ${EMBED_MODEL} at ${DIMS} dims...`,
  );

  const resp = await ai.models.embedContent({
    model: EMBED_MODEL,
    contents: texts,
    config: {
      taskType: "RETRIEVAL_DOCUMENT",
      outputDimensionality: DIMS,
    },
  });

  const embeddings = resp.embeddings ?? [];
  if (embeddings.length !== OFFERS.length) {
    console.error(
      `Got ${embeddings.length} embeddings for ${OFFERS.length} offers`,
    );
    process.exit(1);
  }

  const enriched = OFFERS.map((o, i) => ({
    ...o,
    embedding: embeddings[i]?.values ?? [],
  }));

  const meta = {
    model: EMBED_MODEL,
    dims: DIMS,
    taskType: "RETRIEVAL_DOCUMENT",
    generatedAt: new Date().toISOString(),
    count: enriched.length,
  };

  writeFileSync(
    OUT_PATH,
    JSON.stringify({ meta, offers: enriched }, null, 2),
  );

  console.log(
    `Wrote ${OUT_PATH} (${enriched.length} offers, ${DIMS} dims each)`,
  );
}

main().catch((e) => {
  console.error("Embedding failed:", e);
  process.exit(1);
});
