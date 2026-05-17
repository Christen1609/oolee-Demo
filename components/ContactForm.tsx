"use client";

import { useState } from "react";

export default function ContactForm({
  title,
  intro,
  bullets,
  messagePlaceholder = "Please describe your issue or question in detail",
  submitLabel = "Submit",
}: {
  title: React.ReactNode;
  intro: React.ReactNode;
  bullets?: { icon?: string; label: string }[];
  messagePlaceholder?: string;
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  return (
    <aside className="w-full rounded-2xl border border-oolee-line bg-oolee-pink-light p-6">
      <h2 className="mb-4 text-xl font-bold text-oolee-pink">{title}</h2>
      <div className="mb-4 text-sm leading-relaxed text-oolee-ink">{intro}</div>
      {bullets && (
        <ul className="mb-5 space-y-1 text-sm text-oolee-ink">
          {bullets.map((b) => (
            <li key={b.label}>
              <span className="mr-2 text-oolee-pink">
                {b.icon ?? "✓"}
              </span>
              {b.label}
            </li>
          ))}
        </ul>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="flex flex-col gap-3"
      >
        <label className="text-sm font-medium text-oolee-ink">
          Full Name <span className="text-oolee-pink">*</span>
          <input
            required
            type="text"
            placeholder="e.g. John Doe"
            className="mt-1 w-full rounded-lg border border-oolee-line bg-white px-3 py-2 text-sm focus:border-oolee-pink focus:outline-none"
          />
        </label>
        <label className="text-sm font-medium text-oolee-ink">
          Email Address <span className="text-oolee-pink">*</span>
          <input
            required
            type="email"
            placeholder="e.g. john.doe@example.com"
            className="mt-1 w-full rounded-lg border border-oolee-line bg-white px-3 py-2 text-sm focus:border-oolee-pink focus:outline-none"
          />
        </label>
        <label className="text-sm font-medium text-oolee-ink">
          Message
          <textarea
            rows={4}
            placeholder={messagePlaceholder}
            className="mt-1 w-full rounded-lg border border-oolee-line bg-white px-3 py-2 text-sm focus:border-oolee-pink focus:outline-none"
          />
        </label>
        <button type="submit" className="btn-pink mt-1 self-start">
          {sent ? "Sent" : submitLabel}
        </button>
      </form>
    </aside>
  );
}
