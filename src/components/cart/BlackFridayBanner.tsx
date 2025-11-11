import { Flame, Sparkles } from "lucide-react";

const BlackFridayBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-black via-gray-900 to-black border-b border-[#E94E1B]/20 overflow-hidden">
      {/* Animated glow effect */}
      <div className="absolute inset-0 bg-[#E94E1B]/5 blur-xl animate-pulse" />
      
      <div className="relative px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        {/* Main content */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <div className="animate-pulse shrink-0">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#E94E1B] drop-shadow-[0_0_8px_rgba(233,78,27,0.6)]" />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 min-w-0">
            <span className="text-white font-bold text-xs sm:text-sm tracking-wider whitespace-nowrap">
              BLACK FRIDAY
            </span>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <span className="text-[#E94E1B] font-semibold text-[10px] sm:text-sm whitespace-nowrap">
              UP TO 30% OFF
            </span>
          </div>
        </div>
        
        {/* Badge */}
        <div className="bg-[#E94E1B] text-white text-[9px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap shrink-0 shadow-lg shadow-[#E94E1B]/30">
          <span className="hidden sm:inline">Limited Time</span>
          <span className="sm:hidden">Limited</span>
        </div>
      </div>
      
      {/* Bottom accent line with gradient */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#E94E1B] to-transparent opacity-80" />
    </div>
  );
};

export default BlackFridayBanner;
