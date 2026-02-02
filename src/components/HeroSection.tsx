import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomizationDrawer from "./customization/CustomizationDrawer";
import { useCart } from "@/contexts/CartContext";
import introVideo from "@/assets/intro-video.mp4";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { addToCart } = useCart();

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleScrollToDiscover = () => {
    const targetSection = document.getElementById('product-gallery');
    targetSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleAddToBag = (customization: any, price: number) => {
    addToCart(customization, price);
  };

  return (
    <>
      <section className="relative min-h-0 sm:min-h-screen aspect-[9/16] sm:aspect-auto overflow-hidden bg-[#E8E4DD]">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={introVideo} type="video/mp4" />
        </video>


        {/* Floating Header */}
        <header className="absolute top-0 left-0 right-0 z-50 pt-4 pt-safe px-4 sm:px-6">
          <div className="flex items-center justify-end">
            <Button
              onClick={() => setIsCustomizing(true)}
              className="bg-[#CC0000] hover:bg-[#AA0000] text-white font-bold px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base transition-all hover:scale-105 shadow-lg"
            >
              BUY NOW
            </Button>
          </div>
        </header>

        {/* Logos - Elemento único posicionado diretamente na section para iOS */}
        <p className="absolute top-24 sm:top-32 left-0 right-0 text-center blend-text text-base sm:text-xl md:text-2xl px-4">
          <strong>Ray-Ban</strong> | ∞ Meta
        </p>

        {/* Main Title - Filho direto da section para iOS */}
        <h1 className="absolute top-36 sm:top-48 left-0 right-0 blend-text text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight tracking-tight px-4">
          MEET THE NEW AI GLASSES
        </h1>

        {/* SCROLL TO DISCOVER - Posicionado diretamente na section */}
        <button 
          onClick={handleScrollToDiscover}
          className="absolute bottom-28 sm:bottom-32 left-0 right-0 text-center blend-text text-[10px] sm:text-sm font-semibold tracking-wider uppercase hover:opacity-80 transition-opacity"
          aria-label="Rolar para descobrir mais"
        >
          SCROLL TO DISCOVER
        </button>
        
        {/* Play/Pause Button - Posicionado diretamente na section */}
        <button 
          onClick={togglePlayPause}
          className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 blend-text rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-110 transition-all border-2 border-white"
          aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
          )}
        </button>
        
        {/* Bottom text - Posicionado diretamente na section */}
        <p className="absolute bottom-2 sm:bottom-4 left-0 right-0 text-center blend-text text-[10px] sm:text-xs max-w-xs sm:max-w-md mx-auto leading-relaxed opacity-70 px-4 pb-safe">
          Get assistance from a sighted volunteer with Be My Eyes®.
        </p>
      </section>

      {/* Customization Drawer */}
      <CustomizationDrawer
        open={isCustomizing}
        onOpenChange={setIsCustomizing}
        onAddToBag={handleAddToBag}
      />
    </>
  );
};

export default HeroSection;
