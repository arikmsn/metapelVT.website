import Hero from "@/components/Hero";
import ForWhom from "@/components/ForWhom";
import HowItWorksSimple from "@/components/HowItWorksSimple";
import Features from "@/components/Features";
import AiFeatures from "@/components/AiFeatures";
import AiSummary from "@/components/AiSummary";
import Messages from "@/components/Messages";
import Contacts from "@/components/Contacts";
import SocialProof from "@/components/SocialProof";
import Security from "@/components/Security";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ForWhom />
      <HowItWorksSimple />
      <Features />
      <AiFeatures />
      <AiSummary />
      <Messages />
      <Contacts />
      <SocialProof />
      <Security />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
