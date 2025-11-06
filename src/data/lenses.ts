import { LensOption } from "@/types/customization";

export const LENS_BASE_PRICE = 50.00;

export const lensOptions: LensOption[] = [
  {
    id: 'gradient-light-grey',
    name: 'Gradient Light Grey',
    category: 'sun',
    image: '/placeholder.svg',
    additionalPrice: 50.00,
    description: 'Classic gradient effect'
  },
  {
    id: 'green-dark',
    name: 'Green Dark',
    category: 'sun',
    image: '/placeholder.svg',
    additionalPrice: 20.00,
    description: 'Classic Ray-Ban green'
  },
  {
    id: 'brown-gradient',
    name: 'Brown Gradient',
    category: 'sun',
    image: '/placeholder.svg',
    additionalPrice: 30.00,
    description: 'Warm brown tones'
  },
  {
    id: 'grey-transitions',
    name: 'Grey Transitions',
    category: 'transitions',
    image: '/placeholder.svg',
    additionalPrice: 150.00,
    description: 'Adapts to light conditions'
  },
  {
    id: 'blue-light-clear',
    name: 'Clear Blue Light',
    category: 'blue-light',
    image: '/placeholder.svg',
    additionalPrice: 80.00,
    description: 'Blocks harmful blue light'
  }
];
