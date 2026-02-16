import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, Download, Plus, ArrowLeft, History as HistoryIcon, FileJson, FileSpreadsheet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface BMIRecord {
  id: string;
  date: string;
  height: number;
  weight: number;
  bmi: number;
  category: string;
  unit: "metric" | "imperial";
  age?: number | null;
  gender?: string;
  bmr?: number | null;
  calories?: number | null;
  activityLevel?: string;
  idealWeight?: { min: number; max: number } | null;
}

export default function History() {
  const { toast } = useToast();
  const [records, setRecords] = useState<BMIRecord[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("bmiHistory");
    if (stored) {
      setRecords(JSON.parse(stored));
    }
  }, []);

  const deleteRecord = (id: string) => {
    const updated = records.filter((r) => r.id !== id);
    setRecords(updated);
    localStorage.setItem("bmiHistory", JSON.stringify(updated));
    toast({
      title: "Record Deleted",
      description: "The health record has been removed from your history.",
    });
  };

  const downloadCSV = () => {
    if (records.length === 0) {
      toast({
        title: "Export Failed",
        description: "No records available to export.",
        variant: "destructive",
      });
      return;
    }

    const headers = ["Date", "Age", "Gender", "Height", "Weight", "BMI", "Category", "BMR", "Daily Needs", "Unit"];
    const rows = records.map((r) => [
      new Date(r.date).toLocaleString(),
      r.age || "N/A",
      r.gender || "N/A",
      r.height,
      r.weight,
      r.bmi,
      r.category,
      r.bmr || "N/A",
      r.calories || "N/A",
      r.unit,
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `health-history-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    
    toast({
      title: "Export Successful",
      description: "Your data has been downloaded as a CSV file.",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Underweight":
        return "border-blue-200 bg-blue-50/30 text-blue-700";
      case "Normal Weight":
        return "border-green-200 bg-green-50/30 text-green-700";
      case "Overweight":
        return "border-yellow-200 bg-yellow-50/30 text-yellow-700";
      case "Obese":
        return "border-red-200 bg-red-50/30 text-red-700";
      default:
        return "border-border bg-muted/30 text-muted-foreground";
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-6xl mx-auto">
            <div className="space-y-2">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:opacity-80 transition mb-4">
                <ArrowLeft size={16} />
                BACK TO CALCULATOR
              </Link>
              <h1 className="text-4xl md:text-5xl font-black text-foreground tracking-tight uppercase flex items-center gap-4">
                <HistoryIcon className="text-primary" size={40} />
                Health History
              </h1>
              <p className="text-lg text-muted-foreground italic">
                A detailed timeline of your body metrics and wellness evolution.
              </p>
            </div>
            {records.length > 0 && (
              <Button
                onClick={downloadCSV}
                className="h-14 px-8 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-primary/10"
              >
                <FileSpreadsheet size={20} />
                <span>EXPORT DATA (.CSV)</span>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {records.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 bg-card rounded-3xl border-2 border-dashed border-border p-12"
              >
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plus className="text-muted-foreground" size={40} />
                </div>
                <h2 className="text-3xl font-black text-foreground mb-3 tracking-tight">NO DATA FOUND</h2>
                <p className="text-muted-foreground mb-8 italic max-w-sm mx-auto">
                  It looks like you haven't saved any calculations yet. 
                  Take your first step today!
                </p>
                <Link to="/">
                  <Button size="lg" className="h-14 px-10 rounded-xl font-bold shadow-lg shadow-primary/20">
                    CALCULATE NOW
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
                  <h2 className="text-xl font-black text-foreground tracking-tight uppercase">
                    Timeline Logs ({records.length})
                  </h2>
                  <div className="flex gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-3 py-1 bg-muted rounded-full border border-border">
                      SORTED BY LATEST
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <AnimatePresence mode="popLayout">
                    {records.map((record) => (
                      <motion.div
                        key={record.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        layout
                        className={`group border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 bg-card ${getCategoryColor(record.category)}`}
                      >
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-background/50 text-[10px] font-black uppercase tracking-widest text-foreground/70 border border-border">
                              {new Date(record.date).toLocaleDateString(undefined, {
                                month: 'short', day: 'numeric', year: 'numeric'
                              })}
                            </span>
                            <span className="text-[10px] font-bold text-muted-foreground">
                              {new Date(record.date).toLocaleTimeString(undefined, {
                                hour: '2-digit', minute: '2-digit'
                              })}
                            </span>
                          </div>

                          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                            <div className="space-y-1">
                              <p className="text-[10px] font-black uppercase tracking-tighter opacity-60">Metrics</p>
                              <p className="font-black text-lg text-foreground">
                                {record.height}<span className="text-[10px] ml-1 font-bold opacity-70">{record.unit === "metric" ? "cm" : "in"}</span>
                              </p>
                              <p className="font-black text-lg text-foreground">
                                {record.weight}<span className="text-[10px] ml-1 font-bold opacity-70">{record.unit === "metric" ? "kg" : "lbs"}</span>
                              </p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-[10px] font-black uppercase tracking-tighter opacity-60">Results</p>
                              <p className="font-black text-3xl text-primary tracking-tighter">
                                {record.bmi}
                              </p>
                              <p className="font-bold text-xs uppercase tracking-widest">
                                {record.category}
                              </p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-[10px] font-black uppercase tracking-tighter opacity-60">Metabolism</p>
                              <p className="font-bold text-sm text-foreground">
                                {record.bmr ? `${record.bmr} kcal/day` : "N/A"}
                              </p>
                              <p className="text-[10px] italic opacity-70">Basal Rate</p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-[10px] font-black uppercase tracking-tighter opacity-60">Daily Goal</p>
                              <p className="font-bold text-sm text-foreground">
                                {record.calories ? `${record.calories} kcal/day` : "N/A"}
                              </p>
                              <p className="text-[10px] italic opacity-70">Maintenence</p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-[10px] font-black uppercase tracking-tighter opacity-60">Target Range</p>
                              <p className="font-bold text-xs text-foreground">
                                {record.idealWeight ? `${record.idealWeight.min} - ${record.idealWeight.max}` : "N/A"}
                              </p>
                              <p className="text-[10px] italic opacity-70">Healthy Weights</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex md:flex-col items-center justify-end gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => deleteRecord(record.id)}
                            className="p-4 bg-destructive/10 text-destructive rounded-xl hover:bg-destructive hover:text-white transition-all duration-300"
                            title="Delete Record"
                          >
                            <Trash2 size={20} />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button variant="outline" className="h-14 px-8 rounded-xl font-bold bg-background">
                      <Plus className="mr-2" size={18} />
                      NEW CALCULATION
                    </Button>
                  </Link>
                  <Link to="/tips">
                    <Button className="h-14 px-8 rounded-xl font-bold shadow-lg shadow-primary/20">
                      EXPLORE WELLNESS TIPS
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
