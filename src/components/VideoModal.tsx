import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Brain, Music, Languages } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoModal = ({ open, onOpenChange }: VideoModalProps) => {
  const videos = [
    {
      id: "recording",
      title: "Video Recording",
      description: "See how easy it is to capture life from your perspective",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=4228162164108475&version=4228161677441857&vq=HD",
      icon: Camera,
    },
    {
      id: "ai",
      title: "AI Assistant",
      description: "Experience the power of Meta AI at your command",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=793313366406117&version=793313213072799&vq=HD",
      icon: Brain,
    },
    {
      id: "music",
      title: "Audio",
      description: "Immerse yourself in premium sound quality",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1429713411593591&version=1429713321593600&vq=HD",
      icon: Music,
    },
    {
      id: "translation",
      title: "Translation",
      description: "Break language barriers in real-time",
      url: "https://lookaside.fbsbx.com/elementpath/media/?media_id=1028787369151216&version=1028787179151235&vq=HD",
      icon: Languages,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            See Ray-Ban Meta Gen 2 In Action
          </DialogTitle>
          <DialogDescription>
            Watch real demonstrations of the breakthrough technology
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {videos.map((video) => {
              const Icon = video.icon;
              return (
                <TabsTrigger key={video.id} value={video.id} className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{video.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {videos.map((video) => (
            <TabsContent key={video.id} value={video.id} className="space-y-4">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  key={video.id}
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.description}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;