import { useState, useMemo } from 'react';
import { CustomizationState, PriceBreakdown, FrameOption, LensOption } from '@/types/customization';
import { FRAME_PRICE, frameOptions } from '@/data/frames';
import { LENS_BASE_PRICE, lensOptions } from '@/data/lenses';

export const useCustomization = () => {
  const [state, setState] = useState<CustomizationState>({
    selectedFrame: null,
    selectedLens: null,
    prescriptionType: 'non-prescription',
    bridgeType: 'High Bridge Fit'
  });

  const selectFrame = (frameId: string) => {
    const frame = frameOptions.find(f => f.id === frameId);
    if (frame) {
      setState(prev => ({ ...prev, selectedFrame: frame }));
    }
  };

  const selectLens = (lensId: string) => {
    const lens = lensOptions.find(l => l.id === lensId);
    if (lens) {
      setState(prev => ({ ...prev, selectedLens: lens }));
    }
  };

  const setPrescriptionType = (type: 'non-prescription' | 'prescription') => {
    setState(prev => ({ ...prev, prescriptionType: type }));
  };

  const priceBreakdown: PriceBreakdown = useMemo(() => {
    const lensAdditionalPrice = state.selectedLens?.additionalPrice || 0;
    return {
      framePrice: FRAME_PRICE,
      lensBasePrice: LENS_BASE_PRICE,
      lensAdditionalPrice,
      totalPrice: FRAME_PRICE + LENS_BASE_PRICE + lensAdditionalPrice
    };
  }, [state.selectedLens]);

  const resetCustomization = () => {
    setState({
      selectedFrame: null,
      selectedLens: null,
      prescriptionType: 'non-prescription',
      bridgeType: 'High Bridge Fit'
    });
  };

  const isComplete = () => {
    return state.selectedFrame !== null && state.selectedLens !== null;
  };

  return {
    state,
    selectFrame,
    selectLens,
    setPrescriptionType,
    priceBreakdown,
    resetCustomization,
    isComplete,
    frameOptions,
    lensOptions
  };
};
