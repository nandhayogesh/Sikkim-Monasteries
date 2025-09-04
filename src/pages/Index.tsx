import { HeroSection } from "@/components/HeroSection";
import { MonasteriesSection } from "@/components/MonasteriesSection";
import { CulturalSection } from "@/components/CulturalSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MonasteriesSection />
      <CulturalSection />
      <FooterSection />
    </div>
  );
};

export default Index;
