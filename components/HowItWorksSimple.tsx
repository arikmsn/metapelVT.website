import { heContent } from "@/content/he";

const steps = [
  {
    title: "פותחים חשבון",
    description: "לוחצים על כניסה למערכת, יוצרים חשבון ומגדירים את סוג ההתמחות הרלוונטית.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    title: "מוסיפים מטופלים ותהליכים",
    description: "מוסיפים מטופלים ומתאמנים, ומגדירים בקלות את זמני הפגישות והערות חשובות.",
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
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4 animate-on-scroll">
          איך זה עובד בפשטות?
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-12 animate-on-scroll delay-1">
          שלושה צעדים פשוטים כדי להתחיל לעבוד בצורה מסודרת יותר
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 bottom-0 right-8 w-0.5 bg-gradient-to-b from-accent via-secondary to-accent-dark hidden sm:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className={`relative flex sm:gap-8 items-start animate-on-scroll delay-${index + 1}`}>
                  <div className="flex-shrink-0 flex flex-col items-center sm:block z-10">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark text-white flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg shadow-accent/25 mb-3 sm:mb-0 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-surface rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/20 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-accent">{step.icon}</span>
                      <h3 className="text-xl font-semibold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
