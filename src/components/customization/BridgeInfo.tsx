import { Info } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface BridgeInfoProps {
  bridgeType: string;
}

const BridgeInfo = ({ bridgeType }: BridgeInfoProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide">
          Steg und Nasenpads
        </h3>
        <HoverCard>
          <HoverCardTrigger asChild>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Info className="w-4 h-4" />
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 text-sm">
            <div className="space-y-2">
              <p className="font-semibold">Hohe Stegpassform</p>
              <p className="text-muted-foreground text-xs">
                Entwickelt für Personen mit einem höheren Nasenrücken. Die Fassung sitzt höher im Gesicht, 
                bietet einen komfortableren Sitz und verhindert das Herunterrutschen der Brille.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
      
      <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-md">
        <span className="text-xs sm:text-sm font-medium">{bridgeType}</span>
      </div>
    </div>
  );
};

export default BridgeInfo;
