import { LensOption } from "@/types/customization";
import polarGrey from "@/assets/lenses/polar-grey.avif";
import greenG15 from "@/assets/lenses/green-g15.avif";

export const LENS_BASE_PRICE = 0.00;

export const lensOptions: LensOption[] = [
  {
    id: 'polar-grey',
    name: 'Polar Grey Gradient',
    category: 'sun',
    image: polarGrey,
    additionalPrice: 0.00,
    description: 'Classic gradient grey polarized lenses'
  },
  {
    id: 'green-g15',
    name: 'Green G-15',
    category: 'sun',
    image: greenG15,
    additionalPrice: 0.00,
    description: 'Iconic Ray-Ban green lenses'
  }
];
