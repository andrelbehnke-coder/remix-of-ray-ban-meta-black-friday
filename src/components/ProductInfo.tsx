import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ChevronRight, Info } from "lucide-react";
import colorVariant from "@/assets/colors/color-variant.webp";
import CustomizationDrawer from "./customization/CustomizationDrawer";
import { useCart } from "@/contexts/CartContext";

const ProductInfo = () => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const { addToCart } = useCart();

  const handleAddToBag = (customization: any, price: number) => {
    addToCart(customization, price);
    setIsCustomizing(false);
  };

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Specifications */}
      <Card className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs text-muted-foreground uppercase block mb-1">
              Bridge & Nosepads
            </span>
            <span className="font-medium">High Bridge Fit</span>
          </div>
          <Info className="w-4 h-4 text-muted-foreground" />
        </div>

        <div className="border-t pt-3">
          <span className="text-xs text-muted-foreground uppercase block mb-1">Frame</span>
          <span className="font-medium">Matte Black</span>
        </div>

        <div className="border-t pt-3">
          <span className="text-xs text-muted-foreground uppercase block mb-1">Lenses</span>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium">Graphite</span>
              <Badge variant="outline" className="text-xs">
                <Check className="w-3 h-3 mr-1" />
                Polarized
              </Badge>
            </div>
            <button className="text-xs font-semibold flex items-center gap-1 hover:underline">
              TRY LENSES
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </Card>

      {/* CTA Button */}
      <Button 
        onClick={() => setIsCustomizing(true)}
        size="lg" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 text-sm sm:text-base"
      >
        CHOOSE YOUR FRAME & LENS COLORS
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Prescription available
      </p>

      {/* Customization Drawer */}
      <CustomizationDrawer
        open={isCustomizing}
        onOpenChange={setIsCustomizing}
        onAddToBag={handleAddToBag}
      />

      {/* Size */}
      <Card className="p-4">
        <button className="w-full flex items-center justify-between group">
          <div className="text-left">
            <span className="text-xs text-muted-foreground uppercase block mb-1">Size</span>
            <span className="font-semibold">50-22</span>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </button>
      </Card>

      {/* Features */}
      <Card className="p-4">
        <button className="w-full flex items-center justify-between group">
          <div className="text-left">
            <span className="text-xs text-muted-foreground uppercase block mb-1">
              Bridge & Nosepads
            </span>
            <span className="font-semibold">HIGH BRIDGE FIT</span>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </button>
      </Card>

      {/* Product Details */}
      <div className="pt-6 space-y-4">
        <h2 className="text-xl font-bold">PRODUCT DETAILS</h2>
        
        <div className="space-y-3 text-sm">
          <p className="text-muted-foreground leading-relaxed">
            Experience the future of smart eyewear with Ray-Ban Meta Wayfarer Gen 2. 
            Featuring advanced AI integration, ultra-wide 12MP camera, and immersive audio.
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <span className="text-xs text-muted-foreground block mb-1">Camera</span>
              <span className="font-medium">12MP Ultra-Wide</span>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block mb-1">Battery</span>
              <span className="font-medium">Up to 4 hours</span>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block mb-1">Audio</span>
              <span className="font-medium">5-Mic System</span>
            </div>
            <div>
              <span className="text-xs text-muted-foreground block mb-1">AI</span>
              <span className="font-medium">Meta AI Built-in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
