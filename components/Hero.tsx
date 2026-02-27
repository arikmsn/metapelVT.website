import { heContent } from "@/content/he";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-right order-1 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-5 lg:mb-6">
              {heContent.hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-primary/80 mb-7 lg:mb-8 leading-relaxed max-w-xl mx-auto lg:mr-0">
              {heContent.hero.subtitle}
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://app.metapel.online"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors duration-200 min-h-[48px]"
              >
                {heContent.hero.primaryCta}
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-xl order-2 lg:order-2 mt-8 lg:mt-0">
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
