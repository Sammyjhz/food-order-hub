import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, Download, Plus } from "lucide-react";

interface BMIRecord {
  id: string;
  date: string;
  height: number;
  weight: number;
  bmi: number;
  category: string;
  unit: "metric" | "imperial";
}

export default function History() {
  const [records, setRecords] = useState<BMIRecord[]>([]);

  // Load records from localStorage on mount
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
  };

  const downloadCSV = () => {
    if (records.length === 0) {
      alert("No records to download");
      return;
    }

    const headers = ["Date", "Height", "Weight", "BMI", "Category", "Unit"];
    const rows = records.map((r) => [
      r.date,
      r.height,
      r.weight,
      r.bmi,
      r.category,
      r.unit,
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `bmi-history-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Underweight":
        return "bg-blue-50 border-blue-200 text-blue-900";
      case "Normal Weight":
        return "bg-green-50 border-green-200 text-green-900";
      case "Overweight":
        return "bg-yellow-50 border-yellow-200 text-yellow-900";
      case "Obese":
        return "bg-red-50 border-red-200 text-red-900";
      default:
        return "bg-gray-50 border-gray-200 text-gray-900";
    }
  };

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            BMI History
          </h1>
          <p className="text-muted-foreground">
            Track your BMI calculations over time
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {records.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-card rounded-xl border border-border p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="text-muted-foreground" size={32} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  No History Yet
                </h2>
                <p className="text-muted-foreground mb-6">
                  Start calculating your BMI to see your history here
                </p>
                <Link to="/">
                  <Button className="w-full">Calculate BMI</Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">
                    Your Calculations
                  </h2>
                  <p className="text-muted-foreground">
                    {records.length} calculation{records.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <Button
                  onClick={downloadCSV}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Download size={18} />
                  <span>Export CSV</span>
                </Button>
              </div>

              <div className="space-y-4">
                {records.map((record) => (
                  <div
                    key={record.id}
                    className={`border rounded-lg p-6 flex items-center justify-between ${getCategoryColor(record.category)}`}
                  >
                    <div className="flex-1">
                      <p className="text-sm opacity-75 mb-1">
                        {new Date(record.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-xs opacity-75">Height</p>
                          <p className="font-heading font-bold">
                            {record.height}{" "}
                            {record.unit === "metric" ? "cm" : "in"}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs opacity-75">Weight</p>
                          <p className="font-heading font-bold">
                            {record.weight}{" "}
                            {record.unit === "metric" ? "kg" : "lbs"}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs opacity-75">BMI</p>
                          <p className="font-heading font-bold text-lg">
                            {record.bmi}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs opacity-75">Category</p>
                          <p className="font-heading font-bold">
                            {record.category}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteRecord(record.id)}
                      className="ml-4 p-2 hover:bg-black/10 rounded-lg transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline">Calculate Again</Button>
                </Link>
                <Link to="/tips">
                  <Button>View Health Tips</Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
