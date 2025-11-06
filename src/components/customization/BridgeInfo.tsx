import { Info } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface BridgeInfoProps {
  bridgeType: string;
}

const BridgeInfo = ({ bridgeType }: BridgeInfoProps) => {
  return (
    <div className="flex items-center justify-between py-3 px-4 bg-muted/50 rounded-lg">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-foreground">
          BRIDGE AND NOSEPADS: <span className="font-semibold">{bridgeType}</span>
        </span>
        <Popover>
          <PopoverTrigger asChild>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Info className="w-4 h-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">High Bridge Fit</h4>
              <p className="text-sm text-muted-foreground">
                Designed for those with a higher nose bridge. The frame rests higher on the face, 
                providing a more comfortable fit and preventing the frames from sliding down.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default BridgeInfo;
