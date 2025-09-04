import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";

interface MonasteryCardProps {
  title: string;
  location: string;
  established: string;
  description: string;
  imageUrl: string;
  visitors?: string;
  onLearnMore?: () => void;
}

export const MonasteryCard = ({
  title,
  location,
  established,
  description,
  imageUrl,
  visitors,
  onLearnMore,
}: MonasteryCardProps) => {
  return (
    <Card className="monastery-card overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${title} monastery`}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            Est. {established}
          </div>
          {visitors && (
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {visitors}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-card-foreground/80 text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        <Button 
          variant="spiritual" 
          size="sm" 
          onClick={onLearnMore}
          className="w-full"
        >
          Explore Monastery
        </Button>
      </CardContent>
    </Card>
  );
};