import { heContent } from "@/content/he";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
              {heContent.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-primary/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mr-0">
              {heContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://app.metapel.online"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors duration-200"
              >
                {heContent.hero.primaryCta}
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg transition-colors duration-200"
              >
                {heContent.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-xl">
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
