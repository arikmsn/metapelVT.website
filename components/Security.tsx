const securityPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "נתונים מאובטחים בענן",
    description: "כל המידע מאוחסן בשרתים מאובטחים, ללא פרטים מזהים בהודעות",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    title: "מחיקה בכל רגע",
    description: "אפשרות למחוק מטופל או סשן בכל עת, בהתאם לדרישות הגנת הפרטיות",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: "ללא שימוש שיווקי",
    description: "המידע שלכם נשאר שלכם – אין שימוש לצרכים שיווקיים או פרסום",
  },
];

export default function Security() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
          פרטיות המטופלים לפני הכול
        </h2>
        <p className="text-center text-primary/70 mb-12 max-w-2xl mx-auto">
          אנחנו מבינים שמידע טיפולי הוא רגיש במיוחד. לכן הבטחנו שהמערכת עומדת בסטנדרטים הגבוהים ביותר של אבטחת מידע.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {securityPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-600">
                {point.icon}
              </div>
              <h3 className="text-base font-semibold text-primary mb-2">{point.title}</h3>
              <p className="text-sm text-primary/70">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
