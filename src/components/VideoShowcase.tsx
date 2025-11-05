import { Camera, Brain, Music, Languages, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const VideoShowcase = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videos = [
    {
      title: "Hands-Free Video Recording",
      description: "Capture your adventures from your perspective in stunning 1080p",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=4228162164108475&version=4228161677441857&vq=HD",
      icon: Camera,
      color: "text-accent",
    },
    {
      title: "Meta AI Assistant",
      description: "Ask questions and get instant answers without touching your phone",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=793313366406117&version=793313213072799&vq=HD",
      icon: Brain,
      color: "text-blue-500",
    },
    {
      title: "Immersive Audio Experience",
      description: "Stream music with premium directional speakers only you can hear",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1429713411593591&version=1429713321593600&vq=HD",
      icon: Music,
      color: "text-purple-500",
    },
    {
      title: "Real-Time Translation",
      description: "Break language barriers instantly with AI-powered live translation",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1028787369151216&version=1028787179151235&vq=HD",
      icon: Languages,
      color: "text-green-500",
    },
  ];

  const handleVideoClick = (videoUrl: string) => {
    if (playingVideo === videoUrl) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(videoUrl);
    }
  };

  return (
    <section id="videos" className="py-20 md:py-32 bg-background border-y-2 border-accent/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-accent">Gravado com Ray-Ban Meta</span>
          </div>
          
          <h2 className="font-heading text-5xl md:text-7xl font-black mb-6 uppercase">
            VEJA EM AÇÃO
          </h2>
          <p className="text-xl text-muted-foreground font-condensed font-bold">
            Vídeos reais capturados diretamente dos óculos Ray-Ban Meta Gen 2
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((video, index) => {
            const Icon = video.icon;
            const isPlaying = playingVideo === video.url;
            
            return (
              <Card key={index} className="overflow-hidden bg-card border-2 border-accent/20 hover:border-accent transition-all duration-300 group hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                {/* Video Container */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  {!isPlaying ? (
                    <>
                      {/* Video Thumbnail */}
                      <video
                        className="w-full h-full object-cover"
                        poster={`${video.url}#t=2.0`}
                        preload="metadata"
                      >
                        <source src={video.url} type="video/mp4" />
                      </video>
                      
                      {/* Dark Overlay with Scanline Effect */}
                      <div className="absolute inset-0 bg-black/40" style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px)'
                      }} />
                      
                      {/* Play Button Overlay - GLOW */}
                      <div 
                        onClick={() => handleVideoClick(video.url)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-black/40 transition-all duration-300"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-accent blur-2xl opacity-50 animate-pulse-glow" />
                          <div className="relative w-24 h-24 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-all duration-300 border-4 border-accent/30">
                            <svg className="w-12 h-12 text-accent-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Real Footage Badge */}
                      <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg text-xs font-black uppercase shadow-[0_0_20px_rgba(255,0,0,0.4)] backdrop-blur-sm border border-accent">
                        🔴 REAL
                      </div>
                    </>
                  ) : (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      onEnded={() => setPlayingVideo(null)}
                    >
                      <source src={video.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6 space-y-3 bg-gradient-to-b from-card to-card/50">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full ${video.color} bg-opacity-10 flex items-center justify-center border border-current`}>
                      <Icon className={`w-6 h-6 ${video.color}`} />
                    </div>
                    <h3 className="font-heading text-2xl font-black uppercase">{video.title}</h3>
                  </div>
                  <p className="text-muted-foreground font-condensed font-bold">{video.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-accent/30 rounded-full">
            <span className="text-2xl">📹</span>
            <p className="font-condensed font-bold text-foreground">
              100% gravado com Ray-Ban Meta Wayfarer Gen 2
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;