import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
// Images should be placed in src/assets/ with these names or replaced as needed
import cultureFestivals from "@/assets/monastery-1.jpg";
import cultureDance from "@/assets/monastery-2.jpg";
import cultureCuisine from "@/assets/monastery-3.jpg";
import cultureAttire from "@/assets/hero-monastery.jpg";
import cultureArt from "@/assets/monastery-1.jpg";
const cultureArt = "";

export const CulturalSection = () => (
  <section id="cultural" className="py-16 bg-gradient-to-br from-background via-muted/40 to-card/80">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-primary mb-4">Sikkim Culture</h2>
      <p className="text-lg text-muted-foreground mb-8">
        Sikkim’s culture is a vibrant tapestry woven from its diverse ethnic groups, spiritual traditions, and harmonious way of life. Explore the festivals, dances, cuisine, attire, and art that make Sikkim unique.
      </p>
      <Tabs defaultValue="festivals" className="w-full">
        <TabsList className="mb-6 flex flex-wrap gap-2">
          <TabsTrigger value="festivals">Festivals</TabsTrigger>
          <TabsTrigger value="dance">Dance & Music</TabsTrigger>
          <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
          <TabsTrigger value="attire">Traditional Attire</TabsTrigger>
          <TabsTrigger value="art">Art & Handicrafts</TabsTrigger>
        </TabsList>
        <ScrollArea className="h-[400px]">
          <TabsContent value="festivals">
            <Card>
              <CardHeader>
                <img src={cultureFestivals} alt="Sikkim Festivals" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold mb-2">Festivals</h3>
                <Badge variant="secondary">Pang Lhabsol</Badge>
                <Badge variant="secondary">Losar</Badge>
                <Badge variant="secondary">Saga Dawa</Badge>
                <Badge variant="secondary">Bumchu</Badge>
              </CardHeader>
              <CardContent>
                <p>
                  Sikkim’s festivals blend Buddhist rituals, indigenous beliefs, and Nepali traditions. Pang Lhabsol honors Mount Khangchendzonga, while Losar and Saga Dawa celebrate Tibetan New Year and Buddha’s life. Bumchu, the water festival, predicts fortunes for the year.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="dance">
            <Card>
              <CardHeader>
                <img src={cultureDance} alt="Sikkim Dance" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold mb-2">Dance & Music</h3>
                <Badge variant="secondary">Cham</Badge>
                <Badge variant="secondary">Maruni</Badge>
                <Badge variant="secondary">Singhi Chham</Badge>
                <Badge variant="secondary">Tamang Selo</Badge>
              </CardHeader>
              <CardContent>
                <p>
                  Monastic Cham dances, folk performances like Maruni and Tamang Selo, and the iconic Snow Lion Dance reflect Sikkim’s spiritual and ethnic diversity. Traditional instruments include the damphu, chyabrung, and bamboo flutes.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="cuisine">
            <Card>
              <CardHeader>
                <img src={cultureCuisine} alt="Sikkim Cuisine" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold mb-2">Cuisine</h3>
                <Badge variant="secondary">Momos</Badge>
                <Badge variant="secondary">Thukpa</Badge>
                <Badge variant="secondary">Phagshapa</Badge>
                <Badge variant="secondary">Chhurpi</Badge>
              </CardHeader>
              <CardContent>
                <p>
                  Sikkimese cuisine is a fusion of Tibetan, Nepali, and Lepcha flavors. Momos, thukpa, and phagshapa are staples, while chhurpi (yak cheese) and fermented foods like gundruk add local character. Butter tea and chhang are popular beverages.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="attire">
            <Card>
              <CardHeader>
                <img src={cultureAttire} alt="Sikkim Attire" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold mb-2">Traditional Attire</h3>
                <Badge variant="secondary">Bakhu</Badge>
                <Badge variant="secondary">Dumvum</Badge>
                <Badge variant="secondary">Daura Suruwal</Badge>
              </CardHeader>
              <CardContent>
                <p>
                  Sikkim’s people wear vibrant traditional attire: Bhutias don the bakhu, Lepchas the dumvum, and Nepalis the daura suruwal. Attire is often paired with colorful scarves (khada) and jewelry, especially during festivals.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="art">
            <Card>
              <CardHeader>
                <img src={cultureArt} alt="Sikkim Art" className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-xl font-semibold mb-2">Art & Handicrafts</h3>
                <Badge variant="secondary">Thangka</Badge>
                <Badge variant="secondary">Carpets</Badge>
                <Badge variant="secondary">Woodwork</Badge>
                <Badge variant="secondary">Bamboo Crafts</Badge>
              </CardHeader>
              <CardContent>
                <p>
                  Sikkimese art is seen in monastery murals, thangka paintings, handwoven carpets, and bamboo crafts. These reflect spiritual themes, nature, and daily life, and are cherished by locals and visitors alike.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </ScrollArea>
      </Tabs>
    </div>
  </section>
);