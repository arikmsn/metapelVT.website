const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "עזרה בסיכומי פגישות",
    description: "הקלטה או תמלול קצר – וMetapel יוצר סיכום מסודר",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "הכנה לפגישות",
    description: "סיכום פגישות קודמות ורעיונות להמשך הטיפול",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "רשימת משימות",
    description: "מעקב אחרי משימות לכל מטופל ותזכורות חכמות",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "יומן פגישות",
    description: "ניהול סדר העבודה והתמקדות בדברים החשובים",
  },
];

const mockPatients = [
  { name: "דנה כ.", time: "יום א׳ 09:00", status: "ראשונה", tag: "טראומה" },
  { name: "גילו מ.", time: "יום א׳ 10:30", status: "שוטף", tag: "CBT" },
  { name: "יעל ל.", time: "יום א׳ 12:00", status: "שוטף", tag: "חרדה" },
  { name: "איתי ר.", time: "יום ב׳ 09:00", status: "שוטף", tag: "דיכאון" },
];

export default function Features() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          מה המערכת עושה בשבילך ביום-יום?
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 text-white">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                  <p className="text-sm text-primary/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-primary">היום שלי</h3>
                <span className="text-xs text-primary/50">יום ראשון, 8 בפברואר</span>
              </div>

              <div className="space-y-2">
                {mockPatients.map((patient, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background rounded-lg"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {patient.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-primary">{patient.name}</span>
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                          {patient.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-primary/50">
                        <span>{patient.time}</span>
                        <span>•</span>
                        <span>{patient.tag}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-primary/60">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>4 פגישות מתוכננות השבוע</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
