import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Activity,
  TrendingUp,
  Heart,
  Zap,
  ArrowRight,
  Info,
  BarChart3,
} from "lucide-react";

export default function Index() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Order Food,
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}
                  Love Faster
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Order your favorite meals from nearby restaurants and get hot, delicious food delivered to your doorstep in 30 minutes or less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/restaurants">
                  <Button size="lg" className="w-full sm:w-auto">
                    Order Now <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  See Restaurants
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">100K+</div>
                  <div className="text-sm text-muted-foreground">Orders Daily</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Restaurants</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">30min</div>
                  <div className="text-sm text-muted-foreground">Avg Delivery</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 h-96 flex items-center justify-center border border-border">
                <div className="text-center">
                  <div className="text-6xl mb-4">🍕</div>
                  <p className="text-foreground text-lg font-semibold">
                    Fast. Delicious. Reliable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              How FoodHub Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Order delicious food in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-background rounded-xl p-8 border border-border">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-heading text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Browse Restaurants
                </h3>
                <p className="text-muted-foreground">
                  Discover thousands of restaurants offering cuisines you love.
                </p>
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="text-primary" size={32} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-background rounded-xl p-8 border border-border">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-heading text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Add & Customize
                </h3>
                <p className="text-muted-foreground">
                  Select items, customize toppings, and add special instructions.
                </p>
              </div>
              <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="text-primary" size={32} />
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-background rounded-xl p-8 border border-border">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-6 font-heading text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Track & Enjoy
                </h3>
                <p className="text-muted-foreground">
                  Track your order in real-time and enjoy hot food at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose FoodHub */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Why Choose FoodHub
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The best features for your food delivery experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground">
                Average 30-minute delivery to your doorstep with real-time tracking.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Wide Selection
              </h3>
              <p className="text-muted-foreground">
                Choose from 500+ restaurants with diverse cuisines and dietary options.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Secure Payments
              </h3>
              <p className="text-muted-foreground">
                Multiple payment methods with bank-level security and encryption.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                AI Recommendations
              </h3>
              <p className="text-muted-foreground">
                Personalized restaurant and menu suggestions based on your taste.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Loyalty Rewards
              </h3>
              <p className="text-muted-foreground">
                Earn points on every order and redeem for discounts and free meals.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Top-Rated Service
              </h3>
              <p className="text-muted-foreground">
                Read reviews, ratings, and ratings from thousands of happy customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Loved by Food Enthusiasts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Food Lover",
                content:
                  "FoodHub has changed how I order food. Amazing selection and super fast!",
                rating: 5,
              },
              {
                name: "Maria Garcia",
                role: "Busy Professional",
                content:
                  "Perfect for my busy schedule. Food arrives hot and the tracking is so helpful.",
                rating: 5,
              },
              {
                name: "David Lee",
                role: "Tech Enthusiast",
                content:
                  "Love the app interface and the loyalty program rewards. Best delivery service!",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-primary text-primary"
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
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Hungry? Let's Order!
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Browse your favorite restaurants and get delicious food delivered in 30 minutes.
            </p>
            <Link to="/restaurants">
              <Button size="lg" className="px-8">
                Order Now <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
