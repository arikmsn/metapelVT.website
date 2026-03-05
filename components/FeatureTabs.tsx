"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: 1,
    title: "הכנה חכמה לפגישות",
    shortDesc: "מגיעים מוכנים לכל מפגש",
    description: "לפני כל פגישה מתקבל סיכום ממוקד של מה שקרה בפגישות הקודמות, מהם המשימות שהוטלו, ורעיונות להמשך הטיפול, וכך מגיעים מוכנים לכל מפגש.",
    screenshot: "/screenshots/ai-prep.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "סיכומים חכמים",
    shortDesc: "בינה מלאכותית יוצרת סיכום מסודר",
    description: "אחרי כל פגישה מזינים כמה נקודות, הקלטה או תמלול קצר, והמערכת יוצרת סיכום מסודר, ברור ומקצועי. חוסכת זמן ושומרת על כל הפרטים החשובים.",
    screenshot: "/screenshots/ai-summary.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "תקשורת מסודרת",
    shortDesc: "כל ההודעות במקום אחד",
    description: "שומרים על קשר עם מטופלים בצורה מסודרת ובטוחה. כל ההודעות במקום אחד, בלי להתבלבל בוואטסאפ או במייל.",
    screenshot: "/screenshots/messages.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "ניהול מטופלים",
    shortDesc: "כל המידע במקום אחד",
    description: "כל המטופלים, המתאמנים או הקבוצות במקום אחד. פרטים, היסטוריה, סיכומים ומשימות, הכל מרוכז בצורה ברורה ונגישה.",
    screenshot: "/screenshots/contact.png",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features-tabs" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          מה המערכת עושה בשבילך?
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-12">
          לחצו על כל יכולת לפרטים
        </p>

        <div className="flex flex-col lg:flex-row-reverse gap-8 items-start">
          <div className="w-full lg:w-2/5 flex flex-col gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                dir="rtl"
                onClick={() => setActiveTab(index)}
                className={`w-full text-right p-4 rounded-xl border transition-all group ${
                  activeTab === index
                    ? "border-teal-200 bg-teal-50"
                    : "border-transparent hover:border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3 flex-row-reverse justify-start">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeTab === index ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-500"
                  }`}>
                    {tab.icon}
                  </div>
                  <span className={`font-semibold ${activeTab === index ? "text-primary" : "text-gray-700 group-hover:text-primary"}`}>
                    {tab.title}
                  </span>
                </div>
                <p className={`text-sm mt-1 pl-0 text-right ${activeTab === index ? "text-gray-600" : "text-gray-500"}`}>
                  {tab.shortDesc}
                </p>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-3/5">
            <div className="relative">
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
                  {tabs.map((tab, index) => (
                    <div
                      key={tab.id}
                      className={`transition-all duration-250 ${
                        activeTab === index
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 absolute top-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={tab.screenshot}
                        alt={tab.title}
                        width={800}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl lg:hidden">
              <p className="text-text-secondary leading-relaxed">
                {tabs[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
