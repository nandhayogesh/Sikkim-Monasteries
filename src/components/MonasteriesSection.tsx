
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
  imageUrl: "https://www.captureatrip.com/_next/image?url=https://d1zvcmhypeawxj.cloudfront.net/location/Sikkim/blogs/rumtek-monastery-44b659d69d-gb1sls-webp-26074d0e20-1752061511194.webp&w=3840&q=50",
    visitors: "50k+ annually",
  },
  {
    title: "Pemayangtse Monastery",
    location: "West Sikkim",
    established: "1705",
    description: "One of the oldest and most significant monasteries, meaning 'Perfect Sublime Lotus'. Houses precious Buddhist scriptures and religious artifacts.",
    imageUrl: "https://storage.googleapis.com/tb-img/production/21/12/61c18b0d5f42b90318a82dcb_16402704773081.png",
    visitors: "30k+ annually",
  },
  {
    title: "Enchey Monastery",
    location: "Gangtok",
    established: "1909",
    description: "A beautiful monastery offering panoramic views of Kanchenjunga. Famous for its annual Cham dance performances during religious festivals.",
  imageUrl: "http://www.sikkimstdc.com/Images/POIIDImages/23/Gallery/2.jpeg",
    visitors: "25k+ annually",
  },
  {
    title: "Tashiding Monastery",
    location: "West Sikkim",
    established: "1717",
    description: "One of the holiest Nyingma monasteries, famous for the Bumchu festival and its spiritual significance.",
  imageUrl: "https://www.captureatrip.com/_next/image?url=https://d1zvcmhypeawxj.cloudfront.net/location/Sikkim/blogs/tashiding-monastery-789b207931-64lnco-webp-9fc2e3dbd6-1752062306566.webp&w=3840&q=50",
    visitors: "15k+ annually",
  },
  {
    title: "Ralong Monastery",
    location: "South Sikkim",
    established: "1768",
    description: "Important Kagyu monastery near Ravangla, known for its annual Pang Lhabsol festival and beautiful murals.",
  imageUrl: "https://live.staticflickr.com/65535/48559994452_59503f8050.jpg",
    visitors: "12k+ annually",
  },
  {
    title: "Phodong Monastery",
    location: "North Sikkim",
    established: "1740",
    description: "Kagyu sect, renowned for its beautiful murals and annual Chaam dances.",
  imageUrl: "https://myholidayhappiness.com/uploads/phodong-monastery-2458.jpg",
    visitors: "10k+ annually",
  },
];


export const MonasteriesSection = () => {
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



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {monasteries.map((monastery, index) => (
            <div
              key={monastery.title}
              className="animate-mountain-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MonasteryCard {...monastery} />
            </div>
          ))}
        </div>

        {/* Interactive Map Section */}
        <div id="map" className="mt-16 flex flex-col items-center">
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