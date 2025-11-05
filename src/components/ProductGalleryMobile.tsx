import { useState } from "react";
import productFront from "@/assets/product-front.webp";
import productLifestyle from "@/assets/product-lifestyle.webp";
import productSide from "@/assets/product-side.webp";
import productAngle from "@/assets/product-angle.webp";
import productBack from "@/assets/product-back.webp";
import productFolded from "@/assets/product-folded.webp";
import productUnboxing from "@/assets/product-unboxing.webp";

const ProductGalleryMobile = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: productFront, alt: "Ray-Ban Meta Wayfarer - Vista Frontal" },
    { src: productLifestyle, alt: "Ray-Ban Meta Wayfarer - Em Uso" },
    { src: productSide, alt: "Ray-Ban Meta Wayfarer - Vista Lateral" },
    { src: productAngle, alt: "Ray-Ban Meta Wayfarer - Ângulo Detalhado" },
    { src: productBack, alt: "Ray-Ban Meta Wayfarer - Vista Traseira" },
    { src: productFolded, alt: "Ray-Ban Meta Wayfarer - Dobrado" },
    { src: productUnboxing, alt: "Ray-Ban Meta Wayfarer - Embalagem Completa" },
  ];

  return (
    <div className="bg-muted">
      {/* Main Image */}
      <div className="relative aspect-square">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Image Dots */}
      <div className="flex justify-center gap-2 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentImage === index
                ? "bg-primary w-6"
                : "bg-border hover:bg-muted-foreground"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGalleryMobile;
