import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Lock, CreditCard, Shield, TruckIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OrderSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.cardNumber) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Order Processing",
      description: "Your order is being processed. You'll receive a confirmation email shortly.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="order-section" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-destructive text-destructive-foreground mb-4 px-4 py-2 text-sm font-bold">
              🔥 LIMITED TIME OFFER
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              Claim Your Black Friday Deal
            </h2>
            <p className="text-xl text-muted-foreground">
              Secure checkout • 256-bit SSL encryption
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-3">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl font-black">Shipping & Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg">Personal Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg">Shipping Address</h3>
                      <div>
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="123 Main Street"
                          required
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="New York"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="NY"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP Code *</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="10001"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-accent" />
                        <h3 className="font-bold text-lg">Payment Information</h3>
                        <Lock className="w-4 h-4 text-muted-foreground ml-auto" />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardExpiry">Expiry Date *</Label>
                          <Input
                            id="cardExpiry"
                            name="cardExpiry"
                            value={formData.cardExpiry}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            maxLength={5}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardCvc">CVC *</Label>
                          <Input
                            id="cardCvc"
                            name="cardCvc"
                            value={formData.cardCvc}
                            onChange={handleInputChange}
                            placeholder="123"
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <Lock className="w-5 h-5 mr-2" />
                      Complete Secure Purchase - $129
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By completing this purchase, you agree to our Terms of Service and Privacy Policy
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="sticky top-4 space-y-6">
                <Card className="border-2 border-accent">
                  <CardHeader>
                    <CardTitle className="text-xl font-black">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Ray-Ban Meta Wayfarer Gen 2</span>
                      <span className="font-bold">$129.00</span>
                    </div>
                    <div className="flex justify-between text-accent font-bold">
                      <span>Black Friday Discount</span>
                      <span>-$250.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span className="text-accent font-bold">FREE</span>
                    </div>
                    <div className="border-t pt-4 flex justify-between text-xl font-black">
                      <span>Total</span>
                      <span>$129.00</span>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg">
                      <p className="text-sm font-bold text-center">
                        🎉 You save $250 (66% OFF)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Badges */}
                <Card className="border-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-8 h-8 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm">Secure Payment</p>
                        <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <TruckIcon className="w-8 h-8 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm">Free Shipping</p>
                        <p className="text-xs text-muted-foreground">2-5 business days delivery</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-8 h-8 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <p className="font-bold text-sm">2-Year Warranty</p>
                        <p className="text-xs text-muted-foreground">Full coverage included</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Money Back Guarantee */}
                <div className="bg-accent text-accent-foreground p-6 rounded-lg text-center shadow-xl">
                  <p className="font-black text-lg mb-2">30-Day Money Back Guarantee</p>
                  <p className="text-sm opacity-90">Not satisfied? Get a full refund, no questions asked.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
