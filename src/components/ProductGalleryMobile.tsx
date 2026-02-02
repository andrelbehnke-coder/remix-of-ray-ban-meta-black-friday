import { useState, useRef } from "react";
import productHero from "@/assets/product-hero.webp";
import productFront from "@/assets/product-front.webp";
import productLifestyle from "@/assets/product-lifestyle.webp";
import productSide from "@/assets/product-side.webp";
import productAngle from "@/assets/product-angle.webp";
import productBack from "@/assets/product-back.webp";
import productFolded from "@/assets/product-folded.webp";
import productUnboxing from "@/assets/product-unboxing.webp";

const ProductGalleryMobile = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const images = [
    { src: productHero, alt: "Ray-Ban Meta Wayfarer - Matte Black" },
    { src: productFront, alt: "Ray-Ban Meta Wayfarer - Front View" },
    { src: productLifestyle, alt: "Ray-Ban Meta Wayfarer - Lifestyle Shot" },
    { src: productSide, alt: "Ray-Ban Meta Wayfarer - Side View" },
    { src: productAngle, alt: "Ray-Ban Meta Wayfarer - Detailed Angle" },
    { src: productBack, alt: "Ray-Ban Meta Wayfarer - Back View" },
    { src: productFolded, alt: "Ray-Ban Meta Wayfarer - Folded" },
    { src: productUnboxing, alt: "Ray-Ban Meta Wayfarer - Full Package" },
  ];

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - next image
      setCurrentImage((prev) => (prev + 1) % images.length);
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right - previous image
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div id="product-gallery" className="bg-muted">
      {/* Main Image */}
      <div 
        className="relative aspect-square overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="w-full h-full object-contain transition-transform duration-300"
          loading={currentImage === 0 ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={currentImage === 0 ? "high" : "auto"}
        />
        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium">
          {currentImage + 1} / {images.length}
        </div>
      </div>

      {/* Image Dots */}
      <div className="flex justify-center gap-2 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className="w-10 h-10 flex items-center justify-center"
            aria-label={`View image ${index + 1}`}
          >
            <div className={`w-2 h-2 rounded-full transition-all ${
              currentImage === index
                ? "bg-primary w-6"
                : "bg-border hover:bg-muted-foreground"
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGalleryMobile;
