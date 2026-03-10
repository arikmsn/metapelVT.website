export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-background-alt border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-on-scroll">
          התחילו בחינם, גדלו בקצב שלכם
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {/* Card 1 - מתחילים */}
          <div className="card card-hover group bg-white rounded-2xl border border-border p-6 md:p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-primary mb-4 text-center">מתחילים</h3>
            <div className="text-center mb-6">
              <span className="text-5xl font-bold text-primary">חינם</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-3 text-text-secondary text-base">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>עד 10 מטופלים</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-base">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>סיכומי פגישות שוטפים</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-base">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>סיכום עומק AI בודד למטופל</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-base">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>תכנית טיפול בודדת למטופל</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-base">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ללא כרטיס אשראי</span>
              </li>
            </ul>
            <div className="mt-auto">
              <a
                href="https://app.metapel.online/register"
                className="block border-2 border-primary text-primary font-bold text-center py-3 px-6 rounded-xl hover:bg-primary/5 transition-colors text-lg"
              >
                הרשמה
              </a>
            </div>
          </div>

          {/* Card 2 - לעבודה שוטפת (highlighted) */}
          <div className="card card-hover group bg-gradient-to-br from-primary via-primary-light to-secondary rounded-2xl p-6 md:p-8 flex flex-col h-full shadow-xl transform md:-translate-y-2 relative">
            <div className="absolute -top-3 right-4">
              <span className="inline-block bg-teal-400 text-indigo-950 text-sm font-bold px-4 py-1 rounded-full">
                הכי פופולרי
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center mt-2">לעבודה שוטפת</h3>
            <div className="text-center mb-6">
              <span className="text-5xl font-bold text-white">149</span>
              <span className="text-white/70 text-lg font-normal"> ש&quot;ח לחודש</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white/90 text-base">
                <svg className="w-5 h-5 text-teal-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>עד 50 מטופלים</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-base">
                <svg className="w-5 h-5 text-teal-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>סיכומי פגישות ללא הגבלה</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-base">
                <svg className="w-5 h-5 text-teal-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>סיכום עומק AI ללא הגבלה</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-base">
                <svg className="w-5 h-5 text-teal-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>עדכון תכנית טיפול בכל עת</span>
              </li>
              <li className="flex items-center gap-3 text-white/90 text-base">
                <svg className="w-5 h-5 text-teal-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>גיבויים אוטומטיים</span>
              </li>
            </ul>
            <div className="mt-auto">
              <a
                href="https://app.metapel.online/register?plan=pro"
                className="block bg-teal-400 text-indigo-950 font-bold text-center py-3 px-6 rounded-xl hover:bg-teal-300 transition-colors text-lg"
              >
                התחילו בחינם ←
              </a>
            </div>
          </div>

          {/* Card 3 - קליניקות וארגונים */}
          <div className="card card-hover group bg-white rounded-2xl border border-border p-6 md:p-8 flex flex-col h-full">
            <h3 className="text-xl font-semibold text-primary mb-4 text-center">קליניקות וארגונים</h3>
            <div className="text-center mb-6">
              <span className="text-5xl font-bold text-primary whitespace-nowrap">מותאם לכם</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-3 text-text-secondary text-base">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>מספר מטפלים במערכת</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-base">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>ניהול מרכזי של המטופלים</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-base">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>API ואינטגרציות</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-base">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>דוחות התקדמות</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-base">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>תמיכה, ייעוץ והטמעה</span>
              </li>
            </ul>
            <div className="mt-auto">
              <a
                href="mailto:info@metapel.online?subject=מעוניין בפרטים נוספים לגבי מסלול קליניקה וארגונים"
                className="block border-2 border-primary text-primary font-bold text-center py-3 px-6 rounded-xl hover:bg-primary/5 transition-colors text-lg"
              >
                דברו איתנו
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
