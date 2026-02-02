import { Shield, Truck, Award, Users, Star, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

const TrustSection = () => {
  const stats = [
    { icon: Users, value: "50.000+", label: "Zufriedene Kunden" },
    { icon: Star, value: "4,8/5", label: "Durchschnittliche Bewertung" },
    { icon: Award, value: "15+", label: "Branchenauszeichnungen" },
    { icon: Shield, value: "2 Jahre", label: "Garantie" },
  ];

  const publications = [
    "TechCrunch",
    "Wired",
    "The Verge",
    "CNET",
    "Engadget",
    "Forbes",
  ];

  const badges = [
    { icon: Lock, text: "SSL-gesicherter Checkout" },
    { icon: Shield, text: "Geld-zurück-Garantie" },
    { icon: Truck, text: "Kostenloser Versand weltweit" },
    { icon: Award, text: "Autorisierter Händler" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Featured In */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            BEKANNT AUS
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="text-xl md:text-2xl font-bold text-foreground/70 hover:text-foreground transition-colors"
              >
                {pub}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-2 p-4 bg-background rounded-lg border border-border"
              >
                <Icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
