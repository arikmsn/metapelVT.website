import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import Security from "@/components/Security";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ForWhom />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Security />
      <Faq />
      <Footer />
    </main>
  );
}
