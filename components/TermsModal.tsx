"use client";

import { useState } from "react";

export function TermsModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-white/60 hover:text-white text-sm transition-colors duration-200"
      >
        תנאי שימוש
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="max-h-[80vh] w-full max-w-xl overflow-y-auto rounded-xl bg-white p-6 text-right">
            <div className="mb-4 flex items-center justify-between gap-4 border-b border-gray-100 pb-4">
              <h2 className="text-lg font-semibold text-primary">תנאי שימוש – מטפל אונליין</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-gray-400 hover:text-gray-600 flex-shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>
                השימוש במערכת &quot;מטפל אונליין&quot; מיועד למטפלים, קואצ&apos;רים, מנחים ויועצים בלבד, ומהווה הסכמה לתנאים אלה. המערכת מספקת כלי עזר לניהול ותיעוד תהליכים טיפוליים ואימוניים, ואינה מהווה ייעוץ רפואי, פסיכולוגי או משפטי.
              </p>
              <p>
                האחריות על התוכן שמוזן למערכת, על האופן שבו נעשה בו שימוש, ועל ההשפעה על המטופלים והמתאמנים – היא של המשתמש בלבד. אין לראות בפלט המערכת תחליף לשיקול דעת מקצועי או לאבחון/טיפול.
              </p>
              <p>
                המשתמש מתחייב לשמור על סודיות ופרטיות המידע של המטופלים/מתאמנים בהתאם לדין החל עליו, ולהימנע מהזנת פרטים מזהים מעבר לנדרש.
              </p>
              <p>
                מפעילי המערכת רשאים לעדכן את תנאי השימוש מעת לעת, והמשך השימוש במערכת לאחר עדכון התנאים מהווה הסכמה לתנאים המתוקנים.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
