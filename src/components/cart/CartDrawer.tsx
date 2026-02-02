import { ShoppingBag, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import CartItem from "./CartItem";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CartDrawer = ({ open, onOpenChange }: CartDrawerProps) => {
  const { items, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-lg p-0 flex flex-col">
        {/* Header */}
        <SheetHeader className="px-6 py-4 border-b border-border relative">
          <SheetTitle className="text-lg font-bold uppercase flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Warenkorb ({items.length})
          </SheetTitle>
          <SheetDescription className="sr-only">
            Ihr Warenkorb mit ausgewählten Ray-Ban Meta Brillen
          </SheetDescription>
          
          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-muted transition-colors group"
            aria-label="Warenkorb schließen"
          >
            <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        </SheetHeader>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Ihr Warenkorb ist leer</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fügen Sie Ray-Ban Meta Brillen hinzu, um loszulegen
            </p>
            <Button onClick={() => onOpenChange(false)}>
              Weiter einkaufen
            </Button>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-6">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </div>

            {/* Summary */}
            <div className="border-t border-border p-6 space-y-4 bg-muted/50">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Zwischensumme</span>
                  <span className="font-medium">€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Versand</span>
                  <span className="font-medium text-accent">GRATIS</span>
                </div>
                <div className="h-px bg-border my-2" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold uppercase">Gesamt</span>
                  <span className="text-2xl font-bold text-accent">
                    €{totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  asChild
                >
                  <a href="https://soundsonichub.com/cart/51230318002466:1" target="_blank" rel="noopener noreferrer">
                    Zur Kasse
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => onOpenChange(false)}
                >
                  Weiter einkaufen
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
