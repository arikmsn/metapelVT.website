"use client";

import { useState } from "react";
import { heContent } from "@/content/he";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4 animate-on-scroll">
          {heContent.faq.title}
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-12 animate-on-scroll delay-1">
          {heContent.faq.subtitle}
        </p>

        <div className="max-w-2xl mx-auto space-y-4">
          {heContent.faq.items.map((item, index) => (
            <div
              key={index}
              className={`border border-border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "bg-white shadow-md border-accent/30" : "bg-white hover:border-primary/10"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-right"
              >
                <span className="font-semibold text-base md:text-lg text-primary">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 md:px-6 pb-5 md:pb-6 text-text-secondary leading-relaxed border-t border-border/50">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
