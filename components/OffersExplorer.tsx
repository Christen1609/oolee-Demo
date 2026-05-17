"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, OFFERS, Offer, getOfferById } from "@/lib/catalog";
import OfferCard from "./OfferCard";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";
import PersonalizationBar, {
  UserProfile,
  DEFAULT_PROFILE,
} from "./PersonalizationBar";
import SkeletonOfferCard from "./SkeletonOfferCard";

type Match = { offerId: string; reason: string };
type Mode =
  | { kind: "browse" }
  | { kind: "searching"; query: string }
  | { kind: "results"; matches: Match[]; query: string }
  | { kind: "empty"; query: string }
  | { kind: "error"; message: string };

const CATEGORY_TABS = ["All", ...CATEGORIES] as const;

const EXAMPLE_QUERIES = [
  "I need tyres but I work overnight",
  "weekend getaway in the Adelaide Hills",
  "I'm exhausted, need to reset",
  "back to school prep",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const reasonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, delay: 0.1 },
  },
};

export default function OffersExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORY_TABS)[number]>(
    "All",
  );
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [mode, setMode] = useState<Mode>({ kind: "browse" });

  const browseOffers = useMemo(() => {
    if (category === "All") return OFFERS;
    return OFFERS.filter((o) => o.category === category);
  }, [category]);

  async function runSearch(q: string) {
    const trimmed = q.trim();
    if (!trimmed) return;
    setMode({ kind: "searching", query: trimmed });
    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: trimmed, profile }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMode({
          kind: "error",
          message:
            data?.error ??
            "Search failed. Check the server logs or your API key.",
        });
        return;
      }
      const matches: Match[] = data.matches ?? [];
      if (matches.length === 0) {
        setMode({ kind: "empty", query: trimmed });
        return;
      }
      setMode({ kind: "results", matches, query: trimmed });
    } catch (e: any) {
      setMode({
        kind: "error",
        message: e?.message ?? "Search request failed",
      });
    }
  }

  function clearSearch() {
    setQuery("");
    setMode({ kind: "browse" });
  }

  return (
    <>
      <section className="bg-oolee-pink-light">
        <div className="mx-auto max-w-page px-6 py-10">
          <Reveal>
            <span className="pill-badge mb-4">AI-powered search</span>
            <h1 className="text-3xl font-bold text-oolee-navy md:text-4xl">
              All <span className="text-oolee-pink">Offers</span>
            </h1>
            <p className="mt-2 text-sm text-oolee-muted">
              Ask in your own words. The search understands intent, not just keywords.
            </p>
          </Reveal>

          <div className="mt-5 max-w-2xl">
            <PersonalizationBar profile={profile} onChange={setProfile} />
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.21, 1, 0.81, 1] }}
            onSubmit={(e) => {
              e.preventDefault();
              runSearch(query);
            }}
            className="flex w-full max-w-2xl flex-wrap items-center gap-2 rounded-pill border border-oolee-line bg-white p-1.5 shadow-card"
          >
            <span className="pl-3 text-oolee-muted">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Try: "I need tyres but I work overnight"'
              className="flex-1 bg-transparent px-2 py-2 text-sm text-oolee-ink placeholder:text-oolee-muted focus:outline-none"
            />
            {mode.kind !== "browse" && (
              <button
                type="button"
                onClick={clearSearch}
                className="px-3 text-xs font-medium text-oolee-muted hover:text-oolee-pink"
              >
                Clear
              </button>
            )}
            <button
              type="submit"
              className="btn-pink"
              disabled={mode.kind === "searching"}
            >
              {mode.kind === "searching" ? "Searching…" : "Search with AI"}
            </button>
          </motion.form>

          <RevealStagger className="mt-3 flex flex-wrap gap-2 text-xs text-oolee-muted">
            <span>Examples:</span>
            {EXAMPLE_QUERIES.map((q) => (
              <RevealItem key={q}>
                <button
                  onClick={() => {
                    setQuery(q);
                    runSearch(q);
                  }}
                  className="rounded-pill border border-oolee-line bg-white px-3 py-1 hover:border-oolee-pink hover:text-oolee-pink"
                >
                  {q}
                </button>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="mx-auto max-w-page px-6 py-10">
        {mode.kind === "results" && (
          <SearchResultsHeader
            query={mode.query}
            count={mode.matches.length}
            onClear={clearSearch}
          />
        )}
        {mode.kind === "searching" && (
          <SearchingHeader query={mode.query} onClear={clearSearch} />
        )}
        {mode.kind === "empty" && (
          <SearchEmpty query={mode.query} onClear={clearSearch} />
        )}
        {mode.kind === "error" && (
          <SearchError message={mode.message} onClear={clearSearch} />
        )}

        {(mode.kind === "browse" || mode.kind === "empty") && (
          <div className="mb-6 flex flex-wrap gap-2">
            {CATEGORY_TABS.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`category-pill ${
                  category === c ? "category-pill-active" : ""
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {mode.kind === "searching" ? (
            <motion.div
              key="skeletons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <SkeletonOfferCard key={i} />
              ))}
            </motion.div>
          ) : mode.kind === "results" ? (
            <motion.div
              key={`results-${mode.query}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {mode.matches.map((m) => {
                const offer = getOfferById(m.offerId);
                if (!offer) return null;
                return (
                  <ResultCard key={offer.id} offer={offer} reason={m.reason} />
                );
              })}
            </motion.div>
          ) : (
            <RevealStagger
              key={`browse-${category}`}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {browseOffers.map((o) => (
                <RevealItem key={o.id}>
                  <OfferCard offer={o} />
                </RevealItem>
              ))}
            </RevealStagger>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}

function ResultCard({ offer, reason }: { offer: Offer; reason: string }) {
  return (
    <motion.div variants={cardVariants}>
      <motion.div variants={reasonVariants}>
        <OfferCard offer={offer} reason={reason} />
      </motion.div>
    </motion.div>
  );
}

function SearchingHeader({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-oolee-line bg-white px-5 py-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-oolee-pink">
          AI search in progress
        </p>
        <p className="mt-1 text-sm text-oolee-ink">
          Ranking offers for{" "}
          <span className="italic">&ldquo;{query}&rdquo;</span>
        </p>
      </div>
      <button onClick={onClear} className="btn-white-outline">
        Cancel
      </button>
    </div>
  );
}

function SearchResultsHeader({
  query,
  count,
  onClear,
}: {
  query: string;
  count: number;
  onClear: () => void;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-oolee-line bg-white px-5 py-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-oolee-pink">
          AI search results
        </p>
        <p className="mt-1 text-sm text-oolee-ink">
          {count} match{count === 1 ? "" : "es"} for{" "}
          <span className="italic">&ldquo;{query}&rdquo;</span>
        </p>
      </div>
      <button onClick={onClear} className="btn-white-outline">
        Back to all offers
      </button>
    </div>
  );
}

function SearchEmpty({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  return (
    <div className="mb-6 rounded-xl border border-oolee-line bg-oolee-bg-alt px-5 py-6 text-center">
      <p className="text-sm text-oolee-ink">
        No offers matched{" "}
        <span className="italic">&ldquo;{query}&rdquo;</span>. Try a different
        phrasing.
      </p>
      <button onClick={onClear} className="mt-3 btn-white-outline">
        Back to all offers
      </button>
    </div>
  );
}

function SearchError({
  message,
  onClear,
}: {
  message: string;
  onClear: () => void;
}) {
  return (
    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
      <p className="text-sm font-semibold text-red-700">Search error</p>
      <p className="mt-1 text-xs text-red-600">{message}</p>
      <button
        onClick={onClear}
        className="mt-3 inline-flex items-center rounded-pill border border-red-300 bg-white px-4 py-1.5 text-xs font-medium text-red-700 hover:bg-red-100"
      >
        Dismiss
      </button>
    </div>
  );
}
