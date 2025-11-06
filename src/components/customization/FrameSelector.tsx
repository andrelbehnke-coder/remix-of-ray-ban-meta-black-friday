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
        <h3 className="text-sm font-semibold text-foreground uppercase">Frame Color</h3>
        <span className="text-sm font-bold text-foreground">FRAME ${framePrice.toFixed(2)}</span>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {frameOptions.map((frame) => (
          <button
            key={frame.id}
            onClick={() => onFrameChange(frame.id)}
            disabled={!frame.available}
            className={cn(
              "flex flex-col items-center gap-2 transition-all",
              !frame.available && "opacity-50 cursor-not-allowed"
            )}
          >
            <div
              className={cn(
                "relative w-16 h-16 rounded-full border-4 transition-all",
                selectedFrame?.id === frame.id
                  ? "border-primary shadow-lg scale-110"
                  : "border-border hover:border-primary/50 hover:scale-105"
              )}
              style={{ backgroundColor: frame.color }}
            >
              {selectedFrame?.id === frame.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary rounded-full p-1">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>
              )}
            </div>
            <span className="text-xs text-center text-muted-foreground font-medium">
              {frame.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FrameSelector;
