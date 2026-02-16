import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

// Components
import { Hero } from "@/components/Home/Hero";
import { BMIInfoCards } from "@/components/Home/BMIInfoCards";
import { Features } from "@/components/Home/Features";
import { CalculatorForm } from "@/components/Calculator/CalculatorForm";
import { ResultDisplay } from "@/components/Calculator/ResultDisplay";

export default function Index() {
  const { toast } = useToast();
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [bmr, setBmr] = useState<number | null>(null);
  const [idealWeight, setIdealWeight] = useState<{ min: number; max: number } | null>(null);
  const [activityLevel, setActivityLevel] = useState<string>("1.2");
  const [calories, setCalories] = useState<number | null>(null);
  const [showDetailed, setShowDetailed] = useState(false);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    if (!h || !w || h <= 0 || w <= 0) {
      toast({
        title: "Missing Information",
        description: "Please enter valid height and weight values.",
        variant: "destructive",
      });
      return;
    }

    let calculatedBMI: number;
    let heightInCm: number;
    let weightInKg: number;

    if (unit === "metric") {
      heightInCm = h;
      weightInKg = w;
      const heightInMeters = h / 100;
      calculatedBMI = w / (heightInMeters * heightInMeters);
    } else {
      heightInCm = h * 2.54;
      weightInKg = w / 2.20462;
      calculatedBMI = (w / (h * h)) * 703;
    }

    const finalBMI = Math.round(calculatedBMI * 10) / 10;
    setBmi(finalBMI);

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

    // Calculate BMR (Mifflin-St Jeor Equation)
    if (a > 0) {
      let calculatedBmr: number;
      if (gender === "male") {
        calculatedBmr = 10 * weightInKg + 6.25 * heightInCm - 5 * a + 5;
      } else {
        calculatedBmr = 10 * weightInKg + 6.25 * heightInCm - 5 * a - 161;
      }
      const finalBmr = Math.round(calculatedBmr);
      setBmr(finalBmr);
      setCalories(Math.round(finalBmr * parseFloat(activityLevel)));
    }

    // Calculate Ideal Weight Range (Healthy BMI range is 18.5 to 24.9)
    let minW: number, maxW: number;
    if (unit === "metric") {
      const hM = h / 100;
      minW = 18.5 * (hM * hM);
      maxW = 24.9 * (hM * hM);
    } else {
      minW = (18.5 * (h * h)) / 703;
      maxW = (24.9 * (h * h)) / 703;
    }
    setIdealWeight({ min: Math.round(minW * 10) / 10, max: Math.round(maxW * 10) / 10 });
    
    toast({
      title: "Calculation Complete",
      description: `Your BMI is ${finalBMI}. Scroll down for detailed analysis.`,
    });
  };

  const resetBmi = () => setBmi(null);

  const getBMIColor = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "text-blue-500";
    if (bmi < 25) return "text-primary";
    if (bmi < 30) return "text-yellow-500";
    return "text-red-500";
  };

  const getCategoryColor = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "bg-blue-100 text-blue-800";
    if (bmi < 25) return "bg-primary/10 text-primary border border-primary/20";
    if (bmi < 30) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const saveToHistory = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!bmi || !h || !w) {
      toast({
        title: "Error",
        description: "Please calculate BMI first.",
        variant: "destructive",
      });
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
      age: age ? parseFloat(age) : null,
      gender: gender,
      bmr: bmr,
      calories: calories,
      activityLevel: activityLevel,
      idealWeight: idealWeight,
    };

    const stored = localStorage.getItem("bmiHistory");
    const history = stored ? JSON.parse(stored) : [];
    history.unshift(record);
    localStorage.setItem("bmiHistory", JSON.stringify(history));
    
    toast({
      title: "Record Saved",
      description: "Your BMI data has been added to history.",
    });
  };

  return (
    <div className="bg-background">
      <Hero />

      <section id="calculator" className="relative -mt-16 pb-24 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl border border-border p-6 md:p-12 shadow-2xl shadow-primary/5 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left Side - Form */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-foreground mb-2 tracking-tight">
                    CALCULATOR
                  </h2>
                  <p className="text-muted-foreground font-medium italic">
                    Enter your details for a precision health analysis.
                  </p>
                </div>

                <CalculatorForm 
                  unit={unit}
                  setUnit={setUnit}
                  height={height}
                  setHeight={setHeight}
                  weight={weight}
                  setWeight={setWeight}
                  age={age}
                  setAge={setAge}
                  gender={gender}
                  setGender={setGender}
                  activityLevel={activityLevel}
                  setActivityLevel={setActivityLevel}
                  calculateBMI={calculateBMI}
                  resetBmi={resetBmi}
                />
              </div>

              {/* Right Side - Results / Illustration */}
              <div className="lg:col-span-2 sticky top-24">
                {bmi ? (
                  <ResultDisplay 
                    bmi={bmi}
                    category={category}
                    getBMIColor={getBMIColor}
                    getCategoryColor={getCategoryColor}
                    showDetailed={showDetailed}
                    setShowDetailed={setShowDetailed}
                    bmr={bmr}
                    calories={calories}
                    idealWeight={idealWeight}
                    unit={unit}
                    saveToHistory={saveToHistory}
                  />
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-muted/30 rounded-3xl border-2 border-dashed border-border"
                  >
                    <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                      <ArrowRight className="text-primary animate-bounce-x" size={40} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Ready to Start?</h3>
                    <p className="text-muted-foreground text-sm italic">
                      Fill in the form to see your BMI, metabolism rate, and daily calorie requirements.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BMIInfoCards />
      <Features />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-t from-primary/10 to-transparent border-t border-border">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-black text-foreground tracking-tight uppercase">
            Ready to track your progress?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
            Join thousands of users who have taken the first step towards a healthier lifestyle.
          </p>
          <div className="flex justify-center">
            <Link to="/history">
              <Button size="lg" className="h-16 px-12 rounded-2xl font-black text-xl shadow-xl shadow-primary/20 group">
                VIEW MY HISTORY
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
