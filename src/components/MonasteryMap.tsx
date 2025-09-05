import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons in Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const monasteryLocations = [
  {
    title: "Rumtek Monastery",
    position: [27.3389, 88.6065] as [number, number],
    description: "The largest monastery in Sikkim, known as the 'Dharmachakra Centre'."
  },
  {
    title: "Pemayangtse Monastery", 
    position: [27.2396, 88.2642] as [number, number],
    description: "One of the oldest and most significant monasteries, meaning 'Perfect Sublime Lotus'."
  },
  {
    title: "Enchey Monastery",
    position: [27.3406, 88.6131] as [number, number],
    description: "A beautiful monastery offering panoramic views of Kanchenjunga."
  },
  {
    title: "Tashiding Monastery",
    position: [27.1833, 88.2167] as [number, number],
    description: "One of the holiest Nyingma monasteries, famous for the Bumchu festival."
  },
  {
    title: "Ralong Monastery",
    position: [27.1981, 88.3125] as [number, number],
    description: "Important Kagyu monastery near Ravangla, known for its annual Pang Lhabsol festival."
  },
  {
    title: "Phodong Monastery",
    position: [27.4583, 88.5833] as [number, number],
    description: "Kagyu sect, renowned for its beautiful murals and annual Chaam dances."
  }
];

export const MonasteryMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current).setView([27.3200, 88.4500], 9);
    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers
    monasteryLocations.forEach((monastery) => {
      L.marker(monastery.position)
        .addTo(map)
        .bindPopup(`<strong>${monastery.title}</strong><br/>${monastery.description}`);
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-96 rounded-lg overflow-hidden shadow-lg border"
      style={{ height: "400px" }}
    />
  );
};
