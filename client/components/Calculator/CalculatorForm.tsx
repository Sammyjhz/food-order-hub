import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CalculatorFormProps {
  unit: "metric" | "imperial";
  setUnit: (unit: "metric" | "imperial") => void;
  height: string;
  setHeight: (h: string) => void;
  weight: string;
  setWeight: (w: string) => void;
  age: string;
  setAge: (a: string) => void;
  gender: "male" | "female";
  setGender: (g: "male" | "female") => void;
  activityLevel: string;
  setActivityLevel: (a: string) => void;
  calculateBMI: () => void;
  resetBmi: () => void;
}

export function CalculatorForm({
  unit,
  setUnit,
  height,
  setHeight,
  weight,
  setWeight,
  age,
  setAge,
  gender,
  setGender,
  activityLevel,
  setActivityLevel,
  calculateBMI,
  resetBmi,
}: CalculatorFormProps) {
  return (
    <div className="space-y-6">
      {/* Unit Toggle */}
      <div className="flex p-1 bg-muted rounded-xl gap-1">
        <button
          onClick={() => {
            setUnit("metric");
            resetBmi();
          }}
          className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-300 ${
            unit === "metric"
              ? "bg-background text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Metric Units
        </button>
        <button
          onClick={() => {
            setUnit("imperial");
            resetBmi();
          }}
          className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-300 ${
            unit === "imperial"
              ? "bg-background text-primary shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Imperial Units
        </button>
      </div>

      {/* Inputs Grid */}
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="age" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Age
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="25"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
                resetBmi();
              }}
              className="h-12 rounded-xl border-border focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Gender</Label>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setGender("male");
                  resetBmi();
                }}
                className={`flex-1 h-12 rounded-xl text-sm font-bold transition-all duration-200 border ${
                  gender === "male"
                    ? "bg-primary/10 text-primary border-primary shadow-inner"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                Male
              </button>
              <button
                onClick={() => {
                  setGender("female");
                  resetBmi();
                }}
                className={`flex-1 h-12 rounded-xl text-sm font-bold transition-all duration-200 border ${
                  gender === "female"
                    ? "bg-primary/10 text-primary border-primary shadow-inner"
                    : "bg-background text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                Female
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="height" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Height {unit === "metric" ? "(cm)" : "(inches)"}
            </Label>
            <Input
              id="height"
              type="number"
              placeholder={unit === "metric" ? "175" : "69"}
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
                resetBmi();
              }}
              className="h-12 rounded-xl border-border focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Weight {unit === "metric" ? "(kg)" : "(lbs)"}
            </Label>
            <Input
              id="weight"
              type="number"
              placeholder={unit === "metric" ? "70" : "154"}
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
                resetBmi();
              }}
              className="h-12 rounded-xl border-border focus:ring-primary focus:border-primary"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="activity" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Activity Level
          </Label>
          <select
            id="activity"
            value={activityLevel}
            onChange={(e) => {
              setActivityLevel(e.target.value);
              resetBmi();
            }}
            className="w-full h-12 px-4 border border-border rounded-xl bg-background text-sm font-medium focus:ring-2 focus:ring-primary outline-none transition-all duration-200 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 9-7 7-7-7' /%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "1.2rem",
            }}
          >
            <option value="1.2">Sedentary (Little to no exercise)</option>
            <option value="1.375">Lightly Active (1-3 days/week)</option>
            <option value="1.55">Moderately Active (3-5 days/week)</option>
            <option value="1.725">Very Active (6-7 days/week)</option>
            <option value="1.9">Extra Active (Hard training & job)</option>
          </select>
        </div>
      </div>

      {/* Calculate Button */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Button 
          onClick={calculateBMI} 
          className="w-full h-14 rounded-xl text-lg font-black tracking-tight shadow-xl shadow-primary/20 bg-gradient-to-r from-primary to-primary/90" 
          size="lg"
        >
          CALCULATE NOW
        </Button>
      </motion.div>
    </div>
  );
}
