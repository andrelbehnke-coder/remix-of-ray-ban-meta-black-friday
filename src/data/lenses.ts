import { LensOption } from "@/types/customization";
import polarGrey from "@/assets/lenses/polar-grey.avif";
import greenG15 from "@/assets/lenses/green-g15.avif";

export const LENS_BASE_PRICE = 0.00;

export const lensOptions: LensOption[] = [
  {
    id: 'polar-grey',
    name: 'Polar Grau Verlauf',
    category: 'sun',
    image: polarGrey,
    additionalPrice: 0.00,
    description: 'Klassische polarisierte Verlaufsgläser in Grau'
  },
  {
    id: 'green-g15',
    name: 'Grün G-15',
    category: 'sun',
    image: greenG15,
    additionalPrice: 0.00,
    description: 'Ikonische Ray-Ban Grüngläser'
  }
];
