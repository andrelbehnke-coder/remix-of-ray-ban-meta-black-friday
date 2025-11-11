import { FrameOption, LensOption } from "@/types/customization";
import { getProductImage } from "@/data/productCombinations";
import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";

interface ProductPreviewProps {
  selectedFrame: FrameOption | null;
  selectedLens: LensOption | null;
  className?: string;
}

const ProductPreview = ({ selectedFrame, selectedLens, className }: ProductPreviewProps) => {
  const productImage = getProductImage(
    selectedFrame?.id || null, 
    selectedLens?.id || null
  );

  return (
    <div className={cn(
      "relative w-full bg-gradient-to-br from-muted/30 to-muted/50 rounded-lg overflow-hidden",
      className
    )}>
      {/* Container with aspect ratio 16:9 */}
      <div className="relative w-full aspect-video">
        {productImage ? (
          <img
            src={productImage}
            alt={`${selectedFrame?.name} with ${selectedLens?.name}`}
            className="absolute inset-0 w-full h-full object-contain p-4 sm:p-6 transition-opacity duration-300 animate-in fade-in-0 zoom-in-95"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-4">
            <Eye className="w-16 h-16 sm:w-20 sm:h-20 mb-3 opacity-30" />
            <p className="text-xs sm:text-sm text-center font-medium">
              Select frame and lens to see preview
            </p>
          </div>
        )}
      </div>

      {/* Info Badges */}
      {selectedFrame && selectedLens && (
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2 text-xs">
          <div className="bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm border border-border/50">
            <span className="font-semibold text-foreground">{selectedFrame.name}</span>
          </div>
          <div className="bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-sm border border-border/50">
            <span className="font-semibold text-foreground">{selectedLens.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
