import { useState, useEffect } from "react";
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
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayImage, setDisplayImage] = useState<string | null>(productImage);

  useEffect(() => {
    if (productImage !== displayImage) {
      // Start fade out
      setIsTransitioning(true);
      
      // After fade out, change image and fade in
      const timer = setTimeout(() => {
        setDisplayImage(productImage);
        setIsTransitioning(false);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [productImage, displayImage]);

  return (
    <div className={cn(
      "relative w-full bg-gradient-to-br from-muted/30 to-muted/50 rounded-lg overflow-hidden",
      className
    )}>
      {/* Container with aspect ratio 16:9 */}
      <div className="relative w-full aspect-video">
        {displayImage ? (
          <img
            key={displayImage}
            src={displayImage}
            alt={`${selectedFrame?.name} with ${selectedLens?.name}`}
            className={cn(
              "absolute inset-0 w-full h-full object-contain p-4 sm:p-6 transition-all duration-300 ease-in-out",
              isTransitioning 
                ? "opacity-0 scale-95" 
                : "opacity-100 scale-100"
            )}
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
        <div className={cn(
          "absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2 text-xs transition-opacity duration-300",
          isTransitioning ? "opacity-0" : "opacity-100"
        )}>
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
