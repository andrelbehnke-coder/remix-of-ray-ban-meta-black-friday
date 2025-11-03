import { Button } from "@/components/ui/button";
import { ShoppingCart, Shield, Truck, Clock } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const CTASection = () => {
  const handleClaimDeal = () => {
    // Replace with actual checkout URL
    window.open("https://www.meta.com/smart-glasses/", "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-accent/20 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-6 animate-pulse">
            <Clock className="w-4 h-4" />
            <span className="font-semibold text-sm">BLACK FRIDAY EXCLUSIVE - LIMITED TIME</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Don't Miss This <span className="text-accent">Historic Deal</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            Save <span className="text-accent font-bold text-3xl">$250</span> on Ray-Ban Meta Gen 2
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl md:text-4xl font-bold line-through text-white/50">$379</span>
            <span className="text-5xl md:text-7xl font-bold text-accent">$129</span>
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <CountdownTimer />
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleClaimDeal}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white text-xl px-12 py-8 h-auto rounded-xl shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 mb-8"
          >
            <ShoppingCart className="w-6 h-6 mr-3" />
            Claim Your Black Friday Deal Now
          </Button>

          {/* Trust Elements */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">2-Year Warranty</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-5 h-5 text-accent" />
              <span className="text-sm">Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">30-Day Returns</span>
            </div>
          </div>

          {/* Stock Warning */}
          <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-accent/30">
            <p className="text-sm">
              ⚠️ <span className="font-semibold">High Demand Alert:</span> Only a limited quantity available at this price. 
              Over 2,000 units sold in the last 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
