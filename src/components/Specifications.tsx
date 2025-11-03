import { Card, CardContent } from "@/components/ui/card";

const Specifications = () => {
  const specs = [
    { label: "Camera", value: "12MP Ultra-Wide (1080p video @ 60fps)" },
    { label: "Audio", value: "5 microphones, Directional speakers" },
    { label: "Connectivity", value: "Bluetooth 5.3, Wi-Fi 6" },
    { label: "Battery Life", value: "Up to 4 hours usage, 32GB storage" },
    { label: "Water Resistance", value: "IPX4 rated (splash-resistant)" },
    { label: "Weight", value: "50g (ultra-lightweight)" },
    { label: "Compatibility", value: "iOS 14+, Android 10+" },
    { label: "Frame Material", value: "Bio-based nylon, acetate temples" },
    { label: "Lens Options", value: "Polarized, Transitions available" },
    { label: "Charging", value: "USB-C fast charging (75min full charge)" }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Cutting-edge technology in a classic design
            </p>
          </div>

          {/* Specs Grid */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0"
                  >
                    <span className="font-bold text-foreground min-w-[140px]">
                      {spec.label}
                    </span>
                    <span className="text-muted-foreground text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What's in the Box */}
          <div className="mt-12">
            <h3 className="text-2xl font-black mb-6 text-center">What's in the Box</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                "Ray-Ban Meta Wayfarer",
                "Portable Charging Case",
                "USB-C Cable",
                "Cleaning Cloth"
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:border-accent transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-black text-accent">{index + 1}</span>
                    </div>
                    <p className="font-medium text-sm">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
