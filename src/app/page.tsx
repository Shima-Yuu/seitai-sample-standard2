import ServiceSection from "@/components/content/service";
import NewsSection from "@/components/content/top/news";
import QaSection from "@/components/content/top/qa";
import AboutSection from "@/components/content/top/about";
import FeatureSection from "@/components/content/top/feature";
import HeroSection from "@/components/content/top/hero";
import FlowSection from "@/components/content/top/flow";
import VoiceSection from "@/components/content/top/voice";
import ProblemSection from "@/components/content/top/ploblem";
export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <ProblemSection />
      <ServiceSection showButton />
      <FeatureSection />
      <AboutSection />
      <VoiceSection />
      <FlowSection />
      <QaSection />
    </>
  );
}
