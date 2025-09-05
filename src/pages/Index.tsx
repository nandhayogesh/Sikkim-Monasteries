import { useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { MonasteriesSection } from "@/components/MonasteriesSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    // Handle hash navigation when component mounts
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <MonasteriesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
