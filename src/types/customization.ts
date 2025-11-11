export interface FrameOption {
  id: string;
  name: string;
  color: string;
  available: boolean;
}

export interface LensOption {
  id: string;
  name: string;
  category: 'sun';
  image: string;
  additionalPrice: number;
  description?: string;
}

export interface CustomizationState {
  selectedFrame: FrameOption | null;
  selectedLens: LensOption | null;
  bridgeType: string;
}

export interface PriceBreakdown {
  framePrice: number;
  lensBasePrice: number;
  lensAdditionalPrice: number;
  totalPrice: number;
}

export interface CartItem {
  id: string;
  customization: CustomizationState;
  price: number;
  quantity: number;
  addedAt: Date;
}
