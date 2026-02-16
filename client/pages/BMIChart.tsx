import {
  Info,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function BMIChart() {
  const categories = [
    {
      range: "Below 18.5",
      category: "Underweight",
      color: "border-blue-500 bg-blue-50/50",
      textColor: "text-blue-900",
      icon: TrendingDown,
      description: "Body weight is too low for height",
      implications: [
        "Risk of nutritional deficiencies",
        "Weakened immune system function",
        "Potential for low bone density",
        "Lower muscle mass levels",
      ],
      action: "Focus on nutrient-dense calorie surplus"
    },
    {
      range: "18.5 - 24.9",
      category: "Normal Weight",
      color: "border-green-500 bg-green-50/50",
      textColor: "text-green-900",
      icon: CheckCircle,
      description: "Optimal body weight for most adults",
      implications: [
        "Reduced risk of chronic diseases",
        "Efficient cardiovascular function",
        "Optimal energy and vitality levels",
        "Balanced metabolic health",
      ],
      action: "Maintain with balanced diet and activity"
    },
    {
      range: "25 - 29.9",
      category: "Overweight",
      color: "border-yellow-500 bg-yellow-50/50",
      textColor: "text-yellow-900",
      icon: AlertCircle,
      description: "Weight is above standard healthy range",
      implications: [
        "Increased load on weight-bearing joints",
        "Higher risk of insulin resistance",
        "Increased cardiovascular strain",
        "Lower overall respiratory efficiency",
      ],
      action: "Focus on moderate calorie deficit"
    },
    {
      range: "30+",
      category: "Obese",
      color: "border-red-500 bg-red-50/50",
      textColor: "text-red-900",
      icon: TrendingUp,
      description: "Well above standard weight range",
      implications: [
        "Significantly higher metabolic risks",
        "Increased risk of Type 2 Diabetes",
        "Sleep apnea and breathing issues",
        "Chronic inflammation potential",
      ],
      action: "Seek medical and nutritional guidance"
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-card border-b border-border py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:opacity-80 transition mb-6">
            <ArrowLeft size={16} />
            BACK TO CALCULATOR
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight uppercase leading-[0.9] mb-6 flex items-center gap-6">
            <BookOpen className="text-primary hidden sm:block" size={48} />
            The BMI <br />
            <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Health Metric</span>
          </h1>
          <p className="text-xl text-muted-foreground italic max-w-2xl leading-relaxed">
            BMI is a screening tool used to estimate weight-to-height ratio, 
            helping identify potential weight-related health issues.
          </p>
        </div>
      </section>

      {/* Grid Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {categories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`border-t-8 ${item.color} rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 group`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm border border-border group-hover:scale-110 transition-transform`}>
                      <Icon className={item.textColor} size={28} />
                    </div>
                    <div>
                      <p className={`text-2xl font-black ${item.textColor} tracking-tighter`}>
                        {item.range}
                      </p>
                      <p className={`font-black text-xs uppercase tracking-widest ${item.textColor} opacity-80`}>
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-bold text-foreground/80 italic mb-6">
                    {item.description}
                  </p>
                  
                  <div className="space-y-4 pt-4 border-t border-border/50">
                    <p className={`text-[10px] font-black uppercase tracking-widest ${item.textColor}`}>Risk Factors:</p>
                    <ul className="space-y-2">
                      {item.implications.map((risk, ridx) => (
                        <li key={ridx} className="flex items-start gap-2">
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${item.textColor} opacity-40 shrink-0`}></div>
                          <span className="text-[11px] font-bold text-foreground/70 leading-tight">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`mt-8 p-4 rounded-xl bg-white border border-border/50 text-center shadow-inner`}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Recommended Strategy:</p>
                    <p className="text-xs font-black text-foreground">{item.action}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Logic */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-primary/5 rounded-[2rem] border border-primary/20 p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight uppercase">
                Mathematical <br /> Precision
              </h2>
              <p className="text-muted-foreground italic leading-relaxed">
                BMI is calculated by dividing an individual's mass in kilograms 
                by the square of their height in meters.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-background rounded-2xl p-6 border border-border shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">Metric Protocol</p>
                  <p className="font-mono text-lg font-bold">BMI = kg / m²</p>
                </div>
                <div className="bg-background rounded-2xl p-6 border border-border shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">Imperial Protocol</p>
                  <p className="font-mono text-lg font-bold">BMI = (lb / in²) × 703</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-64 aspect-square bg-gradient-to-br from-primary to-secondary rounded-[3rem] shadow-2xl flex items-center justify-center text-7xl animate-pulse">
              📐
            </div>
          </div>
        </div>
      </section>

      {/* Constraints */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-muted/30 border border-border rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="flex gap-8 items-start">
              <div className="hidden sm:flex w-16 h-16 bg-white rounded-full items-center justify-center shadow-sm shrink-0">
                <Info className="text-primary" size={32} />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-foreground tracking-tight uppercase">
                  Logical Limitations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    { title: "Athlete Paradox", desc: "Muscle is denser than fat. Elite athletes often classify as overweight on the BMI scale." },
                    { title: "Age Dynamics", desc: "Body composition naturally shifts as we age, making standard scales less accurate for seniors." },
                    { title: "Distribution", desc: "BMI doesn't account for where fat is stored (visceral vs subcutaneous), which matters for health." },
                    { title: "Bone Structure", desc: "Naturally large or small skeletal frames can skew results without indicating health issues." },
                  ].map((limit, lidx) => (
                    <div key={lidx} className="space-y-1">
                      <p className="text-xs font-black uppercase tracking-widest text-foreground">{limit.title}</p>
                      <p className="text-sm text-muted-foreground italic leading-relaxed">{limit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/">
                <Button size="lg" className="h-16 px-12 rounded-2xl font-black text-xl shadow-xl shadow-primary/20">
                  RETURN TO CALCULATOR
                </Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
