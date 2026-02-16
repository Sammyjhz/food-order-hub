import { Info, Save } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResultDisplayProps {
  bmi: number;
  category: string;
  getBMIColor: () => string;
  getCategoryColor: () => string;
  showDetailed: boolean;
  setShowDetailed: (show: boolean) => void;
  bmr: number | null;
  calories: number | null;
  idealWeight: { min: number; max: number } | null;
  unit: "metric" | "imperial";
  saveToHistory: () => void;
}

export function ResultDisplay({
  bmi,
  category,
  getBMIColor,
  getCategoryColor,
  showDetailed,
  setShowDetailed,
  bmr,
  calories,
  idealWeight,
  unit,
  saveToHistory,
}: ResultDisplayProps) {
  // BMI Gauge logic
  const getBmiPosition = () => {
    // 15 to 40 is a reasonable range for the gauge
    const min = 15;
    const max = 40;
    const percentage = ((bmi - min) / (max - min)) * 100;
    return Math.min(Math.max(percentage, 0), 100);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-muted/50 rounded-xl p-6 space-y-6 mt-8 border border-border"
    >
      <div className="text-center relative">
        <p className="text-muted-foreground text-sm mb-1">Your Body Mass Index</p>
        <motion.p
          key={bmi}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`text-6xl font-black ${getBMIColor()} drop-shadow-sm`}
        >
          {bmi}
        </motion.p>
        
        {/* BMI Meter/Gauge */}
        <div className="mt-4 h-3 w-full bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-400 rounded-full relative overflow-hidden">
          <motion.div
            initial={{ left: 0 }}
            animate={{ left: `${getBmiPosition()}%` }}
            transition={{ type: "spring", stiffness: 50 }}
            className="absolute top-0 w-2 h-full bg-foreground border-x border-background z-10"
          />
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground mt-1 px-1">
          <span>15</span>
          <span>18.5</span>
          <span>25</span>
          <span>30</span>
          <span>40+</span>
        </div>
      </div>

      <div className="text-center">
        <motion.span
          key={category}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`inline-flex items-center px-6 py-2 rounded-full text-base font-bold shadow-sm ${getCategoryColor()}`}
        >
          {category}
        </motion.span>
      </div>

      {/* Detailed Results Toggle */}
      <div className="pt-4 border-t border-border">
        <button
          onClick={() => setShowDetailed(!showDetailed)}
          className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-background/50 transition group"
        >
          <span className="text-sm font-bold text-foreground group-hover:text-primary transition">Detailed Health Analysis</span>
          <motion.div animate={{ rotate: showDetailed ? 180 : 0 }}>
            <Info size={18} className="text-muted-foreground" />
          </motion.div>
        </button>

        <AnimatePresence>
          {showDetailed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-3 pt-2">
                {bmr && (
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl border border-border shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-medium">BMR (Metabolism)</span>
                      <span className="text-sm text-foreground/80 font-medium italic">Basal Metabolic Rate</span>
                    </div>
                    <span className="font-black text-lg text-primary">{bmr} <span className="text-[10px] font-normal uppercase">kcal/day</span></span>
                  </div>
                )}
                {calories && (
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl border border-border shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-medium">Daily Maintenance Needs</span>
                      <span className="text-sm text-foreground/80 font-medium italic">Total Daily Expenditure</span>
                    </div>
                    <span className="font-black text-lg text-secondary">{calories} <span className="text-[10px] font-normal uppercase">kcal/day</span></span>
                  </div>
                )}
                {idealWeight && (
                  <div className="flex justify-between items-center p-4 bg-background rounded-xl border border-border shadow-sm">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-medium">Ideal Weight Range</span>
                      <span className="text-sm text-foreground/80 font-medium italic">For your height</span>
                    </div>
                    <span className="font-black text-lg text-foreground">
                      {idealWeight.min} - {idealWeight.max} <span className="text-[10px] font-normal uppercase">{unit === "metric" ? "kg" : "lbs"}</span>
                    </span>
                  </div>
                )}
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 text-[11px] leading-relaxed text-muted-foreground italic">
                  Note: BMR is calories burned at rest. Daily Needs includes your specific activity level. Ideal weight is based on a standard healthy BMI range (18.5-24.9).
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={saveToHistory}
          className="w-full py-4 px-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition flex items-center justify-center gap-2"
        >
          <Save size={20} />
          Save to History
        </motion.button>
        <p className="text-[10px] text-muted-foreground text-center italic">
          Disclaimer: BMI is a general indicator and does not account for muscle mass or overall body composition.
        </p>
      </div>
    </motion.div>
  );
}
