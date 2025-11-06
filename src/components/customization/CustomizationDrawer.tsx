import { useState } from "react";
import { X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCustomization } from "@/hooks/useCustomization";
import FrameSelector from "./FrameSelector";
import LensSelector from "./LensSelector";
import BridgeInfo from "./BridgeInfo";
import PriceSummary from "./PriceSummary";
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
    setPrescriptionType,
    priceBreakdown,
    resetCustomization,
    isComplete,
    frameOptions,
    lensOptions
  } = useCustomization();

  const handleConfirm = () => {
    if (!state.selectedFrame) {
      toast.error("Please select a frame color");
      return;
    }
    if (!state.selectedLens) {
      toast.error("Please select lens color");
      return;
    }

    onAddToBag(state, priceBreakdown.totalPrice);
    toast.success("Added to bag!");
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
        <SheetHeader className="px-6 py-4 border-b border-border">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-bold uppercase">
              Choose Your Frame & Lens Color
            </SheetTitle>
          </div>
        </SheetHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 pb-32">
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
            prescriptionType={state.prescriptionType}
            onPrescriptionChange={setPrescriptionType}
            lensBasePrice={priceBreakdown.lensBasePrice}
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
