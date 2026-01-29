import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Package, Heart, LogOut, Bell, Lock } from "lucide-react";

export default function Account() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-bold text-foreground">
            My Account
          </h1>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg border border-border p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  👤
                </div>
                <h2 className="font-heading font-bold text-foreground text-center mb-1">
                  John Doe
                </h2>
                <p className="text-muted-foreground text-center text-sm mb-6">
                  john@example.com
                </p>

                <nav className="space-y-2">
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition">
                    <User size={18} />
                    <span>Profile</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition">
                    <Package size={18} />
                    <span>Orders</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition">
                    <Heart size={18} />
                    <span>Wishlist</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition">
                    <Bell size={18} />
                    <span>Notifications</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted transition">
                    <Lock size={18} />
                    <span>Security</span>
                  </button>
                </nav>

                <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    Loyalty Points
                  </p>
                  <p className="text-2xl font-bold text-secondary">2,450 pts</p>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-6 text-destructive"
                >
                  <LogOut size={18} className="mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 bg-card border border-border">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile">
                  <div className="bg-card rounded-lg border border-border p-6 space-y-6">
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          defaultValue="John"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          defaultValue="Doe"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="john@example.com"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          defaultValue="+1 (555) 123-4567"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                        Shipping Address
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                        <div>
                          <Label htmlFor="address">Street Address</Label>
                          <Input
                            id="address"
                            defaultValue="123 Main Street"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="apartment">
                            Apartment, Suite, etc
                          </Label>
                          <Input
                            id="apartment"
                            defaultValue="Apt 4B"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            defaultValue="New York"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            defaultValue="NY"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input
                            id="zip"
                            defaultValue="10001"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="country">Country</Label>
                          <Input
                            id="country"
                            defaultValue="United States"
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6 flex gap-4">
                      <Button>Save Changes</Button>
                      <Button variant="outline">Cancel</Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Orders Tab */}
                <TabsContent value="orders">
                  <div className="bg-card rounded-lg border border-border overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-muted border-b border-border">
                        <tr>
                          <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                            Order
                          </th>
                          <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                            Date
                          </th>
                          <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                            Status
                          </th>
                          <th className="px-6 py-4 text-left font-heading font-semibold text-foreground">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border hover:bg-muted/50 transition">
                          <td className="px-6 py-4 text-foreground">
                            #ORD-001
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            Jan 15, 2024
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                              Delivered
                            </span>
                          </td>
                          <td className="px-6 py-4 text-foreground font-semibold">
                            $274.98
                          </td>
                        </tr>
                        <tr className="border-b border-border hover:bg-muted/50 transition">
                          <td className="px-6 py-4 text-foreground">
                            #ORD-002
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            Jan 10, 2024
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                              Shipped
                            </span>
                          </td>
                          <td className="px-6 py-4 text-foreground font-semibold">
                            $159.99
                          </td>
                        </tr>
                        <tr className="hover:bg-muted/50 transition">
                          <td className="px-6 py-4 text-foreground">
                            #ORD-003
                          </td>
                          <td className="px-6 py-4 text-muted-foreground">
                            Jan 5, 2024
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                              Delivered
                            </span>
                          </td>
                          <td className="px-6 py-4 text-foreground font-semibold">
                            $89.99
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>

                {/* Wishlist Tab */}
                <TabsContent value="wishlist">
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                      Saved Items
                    </h3>

                    <div className="space-y-4">
                      {[
                        {
                          name: "4K Ultra HD Monitor",
                          price: "$399.99",
                        },
                        {
                          name: "Wireless Charging Stand",
                          price: "$49.99",
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted transition"
                        >
                          <div>
                            <p className="font-heading font-semibold text-foreground">
                              {item.name}
                            </p>
                            <p className="text-primary font-bold">
                              {item.price}
                            </p>
                          </div>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Settings Tab */}
                <TabsContent value="settings">
                  <div className="bg-card rounded-lg border border-border p-6 space-y-6">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                        Notification Preferences
                      </h3>

                      <div className="space-y-3">
                        <label className="flex items-center p-3 rounded-lg border border-border hover:bg-muted cursor-pointer transition">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4"
                          />
                          <span className="ml-3 text-foreground font-medium">
                            Email notifications for orders
                          </span>
                        </label>
                        <label className="flex items-center p-3 rounded-lg border border-border hover:bg-muted cursor-pointer transition">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4"
                          />
                          <span className="ml-3 text-foreground font-medium">
                            Price drop alerts
                          </span>
                        </label>
                        <label className="flex items-center p-3 rounded-lg border border-border hover:bg-muted cursor-pointer transition">
                          <input type="checkbox" className="w-4 h-4" />
                          <span className="ml-3 text-foreground font-medium">
                            Promotional offers
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                        Language & Region
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="language">Language</Label>
                          <select
                            id="language"
                            className="w-full mt-2 px-3 py-2 border border-border rounded-lg"
                          >
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security">
                  <div className="bg-card rounded-lg border border-border p-6 space-y-6">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                        Password
                      </h3>
                      <Button variant="outline">Change Password</Button>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                        Two-Factor Authentication
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Add an extra layer of security to your account.
                      </p>
                      <Button>Enable 2FA</Button>
                    </div>

                    <div className="border-t border-border pt-6">
                      <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                        Active Sessions
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                          <div>
                            <p className="font-semibold text-foreground">
                              Current Device
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Chrome on macOS
                            </p>
                          </div>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
