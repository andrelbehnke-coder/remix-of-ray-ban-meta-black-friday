import rayBanLogo from "@/assets/ray-ban-logo.png";
import { Sparkles, Shield } from "lucide-react";

const BrandingSection = () => {
  return (
    <div className="flex items-center justify-between py-3 px-4 bg-muted/30 rounded-lg border border-border/50 mb-4 sm:mb-6">
      {/* Left: Logos */}
      <div className="flex items-center gap-3">
        <img 
          src={rayBanLogo} 
          alt="Ray-Ban" 
          className="h-6 w-auto opacity-80"
        />
        <div className="w-px h-6 bg-border" />
        <div className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2.5 py-1 rounded-full shadow-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-xs font-bold">Meta AI</span>
        </div>
      </div>
      
      {/* Right: Trust badge */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Shield className="w-4 h-4" />
        <span className="font-medium hidden sm:inline">Original Ray-Ban</span>
      </div>
    </div>
  );
};

export default BrandingSection;
