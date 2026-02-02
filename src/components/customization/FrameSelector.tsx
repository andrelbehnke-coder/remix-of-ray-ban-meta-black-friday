import { Check } from "lucide-react";
import { FrameOption } from "@/types/customization";
import { cn } from "@/lib/utils";

interface FrameSelectorProps {
  selectedFrame: FrameOption | null;
  onFrameChange: (frameId: string) => void;
  frameOptions: FrameOption[];
  framePrice: number;
}

const FrameSelector = ({ selectedFrame, onFrameChange, frameOptions, framePrice }: FrameSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide">Fassung</h3>
        <span className="text-xs sm:text-sm font-bold">€{framePrice.toFixed(2)}</span>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4">
        {frameOptions.map((frame) => (
          <button
            key={frame.id}
            onClick={() => onFrameChange(frame.id)}
            disabled={!frame.available}
            className={cn(
              "flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all",
              selectedFrame?.id === frame.id
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50",
              !frame.available && "opacity-50 cursor-not-allowed"
            )}
          >
            <div
              className={cn(
                "w-12 h-12 rounded-full border-2 transition-all",
                selectedFrame?.id === frame.id 
                  ? "border-primary scale-110" 
                  : "border-border"
              )}
              style={{ backgroundColor: frame.color }}
            />
            <span className="text-[10px] sm:text-xs font-medium text-center leading-tight">
              {frame.name}
            </span>
            {selectedFrame?.id === frame.id && (
              <Check className="w-3 h-3 text-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FrameSelector;
