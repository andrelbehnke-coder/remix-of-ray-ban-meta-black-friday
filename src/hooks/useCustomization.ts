import { useState, useMemo } from 'react';
import { CustomizationState, PriceBreakdown, FrameOption, LensOption } from '@/types/customization';
import { FRAME_PRICE, frameOptions } from '@/data/frames';
import { LENS_BASE_PRICE, lensOptions } from '@/data/lenses';

export const useCustomization = () => {
  const [state, setState] = useState<CustomizationState>({
    selectedFrame: frameOptions.find(f => f.id === 'matte-black') || null,
    selectedLens: lensOptions.find(l => l.id === 'polar-grey') || null,
    bridgeType: 'Hohe Stegpassform'
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

  const priceBreakdown: PriceBreakdown = useMemo(() => {
    return {
      framePrice: FRAME_PRICE,
      lensBasePrice: 0,
      lensAdditionalPrice: 0,
      totalPrice: FRAME_PRICE
    };
  }, []);

  const resetCustomization = () => {
    setState({
      selectedFrame: null,
      selectedLens: null,
      bridgeType: 'Hohe Stegpassform'
    });
  };

  const isComplete = () => {
    return state.selectedFrame !== null && state.selectedLens !== null;
  };

  return {
    state,
    selectFrame,
    selectLens,
    priceBreakdown,
    resetCustomization,
    isComplete,
    frameOptions,
    lensOptions
  };
};
