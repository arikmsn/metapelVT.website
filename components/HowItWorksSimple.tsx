import { heContent } from "@/content/he";

const steps = [
  {
    title: "פותחים חשבון למטפל",
    description: "נכנסים למטפל אונליין, יוצרים חשבון ומגדירים את פרטי הקליניקה שלך.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    title: "מוסיפים מטופלים ותהליכים",
    description: "מוסיפים מטופלים ומתאמנים, ומגדירים בקלות את תחומי ההתמחות שלכם.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "עובדים עם סיכומים ותזכורות",
    description: "אחרי כל פגישה מקליטים או מזינים כמה נקודות, והמערכת מייצרת עבורך סיכומים, משימות ותזכורות באופן שוטף.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorksSimple() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-10 md:mb-14">
          איך זה עובד בפשטות?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-5 sm:p-6 border border-gray-100 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 text-accent">
                {step.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-primary mb-3">{step.title}</h3>
              <p className="text-sm text-primary/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
