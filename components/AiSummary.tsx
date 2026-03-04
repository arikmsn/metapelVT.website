import { heContent } from "@/content/he";
import Image from "next/image";

export default function AiSummary() {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 max-w-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full text-secondary text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              סיכומים חכמים
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">
              סיכומים חכמים בעזרת בינה מלאכותית
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              אחרי כל פגישה מזינים כמה נקודות, הקלטה או תמלול קצר, והמערכת יוצרת סיכום מסודר, ברור ומקצועי. חוסכת זמן ושומרת על כל הפרטים החשובים.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">סיכום אוטומטי מתמלול או הקלטה</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">זיהוי נקודות מפתח ומשימות</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">שמירה אוטומטית להיסטוריה של המטופל</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-border bg-surface">
                <Image
                  src="/screenshots/ai-summary.png"
                  alt="סיכומים חכמים"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
