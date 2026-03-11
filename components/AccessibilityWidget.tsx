"use client";

import { useState, useEffect, useRef } from "react";

type Option = {
  label: string;
  className: string;
};

const OPTIONS: Option[] = [
  { label: "הגדלת טקסט",      className: "a11y-font-large" },
  { label: "קונטרסט גבוה",    className: "a11y-high-contrast" },
  { label: "הדגשת קישורים",   className: "a11y-underline-links" },
];

export default function AccessibilityWidget() {
  const [open, setOpen]               = useState(false);
  const [active, setActive]           = useState<Record<string, boolean>>({});
  const panelRef                      = useRef<HTMLDivElement>(null);
  const triggerRef                    = useRef<HTMLButtonElement>(null);

  // Apply / remove body classes whenever active map changes
  useEffect(() => {
    OPTIONS.forEach(({ className }) => {
      if (active[className]) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    });
  }, [active]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  const toggle = (className: string) => {
    setActive((prev) => ({ ...prev, [className]: !prev[className] }));
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="תפריט נגישות"
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 w-52 flex flex-col gap-2"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-semibold text-primary">נגישות</span>
            <button
              onClick={() => { setOpen(false); triggerRef.current?.focus(); }}
              aria-label="סגור תפריט נגישות"
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {OPTIONS.map(({ label, className }) => (
            <button
              key={className}
              onClick={() => toggle(className)}
              aria-pressed={!!active[className]}
              className={`w-full text-right text-sm px-3 py-2 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                active[className]
                  ? "bg-teal-50 border-teal-400 text-teal-700 font-semibold"
                  : "border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Trigger button */}
      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        aria-label="פתח תפריט נגישות"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {/* Accessibility icon */}
        <svg
          className="w-4 h-4 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="4" r="1.5" fill="currentColor" stroke="none" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M5 9h14M12 9v11M8 14l4 6M16 14l-4 6" />
        </svg>
        נגישות
      </button>
    </div>
  );
}
