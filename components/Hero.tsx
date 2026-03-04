import { heContent } from "@/content/he";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-teal-800 py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-right order-1 lg:order-1">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 lg:mb-8 animate-fade-up">
              {heContent.hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-white/80 mb-8 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mr-0 animate-fade-up delay-100">
              {heContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-200">
              <a
                href="https://app.metapel.online"
                className="bg-teal-400 text-indigo-950 font-bold text-lg px-8 py-4 min-h-[56px] rounded-xl inline-flex items-center justify-center transition-all duration-300 hover:bg-teal-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-400/25"
              >
                {heContent.hero.primaryCta}
              </a>
              <a
                href="mailto:info@metapel.online"
                className="bg-white/10 border border-white/30 text-white text-lg px-8 py-4 min-h-[56px] rounded-xl inline-flex items-center justify-center transition-all duration-300 hover:bg-white/20"
              >
                {heContent.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-xl order-2 lg:order-2 mt-6 lg:mt-0 animate-scale-in">
            <div className="relative">
              <div 
                className="rounded-xl overflow-hidden"
                style={{
                  transform: 'perspective(1200px) rotateY(8deg) rotateX(2deg)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)',
                }}
              >
                <Image
                  src="/screenshots/dashboard.png"
                  alt="מסך ראשי של מטפל אונליין"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-gradient-to-b from-white/10 to-transparent blur-xl" />
              
              <div className="absolute -bottom-4 -left-4 bg-white/15 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-3 animate-fade-up delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">מבוסס בינה מלאכותית</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
