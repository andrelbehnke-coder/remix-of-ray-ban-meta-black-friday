import { useRef, useEffect } from "react";
import { Camera, Brain, Music, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const VideoFeatures = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observers = videoRefs.current.map((video) => {
      if (!video) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {
                // Silently handle autoplay errors
              });
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );
      
      observer.observe(video);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);
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
    <section className="py-6 sm:py-8 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">FEATURES</h2>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video, index) => {
                const Icon = video.icon;
                
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden">
                      <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        >
                          <source src={video.url} type="video/mp4" />
                        </video>
                      </div>
                      
                      <div className="p-4 flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base mb-1">{video.title}</h3>
                          <p className="text-sm text-muted-foreground">{video.description}</p>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          {/* Gradiente indicador de mais conteúdo (mobile) */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default VideoFeatures;
