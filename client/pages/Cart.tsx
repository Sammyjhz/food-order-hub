import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, Percent } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  restaurant: string;
  notes?: string;
}

export default function Cart() {
  // Sample cart data
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: 12.99,
      quantity: 1,
      image: "🍕",
      restaurant: "Pizza Paradise",
      notes: "Extra basil",
    },
    {
      id: 2,
      name: "Garlic Bread",
      price: 4.99,
      quantity: 2,
      image: "🥖",
      restaurant: "Pizza Paradise",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 1.99;
  const tax = (subtotal + deliveryFee) * 0.1;
  const total = subtotal + deliveryFee + tax;

  if (cartItems.length === 0) {
    return (
      <div className="bg-background min-h-screen flex items-center">
        <div className="container mx-auto px-4 text-center py-20">
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Order delicious food from your favorite restaurants!
          </p>
          <Link to="/restaurants">
            <Button size="lg">Browse Restaurants</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-bold text-foreground">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground mt-2">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your
            cart
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-card rounded-lg border border-border p-6 flex gap-6"
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0 w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-4xl">
                      {item.image}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground mb-2">
                        {item.name}
                      </h3>
                      <p className="text-2xl font-bold text-primary mb-4">
                        ${item.price.toFixed(2)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="px-2"
                        >
                          <Minus size={16} />
                        </Button>
                        <Input
                          value={item.quantity}
                          className="w-12 text-center"
                          readOnly
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="px-2"
                        >
                          <Plus size={16} />
                        </Button>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex-shrink-0 text-right">
                      <p className="text-lg font-bold text-foreground mb-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-8">
                <Link to="/shop">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-20">
                <h2 className="font-heading font-bold text-foreground text-lg mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-accent font-semibold">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="font-heading font-bold text-foreground">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <Link to="/checkout" className="block">
                  <Button className="w-full mb-3">Proceed to Checkout</Button>
                </Link>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>✓ Free shipping on orders over $100</p>
                  <p>✓ Secure checkout with multiple payment options</p>
                  <p>✓ 30-day money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
