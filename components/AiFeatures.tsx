import { heContent } from "@/content/he";
import Image from "next/image";

export default function AiFeatures() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 w-full max-w-lg">
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

          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              הכנה חכמה לפגישות
            </h2>
            <p className="text-lg text-primary/80 mb-8 leading-relaxed">
              לפני כל פגישה תקבל סיכום ממוקד של מה שקרה בפגישות הקודמות, 
              מה היו המשימות שהוטלו, ורעיונות להמשך הטיפול – כדי שתגיע מוכן לכל מפגש.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary/80">סיכום אוטומטי של כל הפגישות הקודמות</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary/80">רעיונות להמשך הטיפול מבוססי היסטוריה</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-primary/80">תזכורות חכמות למשימות פתוחות</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
