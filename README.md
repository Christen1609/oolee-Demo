# oolee AI Search

A static visual clone of [oolee.com.au](https://oolee.com.au) with one added feature: the offers catalog is searchable in natural language, and the rankings are personalized to a user profile.

**Live demo:** https://oolee-demo.vercel.app/offers

The interesting code lives in `lib/llm.ts`, `lib/similarity.ts`, `scripts/embed-catalog.ts`, and `components/PersonalizationBar.tsx`. Read on for what they do.

---

## How the search works

A two-stage RAG pipeline, the LLM never sees the full catalog, increasing token efficiency.

### Stage 1: Retrieval (vector similarity)

Every offer is embedded once at build time by `scripts/embed-catalog.ts`. For each offer the script concatenates `brand + category + headline + description`, sends it to Google's `gemini-embedding-001` model with `taskType: RETRIEVAL_DOCUMENT` at 768 dimensions, and writes the result to `lib/catalog-embedded.json`.

At request time, the user's query is embedded with the same model (`taskType: RETRIEVAL_QUERY`). Cosine similarity runs against all 35 offers in memory. The top 8 by score move to Stage 2.

```
query: "I need car tyre coupons"
   |
   v
embed (RETRIEVAL_QUERY, 768d)
   |
   v
cosine vs 35 pre-embedded offers
   |
   v
top 8 candidates  --->  Stage 2
```

### Stage 2: Ranking with personalization (LLM)

The shortlist of 8, the original query, and the user's profile go to `gemini-2.5-flash`. The model returns 3 to 5 offers ranked best-first, each with a one-sentence reason that cites either a query word or a profile field.

JSON is enforced via Gemini's native structured outputs: `responseMimeType: 'application/json'` plus a `responseSchema` pinning `{ matches: [{ offerId, reason }] }`. No prompt-based JSON wrangling, no parse fallbacks.

### Why two stages instead of one

A single LLM call with the full catalog stuffed in the prompt works fine for 35 offers, but it doesn't scale. Real catalogs run to tens of thousands of items. Splitting retrieval from ranking gives you:

- The LLM only reasons over a small relevant set. Cheaper, faster, more accurate.
- Retrieval cost stays constant regardless of catalog size.
- You can swap the ranker model without re-embedding.

This demo runs on a tiny catalog but uses the same architecture a production search would use at scale.

---

## Personalization

A "Searching as:" chip strip sits above the search bar on the offers page. Click it to expand an inline editor and change the profile. Default values:

```ts
{
  profession: "Healthcare",
  city: "Adelaide",
  shift: "Night",
  interests: ["Wellness & Beauty", "Everyday & Food"]
}
```

The profile gets injected into the ranking prompt with explicit weighting rules. The ranker is told, paraphrased:

- If the user is a night-shift nurse and the query is about cars or tyres, prioritise mobile or at-home services over in-store options.
- If "Wellness" is in the user's interests, weight wellness brands higher on close calls.
- If the user is in Education, weight teacher-relevant items higher.
- If the query mentions feet, shoes, or being on your feet, prioritise comfort brands when the user is Healthcare.

Every match's reasoning sentence must cite either a profile field or a query word. Enforced in the prompt.

### Worked example

Same query: **"I need tyres but I work overnight"**.

With the default **Healthcare / Night-shift** profile, the live API returns:

```json
{
  "matches": [
    {
      "offerId": "mobile-tyre-shop",
      "reason": "This mobile service is perfectly suited for your Night shift schedule, allowing you to get your tyres fitted conveniently at home."
    },
    {
      "offerId": "koala-mattress",
      "reason": "Ensuring quality sleep is crucial for your Night shift recovery, aligning perfectly with your Wellness interest."
    }
  ]
}
```

Notice the ranker reaches past the obvious literal match to also suggest a mattress, because a night-shift nurse who asks about tyres is signalling a wider set of needs. The reasoning explicitly cites "Night shift" and "Wellness interest".

Flip the profile to **Education** and the same query rebalances toward Hertz, Subaru fleet pricing, and items with weekend/commuting framing. Identical query, identical catalog, different output. The personalization layer is doing real work, not cosmetic relabelling.

---

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS, Poppins via `next/font/google` (matching oolee.com.au)
- Google AI Studio (`@google/genai`) for both embeddings and ranking
- framer-motion for scroll reveals, skeleton-to-stagger transitions, and the personalization editor expansion
- Vercel for hosting

Single LLM provider. Single SDK. Single API key.

---

## Run locally

```bash
npm install
echo "GOOGLE_API_KEY=your_key_here" > .env.local
npm run dev
```

To regenerate the embeddings after editing `lib/catalog.ts`:

```bash
npx tsx scripts/embed-catalog.ts
```

The script overwrites `lib/catalog-embedded.json` in place. Commit the new JSON.

---

## Project layout

```
app/
  layout.tsx                 root layout, Poppins, Navbar + Footer
  page.tsx                   homepage
  offers/page.tsx            offers + AI search
  about-us, business, ambassador, employer, support
  api/search/route.ts        POST: query + profile  ->  ranked matches

components/
  OffersExplorer.tsx         offers page client component
  PersonalizationBar.tsx     "Searching as" chip strip + inline editor
  OfferCard.tsx              offer card (used both grid + search results)
  SkeletonOfferCard.tsx      pulsing placeholder during search
  Reveal.tsx                 framer-motion scroll-reveal primitives
  BrandStrip.tsx             infinite-marquee brand row
  ... other UI

lib/
  catalog.ts                 hardcoded offer data (source of truth)
  catalog-embedded.json      pre-computed offer embeddings
  similarity.ts              cosine similarity helper
  llm.ts                     Gemini client + RAG search pipeline

scripts/
  embed-catalog.ts           one-shot script to re-embed the catalog
```
