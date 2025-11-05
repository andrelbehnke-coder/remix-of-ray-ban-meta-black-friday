import { useState } from "react";
import { Camera, Brain, Music, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";

const VideoFeatures = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const videos = [
    {
      title: "Hands-Free Video",
      description: "Capture 1080p video from your perspective",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=4228162164108475&version=4228161677441857&vq=HD",
      icon: Camera,
    },
    {
      title: "Meta AI Assistant",
      description: "Ask questions and get instant answers",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=793313366406117&version=793313213072799&vq=HD",
      icon: Brain,
    },
    {
      title: "Immersive Audio",
      description: "Premium directional speakers",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1429713411593591&version=1429713321593600&vq=HD",
      icon: Music,
    },
    {
      title: "Live Translation",
      description: "Break language barriers instantly",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1028787369151216&version=1028787179151235&vq=HD",
      icon: Languages,
    },
  ];

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">FEATURES</h2>
        
        <div className="space-y-4">
          {videos.map((video, index) => {
            const Icon = video.icon;
            const isPlaying = playingVideo === video.url;
            
            return (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-video bg-muted">
                  {!isPlaying ? (
                    <>
                      <video
                        className="w-full h-full object-cover"
                        poster={`${video.url}#t=2.0`}
                        preload="metadata"
                      >
                        <source src={video.url} type="video/mp4" />
                      </video>
                      <div
                        onClick={() => setPlayingVideo(video.url)}
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer hover:bg-black/40 transition-colors"
                      >
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
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
                    </video>
                  )}
                </div>
                
                <div className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoFeatures;
