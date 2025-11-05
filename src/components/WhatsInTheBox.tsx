import { Card } from "@/components/ui/card";
import { Package, Battery, Cable, BookOpen, Briefcase } from "lucide-react";
import unboxingImage from "@/assets/product-unboxing.webp";

const WhatsInTheBox = () => {
  const items = [
    { icon: Package, label: "Ray-Ban | Meta Wayfarer" },
    { icon: Battery, label: "Case de Carregamento Portátil" },
    { icon: Cable, label: "Cabo USB-C" },
    { icon: BookOpen, label: "Guia Rápido & Garantia" },
    { icon: Briefcase, label: "Case de Couro Premium" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-6">O QUE VEM NA CAIXA</h2>
      
      <Card className="overflow-hidden">
        <div className="aspect-square bg-muted">
          <img
            src={unboxingImage}
            alt="Conteúdo da Embalagem Ray-Ban Meta Wayfarer"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        
        <div className="p-4 space-y-3">
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
