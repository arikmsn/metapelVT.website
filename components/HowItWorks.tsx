import { heContent } from "@/content/he";

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-8 md:mb-12">
          {heContent.howItWorks.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute top-8 right-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-accent/20" />
            <div className="hidden md:block absolute top-8 right-[16.66%] w-[16.66%] h-0.5 bg-accent" />
            <div className="hidden md:block absolute top-8 left-[16.66%] w-[16.66%] h-0.5 bg-accent/20" />

            <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
              {heContent.howItWorks.steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-3 sm:mb-4 text-xl sm:text-2xl font-bold relative z-10">
                    {index + 1}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-primary mb-1.5 sm:mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <a
              href="#faq"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 text-sm sm:text-base font-medium text-white bg-primary hover:bg-primary-light rounded-lg transition-colors duration-200 min-h-[48px]"
            >
              {heContent.howItWorks.cta}
              <svg className="w-4 sm:w-5 h-4 sm:h-5 ms-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
