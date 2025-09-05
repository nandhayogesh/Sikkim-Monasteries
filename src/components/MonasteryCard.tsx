import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users } from "lucide-react";
import { MonasteryDetailModal } from "./MonasteryDetailModal";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const monasteryData = {
    title,
    location,
    established,
    description,
    imageUrl,
    visitors
  };

  // Create URL-friendly slug from title
  const getMonasterySlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  };

  const handleViewDetails = () => {
    const slug = getMonasterySlug(title);
    navigate(`/monastery/${slug}`);
  };

  return (
    <Card className="monastery-card overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden cursor-pointer" onClick={handleViewDetails}>
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
      
      <CardContent className="pt-0 space-y-3">
        <p className="text-card-foreground/80 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
  {/* Removed Quick View and View Details buttons */}
      </CardContent>
    </Card>
  );
};