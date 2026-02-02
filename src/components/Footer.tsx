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
            <span className="text-xs sm:text-sm font-medium">Autorisierter Händler</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">Sicherer Checkout</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm font-medium">Alle Karten akzeptiert</span>
          </div>
        </div>

        {/* Links - 2 columns on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="font-bold mb-3 text-xs sm:text-sm md:text-base">Kundenservice</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Versand</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Rücksendung</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bestellung verfolgen</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-xs sm:text-sm md:text-base">Produktinfo</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Funktionen</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Technische Daten</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Benutzerhandbuch</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Garantie</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-xs sm:text-sm md:text-base">Unternehmen</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partner</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-xs sm:text-sm md:text-base">Rechtliches</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs md:text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">AGB</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cookie-Richtlinie</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Barrierefreiheit</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] sm:text-xs md:text-sm text-primary-foreground/60 pt-4 sm:pt-6 border-t border-primary-foreground/20 space-y-1">
          <p>© 2026 Ray-Ban Meta. Alle Rechte vorbehalten.</p>
          <p className="text-primary-foreground/40">Ray-Ban und Meta sind eingetragene Marken.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
