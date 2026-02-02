import { useState } from "react";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CartButton from "./cart/CartButton";
import CartDrawer from "./cart/CartDrawer";
import { useCart } from "@/contexts/CartContext";

const ProductHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-border pt-safe">
      {/* Ray-Ban Red Banner */}
      <div className="bg-accent text-accent-foreground text-center py-2 px-4 text-[10px] sm:text-xs font-semibold leading-tight">
        RAY-BAN META (GEN 2) - SCHENKEN SIE KAMERA, KOPFHÖRER UND BRILLE IN EINEM
      </div>
      
      {/* Product Title Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase">KI-BRILLE</span>
            </div>
            <h1 className="text-lg font-bold truncate">RAY-BAN | META WAYFARER</h1>
            <Badge variant="destructive" className="text-xs mt-1">NEU</Badge>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <CartButton 
              itemCount={totalItems}
              onClick={() => setIsCartOpen(true)}
            />
          </div>
        </div>
      </div>
      
      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </div>
  );
};

export default ProductHeader;
