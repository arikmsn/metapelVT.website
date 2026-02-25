import { heContent } from "@/content/he";
import Image from "next/image";

export default function AiFeatures() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/screenshots/ai-prep.png"
                alt="מסך הכנה לפגישה בעזרת הבינה המלאכותית במטפל אונליין"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 max-w-lg order-1 lg:order-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
              הכנה חכמה לפגישות
            </h2>
            <p className="text-sm sm:text-base text-primary/80 mb-6 sm:mb-8 leading-relaxed">
              לפני כל פגישה מתקבל סיכום ממוקד של מה שקרה בפגישות הקודמות, מהם המשימות שהוטלו, ורעיונות להמשך הטיפול, וכך מגיעים מוכנים לכל מפגש.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-primary/80">סיכום אוטומטי של כל הפגישות הקודמות</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-primary/80">רעיונות להמשך הטיפול מבוססי היסטוריה</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-primary/80">תזכורות חכמות למשימות פתוחות</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
