"use client";

import * as React from "react";

const EASE_OUT_EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";
const DURATION_MS = 320;

type FAQItem = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openSet, setOpenSet] = React.useState<Set<number>>(new Set());

  const toggle = React.useCallback((index: number) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  return (
    <ul className="mt-6 flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openSet.has(i);
        return (
          <li key={i}>
            <div className="rounded-lg border border-border bg-card overflow-hidden transition-shadow hover:shadow-sm">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-left font-medium text-foreground transition-colors duration-200 ease-out hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <span>{item.question}</span>
                <span
                  className="shrink-0 text-muted-foreground transition-transform duration-200 ease-out"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  aria-hidden
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className="grid transition-[grid-template-rows] duration-[320ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="border-t border-border px-4 pb-4 pt-2 text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
