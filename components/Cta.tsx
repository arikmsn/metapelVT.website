"use client";

import ContactForm from "@/components/ContactForm";

const trackEvent = (name: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", name, params);
  }
};

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-teal-800" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          רוצים להתחיל אבל מעוניינים בהדגמה?
        </h2>
        <p className="text-white/75 text-lg mb-8">
          הצטרפו והתחילו לחסוך שעות בשבוע, ולהרגיש את ההבדל תוך מספר פגישות.
        </p>
        
        <ContactForm />
      </div>
    </section>
  );
}
