import { heContent } from "@/content/he";

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-3">
          {heContent.howItWorks.title}
        </h2>
        <p className="text-lg text-text-secondary text-center max-w-2xl mx-auto mb-10 md:mb-14">
          {heContent.howItWorks.subtitle}
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute top-8 right-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-accent/20" />
            <div className="hidden md:block absolute top-8 right-[16.66%] w-[16.66%] h-0.5 bg-accent" />
            <div className="hidden md:block absolute top-8 left-[16.66%] w-[16.66%] h-0.5 bg-accent/20" />

            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              {heContent.howItWorks.steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold relative z-10">
                    {index + 1}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://app.metapel.online/"
              className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-white bg-primary hover:bg-primary-light rounded-lg transition-colors duration-200 min-h-[48px]"
            >
              {heContent.howItWorks.cta}
              <svg className="w-5 h-5 ms-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
