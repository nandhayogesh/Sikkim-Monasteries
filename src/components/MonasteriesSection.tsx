import { MonasteryCard } from "./MonasteryCard";
import monastery1 from "@/assets/monastery-1.jpg";
import monastery2 from "@/assets/monastery-2.jpg";
import monastery3 from "@/assets/monastery-3.jpg";

const monasteries = [
  {
    title: "Rumtek Monastery",
    location: "East Sikkim",
    established: "1960s",
    description: "The largest monastery in Sikkim, known as the 'Dharmachakra Centre'. Home to the Karmapa Lama and featuring exquisite Buddhist art and architecture.",
    imageUrl: monastery1,
    visitors: "50k+ annually",
  },
  {
    title: "Pemayangtse Monastery",
    location: "West Sikkim",
    established: "1705",
    description: "One of the oldest and most significant monasteries, meaning 'Perfect Sublime Lotus'. Houses precious Buddhist scriptures and religious artifacts.",
    imageUrl: monastery2,
    visitors: "30k+ annually",
  },
  {
    title: "Enchey Monastery",
    location: "Gangtok",
    established: "1909",
    description: "A beautiful monastery offering panoramic views of Kanchenjunga. Famous for its annual Cham dance performances during religious festivals.",
    imageUrl: monastery3,
    visitors: "25k+ annually",
  },
];

export const MonasteriesSection = () => {
  return (
    <section id="monasteries" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
            Sacred Monasteries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the architectural marvels and spiritual sanctuaries that have preserved 
            Buddhist culture in the heart of the Himalayas for centuries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {monasteries.map((monastery, index) => (
            <div 
              key={monastery.title}
              className="animate-mountain-fade"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <MonasteryCard
                {...monastery}
                onLearnMore={() => {
                  // Future: Navigate to detailed monastery page
                  console.log(`Learn more about ${monastery.title}`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};