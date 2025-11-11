import { Check } from "lucide-react";
import { LensOption } from "@/types/customization";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LensSelectorProps {
  selectedLens: LensOption | null;
  onLensChange: (lensId: string) => void;
  lensOptions: LensOption[];
}

const LensSelector = ({ 
  selectedLens, 
  onLensChange, 
  lensOptions
}: LensSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide">Lens Color</h3>
        <Badge variant="secondary" className="text-xs font-bold bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300">
          FREE
        </Badge>
      </div>

      {/* Lens Options Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {lensOptions.map((lens) => (
          <button
            key={lens.id}
            onClick={() => onLensChange(lens.id)}
            className={cn(
              "relative flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg border-2 transition-all group",
              selectedLens?.id === lens.id
                ? "border-primary bg-primary/5 shadow-lg ring-2 ring-primary/20"
                : "border-border bg-card hover:border-primary/50 hover:shadow-md"
            )}
          >
            {/* Lens Image */}
            <div className="relative w-full aspect-square bg-gradient-to-br from-muted/50 to-muted rounded-md overflow-hidden">
              <img 
                src={lens.image} 
                alt={lens.name}
                className="w-full h-full object-contain p-2"
              />
              {selectedLens?.id === lens.id && (
                <div className="absolute top-1 right-1 bg-primary rounded-full p-1 shadow-md">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
              )}
            </div>
            
            {/* Lens Info */}
            <div className="text-center space-y-1 w-full">
              <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">
                {lens.name}
              </p>
              <Badge 
                variant="secondary" 
                className="text-[10px] sm:text-xs font-bold bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300"
              >
                Included
              </Badge>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LensSelector;
