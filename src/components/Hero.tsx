import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-glasses.jpg";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToVideos = () => {
    document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Radial Glow Effect */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />
      
      <VideoModal open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen} />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-[45%,55%] gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6 animate-slide-up">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-6 py-3 text-base font-black uppercase tracking-widest animate-pulse-glow border-2 border-accent/50">
              <Sparkles className="w-5 h-5 mr-2" />
              BLACK FRIDAY EXCLUSIVO
            </Badge>
            
            <div className="space-y-4">
              <h1 className="font-heading text-6xl md:text-8xl font-black tracking-wider uppercase leading-none">
                RAY-BAN
                <span className="block text-accent text-7xl md:text-9xl" style={{ textShadow: 'var(--shadow-text)' }}>META</span>
                <span className="block text-4xl md:text-5xl text-foreground/90">WAYFARER GEN 2</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-condensed font-bold">
                O futuro dos óculos inteligentes. Capture, transmita e conecte-se como nunca com IA integrada.
              </p>
            </div>

            {/* Price Section - DRAMATIC */}
            <div className="relative py-8">
              <div className="flex items-end gap-6">
                <div className="flex flex-col">
                  <span className="text-muted-foreground line-through text-3xl md:text-4xl font-bold">$379</span>
                  <span className="font-heading text-8xl md:text-9xl font-black text-accent leading-none" style={{ textShadow: 'var(--shadow-glow-strong)' }}>
                    $129
                  </span>
                </div>
                <div className="flex flex-col justify-end pb-4">
                  <div className="bg-accent text-accent-foreground px-6 py-3 rounded-lg rotate-[-5deg] shadow-[0_0_30px_rgba(255,0,0,0.5)]">
                    <span className="font-heading text-3xl md:text-4xl font-black">-66%</span>
                  </div>
                </div>
              </div>
              
              {/* Urgency Text */}
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-destructive/20 border border-destructive rounded-lg animate-pulse">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
                </span>
                <span className="text-destructive-foreground font-black text-sm uppercase">APENAS 23 UNIDADES RESTANTES</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="relative overflow-hidden font-heading text-2xl px-12 py-8 shadow-[0_0_40px_rgba(255,0,0,0.4)] hover:shadow-[0_0_60px_rgba(255,0,0,0.6)] transition-all duration-300 hover:scale-105 group"
                style={{ background: 'var(--gradient-cta)' }}
                onClick={() => document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-3">
                  GARANTIR 66% OFF
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-accent text-foreground hover:bg-accent hover:text-accent-foreground font-heading text-xl px-8 py-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]"
                onClick={() => setIsVideoModalOpen(true)}
              >
                VER DEMONSTRAÇÃO
              </Button>
            </div>

            {/* Trust Indicators - Bigger */}
            <div className="flex flex-wrap gap-6 pt-6 text-sm">
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span className="font-bold text-foreground">Frete Grátis</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span className="font-bold text-foreground">Garantia 2 Anos</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 px-4 py-2 rounded-lg border border-border">
                <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
                <span className="font-bold text-foreground">30 Dias Devolução</span>
              </div>
            </div>
          </div>

          {/* Right Image - DOMINANTE */}
          <div className="relative lg:order-last order-first">
            <div className="relative animate-float">
              {/* Product Shadow */}
              <div className="absolute inset-0 blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255,0,0,0.3) 0%, transparent 70%)' }} />
              
              <img 
                src={heroImage} 
                alt="Ray-Ban Meta Wayfarer Gen 2 Smart Glasses" 
                className="w-full h-auto relative z-10 scale-110"
                style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.9))' }}
              />
              
              {/* Spotlight Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none" 
                   style={{ background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.1) 0%, transparent 60%)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
