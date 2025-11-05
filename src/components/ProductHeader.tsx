import { Heart, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProductHeader = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-border pt-safe">
      {/* Ray-Ban Red Banner */}
      <div className="bg-accent text-accent-foreground text-center py-2 px-4 text-[10px] sm:text-xs font-semibold leading-tight">
        RAY-BAN META (GEN 2) - GIFT A CAMERA, EARBUDS, AND GLASSES IN ONE
      </div>
      
      {/* Product Title Bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase">AI GLASSES</span>
            </div>
            <h1 className="text-lg font-bold truncate">RAY-BAN | META WAYFARER</h1>
            <Badge variant="destructive" className="text-xs mt-1">NEW</Badge>
          </div>
          <button className="p-2 hover:bg-muted rounded-full transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
