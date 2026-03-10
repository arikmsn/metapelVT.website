"use client";

import ContactForm from "@/components/ContactForm";

const trackEvent = (name: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", name, params);
  }
};

export default function Cta() {
  const scrollToContact = () => {
    trackEvent("cta_click", {
      event_category: "contact",
      event_label: "pilot_cta",
    });
    const form = document.getElementById("pilot-contact");
    form?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      (document.getElementById("pilot-full-name") as HTMLInputElement | null)?.focus();
    }, 400);
  };

  return (
    <section className="relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-teal-800" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          רוצים להתחיל אבל מעוניינים בהדגמה קודם?
        </h2>
        <p className="text-white/75 text-lg mb-6">
          הצטרפו למטפלים שכבר חוסכים שעות בשבוע, ומרגישים את ההבדל כבר אחרי מספר פגישות.
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-teal-400 text-indigo-950 font-bold px-8 py-4 rounded-full text-lg hover:bg-teal-300 transition-colors cursor-pointer"
        >
          התחילו עכשיו
        </button>
        <p className="text-white/60 text-sm mt-3">
          10 מטופלים ראשונים – לגמרי בחינם, בלי כרטיס אשראי
        </p>
        
        <ContactForm />
      </div>
    </section>
  );
}
