import { NextResponse } from "next/server";
import { DEFAULT_PROFILE, UserProfile, semanticSearch } from "@/lib/llm";

export const runtime = "nodejs";
export const maxDuration = 30;

function sanitizeProfile(input: any): UserProfile {
  if (!input || typeof input !== "object") return DEFAULT_PROFILE;

  const profession =
    input.profession === "Education" || input.profession === "Healthcare"
      ? input.profession
      : DEFAULT_PROFILE.profession;

  const city =
    typeof input.city === "string" && input.city.trim()
      ? input.city.trim()
      : DEFAULT_PROFILE.city;

  let shift: UserProfile["shift"];
  if (profession === "Healthcare") {
    shift =
      input.shift === "Day" ||
      input.shift === "Night" ||
      input.shift === "Mixed"
        ? input.shift
        : DEFAULT_PROFILE.shift;
  }

  const interests = Array.isArray(input.interests)
    ? input.interests.filter((s: unknown): s is string => typeof s === "string")
    : [];

  return { profession, city, shift, interests };
}

export async function POST(req: Request) {
  let body: { query?: string; profile?: any };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const query = (body.query ?? "").trim();
  if (!query) {
    return NextResponse.json({ matches: [] });
  }

  const profile = sanitizeProfile(body.profile);

  try {
    const matches = await semanticSearch(query, profile);
    return NextResponse.json({ matches });
  } catch (e: any) {
    const msg = e?.message ?? "Search failed";
    return NextResponse.json(
      { error: msg, matches: [] },
      { status: 500 },
    );
  }
}
