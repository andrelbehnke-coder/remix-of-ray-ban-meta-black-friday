import { LensOption } from "@/types/customization";
import gradientLightGrey from "@/assets/lenses/gradient-light-grey.png";
import greenDark from "@/assets/lenses/green-dark.png";
import brownGradient from "@/assets/lenses/brown-gradient.png";
import greyTransitions from "@/assets/lenses/grey-transitions.png";
import blueLightClear from "@/assets/lenses/blue-light-clear.png";

export const LENS_BASE_PRICE = 50.00;

export const lensOptions: LensOption[] = [
  {
    id: 'gradient-light-grey',
    name: 'Gradient Light Grey',
    category: 'sun',
    image: gradientLightGrey,
    additionalPrice: 50.00,
    description: 'Classic gradient effect'
  },
  {
    id: 'green-dark',
    name: 'Green Dark',
    category: 'sun',
    image: greenDark,
    additionalPrice: 20.00,
    description: 'Classic Ray-Ban green'
  },
  {
    id: 'brown-gradient',
    name: 'Brown Gradient',
    category: 'sun',
    image: brownGradient,
    additionalPrice: 30.00,
    description: 'Warm brown tones'
  },
  {
    id: 'grey-transitions',
    name: 'Grey Transitions',
    category: 'transitions',
    image: greyTransitions,
    additionalPrice: 150.00,
    description: 'Adapts to light conditions'
  },
  {
    id: 'blue-light-clear',
    name: 'Clear Blue Light',
    category: 'blue-light',
    image: blueLightClear,
    additionalPrice: 80.00,
    description: 'Blocks harmful blue light'
  }
];
