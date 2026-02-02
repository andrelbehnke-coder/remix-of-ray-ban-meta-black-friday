import { Trash2, Minus, Plus } from "lucide-react";
import { CartItem as CartItemType } from "@/types/customization";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem = ({ item, onRemove, onUpdateQuantity }: CartItemProps) => {
  return (
    <div className="flex gap-4 py-4 border-b border-border">
      {/* Product Info */}
      <div className="flex-1 space-y-2">
        <h4 className="font-semibold text-sm">RAY-BAN | META WAYFARER</h4>
        <div className="text-xs text-muted-foreground space-y-1">
          <p>Fassung: {item.customization.selectedFrame?.name}</p>
          <p>Glas: {item.customization.selectedLens?.name}</p>
          <p>Steg: {item.customization.bridgeType}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="px-3 text-sm font-medium">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-destructive hover:text-destructive"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="font-bold text-lg">€{(item.price * item.quantity).toFixed(2)}</p>
        {item.quantity > 1 && (
          <p className="text-xs text-muted-foreground">€{item.price.toFixed(2)} pro Stück</p>
        )}
      </div>
    </div>
  );
};

export default CartItem;
