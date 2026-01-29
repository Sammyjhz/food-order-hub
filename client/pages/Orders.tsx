import { MapPin, Clock, Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Orders() {
  const orders = [
    {
      id: "#ORD-001",
      restaurant: "Pizza Paradise",
      items: "Margherita Pizza, Garlic Bread",
      status: "delivering",
      total: "$22.97",
      deliveryTime: "Arriving in 8 mins",
      driver: {
        name: "John Smith",
        rating: 4.8,
        phone: "(555) 123-4567",
      },
      createdAt: "Today at 7:30 PM",
    },
    {
      id: "#ORD-002",
      restaurant: "Burger Blast",
      items: "Classic Burger, Fries, Coke",
      status: "delivered",
      total: "$18.99",
      deliveryTime: "Delivered at 6:15 PM",
      driver: {
        name: "Maria Garcia",
        rating: 4.9,
        phone: "(555) 234-5678",
      },
      createdAt: "Yesterday at 6:00 PM",
    },
    {
      id: "#ORD-003",
      restaurant: "Sushi Supreme",
      items: "California Roll, Spicy Tuna",
      status: "pending",
      total: "$32.50",
      deliveryTime: "Estimated 35-45 mins",
      driver: null,
      createdAt: "Today at 6:00 PM",
    },
  ];

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { bg: string; text: string; label: string }> = {
      delivered: { bg: "bg-green-100", text: "text-green-800", label: "Delivered" },
      delivering: { bg: "bg-blue-100", text: "text-blue-800", label: "Delivering" },
      pending: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Pending" },
    };
    const badge = badges[status];
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text}`}>
        {badge.label}
      </span>
    );
  };

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            My Orders
          </h1>
          <p className="text-muted-foreground">
            Track your food delivery orders in real-time
          </p>
        </div>
      </section>

      {/* Orders */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 bg-card border border-border">
              <TabsTrigger value="active">Active Orders</TabsTrigger>
              <TabsTrigger value="history">Order History</TabsTrigger>
            </TabsList>

            {/* Active Orders */}
            <TabsContent value="active">
              <div className="space-y-6">
                {orders
                  .filter((o) => o.status !== "delivered")
                  .map((order) => (
                    <div
                      key={order.id}
                      className="bg-card rounded-lg border border-border overflow-hidden"
                    >
                      {/* Order Header */}
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-4 border-b border-border">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-heading font-bold text-lg text-foreground">
                            {order.restaurant}
                          </h3>
                          {getStatusBadge(order.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Order {order.id} • {order.createdAt}
                        </p>
                      </div>

                      {/* Order Content */}
                      <div className="p-6 space-y-6">
                        {/* Items */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Items
                          </h4>
                          <p className="text-muted-foreground">{order.items}</p>
                        </div>

                        {/* Status Timeline */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-4">
                            Delivery Status
                          </h4>
                          <div className="space-y-3">
                            <div className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                                <div className="w-0.5 h-8 bg-primary my-1"></div>
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">
                                  Order Confirmed
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  7:30 PM
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                                <div className="w-0.5 h-8 bg-primary my-1"></div>
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">
                                  Preparing Order
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  7:35 PM
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                                <div className="w-0.5 h-8 bg-muted my-1"></div>
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">
                                  On the Way
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  7:45 PM
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-4">
                              <div className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full bg-muted mt-1"></div>
                              </div>
                              <div>
                                <p className="font-semibold text-foreground">
                                  Arriving Soon
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {order.deliveryTime}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Driver Info */}
                        {order.driver && (
                          <div className="border-t border-border pt-6">
                            <h4 className="font-semibold text-foreground mb-4">
                              Driver
                            </h4>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-heading text-lg">
                                  👤
                                </div>
                                <div>
                                  <p className="font-semibold text-foreground">
                                    {order.driver.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    ⭐ {order.driver.rating}
                                  </p>
                                </div>
                              </div>
                              <a href={`tel:${order.driver.phone}`}>
                                <Button variant="outline" size="sm">
                                  <Phone size={16} />
                                </Button>
                              </a>
                            </div>
                          </div>
                        )}

                        {/* Order Total */}
                        <div className="border-t border-border pt-4 flex justify-between items-center">
                          <span className="font-heading font-bold text-foreground">
                            Total
                          </span>
                          <span className="text-2xl font-bold text-primary">
                            {order.total}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>

            {/* Order History */}
            <TabsContent value="history">
              <div className="space-y-4">
                {orders
                  .filter((o) => o.status === "delivered")
                  .map((order) => (
                    <div
                      key={order.id}
                      className="bg-card rounded-lg border border-border p-6 hover:border-primary/50 transition"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-heading font-bold text-foreground">
                            {order.restaurant}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Order {order.id} • {order.createdAt}
                          </p>
                        </div>
                        <div className="text-right">
                          {getStatusBadge(order.status)}
                          <p className="text-lg font-bold text-foreground mt-2">
                            {order.total}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {order.items}
                      </p>
                      <Button size="sm" variant="outline">
                        Order Again
                      </Button>
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
