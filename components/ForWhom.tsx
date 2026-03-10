import { heContent } from "@/content/he";

const icons = [
  <svg key="1" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="2" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="3" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
];

export default function ForWhom() {
  return (
    <section id="features" className="section-padding bg-surface">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4 animate-on-scroll">
          {heContent.forWhom.title}
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-12 animate-on-scroll delay-1">
          {heContent.forWhom.subtitle}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {heContent.forWhom.items.map((item, index) => (
            <div
              key={index}
              className={`card card-hover group animate-on-scroll delay-${index + 1}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center mx-auto mb-5 text-accent card-icon">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
