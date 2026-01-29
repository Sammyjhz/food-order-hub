import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 149.99,
    image: "🎧",
    rating: 4.8,
    reviews: 324,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 299.99,
    image: "⌚",
    rating: 4.7,
    reviews: 512,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 89.99,
    image: "🎒",
    rating: 4.9,
    reviews: 187,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Portable Charger",
    price: 45.99,
    image: "🔋",
    rating: 4.6,
    reviews: 623,
    category: "Electronics",
  },
  {
    id: 5,
    name: "Camera with Lens",
    price: 899.99,
    image: "📷",
    rating: 4.9,
    reviews: 289,
    category: "Photography",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 179.99,
    image: "⌨️",
    rating: 4.8,
    reviews: 456,
    category: "Electronics",
  },
  {
    id: 7,
    name: "Wireless Mouse",
    price: 59.99,
    image: "🖱️",
    rating: 4.5,
    reviews: 234,
    category: "Electronics",
  },
  {
    id: 8,
    name: "USB-C Cable Pack",
    price: 24.99,
    image: "🔌",
    rating: 4.4,
    reviews: 1203,
    category: "Accessories",
  },
];

export default function Shop() {
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            Shop Our Collection
          </h1>
          <p className="text-muted-foreground">
            Discover thousands of premium products curated just for you
          </p>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="sticky top-16 bg-card border-b border-border z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Showing {sortedProducts.length} products
              </p>
            </div>
            <div className="w-full md:w-48">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition"
              >
                {/* Product Image */}
                <div className="bg-muted h-56 flex items-center justify-center text-6xl overflow-hidden">
                  {product.image}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(product.rating)
                              ? "fill-accent text-accent"
                              : "text-border"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-end justify-between mb-4">
                    <div className="text-2xl font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <ShoppingCart size={16} className="mr-2" />
                      Add
                    </Button>
                    <Button
                      variant={
                        favorites.includes(product.id) ? "default" : "outline"
                      }
                      size="sm"
                      className="px-3"
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <Heart
                        size={16}
                        className={
                          favorites.includes(product.id) ? "fill-current" : ""
                        }
                      />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" variant="outline">
            Load More Products
          </Button>
        </div>
      </section>
    </div>
  );
}
