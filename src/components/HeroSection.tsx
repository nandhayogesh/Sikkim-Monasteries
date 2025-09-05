import { Button } from "@/components/ui/button";
import { ChevronDown, Mountain, Camera, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-monastery.jpg";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const scrollToMonasteries = () => {
    document.getElementById('monasteries')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const navigate = useNavigate();

  const goToCulture = () => {
    navigate('/culture');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sikkim Monastery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      
      {/* Floating Elements - Hidden on mobile */}
      <div className="absolute top-20 left-4 md:left-10 monastery-float hidden sm:block">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-2 md:p-3 shadow-sacred">
          <Mountain className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </div>
      </div>
      
      <div className="absolute top-32 right-4 md:right-16 monastery-float hidden sm:block" style={{ animationDelay: "2s" }}>
        <div className="bg-white/10 backdrop-blur-md rounded-full p-2 md:p-3 shadow-sacred">
          <Camera className="w-4 h-4 md:w-6 md:h-6 text-white" />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-4 md:mb-6 animate-mountain-fade">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 md:px-4 py-2 text-xs md:text-sm font-medium">
            <MapPin className="w-3 h-3 md:w-4 md:h-4" />
            Sacred Monasteries of Sikkim
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-4 md:mb-6 tracking-wide animate-mountain-fade leading-tight" style={{ animationDelay: "0.2s" }}>
          Journey Through
          <span className="block bg-gradient-sunset bg-clip-text text-transparent font-normal">
            Spiritual Heritage
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 font-light leading-relaxed animate-mountain-fade px-4" style={{ animationDelay: "0.4s" }}>
          Discover the ancient monasteries of Sikkim, where centuries of Buddhist wisdom 
          meet breathtaking Himalayan beauty
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-mountain-fade px-4" style={{ animationDelay: "0.6s" }}>
          <Button 
            variant="spiritual" 
            size="xl"
            onClick={scrollToMonasteries}
            className="shadow-sacred hover:shadow-monastery text-sm md:text-base"
          >
            Explore Monasteries
          </Button>
          <Button 
            variant="mountain" 
            size="xl"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 text-sm md:text-base"
            onClick={goToCulture}
          >
            Cultural Heritage
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-spiritual-pulse">
        <button
          onClick={scrollToMonasteries}
          className="text-white/70 hover:text-white transition-colors duration-300"
          aria-label="Scroll to monasteries section"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
};