import { heContent } from "@/content/he";
import Image from "next/image";

export default function AiSummary() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 max-w-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-5 sm:mb-6">
              סיכומים חכמים בעזרת בינה מלאכותית
            </h2>
            <p className="text-sm sm:text-base text-primary/80 mb-6 sm:mb-8 leading-relaxed">
              אחרי כל פגישה מזינים כמה נקודות, הקלטה או תמלול קצר, והמערכת יוצרת סיכום מסודר, ברור ומקצועי. חוסכת זמן ושומרת על כל הפרטים החשובים.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-primary/80">סיכום אוטומטי מתמלול או הקלטה</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-primary/80">זיהוי נקודות מפתח ומשימות</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-primary/80">שמירה אוטומטית להיסטוריה של המטופל</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/screenshots/ai-summary.png"
                alt="מסך סיכום חכם בעזרת בינה מלאכותית במטפל אונליין"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
