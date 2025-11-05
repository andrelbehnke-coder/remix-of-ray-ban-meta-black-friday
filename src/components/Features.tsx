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
    <section className="py-20 md:py-32 bg-card border-y-2 border-accent/20 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: 'linear-gradient(hsl(0 100% 50% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 100% 50% / 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-5xl md:text-7xl font-black mb-6 uppercase">
            ESPECIFICAÇÕES
            <span className="block text-accent">TÉCNICAS</span>
          </h2>
          <p className="text-xl text-muted-foreground font-condensed font-bold">
            Tecnologia de ponta da Ray-Ban e Meta em design icônico
          </p>
        </div>

        {/* Features Grid - Tech Specs Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background border-2 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.2)] group">
              <CardContent className="p-6 space-y-4">
                <div className="relative w-16 h-16 rounded-lg bg-accent/5 flex items-center justify-center group-hover:bg-accent/10 transition-all duration-300">
                  <div className="absolute inset-0 bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <feature.icon className="w-8 h-8 text-accent relative z-10" />
                </div>
                <h3 className="font-heading text-2xl font-black uppercase">{feature.title}</h3>
                <p className="text-muted-foreground font-condensed font-bold text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lifestyle Images - Dramatic */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-lg border-2 border-accent/30 shadow-[0_0_30px_rgba(255,0,0,0.2)] group">
            <img 
              src={lifestyleImage} 
              alt="Person wearing Ray-Ban Meta smart glasses" 
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
              <div className="p-8 w-full">
                <h3 className="font-heading text-3xl font-black text-white mb-2 uppercase">ESTILO + INOVAÇÃO</h3>
                <p className="text-white/90 font-condensed font-bold">Design Wayfarer clássico com tecnologia inteligente</p>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="relative overflow-hidden rounded-lg border-2 border-accent/30 shadow-[0_0_30px_rgba(255,0,0,0.2)] group">
            <img 
              src={detailImage} 
              alt="Close-up of Ray-Ban Meta technology" 
              className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
              <div className="p-8 w-full">
                <h3 className="font-heading text-3xl font-black text-white mb-2 uppercase">QUALIDADE PREMIUM</h3>
                <p className="text-white/90 font-condensed font-bold">Engenharia de precisão para conforto e durabilidade</p>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
