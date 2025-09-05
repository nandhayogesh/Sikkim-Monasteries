import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Clock, 
  Users, 
  Calendar,
  Phone,
  Globe,
  Camera,
  Star,
  Heart,
  Share2,
  Navigation as NavigationIcon,
  Info
} from "lucide-react";

interface MonasteryDetailModalProps {
  monastery: {
    title: string;
    location: string;
    established: string;
    description: string;
    imageUrl: string;
    visitors?: string;
  };
  children: React.ReactNode;
}

export const MonasteryDetailModal = ({ monastery, children }: MonasteryDetailModalProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const monasteryDetails = {
    ...monastery,
    // Enhanced details
    altitude: "1,547m above sea level",
    phone: "+91 3592 202123",
    website: "www.rumtek-monastery.org",
    openingHours: "6:00 AM - 6:00 PM",
    entryFee: "Free",
    bestTime: "March to June, September to December",
    significance: "Head monastery of the Karma Kagyu lineage",
    architecture: "Traditional Tibetan Buddhist architecture with modern elements",
    festivals: ["Losar (Tibetan New Year)", "Buddha Purnima", "Saga Dawa"],
    nearbyAttractions: ["Enchey Monastery", "Ganesh Tok", "Hanuman Tok"],
    facilities: ["Parking", "Restrooms", "Photography allowed", "Guided tours"],
    tips: [
      "Dress modestly and remove shoes before entering prayer halls",
      "Maintain silence during prayer sessions",
      "Photography may be restricted in certain areas",
      "Carry water and light snacks for longer visits"
    ],
    gallery: [
      monastery.imageUrl,
      "/api/placeholder/600/400?text=Prayer+Hall",
      "/api/placeholder/600/400?text=Golden+Stupa",
      "/api/placeholder/600/400?text=Mountain+View"
    ]
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <div className="relative">
          {/* Header Image */}
          <div className="relative h-64 overflow-hidden rounded-t-lg">
            <img
              src={monasteryDetails.imageUrl}
              alt={monasteryDetails.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Header Content */}
            <div className="absolute bottom-4 left-6 text-white">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-white mb-2">
                  {monasteryDetails.title}
                </DialogTitle>
                <div className="flex items-center space-x-4 text-white/90">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{monasteryDetails.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Est. {monasteryDetails.established}</span>
                  </div>
                </div>
              </DialogHeader>
            </div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className="bg-white/20 backdrop-blur-md border-white/30"
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="bg-white/20 backdrop-blur-md border-white/30"
              >
                <Share2 className="w-4 h-4 text-white" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <ScrollArea className="h-[calc(90vh-16rem)] p-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="visit">Visit Info</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="culture">Culture</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">About</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {monasteryDetails.description} This sacred site represents centuries of Buddhist tradition 
                    and serves as a center for spiritual learning and meditation practice.
                  </p>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Quick Facts</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Altitude:</span>
                        <span>{monasteryDetails.altitude}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Annual Visitors:</span>
                        <span>{monasteryDetails.visitors}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Architecture:</span>
                        <span>Tibetan Buddhist</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Significance</h4>
                    <p className="text-sm text-muted-foreground">
                      {monasteryDetails.significance}
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Festivals & Events</h4>
                  <div className="flex flex-wrap gap-2">
                    {monasteryDetails.festivals.map((festival, index) => (
                      <Badge key={index} variant="secondary">
                        <Calendar className="w-3 h-3 mr-1" />
                        {festival}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="visit" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Contact & Hours</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{monasteryDetails.openingHours}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{monasteryDetails.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        <span className="text-primary">{monasteryDetails.website}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Visit Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Entry Fee:</span>
                        <span>{monasteryDetails.entryFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Best Time:</span>
                        <span>{monasteryDetails.bestTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Facilities</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {monasteryDetails.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Visitor Tips</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {monasteryDetails.tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Info className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button className="flex-1">
                    <NavigationIcon className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {monasteryDetails.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 overflow-hidden rounded-lg group cursor-pointer">
                      <img
                        src={image}
                        alt={`${monasteryDetails.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="culture" className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Cultural Significance</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This monastery plays a crucial role in preserving Tibetan Buddhist culture and traditions. 
                    It serves as a center for religious education, meditation practice, and cultural preservation 
                    in the region.
                  </p>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium mb-3">Nearby Attractions</h4>
                  <div className="space-y-2">
                    {monasteryDetails.nearbyAttractions.map((attraction, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{attraction}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Planning Your Visit?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Consider combining your visit with nearby monasteries and cultural sites for a complete spiritual journey.
                  </p>
                  <Button variant="outline" size="sm">
                    View Suggested Itinerary
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};
