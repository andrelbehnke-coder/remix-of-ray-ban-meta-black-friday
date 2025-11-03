import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const Comparison = () => {
  const features = [
    { name: "Meta AI Integration", gen1: false, gen2: true },
    { name: "Camera Resolution", gen1: "5MP", gen2: "12MP Ultra-Wide" },
    { name: "Video Quality", gen1: "720p", gen2: "1080p" },
    { name: "Audio Quality", gen1: "Standard", gen2: "Enhanced Directional" },
    { name: "Battery Life", gen1: "4 hours", gen2: "6+ hours" },
    { name: "Voice Commands", gen1: "Basic", gen2: "Advanced AI" },
    { name: "Live Streaming", gen1: false, gen2: true },
    { name: "Real-time Translation", gen1: false, gen2: true },
    { name: "Image Stabilization", gen1: "Digital", gen2: "Optical + Digital" },
    { name: "Bluetooth Version", gen1: "5.0", gen2: "5.3" },
    { name: "Water Resistance", gen1: "IPX4", gen2: "IPX4" },
    { name: "Weight", gen1: "50g", gen2: "48g" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Gen 2 vs Gen 1: <span className="text-accent">The Evolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how the new generation pushes boundaries with revolutionary AI and hardware improvements
          </p>
        </div>

        <Card className="overflow-hidden max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-bold text-lg">Feature</th>
                  <th className="text-center p-6 font-bold text-lg text-muted-foreground">Gen 1</th>
                  <th className="text-center p-6 font-bold text-lg bg-accent/5">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-accent">Gen 2</span>
                      <span className="text-xs bg-accent text-white px-2 py-1 rounded-full">NEW</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="p-6 font-medium">{feature.name}</td>
                    <td className="p-6 text-center text-muted-foreground">
                      {typeof feature.gen1 === "boolean" ? (
                        feature.gen1 ? (
                          <Check className="w-5 h-5 mx-auto text-muted-foreground" />
                        ) : (
                          <X className="w-5 h-5 mx-auto text-muted-foreground/50" />
                        )
                      ) : (
                        feature.gen1
                      )}
                    </td>
                    <td className="p-6 text-center font-semibold bg-accent/5">
                      {typeof feature.gen2 === "boolean" ? (
                        feature.gen2 ? (
                          <Check className="w-6 h-6 mx-auto text-accent" />
                        ) : (
                          <X className="w-6 h-6 mx-auto text-muted-foreground/50" />
                        )
                      ) : (
                        <span className="text-accent">{feature.gen2}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-accent mb-2">66% OFF Black Friday Price</p>
          <p className="text-muted-foreground">Get the latest Gen 2 technology at an unbeatable price</p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
