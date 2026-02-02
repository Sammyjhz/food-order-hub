import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Target, Heart, LogOut, Bell, Lock } from "lucide-react";
import { useState } from "react";

export default function Account() {
  const [activeTab, setActiveTab] = useState("profile");

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
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  💪
                </div>
                <h2 className="font-heading font-bold text-foreground text-center mb-1">
                  John Doe
                </h2>
                <p className="text-muted-foreground text-center text-sm mb-6">
                  john@example.com
                </p>

                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      activeTab === "profile"
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <User size={18} />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("goals")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      activeTab === "goals"
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Target size={18} />
                    <span>Goals</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("metrics")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      activeTab === "metrics"
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Heart size={18} />
                    <span>Health Metrics</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      activeTab === "settings"
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Bell size={18} />
                    <span>Notifications</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("privacy")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      activeTab === "privacy"
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <Lock size={18} />
                    <span>Privacy</span>
                  </button>
                </nav>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">
                    Current BMI
                  </p>
                  <p className="text-2xl font-bold text-primary">24.5</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Normal Weight
                  </p>
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
              {/* Profile Tab */}
              {activeTab === "profile" && (
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
                    <div>
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input
                        id="dob"
                        type="date"
                        defaultValue="1990-01-15"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender</Label>
                      <select
                        id="gender"
                        className="w-full mt-2 px-3 py-2 border border-border rounded-lg bg-background"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                      Current Health Info
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input
                          id="height"
                          defaultValue="175"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input
                          id="weight"
                          defaultValue="75"
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
              )}

              {/* Goals Tab */}
              {activeTab === "goals" && (
                <div className="bg-card rounded-lg border border-border p-6 space-y-6">
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Health Goals
                  </h3>

                  <div className="space-y-4">
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-heading font-bold text-foreground">
                            Target BMI
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Reach and maintain a healthy BMI
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Active
                        </span>
                      </div>
                      <div className="bg-muted rounded p-3 mb-3">
                        <p className="text-sm text-muted-foreground">
                          Target: 18.5 - 24.9
                        </p>
                        <p className="text-lg font-bold text-foreground">
                          Current: 24.5 ✓
                        </p>
                      </div>
                    </div>

                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-heading font-bold text-foreground">
                            Exercise Target
                          </p>
                          <p className="text-sm text-muted-foreground">
                            150 minutes of moderate activity per week
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                          In Progress
                        </span>
                      </div>
                      <div className="bg-muted rounded p-3 mb-3">
                        <p className="text-sm text-muted-foreground">
                          This week: 120 minutes
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-heading font-bold text-foreground">
                            Nutrition Goal
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Maintain balanced diet with proper nutrients
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                          Track More
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button>Add New Goal</Button>
                </div>
              )}

              {/* Metrics Tab */}
              {activeTab === "metrics" && (
                <div className="bg-card rounded-lg border border-border p-6 space-y-6">
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Health Metrics
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">
                        Current BMI
                      </p>
                      <p className="text-3xl font-bold text-primary">24.5</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Last updated: Today
                      </p>
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">
                        Target Weight
                      </p>
                      <p className="text-3xl font-bold text-secondary">70 kg</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        5 kg to goal
                      </p>
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">
                        Height
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        175 cm
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        5'9"
                      </p>
                    </div>

                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">
                        Activity Level
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        Moderate
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        120 min/week
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
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
                          Daily health reminders
                        </span>
                      </label>
                      <label className="flex items-center p-3 rounded-lg border border-border hover:bg-muted cursor-pointer transition">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4"
                        />
                        <span className="ml-3 text-foreground font-medium">
                          Weekly progress reports
                        </span>
                      </label>
                      <label className="flex items-center p-3 rounded-lg border border-border hover:bg-muted cursor-pointer transition">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="ml-3 text-foreground font-medium">
                          Goal achievement alerts
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                      Units Preference
                    </h3>

                    <div>
                      <Label htmlFor="units">Measurement Units</Label>
                      <select
                        id="units"
                        className="w-full mt-2 px-3 py-2 border border-border rounded-lg bg-background"
                      >
                        <option>Metric (cm, kg)</option>
                        <option>Imperial (inches, lbs)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === "privacy" && (
                <div className="bg-card rounded-lg border border-border p-6 space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                      Data Privacy
                    </h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800 space-y-2">
                      <p>
                        <strong>Your Privacy Matters:</strong> All your health
                        data is stored securely and never shared with third
                        parties without your consent.
                      </p>
                      <p>
                        All calculations are performed on your device. We do
                        not collect or store personal health information unless
                        you choose to save it.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                      Data Management
                    </h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full">
                        Download My Data
                      </Button>
                      <Button variant="outline" className="w-full">
                        Clear All History
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full text-destructive"
                      >
                        Delete Account
                      </Button>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                      Account Security
                    </h3>
                    <Button>Change Password</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
