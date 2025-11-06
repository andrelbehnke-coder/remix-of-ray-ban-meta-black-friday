import { useState } from "react";
import { Check, Sun, Sparkles, Shield } from "lucide-react";
import { LensOption } from "@/types/customization";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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
        <h3 className="text-sm font-semibold text-foreground uppercase">Lenses</h3>
        <span className="text-sm font-bold text-foreground">LENSES ${lensBasePrice.toFixed(2)}</span>
      </div>

      {/* Prescription Toggle */}
      <Tabs value={prescriptionType} onValueChange={(v) => onPrescriptionChange(v as any)}>
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="non-prescription">NON-PRESCRIPTION</TabsTrigger>
          <TabsTrigger value="prescription">PRESCRIPTION</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(categoryLabels).map(([key, label]) => {
          const Icon = categoryIcons[key as keyof typeof categoryIcons];
          return (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as any)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all text-sm font-medium",
                selectedCategory === key
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary/50"
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          );
        })}
      </div>

      {/* Lens Options Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredLenses.map((lens) => (
          <button
            key={lens.id}
            onClick={() => onLensChange(lens.id)}
            className={cn(
              "relative flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all",
              selectedLens?.id === lens.id
                ? "border-primary bg-primary/5 shadow-lg"
                : "border-border bg-card hover:border-primary/50 hover:shadow-md"
            )}
          >
            {/* Lens Image */}
            <div className="relative w-full aspect-[4/3] bg-muted rounded-md overflow-hidden">
              <img 
                src={lens.image} 
                alt={lens.name}
                className="w-full h-full object-cover"
              />
              {selectedLens?.id === lens.id && (
                <div className="absolute top-2 right-2 bg-primary rounded-full p-1">
                  <Check className="w-3 h-3 text-primary-foreground" />
                </div>
              )}
            </div>
            
            {/* Lens Info */}
            <div className="text-center space-y-1">
              <p className="text-sm font-semibold text-foreground">{lens.name}</p>
              <Badge variant={lens.additionalPrice > 0 ? "default" : "secondary"} className="text-xs">
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
