import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import HowItWorksSimple from "@/components/HowItWorksSimple";
import FeatureTabs from "@/components/FeatureTabs";
import SocialProof from "@/components/SocialProof";
import Security from "@/components/Security";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ForWhom />
      <HowItWorksSimple />
      <FeatureTabs />
      <SocialProof />
      <Security />
      <Faq />
      <Pricing />
      <Cta />
      <Footer />
    </main>
  );
}
