import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Activity,
  TrendingUp,
  Heart,
  Zap,
  ArrowRight,
  Info,
  BarChart3,
} from "lucide-react";

export default function Index() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      alert("Please enter valid height and weight values");
      return;
    }

    let calculatedBMI: number;

    if (unit === "metric") {
      // BMI = weight (kg) / height (m)²
      const heightInMeters = h / 100;
      calculatedBMI = w / (heightInMeters * heightInMeters);
    } else {
      // BMI = (weight (lbs) / height (inches)²) × 703
      calculatedBMI = (w / (h * h)) * 703;
    }

    setBmi(Math.round(calculatedBMI * 10) / 10);

    // Determine category
    if (calculatedBMI < 18.5) {
      setCategory("Underweight");
    } else if (calculatedBMI < 25) {
      setCategory("Normal Weight");
    } else if (calculatedBMI < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  const getBMIColor = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "text-blue-500";
    if (bmi < 25) return "text-green-500";
    if (bmi < 30) return "text-yellow-500";
    return "text-red-500";
  };

  const getCategoryColor = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "bg-blue-100 text-blue-800";
    if (bmi < 25) return "bg-green-100 text-green-800";
    if (bmi < 30) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const saveToHistory = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!bmi || !h || !w) {
      alert("Please calculate BMI first");
      return;
    }

    const record = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      height: h,
      weight: w,
      bmi: bmi,
      category: category,
      unit: unit,
    };

    const stored = localStorage.getItem("bmiHistory");
    const history = stored ? JSON.parse(stored) : [];
    history.unshift(record);
    localStorage.setItem("bmiHistory", JSON.stringify(history));
    alert("BMI saved to history!");
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info */}
            <div className="space-y-8 pt-8">
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight">
                Know Your
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}
                  Health Status
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Calculate your BMI and understand your health metrics. Track
                your progress and get personalized insights to achieve your
                health goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/chart">
                  <Button size="lg" className="w-full sm:w-auto">
                    View BMI Chart <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link to="/tips">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Health Tips
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Calculator */}
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                BMI Calculator
              </h2>

              {/* Unit Toggle */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => {
                    setUnit("metric");
                    setBmi(null);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${
                    unit === "metric"
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Metric
                </button>
                <button
                  onClick={() => {
                    setUnit("imperial");
                    setBmi(null);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${
                    unit === "imperial"
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  Imperial
                </button>
              </div>

              {/* Inputs */}
              <div className="space-y-4 mb-6">
                <div>
                  <Label htmlFor="height" className="text-foreground">
                    Height {unit === "metric" ? "(cm)" : "(inches)"}
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder={unit === "metric" ? "170" : "67"}
                    value={height}
                    onChange={(e) => {
                      setHeight(e.target.value);
                      setBmi(null);
                    }}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="weight" className="text-foreground">
                    Weight {unit === "metric" ? "(kg)" : "(lbs)"}
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder={unit === "metric" ? "70" : "150"}
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value);
                      setBmi(null);
                    }}
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Calculate Button */}
              <Button onClick={calculateBMI} className="w-full mb-6" size="lg">
                Calculate BMI
              </Button>

              {/* Result */}
              {bmi && (
                <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm mb-2">
                      Your BMI
                    </p>
                    <p className={`text-5xl font-bold ${getBMIColor()}`}>
                      {bmi}
                    </p>
                  </div>
                  <div className="text-center">
                    <span
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor()}`}
                    >
                      {category}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      BMI is a general indicator. For personalized health
                      advice,
                      <br />
                      consult a healthcare professional.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Understanding BMI Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn what your BMI number means
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                range: "< 18.5",
                category: "Underweight",
                color: "bg-blue-100",
                icon: "🔵",
              },
              {
                range: "18.5 - 24.9",
                category: "Normal Weight",
                color: "bg-green-100",
                icon: "🟢",
              },
              {
                range: "25 - 29.9",
                category: "Overweight",
                color: "bg-yellow-100",
                icon: "🟡",
              },
              {
                range: "≥ 30",
                category: "Obese",
                color: "bg-red-100",
                icon: "🔴",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.color} rounded-xl p-6 text-center border-2 border-border`}
              >
                <p className="text-3xl mb-3">{item.icon}</p>
                <p className="text-2xl font-bold text-foreground mb-2">
                  {item.range}
                </p>
                <p className="font-heading font-semibold text-foreground">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
              Why Track Your BMI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Monitor your health journey and stay motivated
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Track Progress",
                description:
                  "Monitor your BMI changes over time and see your health improvements.",
              },
              {
                icon: Heart,
                title: "Health Awareness",
                description:
                  "Understand your health status and take proactive steps.",
              },
              {
                icon: TrendingUp,
                title: "Goal Setting",
                description:
                  "Set realistic health goals and track your journey towards them.",
              },
              {
                icon: Zap,
                title: "Instant Calculation",
                description:
                  "Get your BMI instantly with support for metric and imperial units.",
              },
              {
                icon: BarChart3,
                title: "Visual Charts",
                description:
                  "See BMI categories and ranges in easy-to-understand visual formats.",
              },
              {
                icon: Heart,
                title: "Personalized Tips",
                description:
                  "Get health tips tailored to your BMI category and goals.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
              Start Your Health Journey Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Calculate your BMI now and take the first step towards better
              health.
            </p>
            <Link to="/history">
              <Button size="lg" className="px-8">
                View Your History <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
