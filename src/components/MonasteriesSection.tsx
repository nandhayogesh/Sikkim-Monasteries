
import { useState } from "react";
import { MonasteryCard } from "./MonasteryCard";
import monastery1 from "@/assets/monastery-1.jpg";
import monastery2 from "@/assets/monastery-2.jpg";
import monastery3 from "@/assets/monastery-3.jpg";

import { Dialog } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MonasteryMap } from "./MonasteryMap";
import { Search } from "lucide-react";

const monasteries = [
  {
    title: "Rumtek Monastery",
    location: "East Sikkim",
    established: "1960s",
    description: "The largest monastery in Sikkim, known as the 'Dharmachakra Centre'. Home to the Karmapa Lama and featuring exquisite Buddhist art and architecture.",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "50k+ annually",
  },
  {
    title: "Pemayangtse Monastery",
    location: "West Sikkim",
    established: "1705",
    description: "One of the oldest and most significant monasteries, meaning 'Perfect Sublime Lotus'. Houses precious Buddhist scriptures and religious artifacts.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "30k+ annually",
  },
  {
    title: "Enchey Monastery",
    location: "Gangtok",
    established: "1909",
    description: "A beautiful monastery offering panoramic views of Kanchenjunga. Famous for its annual Cham dance performances during religious festivals.",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "25k+ annually",
  },
  {
    title: "Tashiding Monastery",
    location: "West Sikkim",
    established: "1717",
    description: "One of the holiest Nyingma monasteries, famous for the Bumchu festival and its spiritual significance.",
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "15k+ annually",
  },
  {
    title: "Ralong Monastery",
    location: "South Sikkim",
    established: "1768",
    description: "Important Kagyu monastery near Ravangla, known for its annual Pang Lhabsol festival and beautiful murals.",
    imageUrl: "https://images.unsplash.com/photo-1590736876225-c5ec57e41510?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "12k+ annually",
  },
  {
    title: "Phodong Monastery",
    location: "North Sikkim",
    established: "1740",
    description: "Kagyu sect, renowned for its beautiful murals and annual Chaam dances.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "10k+ annually",
  },
  {
    title: "Dubdi Monastery",
    location: "West Sikkim",
    established: "1701",
    description: "Oldest monastery in Sikkim, located near Yuksom, surrounded by lush forests.",
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "8k+ annually",
  },
  {
    title: "Lachen Monastery",
    location: "North Sikkim",
    established: "1858",
    description: "Gateway to North Sikkim, important for the Lachenpas and local festivals.",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "7k+ annually",
  },
  {
    title: "Lachung Monastery",
    location: "North Sikkim",
    established: "1880",
    description: "Located in the picturesque Lachung valley, known for its serene setting.",
    imageUrl: "https://images.unsplash.com/photo-1590736876225-c5ec57e41510?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "7k+ annually",
  },
  {
    title: "Sanga Choeling Monastery",
    location: "West Sikkim",
    established: "1697",
    description: "Near Pelling, one of the oldest monasteries in Sikkim, offering panoramic views.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "6k+ annually",
  },
  {
    title: "Lingdum (Rigdzin) Monastery",
    location: "East Sikkim",
    established: "1999",
    description: "Modern monastery near Gangtok, known for its impressive architecture and peaceful ambiance.",
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "5k+ annually",
  },
  {
    title: "Khecheopalri Monastery",
    location: "West Sikkim",
    established: "20th century",
    description: "Near the sacred Khecheopalri Lake, a pilgrimage site for Buddhists and Hindus alike.",
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "5k+ annually",
  },
  {
    title: "Zong Dog Palri Fo Brang Monastery (Ravangla)",
    location: "South Sikkim",
    established: "2002",
    description: "Also known as the Buddha Park Monastery, features a giant Buddha statue and beautiful surroundings.",
    imageUrl: "https://images.unsplash.com/photo-1590736876225-c5ec57e41510?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    visitors: "10k+ annually",
  },
];


export const MonasteriesSection = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = monasteries.filter(
    m => m.title.toLowerCase().includes(search.toLowerCase()) || 
         m.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section 
      id="monasteries" 
      className="py-16 md:py-20 px-4 bg-gradient-to-b from-background to-muted/30" 
      aria-labelledby="monasteries-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            id="monasteries-heading" 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4 md:mb-6 tracking-wide"
          >
            Sacred Monasteries
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Explore the architectural marvels and spiritual sanctuaries that have preserved 
            Buddhist culture in the heart of the Himalayas for centuries
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              aria-label="Search monasteries by name or location"
              placeholder="Search by name or location..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-muted-foreground py-12">
              <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-lg">No monasteries found matching your search.</p>
              <p className="text-sm mt-2">Try searching with different keywords.</p>
            </div>
          ) : (
            filtered.map((monastery, index) => (
              <div
                key={monastery.title}
                className="animate-mountain-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MonasteryCard {...monastery} />
              </div>
            ))
          )}
        </div>

        {/* Interactive Map Section */}
        <div className="mt-16 flex flex-col items-center">
          <div className="w-full max-w-5xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">Monastery Locations</h3>
              <p className="text-muted-foreground">
                Explore the geographical distribution of these sacred sites across Sikkim
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-lg">
              <MonasteryMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};