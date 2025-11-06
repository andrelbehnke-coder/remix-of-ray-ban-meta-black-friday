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
          className="absolute inset-0 w-full h-full object-cover"
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

        {/* Main Content */}
        <div className="relative flex flex-col items-center justify-start h-full px-4 pt-24 sm:pt-32 pb-20 sm:pb-0 sm:min-h-screen z-10">
          {/* Logos */}
          <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8">
            <span className="blend-text text-base sm:text-xl md:text-2xl font-bold">
              Ray-Ban
            </span>
            <span className="blend-text text-base sm:text-xl md:text-2xl">
              |
            </span>
            <span className="blend-text text-base sm:text-xl md:text-2xl font-medium">
              ∞ Meta
            </span>
          </div>

          {/* Main Title */}
          <h1 className="blend-text text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight tracking-tight max-w-4xl">
            MEET THE <span className="blend-text">NEW</span> AI GLASSES
          </h1>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-4 sm:bottom-12 left-0 right-0 flex flex-col items-center gap-2 sm:gap-3 px-4 pb-safe z-10">
          <button 
            onClick={handleScrollToDiscover}
            className="blend-text text-[10px] sm:text-sm font-semibold tracking-wider uppercase hover:opacity-80 transition-opacity animate-[heroBounce_2s_ease-in-out_infinite]"
            aria-label="Rolar para descobrir mais"
          >
            SCROLL TO DISCOVER
          </button>
          
          <button 
            onClick={togglePlayPause}
            className="blend-text rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-110 transition-all border-2 border-white"
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {isPlaying ? (
              <Pause className="blend-text w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Play className="blend-text w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
            )}
          </button>
          
          <p className="blend-text text-[10px] sm:text-xs text-center max-w-xs sm:max-w-md leading-relaxed opacity-70">
            Get assistance from a sighted volunteer with Be My Eyes®.
          </p>
        </div>
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
