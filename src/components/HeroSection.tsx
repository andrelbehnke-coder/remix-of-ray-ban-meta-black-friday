import { useState, useRef } from "react";
import { Menu, Heart, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartButton from "./cart/CartButton";
import CartDrawer from "./cart/CartDrawer";
import CustomizationDrawer from "./customization/CustomizationDrawer";
import { useCart } from "@/contexts/CartContext";
import { useVideoLuminosity } from "@/hooks/useVideoLuminosity";
import introVideo from "@/assets/intro-video.mp4";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { totalItems, addToCart } = useCart();

  // Análise de luminosidade para mudar cor do texto dinamicamente
  const isLightBackground = useVideoLuminosity(videoRef, [
    { x: 0.2, y: 0.3, width: 0.6, height: 0.4 }, // Área dos logos e título
    { x: 0.3, y: 0.85, width: 0.4, height: 0.1 }, // Área do CTA bottom
  ]);

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
      <section className="relative min-h-screen overflow-hidden bg-[#E8E4DD]">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        >
          <source src={introVideo} type="video/mp4" />
        </video>

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/5" />

        {/* Floating Header */}
        <header className="absolute top-0 left-0 right-0 z-50 pt-4 pt-safe px-4 sm:px-6">
          <div className="flex items-center justify-between backdrop-blur-sm bg-white/10 rounded-full px-3 py-2 sm:px-4 sm:py-3">
            <button 
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>
            
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-black" />
              </button>
              <CartButton 
                itemCount={totalItems}
                onClick={() => setIsCartOpen(true)}
              />
              <Button
                onClick={() => setIsCustomizing(true)}
                className="bg-[#E86C3B] hover:bg-[#E86C3B]/90 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all hover:scale-105"
              >
                BUY NOW
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
          {/* Logos */}
          <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 opacity-0 animate-[heroSlideUp_1s_ease-out_0.3s_both]">
            <span className={`text-base sm:text-xl md:text-2xl font-bold hero-text-contrast transition-colors duration-500 ease-in-out ${isLightBackground ? 'text-black' : 'text-white'}`}>Ray-Ban</span>
            <span className={`text-base sm:text-xl md:text-2xl hero-text-contrast transition-colors duration-500 ease-in-out ${isLightBackground ? 'text-gray-400' : 'text-gray-300'}`}>|</span>
            <span className={`text-base sm:text-xl md:text-2xl font-medium hero-text-contrast transition-colors duration-500 ease-in-out ${isLightBackground ? 'text-black' : 'text-white'}`}>∞ Meta</span>
          </div>

          {/* Main Title */}
          <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight tracking-tight max-w-4xl hero-text-contrast transition-colors duration-500 ease-in-out opacity-0 animate-[heroSlideUp_1.2s_ease-out_0.5s_both] ${isLightBackground ? 'text-black' : 'text-white'}`}>
            MEET THE <span className={`transition-colors duration-500 ease-in-out ${isLightBackground ? 'text-gray-400' : 'text-gray-300'}`}>NEW</span> AI GLASSES
          </h1>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-40 flex flex-col items-center gap-3 px-4 pb-safe opacity-0 animate-[heroSlideUp_1.4s_ease-out_0.7s_both]">
          <button 
            onClick={handleScrollToDiscover}
            className={`text-xs sm:text-sm font-semibold tracking-wider uppercase hero-text-contrast transition-colors duration-500 ease-in-out hover:opacity-70 animate-[heroBounce_2s_ease-in-out_infinite] ${isLightBackground ? 'text-black' : 'text-white'}`}
            aria-label="Rolar para descobrir mais"
          >
            SCROLL TO DISCOVER
          </button>
          
          <button 
            onClick={togglePlayPause}
            className={`rounded-full border-2 w-10 h-10 sm:w-12 sm:h-12 bg-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white/50 hover:scale-110 transition-all duration-500 ${isLightBackground ? 'border-black' : 'border-white'}`}
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {isPlaying ? (
              <Pause className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500 ${isLightBackground ? 'text-black' : 'text-white'}`} />
            ) : (
              <Play className={`w-4 h-4 sm:w-5 sm:h-5 ml-0.5 transition-colors duration-500 ${isLightBackground ? 'text-black' : 'text-white'}`} />
            )}
          </button>
          
          <p className={`text-[10px] sm:text-xs text-center max-w-xs sm:max-w-md leading-relaxed hero-text-contrast transition-colors duration-500 ease-in-out ${isLightBackground ? 'text-black/70' : 'text-white/70'}`}>
            Get assistance from a sighted volunteer with Be My Eyes®.
          </p>
        </div>
      </section>

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />

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
