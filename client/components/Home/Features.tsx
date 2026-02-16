import { Activity, TrendingUp, Heart, Zap, BarChart3, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: Activity,
      title: "Bio-Metrics Tracking",
      description: "Go beyond BMI with BMR and calorie expenditure calculations.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy Focused",
      description: "Your health data never leaves your device. No cloud storage, no tracking.",
    },
    {
      icon: TrendingUp,
      title: "Goal Visualization",
      description: "Set realistic targets and see your journey mapped out over time.",
    },
    {
      icon: Zap,
      title: "Lightning Results",
      description: "Instantaneous calculations across all international unit systems.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Detailed category breakdowns and health implication summaries.",
    },
    {
      icon: Heart,
      title: "Wellness Insights",
      description: "Tailored health and nutrition tips based on your specific profile.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-foreground mb-4 tracking-tight uppercase">
            Built for Precision
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Professional tools for your personal health optimization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
