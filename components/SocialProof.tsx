const testimonials = [
  {
    quote: "Metapel חסך לי שעות של עבודה אדמיניסטרטיבית בכל שבוע. אני יכולה להתמקד במה שבאמת חשוב – הטיפול עצמו.",
    role: "מטפלת פרטית, CBT",
  },
  {
    quote: "המערכת עוזרת לי לשמור על רצף טיפולי גם עם מטופלים שאני רואה רק פעם בשבוע. זה משנה את הדרך שבה אני עובד.",
    role: "פסיכולוג קליני",
  },
  {
    quote: "פשוט, יעיל ומותאם לעברית. בדיוק מה שחיפשתי לניהול הקליניקה שלי.",
    role: "מטפלת בגישה דינמית",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
          פיתוח בשיתוף מטפלים מהשטח
        </h2>
        <p className="text-center text-primary/70 mb-12 max-w-2xl mx-auto">
          המערכת נבנתה יחד עם מטפלים פעילים, כדי לענות על הצרכים האמיתיים של קליניקה יומיומית.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <svg className="w-8 h-8 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-primary/80 mb-4 text-sm leading-relaxed">{testimonial.quote}</p>
              <p className="text-xs text-primary/50 font-medium">{testimonial.role}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary/70 text-xs font-medium rounded-full border border-primary/10">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            עיצוב מבוסס פרטיות
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            פיילוט בטא
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-100">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            עברית מלאה
          </span>
        </div>
      </div>
    </section>
  );
}
