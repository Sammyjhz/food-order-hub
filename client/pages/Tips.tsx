import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Apple,
  Dumbbell,
  Moon,
  Droplet,
  Heart,
  Brain,
  Utensils,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Tips() {
  const tips = [
    {
      icon: Apple,
      title: "Nutrient Density",
      description: "Focus on whole, unprocessed foods that provide maximum nourishment per calorie.",
      details: [
        "Fill 50% of your plate with vibrant vegetables",
        "Prioritize lean proteins for muscle maintenance",
        "Switch to complex whole grains for sustained energy",
        "Incorporate healthy fats like avocado and nuts",
      ],
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50/50",
    },
    {
      icon: Dumbbell,
      title: "Functional Movement",
      description: "Balance strength, flexibility, and cardiovascular health for long-term mobility.",
      details: [
        "Aim for 150 minutes of zone 2 cardio weekly",
        "Include resistance training twice a week",
        "Integrate daily mobility and stretching",
        "Increase non-exercise activity (NEAT)",
      ],
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50/50",
    },
    {
      icon: Droplet,
      title: "Hydration Optimization",
      description: "Water is the essential medium for all metabolic processes in your body.",
      details: [
        "Drink 30ml of water per kg of body weight",
        "Start your day with 500ml of pure water",
        "Increase intake during high-intensity activity",
        "Use natural electrolytes like sea salt or lemon",
      ],
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-50/50",
    },
    {
      icon: Moon,
      title: "Circadian Rhythm",
      description: "Quality sleep is the foundation of hormonal balance and metabolic health.",
      details: [
        "Maintain a consistent sleep/wake schedule",
        "Block blue light 90 minutes before bedtime",
        "Keep your sleeping environment cool and dark",
        "Aim for 7.5 to 8 hours of restorative sleep",
      ],
      color: "from-purple-500 to-indigo-900",
      bgColor: "bg-purple-50/50",
    },
    {
      icon: Heart,
      title: "Stress Resilience",
      description: "High cortisol levels can disrupt metabolism and lead to weight retention.",
      details: [
        "Practice daily mindfulness or box breathing",
        "Engage in rhythmic movement like walking",
        "Spend time in green or blue natural spaces",
        "Maintain strong social and community ties",
      ],
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50/50",
    },
    {
      icon: Utensils,
      title: "Conscious Consumption",
      description: "How you eat is as important as what you eat for proper digestion.",
      details: [
        "Practice mindful chewing and slow eating",
        "Eat until you are 80% full (Hara Hachi Bu)",
        "Avoid eating within 3 hours of bedtime",
        "Focus on the sensory experience of food",
      ],
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50/50",
    },
    {
      icon: Brain,
      title: "Cognitive Agility",
      description: "A healthy body supports a sharp mind. Keep your brain challenged.",
      details: [
        "Learn a new skill or complex hobby",
        "Prioritize deep work and focused tasks",
        "Minimize passive digital consumption",
        "Practice gratitude and positive framing",
      ],
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50/50",
    },
    {
      icon: Zap,
      title: "Metabolic Health",
      description: "Stabilize blood sugar to maintain consistent energy and focus.",
      details: [
        "Minimize added sugars and refined flours",
        "Eat fiber-rich foods at the start of meals",
        "Take a 10-minute walk after large meals",
        "Consider time-restricted feeding patterns",
      ],
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50/50",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-card border-b border-border py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles size={16} />
            <span>Optimization Protocol</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight uppercase leading-[0.9] mb-6">
            Health & <br />
            <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">Wellness Pillars</span>
          </h1>
          <p className="text-xl text-muted-foreground italic leading-relaxed">
            Science-backed strategies to optimize your body composition, 
            energy levels, and long-term health span.
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative ${tip.bgColor} border border-border rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5`}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tip.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    <span className="text-4xl font-black opacity-10 italic">0{index + 1}</span>
                  </div>

                  <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight uppercase">
                    {tip.title}
                  </h3>

                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed italic">
                    {tip.description}
                  </p>

                  <ul className="grid grid-cols-1 gap-4">
                    {tip.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                        <span className="text-sm font-bold text-foreground/80">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey CTA */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] p-12 md:p-20 text-center border border-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10"></div>
            
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tight uppercase">
              Start Your Protocol
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Track History", link: "/history", icon: "📊" },
                { label: "Live Calculator", link: "/", icon: "🧮" },
                { label: "BMI Logic", link: "/chart", icon: "📚" },
              ].map((item, idx) => (
                <Link key={idx} to={item.link}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-background rounded-2xl border border-border p-6 shadow-sm hover:border-primary/40 transition-all group"
                  >
                    <div className="text-3xl mb-3 group-hover:animate-bounce">{item.icon}</div>
                    <p className="font-black text-sm uppercase tracking-widest">{item.label}</p>
                  </motion.div>
                </Link>
              ))}
            </div>

            <Link to="/">
              <Button size="lg" className="h-16 px-12 rounded-2xl font-black text-xl shadow-xl shadow-primary/20">
                GET STARTED NOW
                <ArrowRight className="ml-3" size={24} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-muted/30 border border-border rounded-2xl p-8 max-w-4xl mx-auto italic text-center">
            <h3 className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-4">
              Scientific Disclaimer
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              This optimization protocol is for informational purposes only. Every human body is unique. 
              Before implementing major physiological changes, consult with a qualified health professional 
              who understands your personal medical history.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
