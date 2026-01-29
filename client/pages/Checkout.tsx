import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      alert("Order placed successfully!");
    }, 2000);
  };

  const cartTotal = 239.98 + 10 + 24.99; // Subtotal + shipping + tax

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <Link to="/cart" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4">
            <ArrowLeft size={18} />
            Back to Cart
          </Link>
          <h1 className="text-4xl font-heading font-bold text-foreground">
            Secure Checkout
          </h1>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shipping Information */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="font-heading font-bold text-lg text-foreground mb-6">
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="firstName" className="text-foreground">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <Label htmlFor="address" className="text-foreground">
                      Street Address
                    </Label>
                    <Input
                      id="address"
                      placeholder="123 Main Street"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <Label htmlFor="city" className="text-foreground">
                        City
                      </Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-foreground">
                        State
                      </Label>
                      <Input
                        id="state"
                        placeholder="NY"
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="zip" className="text-foreground">
                        ZIP Code
                      </Label>
                      <Input
                        id="zip"
                        placeholder="10001"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country" className="text-foreground">
                      Country
                    </Label>
                    <Select defaultValue="us">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h2 className="font-heading font-bold text-lg text-foreground mb-6">
                    Payment Method
                  </h2>

                  <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="card">
                        <CreditCard size={16} className="mr-2" />
                        Card
                      </TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="wallet">Apple Pay</TabsTrigger>
                    </TabsList>

                    <TabsContent value="card" className="space-y-4">
                      <div>
                        <Label htmlFor="cardName" className="text-foreground">
                          Cardholder Name
                        </Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber" className="text-foreground">
                          Card Number
                        </Label>
                        <Input
                          id="cardNumber"
                          placeholder="4111 1111 1111 1111"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="expiry" className="text-foreground">
                            Expiry
                          </Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            className="mt-1"
                            required
                          />
                        </div>
                        <div className="col-span-2">
                          <Label htmlFor="cvc" className="text-foreground">
                            CVC
                          </Label>
                          <Input
                            id="cvc"
                            placeholder="123"
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="paypal" className="space-y-4">
                      <p className="text-muted-foreground">
                        You will be redirected to PayPal to complete your
                        payment.
                      </p>
                      <Button type="button" variant="outline" className="w-full">
                        Pay with PayPal
                      </Button>
                    </TabsContent>

                    <TabsContent value="wallet" className="space-y-4">
                      <p className="text-muted-foreground">
                        Click below to pay using your digital wallet.
                      </p>
                      <Button type="button" variant="outline" className="w-full">
                        Pay with Digital Wallet
                      </Button>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Security Notice */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3">
                  <Lock size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Your payment is secure
                    </p>
                    <p className="text-muted-foreground text-sm">
                      We use industry-standard encryption and comply with GDPR
                      and CCPA regulations.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-20">
                <h2 className="font-heading font-bold text-foreground text-lg mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="text-sm">
                    <p className="text-muted-foreground">Premium Wireless Headphones</p>
                    <p className="text-foreground font-semibold">$149.99 x 1</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-muted-foreground">Leather Backpack</p>
                    <p className="text-foreground font-semibold">$89.99 x 1</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6 space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">$239.98</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">$10.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground">$24.99</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-heading font-bold text-foreground">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full mb-3"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Complete Order"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By completing this order, you agree to our terms and
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
