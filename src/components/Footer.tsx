import rayBanLogo from "@/assets/rayban-logo-red.png";
import { Shield, Lock, CreditCard } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4">
        
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-primary-foreground/20">
          <img 
            src={rayBanLogo} 
            alt="Ray-Ban" 
            className="h-10 sm:h-12 md:h-14 w-auto"
          />
        </div>

        {/* Trust Badges - Vertical no mobile */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-primary-foreground/20">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">Authorized Dealer</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">Secure Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">All Cards Accepted</span>
          </div>
        </div>

        {/* Links - 2 colunas no mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="font-bold mb-3 text-xs sm:text-sm md:text-base">Customer Service</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-xs sm:text-sm md:text-base">Product Info</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Specifications</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">User Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Warranty</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-xs sm:text-sm md:text-base">Company</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-xs sm:text-sm md:text-base">Legal</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] sm:text-xs md:text-sm text-primary-foreground/60 pt-4 sm:pt-6 border-t border-primary-foreground/20 space-y-1">
          <p>© 2026 Ray-Ban Meta. All rights reserved.</p>
          <p className="text-primary-foreground/40">Ray-Ban and Meta are registered trademarks.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
