import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Calendar, Music, Utensils, Shirt, Palette, Mountain, Users, Heart } from "lucide-react";

// Import images - These can be removed if using external URLs
// import cultureFestivals from "@/assets/monastery-1.jpg";
// import cultureDance from "@/assets/monastery-2.jpg";
// import cultureCuisine from "@/assets/monastery-3.jpg";
// import cultureAttire from "@/assets/hero-monastery.jpg";

const CulturePage = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Cultural Overview", icon: Mountain },
    { id: "festivals", title: "Festivals & Celebrations", icon: Calendar },
    { id: "dance", title: "Dance & Music", icon: Music },
    { id: "cuisine", title: "Traditional Cuisine", icon: Utensils },
    { id: "attire", title: "Traditional Attire", icon: Shirt },
    { id: "art", title: "Art & Handicrafts", icon: Palette },
    { id: "communities", title: "Communities", icon: Users },
  ];

  const festivals = [
    {
      name: "Pang Lhabsol",
      description: "A grand festival dedicated to Mount Khangchendzonga, featuring masked dances and prayers for protection.",
      significance: "Celebrates the unity between humans and nature",
      timing: "August/September",
      traditions: ["Cham dances", "Mask ceremonies", "Mountain worship", "Community prayers"],
  imageUrl: "https://im.whatshot.in/img/2020/Sep/pl4-1599133289.jpg?wp=1"
    },
    {
      name: "Losar",
      description: "Tibetan New Year celebrated with great enthusiasm across Sikkim's Buddhist communities.",
      significance: "Marks new beginnings and spiritual renewal",
      timing: "February/March",
      traditions: ["Family reunions", "Traditional foods", "Monastery visits", "Prayer flags"],
  imageUrl: "https://thumbs.dreamstime.com/b/losar-tibetan-new-year-chemar-box-roasted-barley-flour-decorative-goat-head-305810215.jpg"
    },
    {
      name: "Saga Dawa",
      description: "Commemorates Buddha's birth, enlightenment, and nirvana - the most sacred Buddhist festival.",
      significance: "Triple blessed occasion in Buddhism",
      timing: "May/June",
      traditions: ["Meditation", "Charitable acts", "Circumambulation", "Vegetarian meals"],
  imageUrl: "https://data.tibettravel.org/assets/images/festival/local-tibetan-celebrate-saga-dawa-festival-foot-at-mount-kailash.jpg"
    },
    {
      name: "Bumchu",
      description: "Sacred water ceremony predicting the year's fortune, held at Tashiding Monastery.",
      significance: "Divine prophecy and blessings",
      timing: "February/March",
      traditions: ["Holy water distribution", "Pilgrimage", "Fasting", "Sacred rituals"],
  imageUrl: "https://dailyasianage.com/library/1678890442_0.jpg?v=0,1"
    }
  ];

  const dances = [
    {
      name: "Cham Dance",
      description: "Sacred mask dance performed by monks to ward off evil spirits and bring peace.",
      origin: "Tibetan Buddhist tradition",
      characteristics: ["Elaborate masks", "Colorful costumes", "Rhythmic movements", "Spiritual symbolism"],
  imageUrl: "https://www.tibetan-buddhist-art.com/wp-content/uploads/2016/03/cham-lama-dance-nepal-carmen-mensink.jpg"
    },
    {
      name: "Maruni Dance",
      description: "Folk dance performed during Tihar festival, expressing joy and celebration.",
      origin: "Nepali community tradition",
      characteristics: ["Graceful movements", "Traditional attire", "Group performance", "Festive spirit"],
  imageUrl: "https://static2.clubmahindra.com/storage/app/media/Resort/Club%20Mahindra%20Baiguney%20Sikkim/Learn%20Maruni%20Sikkim%20Dance_1551250604.jpg"
    },
    {
      name: "Singhi Chham",
      description: "Snow Lion dance symbolizing fearlessness and the playful mind of enlightenment.",
      origin: "Buddhist monastery tradition",
      characteristics: ["Lion costumes", "Acrobatic moves", "Symbolic gestures", "Spiritual meaning"],
  imageUrl: "https://live.staticflickr.com/637/20967963410_395f077bbe.jpg"
    }
  ];

  const cuisineItems = [
    {
      name: "Momos",
      description: "Steamed dumplings filled with vegetables, meat, or cheese - Sikkim's most beloved dish.",
      type: "Main Course",
      ingredients: ["Wheat flour", "Various fillings", "Spices", "Steam cooking"],
  imageUrl: "https://media.gettyimages.com/id/542550939/photo/momos.jpg?s=612x612&w=0&k=20&c=T9Zs9sR3u6wOfxL7HHLhdKO4FrgxhEAIDTF2TcjFYrE="
    },
    {
      name: "Thukpa",
      description: "Hearty noodle soup perfect for the cold mountain climate, rich in flavors and nutrients.",
      type: "Soup",
      ingredients: ["Noodles", "Vegetables", "Meat/Tofu", "Aromatic herbs"],
  imageUrl: "https://media.istockphoto.com/id/2166139269/photo/hot-vegetable-thukpa-served-in-bowl-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=ZgHq__wxprp72TclVzKn1loWgXFBRDuUfKFgXSMU-2k="
    },
    {
      name: "Phagshapa",
      description: "Traditional pork dish with radish and dried chilies, showcasing authentic Sikkimese flavors.",
      type: "Main Course",
      ingredients: ["Pork strips", "Radish", "Dried chilies", "Traditional spices"],
  imageUrl: "https://www.mumbaikarsperspective.com/static/c1e/client/86164/uploaded/093bf7f83476b4efc6604b0adac7be0d.webp?width=968&height=545&resizemode=4"
    },
    {
      name: "Chhurpi",
      description: "Hardened yak cheese snack, rich in protein and a testament to mountain survival wisdom.",
      type: "Snack",
      ingredients: ["Yak milk", "Natural fermentation", "Mountain air curing"],
  imageUrl: "https://us.123rf.com/450wm/nosonjai/nosonjai1505/nosonjai150500042/39503122-chhurpi-tradition-nepal-cheese-candy.jpg?ver=6"
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
                Sikkim's Rich Cultural Heritage
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Nestled in the heart of the Himalayas, Sikkim presents a unique cultural tapestry where ancient Buddhist traditions, 
                indigenous Lepcha heritage, and Nepali influences blend harmoniously to create something truly extraordinary.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Three Communities</h3>
                <p className="text-muted-foreground">
                  Bhutia, Lepcha, and Nepali communities each contribute their unique traditions, 
                  languages, and customs to Sikkim's cultural mosaic.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sacred Geography</h3>
                <p className="text-muted-foreground">
                  Every mountain, lake, and forest holds spiritual significance, with Khangchendzonga 
                  revered as the guardian deity of Sikkim.
                </p>
              </Card>

              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Living Traditions</h3>
                <p className="text-muted-foreground">
                  Ancient practices continue to thrive in daily life, from monastery rituals 
                  to traditional farming methods passed down through generations.
                </p>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Cultural Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sikkim's culture is built on the principles of <em>compassion</em>, <em>harmony with nature</em>, 
                and <em>respect for all living beings</em>. This philosophy permeates every aspect of life, 
                from the way communities interact to their relationship with the environment.
              </p>
            </div>
          </div>
        );

      case "festivals":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">Festivals & Celebrations</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sikkim's calendar is punctuated by vibrant festivals that celebrate the changing seasons, 
                honor deities, and strengthen community bonds.
              </p>
            </div>

            <div className="grid gap-8">
              {festivals.map((festival, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={festival.imageUrl} 
                        alt={festival.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-semibold">{festival.name}</h3>
                        <Badge variant="outline">{festival.timing}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{festival.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Cultural Significance:</h4>
                        <p className="text-sm text-muted-foreground">{festival.significance}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Traditions:</h4>
                        <div className="flex flex-wrap gap-2">
                          {festival.traditions.map((tradition, idx) => (
                            <Badge key={idx} variant="secondary">{tradition}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case "dance":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">Dance & Music Traditions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Through movement and melody, Sikkim's communities express their deepest spiritual beliefs, 
                celebrate life's milestones, and preserve ancient stories.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {dances.map((dance, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={dance.imageUrl} 
                    alt={dance.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{dance.name}</h3>
                    <p className="text-muted-foreground mb-4">{dance.description}</p>
                    <div className="space-y-3">
                      <div>
                        <span className="font-medium">Origin: </span>
                        <span className="text-muted-foreground">{dance.origin}</span>
                      </div>
                      <div>
                        <span className="font-medium">Characteristics:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {dance.characteristics.map((char, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{char}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10">
              <h3 className="text-xl font-semibold mb-4">Musical Instruments</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Music className="w-6 h-6" />
                  </div>
                  <h4 className="font-medium">Damphu</h4>
                  <p className="text-sm text-muted-foreground">Traditional drum</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Music className="w-6 h-6" />
                  </div>
                  <h4 className="font-medium">Chyabrung</h4>
                  <p className="text-sm text-muted-foreground">Cylindrical drum</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Music className="w-6 h-6" />
                  </div>
                  <h4 className="font-medium">Bamboo Flute</h4>
                  <p className="text-sm text-muted-foreground">Melodic wind instrument</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Music className="w-6 h-6" />
                  </div>
                  <h4 className="font-medium">Jhyamta</h4>
                  <p className="text-sm text-muted-foreground">Small cymbals</p>
                </div>
              </div>
            </Card>
          </div>
        );

      case "cuisine":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">Traditional Cuisine</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sikkimese cuisine reflects the region's geography and cultural diversity, combining Tibetan, 
                Nepali, and indigenous Lepcha flavors with locally sourced ingredients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {cuisineItems.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-40 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Key Ingredients:</h4>
                      <div className="flex flex-wrap gap-1">
                        {item.ingredients.map((ingredient, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{ingredient}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Culinary Philosophy</h3>
              <p className="text-muted-foreground mb-4">
                Sikkimese cooking emphasizes simplicity, nutrition, and harmony with seasonal availability. 
                Many dishes are naturally fermented or preserved, reflecting the mountain wisdom of food storage 
                and the Buddhist principle of minimizing waste.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <h4 className="font-medium mb-2">Seasonal Eating</h4>
                  <p className="text-sm text-muted-foreground">
                    Ingredients change with mountain seasons
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Fermentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Natural preservation methods
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Sharing Culture</h4>
                  <p className="text-sm text-muted-foreground">
                    Community meals strengthen bonds
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );

      case "attire":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">Traditional Attire</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Traditional clothing in Sikkim reflects the identity, status, and cultural heritage of its 
                diverse communities, with each garment telling a story of craftsmanship and tradition.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <img src="https://i.pinimg.com/originals/aa/11/15/aa1115b5ca983162a2228aa09fb82349.jpg" alt="Bakhu (Bhutia)" className="w-full h-64 object-cover rounded-t-lg" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Bakhu (Bhutia)</h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional robe worn by Bhutia men and women, often made of silk or wool with intricate patterns.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Silk/Wool fabric</Badge>
                    <Badge variant="outline">Intricate patterns</Badge>
                    <Badge variant="outline">Ceremonial wear</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <img src="https://media.gettyimages.com/id/644937771/photo/lokit-lepcha-w%C3%A4hrend-der-feldarbeit-im-dorf-singhik.jpg?s=612x612&w=0&k=20&c=mHut9X4esQm8KFh43ARLzF2X7sPV__9K5TeJ75slsB4=" alt="Dumvum (Lepcha)" className="w-full h-64 object-cover rounded-t-lg" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Dumvum (Lepcha)</h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional dress of Lepcha women, characterized by its distinctive style and earth-tone colors.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Earth tones</Badge>
                    <Badge variant="outline">Natural fibers</Badge>
                    <Badge variant="outline">Cultural identity</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <img src="https://img.drz.lazcdn.com/static/np/p/bb5848300afc43282cbd57c14dfbea8f.jpg_720x720q80.jpg" alt="Daura Suruwal (Nepali)" className="w-full h-64 object-cover rounded-t-lg" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Daura Suruwal (Nepali)</h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional Nepali attire consisting of a shirt and trousers, worn with a traditional cap and vest.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Cotton fabric</Badge>
                    <Badge variant="outline">Functional design</Badge>
                    <Badge variant="outline">Daily wear</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
              <h3 className="text-xl font-semibold mb-4">Accessories & Jewelry</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Traditional Accessories</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Khada (ceremonial scarves)</li>
                    <li>• Prayer beads and amulets</li>
                    <li>• Traditional caps and headgear</li>
                    <li>• Handwoven belts and sashes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Jewelry & Ornaments</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Silver and turquoise jewelry</li>
                    <li>• Coral and amber ornaments</li>
                    <li>• Traditional earrings and necklaces</li>
                    <li>• Ceremonial bracelets and rings</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        );

      case "art":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">Art & Handicrafts</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sikkimese art forms blend spiritual symbolism with natural beauty, creating works that serve 
                both aesthetic and sacred purposes in monastery and home settings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <img src="http://fulltimeexplorer.com/wp-content/uploads/2018/09/Thangka-Painting-in-Nepal-1-2.jpg" alt="Thangka Paintings" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Thangka Paintings</h3>
                  <p className="text-muted-foreground mb-4">
                    Sacred Buddhist scroll paintings that serve as meditation aids and teaching tools, 
                    featuring intricate details and spiritual symbolism.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Religious art</Badge>
                    <Badge variant="secondary">Meditation aids</Badge>
                    <Badge variant="secondary">Traditional techniques</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <img src="https://www.goldenfleecetrading.co.uk/wp-content/uploads/2021/01/goldenfleece-rugs3.jpg" alt="Handwoven Carpets" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Handwoven Carpets</h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional carpets featuring Tibetan motifs and natural dyes, 
                    created using techniques passed down through generations.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Natural dyes</Badge>
                    <Badge variant="secondary">Tibetan motifs</Badge>
                    <Badge variant="secondary">Handwoven</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <img src="https://musubikiln.com/cdn/shop/collections/3_11_-1_515593ab-3cbd-4997-b671-3e4f01ae6d90.jpg?v=1752639978&width=2000" alt="Bamboo Crafts" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Bamboo Crafts</h3>
                  <p className="text-muted-foreground mb-4">
                    Utilitarian and decorative items crafted from locally sourced bamboo, 
                    reflecting the sustainable practices of mountain communities.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Sustainable</Badge>
                    <Badge variant="secondary">Local bamboo</Badge>
                    <Badge variant="secondary">Functional art</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <img src="https://media.gettyimages.com/id/92865383/photo/wood-carving.jpg?s=612x612&w=0&k=20&c=T1TuZwHANGUrWU8oMyJegSmlZajcpL8ORiFK1JwDf2M=" alt="Wood Carving" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Wood Carving</h3>
                  <p className="text-muted-foreground mb-4">
                    Intricate woodwork found in monasteries and traditional homes, 
                    featuring religious symbols and natural motifs.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="secondary">Religious symbols</Badge>
                    <Badge variant="secondary">Natural motifs</Badge>
                    <Badge variant="secondary">Architectural elements</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "communities":
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold mb-4">Cultural Communities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sikkim's cultural richness stems from the harmonious coexistence of three main communities, 
                each contributing their unique traditions, languages, and wisdom to the region's identity.
              </p>
            </div>

            <div className="space-y-8">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Vintage_group_photograph_of_Bhutia_coolies_in_1875.jpg" alt="Bhutia Community" className="w-full h-64 object-cover" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-semibold mb-4">Bhutia Community</h3>
                    <p className="text-muted-foreground mb-4">
                      Originally from Tibet, the Bhutias brought Tibetan Buddhism and established many of 
                      Sikkim's monasteries. They are known for their deep spiritual practices and 
                      preservation of Tibetan culture.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Contributions:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Buddhist monasteries</li>
                          <li>• Tibetan medicine</li>
                          <li>• Traditional architecture</li>
                          <li>• Spiritual practices</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Cultural Elements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Tibetan language</li>
                          <li>• Cham dances</li>
                          <li>• Prayer flags</li>
                          <li>• Yak herding</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src="https://thumbs.dreamstime.com/b/lepcha-tea-garden-worker-woman-standing-collecting-bucket-her-back-little-boy-most-local-people-37032299.jpg" alt="Lepcha Community" className="w-full h-64 object-cover" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-semibold mb-4">Lepcha Community</h3>
                    <p className="text-muted-foreground mb-4">
                      The indigenous people of Sikkim, known as "Rong-pa" (children of the snowy peaks), 
                      the Lepchas have the deepest connection to the land and its natural rhythms.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Contributions:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Indigenous knowledge</li>
                          <li>• Traditional medicine</li>
                          <li>• Forest conservation</li>
                          <li>• Agricultural practices</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Cultural Elements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Lepcha script</li>
                          <li>• Nature worship</li>
                          <li>• Traditional farming</li>
                          <li>• Oral traditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src="https://media.istockphoto.com/id/458613881/photo/nepali-childdren.jpg?s=612x612&w=0&k=20&c=eUF0Y1hpACStM74x3G9BgMt4byIsrW_EzibZHzUAmA8=" alt="Nepali Community" className="w-full h-64 object-cover" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-semibold mb-4">Nepali Community</h3>
                    <p className="text-muted-foreground mb-4">
                      The largest community in Sikkim, bringing Hindu traditions, diverse languages, 
                      and rich cultural practices that have become integral to Sikkimese identity.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Contributions:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Hindu temples</li>
                          <li>• Agricultural expertise</li>
                          <li>• Trade and commerce</li>
                          <li>• Cultural festivals</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Cultural Elements:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Nepali language</li>
                          <li>• Folk dances</li>
                          <li>• Traditional music</li>
                          <li>• Terraced farming</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5">
              <h3 className="text-xl font-semibold mb-4">Cultural Harmony</h3>
              <p className="text-muted-foreground">
                What makes Sikkim truly special is how these three communities have learned to live together, 
                celebrating each other's festivals, sharing traditions, and creating a unique synthesis that 
                exemplifies unity in diversity. This harmonious coexistence is perhaps Sikkim's greatest 
                cultural achievement and its most valuable lesson for the world.
              </p>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-8">
              <Card className="p-4">
                <h3 className="font-semibold mb-4">Explore Culture</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveSection(section.id)}
                    >
                      <section.icon className="w-4 h-4 mr-2" />
                      {section.title}
                      {activeSection === section.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                    </Button>
                  ))}
                </nav>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturePage;
