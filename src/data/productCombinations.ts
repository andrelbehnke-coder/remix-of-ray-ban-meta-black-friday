import matteBlackGrey from "@/assets/combinations/matte-black-grey.avif";
import matteBlackGreen from "@/assets/combinations/matte-black-green.avif";
import shinyBlackGrey from "@/assets/combinations/shiny-black-grey.avif";
import shinyBlackGreen from "@/assets/combinations/shiny-black-green.avif";
import shinyBlueGrey from "@/assets/combinations/shiny-blue-grey.avif";
import shinyBlueGreen from "@/assets/combinations/shiny-blue-green.avif";

export interface ProductCombination {
  frameId: string;
  lensId: string;
  image: string;
}

export const productCombinations: ProductCombination[] = [
  { frameId: 'matte-black', lensId: 'polar-grey', image: matteBlackGrey },
  { frameId: 'matte-black', lensId: 'green-g15', image: matteBlackGreen },
  { frameId: 'shiny-black', lensId: 'polar-grey', image: shinyBlackGrey },
  { frameId: 'shiny-black', lensId: 'green-g15', image: shinyBlackGreen },
  { frameId: 'shiny-blue', lensId: 'polar-grey', image: shinyBlueGrey },
  { frameId: 'shiny-blue', lensId: 'green-g15', image: shinyBlueGreen }
];

// Helper function to get the correct product image
export const getProductImage = (frameId: string | null, lensId: string | null): string | null => {
  if (!frameId || !lensId) return null;
  
  const combination = productCombinations.find(
    c => c.frameId === frameId && c.lensId === lensId
  );
  
  return combination?.image || null;
};
