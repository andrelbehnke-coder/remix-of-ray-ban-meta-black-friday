import { Card, CardContent } from "@/components/ui/card";
import { Camera, Mic, MessageSquare, Music, Smartphone, Zap } from "lucide-react";
import lifestyleImage from "@/assets/lifestyle-1.jpg";
import detailImage from "@/assets/detail-shot.jpg";

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "12MP Ultra-Wide Camera",
      description: "Capture photos and 1080p videos hands-free with stunning clarity"
    },
    {
      icon: Mic,
      title: "Five-Mic System",
      description: "Crystal-clear audio for calls and voice commands in any environment"
    },
    {
      icon: MessageSquare,
      title: "Meta AI Integration",
      description: "Get real-time assistance, translations, and information on-demand"
    },
    {
      icon: Music,
      title: "Open-Ear Speakers",
      description: "Immersive audio that lets you stay aware of your surroundings"
    },
    {
      icon: Smartphone,
      title: "Seamless Connectivity",
      description: "Instant pairing with iOS and Android via Bluetooth"
    },
    {
      icon: Zap,
      title: "All-Day Battery",
      description: "Up to 4 hours of continuous use with portable charging case"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            The Ultimate Smart Glasses Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            Iconic Ray-Ban style meets cutting-edge Meta technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl group">
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lifestyle Images */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-lg shadow-2xl group">
            <img 
              src={lifestyleImage} 
              alt="Person wearing Ray-Ban Meta smart glasses outdoors" 
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-background mb-2">Style Meets Innovation</h3>
                <p className="text-background/90">Classic Wayfarer design with smart technology</p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-2xl group">
            <img 
              src={detailImage} 
              alt="Close-up of Ray-Ban Meta smart glasses technology" 
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-background mb-2">Premium Craftsmanship</h3>
                <p className="text-background/90">Engineered for comfort and durability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
