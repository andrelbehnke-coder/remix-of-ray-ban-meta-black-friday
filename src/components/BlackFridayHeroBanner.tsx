import { Flame, Sparkles, ArrowRight } from "lucide-react";

const BlackFridayHeroBanner = () => {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF0000]/20 via-transparent to-[#FF0000]/20 animate-pulse" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      {/* Top border accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FF0000] to-transparent" />
      
      <div className="relative container mx-auto px-4 py-8 sm:py-12 md:py-16">
        {/* Main content - Centralizado */}
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
          
          {/* Icon + Title Row */}
          <div className="flex items-center gap-3 sm:gap-4 animate-fade-in">
            <div className="animate-pulse">
              <Flame className="w-8 h-8 sm:w-12 sm:h-12 text-[#FF0000] drop-shadow-[0_0_20px_rgba(255,0,0,0.9)]" />
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
              BLACK FRIDAY
            </h2>
            
            <div className="animate-pulse" style={{ animationDelay: '300ms' }}>
              <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-[#FF0000] drop-shadow-[0_0_20px_rgba(255,0,0,0.9)]" />
            </div>
          </div>
          
          {/* Discount Badge */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-[#FF0000] blur-xl opacity-50" />
            <div className="relative bg-gradient-to-r from-[#FF0000] to-[#CC0000] text-white px-8 py-3 sm:px-12 sm:py-4 rounded-full shadow-2xl shadow-[#FF0000]/50">
              <span className="text-2xl sm:text-4xl md:text-5xl font-black tracking-wider">
                UP TO 30% OFF
              </span>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg font-medium max-w-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
            Limited time offer on Ray-Ban Meta Smart Glasses
          </p>
          
          {/* CTA */}
          <button 
            className="group flex items-center gap-2 text-white hover:text-[#FF0000] transition-all duration-300 text-sm sm:text-base font-bold mt-2 animate-fade-in"
            style={{ animationDelay: '400ms' }}
            onClick={() => {
              const customizeButtons = document.querySelectorAll('[data-customize-trigger]');
              if (customizeButtons.length > 0) {
                (customizeButtons[0] as HTMLElement).click();
              }
            }}
          >
            <span>SHOP NOW</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Bottom border accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FF0000] to-transparent" />
      
      {/* Animated corners - decorative */}
      <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 border-t-2 border-l-2 border-[#FF0000]/30 animate-pulse" />
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 border-t-2 border-r-2 border-[#FF0000]/30 animate-pulse" style={{ animationDelay: '500ms' }} />
      <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 border-b-2 border-l-2 border-[#FF0000]/30 animate-pulse" style={{ animationDelay: '1000ms' }} />
      <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 border-b-2 border-r-2 border-[#FF0000]/30 animate-pulse" style={{ animationDelay: '1500ms' }} />
    </div>
  );
};

export default BlackFridayHeroBanner;
