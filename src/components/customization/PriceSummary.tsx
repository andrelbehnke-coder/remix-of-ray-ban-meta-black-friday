import { Button } from "@/components/ui/button";
import { PriceBreakdown } from "@/types/customization";

interface PriceSummaryProps {
  priceBreakdown: PriceBreakdown;
  onConfirm: () => void;
  disabled: boolean;
}

const PriceSummary = ({ priceBreakdown, onConfirm, disabled }: PriceSummaryProps) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg">
      <div className="p-4 space-y-4">
        {/* Price Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Frame</span>
            <span className="font-medium">${priceBreakdown.framePrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Base Lenses</span>
            <span className="font-medium">${priceBreakdown.lensBasePrice.toFixed(2)}</span>
          </div>
          {priceBreakdown.lensAdditionalPrice > 0 && (
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Lens Upgrade</span>
              <span className="font-medium text-accent">+${priceBreakdown.lensAdditionalPrice.toFixed(2)}</span>
            </div>
          )}
          <div className="h-px bg-border my-2" />
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold text-foreground uppercase">
              Frame + Lenses Price
            </span>
            <span className="text-2xl font-bold text-accent">
              ${priceBreakdown.totalPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Confirm Button */}
        <Button
          onClick={onConfirm}
          disabled={disabled}
          size="lg"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base h-14"
        >
          CONFIRM AND ADD TO BAG
        </Button>
      </div>
    </div>
  );
};

export default PriceSummary;
