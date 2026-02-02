import { Button } from "@/components/ui/button";
import { PriceBreakdown } from "@/types/customization";

interface PriceSummaryProps {
  priceBreakdown: PriceBreakdown;
  onConfirm: () => void;
  disabled: boolean;
}

const PriceSummary = ({ priceBreakdown, onConfirm, disabled }: PriceSummaryProps) => {
  return (
    <div className="sticky bottom-0 left-0 right-0 bg-background border-t border-border shadow-2xl">
      <div className="px-4 sm:px-6 py-3 sm:py-4 space-y-3">
        {/* Price Breakdown */}
        <div className="space-y-1.5 text-xs sm:text-sm">
          <div className="flex justify-between text-muted-foreground">
            <span>Frame + Lenses</span>
            <span className="font-medium">${priceBreakdown.framePrice.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-base sm:text-lg font-bold pt-2 border-t border-border">
            <span>Total</span>
            <span>${priceBreakdown.totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Button - Black */}
        {disabled ? (
          <Button
            disabled
            className="w-full h-11 sm:h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base uppercase tracking-wide shadow-md opacity-50 cursor-not-allowed"
          >
            Checkout
          </Button>
        ) : (
          <Button
            asChild
            className="w-full h-11 sm:h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base uppercase tracking-wide shadow-md transition-all"
          >
            <a href="https://soundsonichub.com/cart/51230318002466:1" target="_blank" rel="noopener noreferrer">
              Checkout
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

export default PriceSummary;
