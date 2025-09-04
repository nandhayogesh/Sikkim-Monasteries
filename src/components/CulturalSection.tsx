import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Users, Calendar } from "lucide-react";

const culturalHighlights = [
  {
    icon: BookOpen,
    title: "Ancient Scriptures",
    description: "Preserving thousand-year-old Buddhist texts and manuscripts in pristine condition.",
  },
  {
    icon: Users,
    title: "Living Heritage",
    description: "Active communities of monks maintaining centuries-old traditions and practices.",
  },
  {
    icon: Calendar,
    title: "Sacred Festivals",
    description: "Vibrant celebrations like Losar and Saga Dawa bring communities together.",
  },
  {
    icon: Heart,
    title: "Spiritual Wisdom",
    description: "Centers of meditation, learning, and spiritual guidance for thousands of visitors.",
  },
];

export const CulturalSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-spiritual">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            Cultural Preservation
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            These monasteries are not just buildings—they are living repositories of 
            Buddhist culture, art, and spiritual practice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {culturalHighlights.map((highlight, index) => (
            <Card 
              key={highlight.title}
              className="bg-white/10 backdrop-blur-md border-white/20 text-white animate-mountain-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-full bg-white/10">
                  <highlight.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium mb-3">{highlight.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="sacred" 
            size="xl"
            className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
          >
            Support Preservation
          </Button>
        </div>
      </div>
    </section>
  );
};