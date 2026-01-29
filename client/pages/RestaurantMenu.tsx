import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star, MapPin, Clock, Plus, Minus } from "lucide-react";
import { useState } from "react";

const restaurantData: Record<number, any> = {
  1: {
    name: "Pizza Paradise",
    cuisine: "Italian",
    rating: 4.8,
    reviews: 324,
    deliveryTime: "20-30",
    deliveryFee: 1.99,
    image: "🍕",
    categories: ["Pizzas", "Sides", "Desserts", "Drinks"],
  },
};

const allMenuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizzas",
    price: 12.99,
    description: "Fresh mozzarella, tomato, basil",
    image: "🍕",
    customizable: true,
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizzas",
    price: 14.99,
    description: "Pepperoni, mozzarella, tomato sauce",
    image: "🍕",
    customizable: true,
  },
  {
    id: 3,
    name: "Vegetarian Pizza",
    category: "Pizzas",
    price: 13.99,
    description: "Bell peppers, onions, mushrooms, olives",
    image: "🍕",
    customizable: true,
  },
  {
    id: 4,
    name: "Garlic Bread",
    category: "Sides",
    price: 4.99,
    description: "Crispy garlic bread with herbs",
    image: "🥖",
    customizable: false,
  },
  {
    id: 5,
    name: "Caesar Salad",
    category: "Sides",
    price: 7.99,
    description: "Fresh romaine, parmesan, croutons",
    image: "🥗",
    customizable: false,
  },
  {
    id: 6,
    name: "Tiramisu",
    category: "Desserts",
    price: 5.99,
    description: "Classic Italian tiramisu",
    image: "🍰",
    customizable: false,
  },
  {
    id: 7,
    name: "Coca Cola",
    category: "Drinks",
    price: 2.99,
    description: "Cold beverage",
    image: "🥤",
    customizable: false,
  },
];

export default function RestaurantMenu() {
  const { id } = useParams<{ id: string }>();
  const restaurantId = parseInt(id || "1");
  const restaurant = restaurantData[restaurantId] || restaurantData[1];

  const [selectedCategory, setSelectedCategory] = useState("Pizzas");
  const [customization, setCustomization] = useState<Record<number, any>>({});

  const filteredItems = allMenuItems.filter(
    (item) => item.category === selectedCategory,
  );

  const handleAddItem = (item: any) => {
    const key = item.id;
    setCustomization({
      ...customization,
      [key]: {
        ...customization[key],
        quantity: (customization[key]?.quantity || 0) + 1,
      },
    });
  };

  return (
    <div className="bg-background">
      {/* Restaurant Header */}
      <section className="bg-card border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="text-6xl mb-4">{restaurant.image}</div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                {restaurant.name}
              </h1>
              <p className="text-muted-foreground mb-4">{restaurant.cuisine}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Star size={16} className="fill-primary text-primary" />
                  <span className="font-semibold text-foreground">
                    {restaurant.rating}
                  </span>
                  <span className="text-muted-foreground">
                    ({restaurant.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span className="text-muted-foreground">
                    {restaurant.deliveryTime} min
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span className="text-muted-foreground">
                    ${restaurant.deliveryFee.toFixed(2)} delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-card border-b border-border sticky top-32 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto py-4 -mx-4 px-4">
            {restaurant.categories.map((category: string) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
            {selectedCategory}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition"
              >
                <div className="flex gap-4">
                  <div className="text-5xl flex-shrink-0">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                      {item.customizable ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm">Customize</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Customize {item.name}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">
                                  Size
                                </h4>
                                <div className="space-y-2">
                                  {["Small", "Medium", "Large"].map((size) => (
                                    <label
                                      key={size}
                                      className="flex items-center p-2 rounded-lg border border-border hover:bg-muted cursor-pointer"
                                    >
                                      <input
                                        type="radio"
                                        name="size"
                                        className="mr-3"
                                      />
                                      <span>{size}</span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground mb-2">
                                  Toppings
                                </h4>
                                <div className="space-y-2">
                                  {[
                                    "Extra Cheese",
                                    "Mushrooms",
                                    "Olives",
                                    "Peppers",
                                  ].map((topping) => (
                                    <label
                                      key={topping}
                                      className="flex items-center p-2 rounded-lg border border-border hover:bg-muted cursor-pointer"
                                    >
                                      <input type="checkbox" className="mr-3" />
                                      <span className="flex-1">{topping}</span>
                                      <span className="text-muted-foreground">
                                        +$0.99
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                  Special Instructions
                                </label>
                                <textarea
                                  className="w-full px-3 py-2 border border-border rounded-lg text-foreground bg-background"
                                  placeholder="e.g., No onions, extra sauce..."
                                  rows={3}
                                />
                              </div>
                              <Button className="w-full">Add to Cart</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Button size="sm" onClick={() => handleAddItem(item)}>
                          <Plus size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
