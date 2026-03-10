export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 animate-on-scroll">
          בחרו את המסלול המתאים לכם
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 - מתחילים */}
          <div className="card bg-white rounded-2xl border border-border p-6 md:p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-primary mb-4 text-center">מתחילים</h3>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-primary">חינם</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                עד 10 מטופלים
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                סיכומי פגישות שוטפים
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                סיכום עומק AI בודד למטופל
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                תכנית טיפול בודדת למטופל
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ללא כרטיס אשראי
              </li>
            </ul>
            <div className="mt-auto">
              <div className="bg-gray-100 text-gray-600 font-semibold text-center py-3 px-6 rounded-xl">
                חינם לתמיד
              </div>
            </div>
          </div>

          {/* Card 2 - לעבודה שוטפת (highlighted) */}
          <div className="card bg-gradient-to-br from-primary via-primary-light to-secondary rounded-2xl p-6 md:p-8 flex flex-col shadow-xl transform md:-translate-y-2">
            <div className="text-center mb-2">
              <span className="inline-block bg-teal-400 text-indigo-950 text-sm font-bold px-4 py-1 rounded-full">
                הכי פופולרי
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4 text-center">לעבודה שוטפת</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold text-white">149</span>
              <span className="text-white/80 text-lg"> ש"ח </span>
              <span className="text-white/60 text-sm">לחודש</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3 text-white/90">
                <svg className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                עד 50 מטופלים
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <svg className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                סיכומי פגישות ללא הגבלה
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <svg className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                סיכום עומק AI ללא הגבלה
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <svg className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                עדכון תכנית טיפול בכל עת
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <svg className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                גיבויים אוטומטיים
              </li>
            </ul>
            <div className="mt-auto">
              <a
                href="https://app.metapel.online/register"
                className="block bg-teal-400 text-indigo-950 font-bold text-center py-3 px-6 rounded-xl hover:bg-teal-300 transition-colors"
              >
                התחילו בחינם ←
              </a>
            </div>
          </div>

          {/* Card 3 - קליניקות וארגונים */}
          <div className="card bg-white rounded-2xl border border-border p-6 md:p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-primary mb-4 text-center">קליניקות וארגונים</h3>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-primary">צור קשר</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                מספר מטפלים במערכת
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                ניהול מרכזי של המטופלים
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                API ואינטגרציות
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                דוחות התקדמות
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <svg className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                תמיכה, ייעוץ והטמעה
              </li>
            </ul>
            <div className="mt-auto">
              <a
                href="mailto:info@metapel.online"
                className="block border-2 border-primary text-primary font-semibold text-center py-3 px-6 rounded-xl hover:bg-primary/5 transition-colors"
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
