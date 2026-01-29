import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, MapPin, Clock, Search } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.8,
    reviews: 324,
    deliveryTime: "20-30",
    deliveryFee: 1.99,
    minOrder: 15,
    image: "🍕",
    open: true,
  },
  {
    id: 2,
    name: "Burger Blast",
    cuisine: "American",
    rating: 4.6,
    reviews: 512,
    deliveryTime: "25-35",
    deliveryFee: 0.99,
    minOrder: 10,
    image: "🍔",
    open: true,
  },
  {
    id: 3,
    name: "Sushi Supreme",
    cuisine: "Japanese",
    rating: 4.9,
    reviews: 287,
    deliveryTime: "30-40",
    deliveryFee: 2.99,
    minOrder: 20,
    image: "🍣",
    open: true,
  },
  {
    id: 4,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.7,
    reviews: 423,
    deliveryTime: "20-30",
    deliveryFee: 1.49,
    minOrder: 12,
    image: "🌮",
    open: true,
  },
  {
    id: 5,
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.5,
    reviews: 189,
    deliveryTime: "30-40",
    deliveryFee: 1.99,
    minOrder: 18,
    image: "🍛",
    open: true,
  },
  {
    id: 6,
    name: "Pasta Passion",
    cuisine: "Italian",
    rating: 4.8,
    reviews: 412,
    deliveryTime: "25-35",
    deliveryFee: 1.99,
    minOrder: 16,
    image: "🍝",
    open: true,
  },
];

export default function Restaurants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const cuisines = [
    "all",
    ...Array.from(new Set(restaurants.map((r) => r.cuisine))),
  ];

  let filtered = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCuisine === "all" || r.cuisine === selectedCuisine)
  );

  if (sortBy === "delivery-time") {
    filtered.sort((a, b) => {
      const aTime = parseInt(a.deliveryTime);
      const bTime = parseInt(b.deliveryTime);
      return aTime - bTime;
    });
  } else if (sortBy === "delivery-fee") {
    filtered.sort((a, b) => a.deliveryFee - b.deliveryFee);
  } else {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            Restaurants Near You
          </h1>
          <p className="text-muted-foreground">
            {filtered.length} restaurants available
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="sticky top-16 bg-card border-b border-border z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2 relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Search restaurants..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Cuisine Filter */}
            <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
              <SelectTrigger>
                <SelectValue placeholder="Cuisine" />
              </SelectTrigger>
              <SelectContent>
                {cuisines.map((cuisine) => (
                  <SelectItem key={cuisine} value={cuisine}>
                    {cuisine === "all" ? "All Cuisines" : cuisine}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="delivery-time">Fastest Delivery</SelectItem>
                <SelectItem value="delivery-fee">Lowest Fee</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Restaurants Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl font-heading font-semibold text-foreground mb-2">
                No restaurants found
              </p>
              <p className="text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((restaurant) => (
                <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                  <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition hover:shadow-lg">
                    {/* Restaurant Image */}
                    <div className="bg-muted h-48 flex items-center justify-center text-6xl overflow-hidden relative">
                      {restaurant.image}
                      {!restaurant.open && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-heading font-bold">
                            Closed
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Restaurant Info */}
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {restaurant.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {restaurant.cuisine}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-0.5">
                          <Star
                            size={14}
                            className="fill-primary text-primary"
                          />
                          <span className="font-semibold text-foreground text-sm">
                            {restaurant.rating}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({restaurant.reviews})
                        </span>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock size={14} />
                          <span>{restaurant.deliveryTime} min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>Delivery ${restaurant.deliveryFee.toFixed(2)}</span>
                        </div>
                        <p className="text-xs">
                          Min. order: ${restaurant.minOrder}
                        </p>
                      </div>

                      <Button className="w-full" size="sm">
                        Order Now
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
