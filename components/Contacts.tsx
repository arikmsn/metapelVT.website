import { heContent } from "@/content/he";
import Image from "next/image";

export default function Contacts() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="w-full lg:w-1/2 max-w-lg">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              ניהול מטופלים
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5">
              ניהול מטופלים וקשרים
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              כל המטופלים, המתאמנים או הקבוצות במקום אחד. פרטים, היסטוריה, סיכומים ומשימות, הכל מרוכז בצורה ברורה ונגישה.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 feature-icon">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">כרטיס מטופל מלא עם כל הפרטים</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 feature-icon">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">מעקב אחר התקדמות הטיפול</p>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface transition-colors">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 feature-icon">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-text-secondary">סימונים וקטגוריות לפי סוג הטיפול</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="browser-frame">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="browser-url">app.metapel.online</div>
                </div>
                <div className="browser-content">
                  <Image
                    src="/screenshots/contact.png"
                    alt="ניהול מטופלים"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
