import { Card } from "@/components/ui/card";
import { Package, Battery, Cable, BookOpen, Briefcase } from "lucide-react";
import unboxingImage from "@/assets/product-unboxing.webp";

const WhatsInTheBox = () => {
  const items = [
    { icon: Package, label: "Ray-Ban | Meta Wayfarer" },
    { icon: Battery, label: "Tragbares Ladeetui" },
    { icon: Cable, label: "USB-C Kabel" },
    { icon: BookOpen, label: "Kurzanleitung & Garantie" },
    { icon: Briefcase, label: "Premium Lederetui" },
  ];

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h2 className="text-xl font-bold mb-6">LIEFERUMFANG</h2>
      
      <Card className="overflow-hidden">
        <div className="aspect-video sm:aspect-square bg-muted">
          <img
            src={unboxingImage}
            alt="Ray-Ban Meta Wayfarer Lieferumfang"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default WhatsInTheBox;
