import { heContent } from "@/content/he";
import Image from "next/image";

const icons = [
  <svg key="1" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>,
  <svg key="2" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>,
  <svg key="3" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>,
  <svg key="4" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
];

export default function Features() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary text-center mb-10 md:mb-14">
          {heContent.features.title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          <div className="w-full lg:w-[45%] max-w-[420px] space-y-5 sm:space-y-6">
            {heContent.features.items.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 text-white">
                  {icons[index]}
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1.5 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-sm text-primary/70 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[55%]">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <Image
                src="/screenshots/ai-plan.png"
                alt="מסך תכנון פגישה במטפל אונליין – AI Plan"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
