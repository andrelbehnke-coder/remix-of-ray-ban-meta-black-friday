import { useState } from "react";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useCustomization } from "@/hooks/useCustomization";
import FrameSelector from "./FrameSelector";
import LensSelector from "./LensSelector";
import BridgeInfo from "./BridgeInfo";
import PriceSummary from "./PriceSummary";
import ProductPreview from "./ProductPreview";
import BrandingSection from "./BrandingSection";

import { toast } from "sonner";

interface CustomizationDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToBag: (customization: any, price: number) => void;
}

const CustomizationDrawer = ({ open, onOpenChange, onAddToBag }: CustomizationDrawerProps) => {
  const {
    state,
    selectFrame,
    selectLens,
    priceBreakdown,
    resetCustomization,
    isComplete,
    frameOptions,
    lensOptions
  } = useCustomization();

  const handleConfirm = () => {
    if (!state.selectedFrame) {
      toast.error("Bitte wählen Sie eine Fassungsfarbe");
      return;
    }
    if (!state.selectedLens) {
      toast.error("Bitte wählen Sie eine Glasfarbe");
      return;
    }

    onAddToBag(state, priceBreakdown.totalPrice);
    toast.success("Zum Warenkorb hinzugefügt!");
    resetCustomization();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-2xl p-0 flex flex-col overflow-hidden"
      >
        {/* Header */}
        <SheetHeader className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border bg-background sticky top-0 z-10">
          <div className="flex items-center justify-between gap-4">
            <SheetTitle className="text-sm sm:text-base font-bold uppercase tracking-tight">
              Wählen Sie Ihre Fassungs- & Glasfarbe
            </SheetTitle>
            <div className="text-xs sm:text-sm font-bold whitespace-nowrap">
              €{priceBreakdown.totalPrice.toFixed(2)}
            </div>
          </div>
          <SheetDescription className="sr-only">
            Personalisieren Sie Ihre Ray-Ban Meta Brille durch Auswahl von Fassungs- und Glasfarben
          </SheetDescription>
        </SheetHeader>


        {/* Product Preview */}
        <div className="px-4 sm:px-6 pt-4 sm:pt-6">
          <ProductPreview 
            selectedFrame={state.selectedFrame}
            selectedLens={state.selectedLens}
            className="mb-4 sm:mb-6"
          />
          
          {/* Branding Section */}
          <BrandingSection />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-6 sm:space-y-8 pb-32">
          {/* Frame Selection */}
          <FrameSelector
            selectedFrame={state.selectedFrame}
            onFrameChange={selectFrame}
            frameOptions={frameOptions}
            framePrice={priceBreakdown.framePrice}
          />

          {/* Bridge Info */}
          <BridgeInfo bridgeType={state.bridgeType} />

          {/* Lens Selection */}
          <LensSelector
            selectedLens={state.selectedLens}
            onLensChange={selectLens}
            lensOptions={lensOptions}
          />
        </div>

        {/* Price Summary - Fixed at bottom */}
        <PriceSummary
          priceBreakdown={priceBreakdown}
          onConfirm={handleConfirm}
          disabled={!isComplete()}
        />
      </SheetContent>
    </Sheet>
  );
};

export default CustomizationDrawer;
