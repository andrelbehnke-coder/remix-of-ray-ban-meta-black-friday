import { useState } from "react";
import { Check, Sun, Sparkles, Shield, Info } from "lucide-react";
import { LensOption } from "@/types/customization";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface LensSelectorProps {
  selectedLens: LensOption | null;
  onLensChange: (lensId: string) => void;
  lensOptions: LensOption[];
  prescriptionType: 'non-prescription' | 'prescription';
  onPrescriptionChange: (type: 'non-prescription' | 'prescription') => void;
  lensBasePrice: number;
}

const categoryIcons = {
  sun: Sun,
  transitions: Sparkles,
  'blue-light': Shield
};

const categoryLabels = {
  sun: 'Sun',
  transitions: 'Transitions®',
  'blue-light': 'Blue Light Ease'
};

const LensSelector = ({ 
  selectedLens, 
  onLensChange, 
  lensOptions,
  prescriptionType,
  onPrescriptionChange,
  lensBasePrice
}: LensSelectorProps) => {
  const [selectedCategory, setSelectedCategory] = useState<'sun' | 'transitions' | 'blue-light'>('sun');
  
  const filteredLenses = lensOptions.filter(lens => lens.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide">Lenses</h3>
        <span className="text-xs sm:text-sm font-bold">${lensBasePrice.toFixed(2)}</span>
      </div>

      {/* Prescription Toggle */}
      <div className="space-y-2">
        <Tabs value={prescriptionType} onValueChange={(v) => onPrescriptionChange(v as any)}>
          <TabsList className="w-full grid grid-cols-2 bg-muted/50">
            <TabsTrigger 
              value="non-prescription"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              NON-PRESCRIPTION
            </TabsTrigger>
            
            {/* Tab desabilitado com tooltip */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <TabsTrigger 
                    value="prescription" 
                    disabled
                    className="cursor-not-allowed opacity-50 relative"
                  >
                    PRESCRIPTION
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-2 text-[8px] px-1.5 py-0 h-4"
                    >
                      SOON
                    </Badge>
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Prescription lenses coming soon!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TabsList>
        </Tabs>
        
        {/* Alert informativo */}
        <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 py-2">
          <Info className="h-4 w-4 text-amber-600 dark:text-amber-500" />
          <AlertDescription className="text-xs text-amber-800 dark:text-amber-200">
            Prescription lenses are currently unavailable. Stay tuned!
          </AlertDescription>
        </Alert>
      </div>

      {/* Category Pills - scroll horizontal no mobile */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {Object.entries(categoryLabels).map(([key, label]) => {
          const Icon = categoryIcons[key as keyof typeof categoryIcons];
          return (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as any)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all text-xs sm:text-sm font-medium whitespace-nowrap",
                selectedCategory === key
                  ? "border-primary bg-primary text-primary-foreground shadow-md"
                  : "border-border bg-background text-foreground hover:border-primary/50"
              )}
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {label}
            </button>
          );
        })}
      </div>

      {/* Lens Options Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {filteredLenses.map((lens) => (
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
                variant={lens.additionalPrice > 0 ? "default" : "secondary"} 
                className="text-[10px] sm:text-xs font-bold"
              >
                {lens.additionalPrice > 0 ? `+$${lens.additionalPrice.toFixed(2)}` : 'Included'}
              </Badge>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LensSelector;
