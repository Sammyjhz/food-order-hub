import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Target, Heart, LogOut, Bell, Lock, Shield, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Account() {
  const [activeTab, setActiveTab] = useState("profile");
  const [lastBmi, setLastBmi] = useState<number | null>(null);
  const [lastCategory, setLastCategory] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("bmiHistory");
    if (stored) {
      const history = JSON.parse(stored);
      if (history.length > 0) {
        setLastBmi(history[0].bmi);
        setLastCategory(history[0].category);
      }
    }
  }, []);

  const menuItems = [
    { id: "profile", label: "Profile", icon: User },
    { id: "goals", label: "Health Goals", icon: Target },
    { id: "metrics", label: "Bio Metrics", icon: Heart },
    { id: "settings", label: "Preferences", icon: Bell },
    { id: "privacy", label: "Data & Privacy", icon: Lock },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-card border-b border-border py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:opacity-80 transition mb-4">
            <ArrowLeft size={16} />
            BACK TO CALCULATOR
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight uppercase flex items-center gap-4">
            User Control Center
          </h1>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card rounded-3xl border border-border p-8 shadow-sm">
                <div className="relative w-24 h-24 mx-auto mb-6">
                   <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center text-4xl shadow-lg animate-float">
                    💪
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-background border-2 border-primary w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black">
                    PRO
                  </div>
                </div>
                
                <h2 className="font-black text-xl text-foreground text-center mb-1 tracking-tight uppercase">
                  John Doe
                </h2>
                <p className="text-muted-foreground text-center text-xs font-bold mb-8 italic">
                  Member since Jan 2024
                </p>

                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
                          activeTab === item.id
                            ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <Icon size={18} />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">
                    Latest Assessment
                  </p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-black text-primary">{lastBmi ? lastBmi : "--"}</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">{lastCategory || "NO DATA"}</p>
                  </div>
                  <div className="mt-4 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: lastBmi ? "65%" : "0%" }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-8 h-12 rounded-2xl text-destructive border-destructive/20 hover:bg-destructive hover:text-white transition-all font-bold"
                >
                  <LogOut size={18} className="mr-2" />
                  SIGN OUT
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === "profile" && (
                    <div className="bg-card rounded-[2rem] border border-border p-8 md:p-12 shadow-sm space-y-8">
                      <div>
                        <h3 className="text-2xl font-black text-foreground tracking-tight uppercase mb-2">
                          Core Profile
                        </h3>
                        <p className="text-sm text-muted-foreground italic">Update your personal and physiological metadata.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">First Name</Label>
                          <Input defaultValue="John" className="h-12 rounded-xl bg-muted/30 border-none font-bold" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Last Name</Label>
                          <Input defaultValue="Doe" className="h-12 rounded-xl bg-muted/30 border-none font-bold" />
                        </div>
                        <div className="space-y-2 lg:col-span-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Email Protocol</Label>
                          <Input type="email" defaultValue="john@wellness.io" className="h-12 rounded-xl bg-muted/30 border-none font-bold" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">DOB</Label>
                          <Input type="date" defaultValue="1990-01-15" className="h-12 rounded-xl bg-muted/30 border-none font-bold" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Gender Identification</Label>
                          <select className="w-full h-12 rounded-xl bg-muted/30 border-none px-4 font-bold text-sm appearance-none outline-none focus:ring-2 focus:ring-primary">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Non-Binary</option>
                          </select>
                        </div>
                      </div>

                      <div className="border-t border-border pt-10">
                         <Button className="h-14 px-10 rounded-2xl font-black shadow-lg shadow-primary/20">
                            SAVE CHANGES
                         </Button>
                      </div>
                    </div>
                  )}

                  {activeTab === "goals" && (
                    <div className="bg-card rounded-[2rem] border border-border p-8 md:p-12 shadow-sm space-y-8">
                      <div>
                        <h3 className="text-2xl font-black text-foreground tracking-tight uppercase mb-2">
                          Strategic Targets
                        </h3>
                        <p className="text-sm text-muted-foreground italic">Manage your physiological objectives and timelines.</p>
                      </div>

                      <div className="space-y-6">
                        {[
                          { title: "Target BMI Range", val: "18.5 - 24.9", current: "24.5", status: "Active", color: "bg-green-500" },
                          { title: "Weekly Metabolism", val: "1050 min/wk", current: "820 min", status: "In Progress", color: "bg-blue-500" },
                        ].map((goal, idx) => (
                          <div key={idx} className="p-8 border border-border rounded-3xl bg-muted/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-1 h-full bg-primary/20"></div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                              <div className="space-y-2">
                                <p className="font-black text-lg tracking-tight uppercase">{goal.title}</p>
                                <p className="text-xs font-bold text-muted-foreground italic">Current Benchmark: {goal.current}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-black text-primary">{goal.val}</p>
                                <span className={`text-[10px] font-black uppercase tracking-widest ${goal.color.replace('bg-', 'text-')} px-3 py-1 bg-white border border-border rounded-full`}>
                                  {goal.status}
                                </span>
                              </div>
                            </div>
                            <div className="mt-8 h-2 w-full bg-muted rounded-full overflow-hidden">
                               <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: idx === 0 ? "90%" : "70%" }}
                                className={`h-full ${goal.color}`}
                               />
                            </div>
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="h-14 w-full rounded-2xl font-black border-dashed border-2 hover:bg-muted transition-all">
                        INITIALIZE NEW TARGET
                      </Button>
                    </div>
                  )}

                  {activeTab === "metrics" && (
                    <div className="bg-card rounded-[2rem] border border-border p-8 md:p-12 shadow-sm space-y-8">
                       <div>
                        <h3 className="text-2xl font-black text-foreground tracking-tight uppercase mb-2">
                          Bio-Metric Stream
                        </h3>
                        <p className="text-sm text-muted-foreground italic">Real-time data from your latest health assessments.</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          { label: "Precision BMI", val: lastBmi || "N/A", sub: "Calculated from height/weight", icon: "📊" },
                          { label: "Target Weight", val: "70.0 kg", sub: "Based on 21.0 BMI target", icon: "🎯" },
                          { label: "Height Log", val: "175.0 cm", sub: "Last verified Jan 15", icon: "📏" },
                          { label: "BMR Est.", val: "1,780 kcal", sub: "Resting metabolic rate", icon: "🔥" },
                        ].map((metric, idx) => (
                          <div key={idx} className="p-8 bg-muted/30 border border-border rounded-[2rem] flex items-center gap-6 group hover:bg-white transition-all duration-500">
                            <div className="text-4xl group-hover:scale-125 transition-transform duration-500">{metric.icon}</div>
                            <div className="space-y-1">
                              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{metric.label}</p>
                              <p className="text-2xl font-black text-foreground">{metric.val}</p>
                              <p className="text-[10px] font-bold italic opacity-60">{metric.sub}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "settings" && (
                    <div className="bg-card rounded-[2rem] border border-border p-8 md:p-12 shadow-sm space-y-8">
                       <div>
                        <h3 className="text-2xl font-black text-foreground tracking-tight uppercase mb-2">
                          System Prefs
                        </h3>
                        <p className="text-sm text-muted-foreground italic">Configure your calculation protocol and alerts.</p>
                      </div>

                      <div className="space-y-4">
                        {[
                          "Enable daily health snapshots",
                          "Sync with system calendars",
                          "Send weekly progress reports",
                          "High priority goal alerts"
                        ].map((pref, idx) => (
                           <label key={idx} className="flex items-center justify-between p-6 rounded-2xl border border-border hover:bg-muted/30 cursor-pointer transition group">
                            <span className="font-bold text-foreground group-hover:text-primary transition">{pref}</span>
                            <div className="w-12 h-6 bg-muted rounded-full relative p-1 group-hover:bg-primary/20 transition">
                               <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                            </div>
                          </label>
                        ))}
                      </div>

                      <div className="pt-8 border-t border-border">
                         <Label className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-4 block">Default Measurement Protocol</Label>
                         <select className="w-full h-14 rounded-xl bg-muted/30 border-none px-6 font-bold text-sm">
                            <option>Metric (cm, kg)</option>
                            <option>Imperial (in, lbs)</option>
                         </select>
                      </div>
                    </div>
                  )}

                  {activeTab === "privacy" && (
                    <div className="bg-card rounded-[2rem] border border-border p-8 md:p-12 shadow-sm space-y-8">
                      <div className="flex items-center gap-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                        <Shield className="text-emerald-600 shrink-0" size={32} />
                        <div>
                          <p className="font-black text-emerald-900 uppercase text-xs tracking-widest">End-to-End Privacy</p>
                          <p className="text-xs text-emerald-800 italic">Your physiological data is stored using browser-level encryption. We never see your metrics.</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">Data Governance</h4>
                        <div className="grid grid-cols-1 gap-4">
                          <Button variant="outline" className="h-14 justify-start px-8 rounded-2xl font-bold border-border bg-background">
                            DOWNLOAD COMPLETE HEALTH EXPORT (.JSON)
                          </Button>
                          <Button variant="outline" className="h-14 justify-start px-8 rounded-2xl font-bold border-border bg-background">
                            REQUEST DATA PURGE
                          </Button>
                          <Button variant="outline" className="h-14 justify-start px-8 rounded-2xl font-bold border-destructive/20 text-destructive bg-background hover:bg-destructive hover:text-white transition-all">
                            TERMINATE ACCOUNT PROTOCOL
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
