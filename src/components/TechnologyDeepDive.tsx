import { Brain, Camera, Volume2, Mic, Zap, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TechnologyDeepDive = () => {
  const aiFeatures = [
    {
      icon: Brain,
      title: "Meta AI Assistant",
      description: "Ask questions, get real-time information, and receive intelligent suggestions without touching your phone.",
      examples: ["Translate languages instantly", "Get directions hands-free", "Identify objects & landmarks"],
    },
    {
      icon: Camera,
      title: "12MP Ultra-Wide Camera",
      description: "Capture your perspective with improved image quality and stabilization for photos and 1080p video.",
      examples: ["First-person POV videos", "Hands-free photography", "Live streaming capability"],
    },
    {
      icon: Volume2,
      title: "Directional Speakers",
      description: "Premium audio that only you can hear, with deeper bass and clearer highs than Gen 1.",
      examples: ["Private calls in public", "Immersive music experience", "Clear voice commands"],
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Activate with Voice",
      description: 'Simply say "Hey Meta" to activate the AI assistant',
      icon: Mic,
    },
    {
      step: "2",
      title: "Process with AI",
      description: "Meta AI processes your command using advanced neural networks",
      icon: Brain,
    },
    {
      step: "3",
      title: "Instant Response",
      description: "Get audio feedback through built-in speakers or visual content on your phone",
      icon: Zap,
    },
    {
      step: "4",
      title: "Stay Connected",
      description: "Seamlessly syncs with your smartphone via Bluetooth 5.3",
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* AI-Powered Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered <span className="text-accent">Intelligence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of wearable technology with cutting-edge AI features built into every frame
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-muted/50 to-muted/20 rounded-3xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-4 relative z-10">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute top-10 left-1/2 w-full h-0.5 bg-accent/30 -z-0 hidden md:block"></div>
                    <div className="text-5xl font-bold text-accent/20 mb-2">{item.step}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyDeepDive;
