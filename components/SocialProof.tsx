"use client";

import { useState } from "react";
import { heContent } from "@/content/he";

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % heContent.socialProof.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? heContent.socialProof.testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary via-primary-light to-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {heContent.socialProof.title}
        </h2>
        <p className="text-lg text-white/80 text-center max-w-2xl mx-auto mb-12">
          {heContent.socialProof.subtitle}
        </p>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/20">
            <svg className="w-12 h-12 text-white/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
              {heContent.socialProof.testimonials[currentIndex].text}
            </p>
            <p className="text-white/70 font-medium">
              {heContent.socialProof.testimonials[currentIndex].role}
            </p>
            
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="קודם"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="הבא"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            {heContent.socialProof.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`עבור להמלצה ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-full border border-white/20 backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            עיצוב נקי ומסודר
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-white text-sm font-medium rounded-full border border-accent/30 backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            פיילוט בטא
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-white text-sm font-medium rounded-full border border-green-400/30 backdrop-blur-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            עברית מלאה
          </span>
        </div>
      </div>
    </section>
  );
}
