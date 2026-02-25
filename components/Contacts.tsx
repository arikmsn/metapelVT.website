import { heContent } from "@/content/he";
import Image from "next/image";

export default function Contacts() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              ניהול מטופלים וקשרים
            </h2>
            <p className="text-lg text-primary/80 mb-8 leading-relaxed">
              כל המטופלים, המתאמנים או הקבוצות במקום אחד. 
              פרטים, היסטוריה, סיכומים ומשימות – הכל מרוכז ונגיש.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary/80">כרטיס מטופל מלא עם כל הפרטים</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary/80">מעקב אחר התקדמות הטיפול</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary/80">סימונים וקטגוריות לפי סוג הטיפול</p>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/screenshots/contact.png"
                alt="מסך ניהול מטופלים במטפל אונליין"
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
