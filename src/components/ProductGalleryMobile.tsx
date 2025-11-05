import { useState } from "react";
import heroImage from "@/assets/hero-glasses.jpg";
import lifestyleImage from "@/assets/lifestyle-1.jpg";
import detailImage from "@/assets/detail-shot.jpg";

const ProductGalleryMobile = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: heroImage, alt: "Ray-Ban Meta Wayfarer - Front View" },
    { src: lifestyleImage, alt: "Ray-Ban Meta Wayfarer - Lifestyle" },
    { src: detailImage, alt: "Ray-Ban Meta Wayfarer - Detail" },
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
