const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[600px]">
      {/* Background Video - Add your Meta AI Assistant video file to src/assets/ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover animate-fade-in"
        poster="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&w=1920&q=80"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99790-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/75 backdrop-blur-[2px]" />

      {/* Animated Particles - Reduced opacity over video */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-accent/40 animate-float"
            style={{
              width: `${Math.random() * 40 + 15}px`,
              height: `${Math.random() * 40 + 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 text-center flex flex-col justify-center min-h-[500px] sm:min-h-[600px] z-10">
        <div className="inline-block animate-fade-in">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/20 px-4 py-2 text-xs sm:text-sm font-semibold text-white backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            POWERED BY META AI
          </div>
        </div>
        
        <h1 className="animate-slide-up text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
          THE FUTURE IS NOW
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent to-accent animate-pulse" />
          <p className="text-lg sm:text-xl md:text-3xl font-light text-white/95 tracking-wide drop-shadow-lg">
            AI-POWERED VISION
          </p>
          <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent to-accent animate-pulse" />
        </div>

        <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto animate-fade-in drop-shadow-md">
          Experience the world through intelligent lenses. See, ask, and capture — all hands-free with Meta AI.
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </div>
  );
};

export default HeroBanner;
