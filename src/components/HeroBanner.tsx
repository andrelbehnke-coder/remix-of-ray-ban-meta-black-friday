const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/20 py-16 sm:py-24">
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/20 animate-float"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="container relative mx-auto px-4 text-center">
        <div className="inline-block animate-fade-in">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs sm:text-sm font-semibold text-primary-foreground backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            POWERED BY META AI
          </div>
        </div>
        
        <h1 className="animate-slide-up text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
          THE FUTURE IS NOW
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-accent animate-pulse" />
          <p className="text-lg sm:text-xl md:text-3xl font-light text-primary-foreground/90 tracking-wide">
            AI-POWERED VISION
          </p>
          <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-accent animate-pulse" />
        </div>

        <p className="text-sm sm:text-base text-primary-foreground/70 max-w-2xl mx-auto animate-fade-in">
          Experience the world through intelligent lenses. See, ask, and capture — all hands-free with Meta AI.
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroBanner;
