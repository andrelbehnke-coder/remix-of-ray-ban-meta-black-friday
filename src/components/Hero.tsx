import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-glasses.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8 animate-fade-in">
            <Badge className="bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 text-sm font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 mr-2" />
              Black Friday Exclusive
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                Ray-Ban Meta
                <span className="block text-accent">Wayfarer Gen 2</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                The future of smart eyewear. Capture, stream, and connect like never before with AI-powered glasses.
              </p>
            </div>

            {/* Price Section */}
            <div className="flex items-baseline gap-4 py-6">
              <div className="flex flex-col">
                <span className="text-muted-foreground line-through text-2xl">$379</span>
                <span className="text-6xl font-black text-accent">$129</span>
              </div>
              <div className="flex flex-col justify-end pb-2">
                <Badge variant="destructive" className="text-lg px-3 py-1 font-bold">
                  Save 66%
                </Badge>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Claim Your Deal Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold text-lg px-8 py-6 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span className="font-medium">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span className="font-medium">2-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span className="font-medium">30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-last order-first">
            <div className="relative animate-float">
              <img 
                src={heroImage} 
                alt="Ray-Ban Meta Wayfarer Gen 2 Smart Glasses in Matte Black" 
                className="w-full h-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
