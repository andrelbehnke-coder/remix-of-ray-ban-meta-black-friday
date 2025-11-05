import { useState } from "react";
import heroImage from "@/assets/hero-glasses.jpg";
import lifestyleImage from "@/assets/lifestyle-1.jpg";
import detailImage from "@/assets/detail-shot.jpg";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    { src: heroImage, alt: "Ray-Ban Meta Wayfarer - Front View", label: "Front" },
    { src: lifestyleImage, alt: "Ray-Ban Meta Wayfarer - Lifestyle Shot", label: "Lifestyle" },
    { src: detailImage, alt: "Ray-Ban Meta Wayfarer - Detail Shot", label: "Detail" },
    { src: heroImage, alt: "Ray-Ban Meta Wayfarer - Side View", label: "Side" },
  ];

  return (
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative mb-6 overflow-hidden rounded-lg bg-card border-2 border-accent/30 shadow-[0_0_30px_rgba(255,0,0,0.2)]">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="w-full h-[500px] object-contain p-8 transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  selectedImage === index
                    ? "border-accent shadow-[0_0_20px_rgba(255,0,0,0.4)] scale-105"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    {image.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* 360° Badge */}
          <div className="flex justify-center mt-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <svg className="w-5 h-5 text-accent animate-spin" style={{ animationDuration: "3s" }} fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-sm font-bold text-foreground">View All Angles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
