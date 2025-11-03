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
    <section id="videos" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2 text-sm font-bold uppercase">
            See It In Action
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience The <span className="text-accent">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it—see how Ray-Ban Meta Gen 2 transforms everyday moments into extraordinary experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => {
            const Icon = video.icon;
            const isPlaying = playingVideo === video.url;
            
            return (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50"
              >
                <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-background overflow-hidden">
                  {!isPlaying ? (
                    <>
                      {/* Thumbnail Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-accent/10 to-black/80 flex items-center justify-center">
                        <Icon className={`w-24 h-24 ${video.color} opacity-20`} />
                      </div>
                      
                      {/* Video Preview (hidden but loads poster) */}
                      <video
                        className="w-full h-full object-cover opacity-0 absolute inset-0"
                        poster={`${video.url}#t=0.5`}
                        preload="metadata"
                      >
                        <source src={video.url} type="video/mp4" />
                      </video>
                      
                      {/* Play Button Overlay */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-black/20 transition-all z-10"
                        onClick={() => handleVideoClick(video.url)}
                      >
                        <div className="flex flex-col items-center gap-4">
                          <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                            <Play className="w-10 h-10 text-white ml-1" fill="white" />
                          </div>
                          <span className="text-white font-semibold text-lg px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">
                            Watch Demo
                          </span>
                        </div>
                      </div>
                      
                      <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground font-bold z-20">
                        Real Footage
                      </Badge>
                    </>
                  ) : (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      onClick={() => handleVideoClick(video.url)}
                    >
                      <source src={video.url} type="video/mp4" />
                    </video>
                  )}
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${video.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All videos captured with Ray-Ban Meta Wayfarer Gen 2
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;