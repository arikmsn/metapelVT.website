export default function Cta() {
  return (
    <section className="relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-teal-800" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          מוכנים להתחיל?
        </h2>
        <p className="text-white/75 text-lg mb-10">
          הצטרפו למטפלים שכבר עובדים בצורה מסודרת יותר
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://app.metapel.online/" className="bg-teal-400 text-indigo-950 font-bold px-8 py-4 rounded-full text-lg hover:bg-teal-300 transition-colors">
            כניסה למערכת
          </a>
          <a href="https://app.metapel.online/" className="bg-white/10 border border-white/30 text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-colors">
            הצטרפות לפיילוט חינם
          </a>
        </div>
      </div>
    </section>
  );
}
