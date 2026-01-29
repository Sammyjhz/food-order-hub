import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BarChart3,
  TrendingUp,
  Users,
  ShoppingBag,
  Plus,
  Edit2,
  Trash2,
  Eye,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            Restaurant Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your restaurant, menu, and orders
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Today Sales</p>
                  <p className="text-3xl font-bold text-primary mt-2">
                    $2,450
                  </p>
                </div>
                <ShoppingBag className="text-primary/20" size={32} />
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Orders</p>
                  <p className="text-3xl font-bold text-primary mt-2">48</p>
                </div>
                <ShoppingBag className="text-primary/20" size={32} />
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Customers</p>
                  <p className="text-3xl font-bold text-primary mt-2">1.2K</p>
                </div>
                <Users className="text-primary/20" size={32} />
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Avg Rating</p>
                  <p className="text-3xl font-bold text-primary mt-2">4.8⭐</p>
                </div>
                <TrendingUp className="text-primary/20" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="orders" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="menu">Menu Items</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <div className="bg-card rounded-lg border border-border overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted border-b border-border">
                    <tr>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                        Order ID
                      </th>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                        Customer
                      </th>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                        Items
                      </th>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                        Total
                      </th>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "#ORD-001",
                        customer: "John Smith",
                        items: 3,
                        status: "preparing",
                        total: "$22.99",
                      },
                      {
                        id: "#ORD-002",
                        customer: "Sarah Johnson",
                        items: 2,
                        status: "ready",
                        total: "$18.50",
                      },
                      {
                        id: "#ORD-003",
                        customer: "Mike Davis",
                        items: 5,
                        status: "delivered",
                        total: "$45.99",
                      },
                    ].map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-border hover:bg-muted/50 transition"
                      >
                        <td className="px-6 py-4 font-semibold text-foreground">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
                          {order.customer}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
                          {order.items} items
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                              order.status === "delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "ready"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() +
                              order.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-semibold text-foreground">
                          {order.total}
                        </td>
                        <td className="px-6 py-4">
                          <Button size="sm" variant="outline">
                            <Eye size={16} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            {/* Menu Tab */}
            <TabsContent value="menu">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-heading font-bold text-foreground">
                    Manage Menu
                  </h3>
                  <Button>
                    <Plus size={18} className="mr-2" />
                    Add Item
                  </Button>
                </div>

                <div className="bg-card rounded-lg border border-border overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted border-b border-border">
                      <tr>
                        <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                          Item
                        </th>
                        <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                          Category
                        </th>
                        <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                          Price
                        </th>
                        <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Margherita Pizza",
                          category: "Pizzas",
                          price: "$12.99",
                          available: true,
                        },
                        {
                          name: "Pepperoni Pizza",
                          category: "Pizzas",
                          price: "$14.99",
                          available: true,
                        },
                        {
                          name: "Garlic Bread",
                          category: "Sides",
                          price: "$4.99",
                          available: false,
                        },
                      ].map((item, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-border hover:bg-muted/50 transition"
                        >
                          <td className="px-6 py-4 font-semibold text-foreground">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            {item.category}
                          </td>
                          <td className="px-6 py-4 text-foreground">
                            {item.price}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                                item.available
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {item.available ? "Available" : "Out of Stock"}
                            </span>
                          </td>
                          <td className="px-6 py-4 space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit2 size={16} />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-destructive"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Chart */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h3 className="font-heading font-bold text-foreground mb-4">
                    Revenue Overview
                  </h3>
                  <div className="space-y-4">
                    {[
                      { day: "Mon", revenue: "$450" },
                      { day: "Tue", revenue: "$520" },
                      { day: "Wed", revenue: "$480" },
                      { day: "Thu", revenue: "$610" },
                      { day: "Fri", revenue: "$750" },
                      { day: "Sat", revenue: "$920" },
                      { day: "Sun", revenue: "$680" },
                    ].map((item) => (
                      <div
                        key={item.day}
                        className="flex items-center justify-between"
                      >
                        <span className="text-muted-foreground">
                          {item.day}
                        </span>
                        <div className="flex items-center gap-2">
                          <div
                            className="h-2 bg-primary rounded"
                            style={{
                              width: `${
                                (parseInt(item.revenue.slice(1)) / 10) * 2
                              }px`,
                            }}
                          ></div>
                          <span className="font-semibold text-foreground">
                            {item.revenue}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Items */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <h3 className="font-heading font-bold text-foreground mb-4">
                    Top Items
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: "Pepperoni Pizza", orders: 124 },
                      { name: "Margherita Pizza", orders: 98 },
                      { name: "Garlic Bread", orders: 87 },
                      { name: "Caesar Salad", orders: 76 },
                      { name: "Coke", orders: 65 },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                      >
                        <span className="text-foreground font-medium">
                          {item.name}
                        </span>
                        <span className="text-primary font-bold">
                          {item.orders} orders
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
