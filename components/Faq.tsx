"use client";

import { useState } from "react";
import { heContent } from "@/content/he";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-8 md:mb-12">
          {heContent.faq.title}
        </h2>

        <div className="max-w-2xl mx-auto space-y-2 sm:space-y-3">
          {heContent.faq.items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-3 sm:p-4 text-right bg-background hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-sm sm:text-base text-primary">{item.question}</span>
                <svg
                  className={`w-4 sm:w-5 h-4 sm:h-5 text-primary/60 flex-shrink-0 transition-transform duration-200 rtl:rotate-180 ${
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
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="p-3 sm:p-4 text-xs sm:text-sm text-primary/80 leading-relaxed border-t border-gray-100">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-primary/70 mb-4 text-sm sm:text-base">{heContent.faq.contactText}</p>
          <a
            href="mailto:info@metapel.online"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-3 text-sm sm:text-base font-medium text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors duration-200 min-h-[48px]"
          >
            {heContent.faq.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
