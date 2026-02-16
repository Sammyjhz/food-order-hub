import { motion } from "framer-motion";

export function BMIInfoCards() {
  const categories = [
    {
      range: "< 18.5",
      category: "Underweight",
      color: "bg-blue-50/50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      icon: "🔵",
      description: "Below standard weight range"
    },
    {
      range: "18.5 - 24.9",
      category: "Normal Weight",
      color: "bg-green-50/50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      icon: "🟢",
      description: "Healthy and ideal weight range"
    },
    {
      range: "25 - 29.9",
      category: "Overweight",
      color: "bg-yellow-50/50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-700",
      icon: "🟡",
      description: "Slightly above standard range"
    },
    {
      range: "≥ 30",
      category: "Obese",
      color: "bg-red-50/50",
      borderColor: "border-red-200",
      textColor: "text-red-700",
      icon: "🔴",
      description: "Well above standard weight range"
    },
  ];

  return (
    <section className="py-24 bg-card border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-foreground mb-4 tracking-tight uppercase">
            Global Standards
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Understanding the World Health Organization (WHO) classifications
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`${item.color} ${item.borderColor} rounded-2xl p-8 text-center border-2 shadow-sm transition-all duration-300 group`}
            >
              <p className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{item.icon}</p>
              <p className={`text-2xl font-black ${item.textColor} mb-1 tracking-tighter`}>
                {item.range}
              </p>
              <p className="font-bold text-foreground text-lg mb-3">
                {item.category}
              </p>
              <p className="text-xs text-muted-foreground/80 leading-relaxed uppercase font-semibold tracking-widest">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
