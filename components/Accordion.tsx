"use client";

import { useState } from "react";

export type AccordionItem = { question: string; answer: React.ReactNode };

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="rounded-xl border border-oolee-line bg-white"
          >
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-oolee-ink"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span className="text-oolee-muted">{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
              <div className="border-t border-oolee-line px-4 py-3 text-sm leading-relaxed text-oolee-muted">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
