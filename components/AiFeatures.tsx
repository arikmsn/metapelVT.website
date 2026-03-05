import { heContent } from "@/content/he";
import Image from "next/image";

export default function AiFeatures() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative group animate-on-scroll">
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-border bg-surface">
                <Image
                  src="/screenshots/ai-prep.png"
                  alt="הכנה חכמה לפגישות"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-lg order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-secondary/10 rounded-full text-accent text-sm font-medium mb-4 animate-on-scroll">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              מבוסס בינה מלאכותית
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 animate-on-scroll delay-1">
              הכנה חכמה לפגישות
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              לפני כל פגישה מתקבל סיכום ממוקד של מה שקרה בפגישות הקודמות, מהם המשימות שהוטלו, ורעיונות להמשך הטיפול, וכך מגיעים מוכנים לכל מפגש.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-background transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">סיכום אוטומטי של כל הפגישות הקודמות</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-background transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">רעיונות להמשך הטיפול מבוססי היסטוריה</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-background transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">תזכורות חכמות למשימות פתוחות</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
