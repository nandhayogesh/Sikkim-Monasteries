import { Heart, Mountain } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-12 px-4 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-6 h-6 text-primary" />
            <span className="text-xl font-medium">Sikkim Monasteries</span>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Digitally preserving the spiritual heritage of Sikkim's monasteries 
            for future generations and cultural tourism
          </p>
          
          <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary" />
            <span>for cultural preservation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};