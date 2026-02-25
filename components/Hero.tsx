export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              מטפל אונליין - העוזר הדיגיטלי שלך
            </h1>
            <p className="text-lg md:text-xl text-primary/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mr-0">
              סיכומי פגישות, משימות ותזכורות – במקום אחד מסודר, בקלות ובמהירות לאחר כל סשן.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://app.metapel.online"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors duration-200"
              >
                כניסה למערכת
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-200"
              >
                הצטרפות לפיילוט חינמי
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-xl">
            <div className="relative bg-white rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="mr-auto text-xs text-gray-400 font-medium">Metapel</span>
              </div>

              <div className="space-y-3">
                <div className="bg-background rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-primary">רונית ל.</span>
                    <span className="text-xs text-gray-400 mr-auto">היום, 10:30</span>
                  </div>
                  <p className="text-sm text-primary/80">סשן עבודה על טראומה מהעבר. המשך טיפול ב-CBT...</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-green-50 border border-green-100 rounded-lg p-2">
                    <div className="text-xs text-green-600 mb-1">משימה</div>
                    <div className="text-sm font-medium text-primary">לשלוח טופס הסכמה</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-2">
                    <div className="text-xs text-blue-600 mb-1">תזכורת</div>
                    <div className="text-sm font-medium text-primary">ליד עם גרין</div>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="text-xs text-primary/60 mb-1">לקראת הפגישה הבאה</div>
                  <div className="text-sm font-medium text-primary">לשאול על התנדבות במשטרה</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
