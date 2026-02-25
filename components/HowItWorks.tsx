import { heContent } from "@/content/he";

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
          {heContent.howItWorks.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden md:block absolute top-8 right-16 left-16 h-0.5 bg-accent/20" />
            <div className="hidden md:block absolute top-8 right-16 w-8 h-0.5 bg-accent" />
            <div className="hidden md:block absolute top-8 left-16 w-8 h-0.5 bg-accent/20" />

            <div className="grid md:grid-cols-3 gap-8">
              {heContent.howItWorks.steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold relative z-10">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                  <p className="text-sm text-primary/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#faq"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary hover:bg-primary-light rounded-lg transition-colors duration-200"
            >
              {heContent.howItWorks.cta}
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
