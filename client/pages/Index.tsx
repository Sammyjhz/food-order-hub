import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Zap,
  Lock,
  Smartphone,
  TrendingUp,
  Star,
  ArrowRight,
  Sparkles,
  Heart,
  Share2,
} from "lucide-react";

export default function Index() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Shop Smarter,
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {" "}
                  Live Better
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover personalized shopping experiences with AI-powered recommendations, seamless checkout, and products delivered faster than ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Shopping <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">10M+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 h-96 flex items-center justify-center border border-border">
                <div className="text-center">
                  <Sparkles size={64} className="text-primary mx-auto mb-4" />
                  <p className="text-foreground text-lg font-semibold">
                    Premium Shopping Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Powerful Features for Modern Shopping
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a seamless e-commerce experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Smart Cart Management
              </h3>
              <p className="text-muted-foreground mb-4">
                Add, remove, and edit items effortlessly. Save carts for later and sync across all devices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                AI Recommendations
              </h3>
              <p className="text-muted-foreground mb-4">
                Get personalized product suggestions based on your browsing and purchase history.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Lightning Fast Checkout
              </h3>
              <p className="text-muted-foreground mb-4">
                One-click checkout with support for multiple payment gateways and digital wallets.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Bank-Level Security
              </h3>
              <p className="text-muted-foreground mb-4">
                End-to-end encryption, OAuth authentication, and full GDPR/CCPA compliance.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Offline Access
              </h3>
              <p className="text-muted-foreground mb-4">
                Browse and manage your cart anytime, even without internet connectivity.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-background rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Social Sharing
              </h3>
              <p className="text-muted-foreground mb-4">
                Share your favorite products and wishlists with friends via social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Loved by Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Verified Buyer",
                content:
                  "The personalized recommendations saved me so much time. I found exactly what I needed!",
                rating: 5,
              },
              {
                name: "Michael Torres",
                role: "Verified Buyer",
                content:
                  "Checkout was incredibly fast. The one-click payment option is a game-changer.",
                rating: 5,
              },
              {
                name: "Emma Williams",
                role: "Verified Buyer",
                content:
                  "Love that I can access my cart offline. Perfect for planning my purchases on the go.",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-card rounded-xl p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Ready to Transform Your Shopping?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join millions of happy customers enjoying smarter, faster, and more personalized shopping.
            </p>
            <Link to="/shop">
              <Button size="lg" className="px-8">
                Start Exploring Now <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
