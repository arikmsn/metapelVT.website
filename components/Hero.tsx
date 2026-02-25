import { heContent } from "@/content/he";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-right order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4 lg:mb-6">
              {heContent.hero.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary/80 mb-6 lg:mb-8 leading-relaxed max-w-xl mx-auto lg:mr-0">
              {heContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="https://app.metapel.online"
                className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors duration-200 min-h-[48px]"
              >
                {heContent.hero.primaryCta}
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-200 min-h-[48px]"
              >
                {heContent.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-xl order-1 lg:order-2">
            <div className="relative rounded-xl shadow-xl overflow-hidden border border-gray-200">
              <Image
                src="/screenshots/dashboard.png"
                alt="מסך ראשי של מטפל אונליין – דשבורד תהליכים"
                width={800}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
