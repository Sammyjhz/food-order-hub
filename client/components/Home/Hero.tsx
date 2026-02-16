import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-[80px] -z-10 animate-pulse transition-all duration-[5000ms]"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest"
          >
            <Sparkles size={16} />
            <span>Health & Vitality Tracker</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-foreground leading-[1.1] tracking-tight"
          >
            Empower Your <br />
            <span className="bg-gradient-to-r from-primary via-emerald-500 to-secondary bg-clip-text text-transparent">
              Wellness Journey
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Beyond just a number. Get a complete picture of your body metrics, 
            metabolism, and healthy weight targets with our precision health engine.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="/chart">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 group">
                Explore BMI Chart 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/tips">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-14 px-8 rounded-xl font-bold text-lg bg-background/50 backdrop-blur-sm border-border hover:bg-muted transition-all"
              >
                Personalized Tips
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
