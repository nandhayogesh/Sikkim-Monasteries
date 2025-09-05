import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
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
  Info,
  Mountain,
  Sunrise,
  TreePine
} from "lucide-react";

// Enhanced monastery data
const monasteryData = {
  "rumtek": {
    title: "Rumtek Monastery",
    location: "East Sikkim",
    established: "1960s",
    description: "The largest monastery in Sikkim, known as the 'Dharmachakra Centre'. Home to the Karmapa Lama and featuring exquisite Buddhist art and architecture.",
    imageUrl: "/api/placeholder/800/400?text=Rumtek+Monastery",
    visitors: "50k+ annually",
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
    history: "Founded in the 1960s by the 16th Karmapa, Rumtek Monastery was built as the main seat of the Karma Kagyu lineage outside Tibet. The monastery houses precious relics, including the Golden Stupa containing the remains of the 16th Karmapa.",
    gallery: [
      "/api/placeholder/600/400?text=Main+Hall",
      "/api/placeholder/600/400?text=Golden+Stupa", 
      "/api/placeholder/600/400?text=Prayer+Wheels",
      "/api/placeholder/600/400?text=Mountain+View",
      "/api/placeholder/600/400?text=Monks+Quarters",
      "/api/placeholder/600/400?text=Library"
    ]
  },
  "pemayangtse": {
    title: "Pemayangtse Monastery",
    location: "West Sikkim",
    established: "1705",
    description: "One of the oldest and most significant monasteries, meaning 'Perfect Sublime Lotus'. Houses precious Buddhist scriptures and religious artifacts.",
    imageUrl: "/api/placeholder/800/400?text=Pemayangtse+Monastery",
    visitors: "30k+ annually",
    altitude: "2,085m above sea level",
    phone: "+91 3595 250263",
    website: "www.pemayangtse-monastery.org",
    openingHours: "7:00 AM - 5:00 PM",
    entryFee: "₹10 for Indians, ₹20 for foreigners",
    bestTime: "October to December, March to May",
    significance: "Premier monastery of the Nyingma order in Sikkim",
    architecture: "Three-story structure representing the celestial abode",
    festivals: ["Chaam Dance", "Losar", "Drupka Teshi"],
    nearbyAttractions: ["Rabdentse Ruins", "Khecheopalri Lake", "Yuksom"],
    facilities: ["Museum", "Library", "Guest house", "Meditation hall"],
    history: "Established in 1705, Pemayangtse is one of the oldest monasteries in Sikkim. Built by Lama Lhatsun Chempo, it served as the premier monastery of the Nyingma order and played a crucial role in Sikkim's history.",
    gallery: [
      "/api/placeholder/600/400?text=Three+Story+Structure",
      "/api/placeholder/600/400?text=Ancient+Murals",
      "/api/placeholder/600/400?text=Prayer+Hall",
      "/api/placeholder/600/400?text=Monastery+Museum",
      "/api/placeholder/600/400?text=Scenic+Views",
      "/api/placeholder/600/400?text=Sacred+Artifacts"
    ]
  },
  "enchey": {
    title: "Enchey Monastery",
    location: "Gangtok",
    established: "1909",
    description: "A beautiful monastery offering panoramic views of Kanchenjunga. Famous for its annual Cham dance performances during religious festivals.",
    imageUrl: "/api/placeholder/800/400?text=Enchey+Monastery",
    visitors: "25k+ annually",
    altitude: "1,900m above sea level",
    phone: "+91 3592 205562",
    website: "www.enchey-monastery.org",
    openingHours: "6:00 AM - 6:00 PM",
    entryFee: "Free",
    bestTime: "September to May",
    significance: "Important center for Nyingma Buddhist teachings",
    architecture: "Chinese pagoda-style architecture with colorful decorations",
    festivals: ["Cham Dance Festival", "Losar", "Saga Dawa"],
    nearbyAttractions: ["Ganesh Tok", "Hanuman Tok", "Flower Exhibition Centre"],
    facilities: ["Prayer hall", "Parking", "View point", "Souvenir shop"],
    history: "Built in 1909, Enchey Monastery was established on a site blessed by Lama Druptob Karpo. The name 'Enchey' means 'solitary temple' and it serves as an important center for the Nyingma school of Buddhism.",
    gallery: [
      "/api/placeholder/600/400?text=Pagoda+Architecture",
      "/api/placeholder/600/400?text=Cham+Dance",
      "/api/placeholder/600/400?text=Kanchenjunga+View",
      "/api/placeholder/600/400?text=Prayer+Flags",
      "/api/placeholder/600/400?text=Buddha+Statue",
      "/api/placeholder/600/400?text=Monastery+Grounds"
    ]
  }
};

export const MonasteryDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const monastery = id ? monasteryData[id as keyof typeof monasteryData] : null;

  if (!monastery) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Monastery Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={monastery.imageUrl}
          alt={monastery.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Back Button */}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 text-xs md:text-sm"
        >
          <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
          Back
        </Button>

        {/* Title */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-24 text-white">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 leading-tight">{monastery.title}</h1>
          <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-2 md:gap-4 text-white/90">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-lg">{monastery.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-lg">Est. {monastery.established}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mountain className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-lg">{monastery.altitude}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            variant="secondary"
            size="icon"
            className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 w-8 h-8 md:w-10 md:h-10"
          >
            <Heart className="w-3 h-3 md:w-4 md:h-4" />
          </Button>
          <Button
            variant="secondary" 
            size="icon"
            className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 w-8 h-8 md:w-10 md:h-10"
          >
            <Share2 className="w-3 h-3 md:w-4 md:h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-6 md:mb-8 h-auto">
            <TabsTrigger value="overview" className="text-xs md:text-sm py-2">Overview</TabsTrigger>
            <TabsTrigger value="visit" className="text-xs md:text-sm py-2">Visit Info</TabsTrigger>
            <TabsTrigger value="gallery" className="text-xs md:text-sm py-2">Gallery</TabsTrigger>
            <TabsTrigger value="history" className="text-xs md:text-sm py-2">History</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">About {monastery.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {monastery.description}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-4">Cultural Significance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {monastery.significance}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {monastery.architecture}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Festivals & Events</h3>
                  <div className="flex flex-wrap gap-2">
                    {monastery.festivals.map((festival, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        {festival}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Quick Facts</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Established:</span>
                        <span>{monastery.established}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Altitude:</span>
                        <span>{monastery.altitude}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Visitors:</span>
                        <span>{monastery.visitors}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Entry Fee:</span>
                        <span>{monastery.entryFee}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Contact Information</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{monastery.openingHours}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{monastery.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-muted-foreground" />
                        <span className="text-primary">{monastery.website}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <NavigationIcon className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="visit" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Sunrise className="w-5 h-5 mr-2 text-primary" />
                    Best Time to Visit
                  </h3>
                  <p className="text-muted-foreground mb-4">{monastery.bestTime}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Peak Season:</span>
                      <span>October - December</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weather:</span>
                      <span>Pleasant & Clear</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <TreePine className="w-5 h-5 mr-2 text-primary" />
                    Facilities Available
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {monastery.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-primary" />
                  Visitor Guidelines
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Dress modestly and remove shoes before entering prayer halls</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Maintain silence during prayer sessions and meditation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Photography may be restricted in certain sacred areas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Carry water and light snacks for longer visits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Nearby Attractions</h3>
                <div className="space-y-2">
                  {monastery.nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{attraction}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {monastery.gallery.map((image, index) => (
                <div key={index} className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
                  <img
                    src={image}
                    alt={`${monastery.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Historical Background</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {monastery.history}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
