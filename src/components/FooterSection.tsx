import { Heart, Mountain } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-8 md:py-12 px-4 bg-gradient-to-b from-black/95 to-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
          {/* App Name & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Mountain className="w-6 h-6 text-primary" />
              <span className="text-xl md:text-2xl font-bold text-primary">Sikkim Monasteries</span>
            </div>
            <p className="mb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
              Digitally preserving the spiritual heritage of Sikkim's monasteries for future generations and cultural tourism.
            </p>
          </div>
          {/* Tech Stack */}
          <div className="text-center md:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4 text-primary">Technical Stack</h3>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li>React 18 + TypeScript</li>
              <li>Vite Build System</li>
              <li>Tailwind CSS + Shadcn/UI</li>
              <li>Lucide Icons</li>
              <li>React Context + Hooks</li>
            </ul>
          </div>
          {/* Key Features */}
          <div className="text-center md:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-4 text-primary">Key Features</h3>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li>Monastery & Culture Exploration</li>
              <li>Interactive Map</li>
              <li>Search & Filter Monasteries</li>
              <li>Responsive Design</li>
              <li>Professional UI/UX</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};