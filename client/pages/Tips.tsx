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
} from "lucide-react";

export default function Tips() {
  const tips = [
    {
      icon: Apple,
      title: "Eat Balanced Meals",
      description:
        "Include a mix of fruits, vegetables, whole grains, lean proteins, and healthy fats in every meal.",
      details: [
        "Fill half your plate with vegetables and fruits",
        "Choose whole grain bread and pasta",
        "Include lean proteins like chicken, fish, or beans",
        "Use healthy oils like olive oil",
      ],
    },
    {
      icon: Dumbbell,
      title: "Stay Active",
      description:
        "Aim for at least 150 minutes of moderate activity or 75 minutes of intense activity per week.",
      details: [
        "Walk, jog, or cycle regularly",
        "Try strength training 2-3 times per week",
        "Take the stairs instead of elevators",
        "Stretch daily to maintain flexibility",
      ],
    },
    {
      icon: Droplet,
      title: "Drink Water",
      description:
        "Stay hydrated by drinking plenty of water throughout the day.",
      details: [
        "Aim for 8-10 glasses of water daily",
        "Replace sugary drinks with water",
        "Drink water before, during, and after exercise",
        "Listen to your body's thirst signals",
      ],
    },
    {
      icon: Moon,
      title: "Get Quality Sleep",
      description:
        "Aim for 7-9 hours of quality sleep each night for optimal health.",
      details: [
        "Maintain a consistent sleep schedule",
        "Create a dark, quiet sleeping environment",
        "Avoid screens 1 hour before bedtime",
        "Limit caffeine in the afternoon and evening",
      ],
    },
    {
      icon: Heart,
      title: "Manage Stress",
      description:
        "Reduce stress through relaxation techniques and mindfulness practices.",
      details: [
        "Practice meditation or deep breathing",
        "Try yoga or tai chi",
        "Spend time in nature",
        "Talk to friends, family, or a counselor",
      ],
    },
    {
      icon: Utensils,
      title: "Control Portions",
      description:
        "Be mindful of portion sizes to maintain a healthy weight.",
      details: [
        "Use smaller plates and bowls",
        "Eat slowly and chew thoroughly",
        "Don't eat directly from packages",
        "Stop eating when 80% full",
      ],
    },
    {
      icon: Brain,
      title: "Stay Mentally Active",
      description:
        "Keep your mind sharp through learning and mental exercises.",
      details: [
        "Read books or learn new skills",
        "Do puzzles or brain teasers",
        "Engage in meaningful conversations",
        "Practice mindfulness and meditation",
      ],
    },
    {
      icon: Zap,
      title: "Reduce Sugar Intake",
      description:
        "Limit added sugars and choose whole foods over processed options.",
      details: [
        "Read nutrition labels carefully",
        "Choose fresh fruits over sugary snacks",
        "Limit soft drinks and energy drinks",
        "Cook at home instead of eating out",
      ],
    },
  ];

  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            Health & Wellness Tips
          </h1>
          <p className="text-muted-foreground">
            Practical advice to help you maintain a healthy BMI and lifestyle
          </p>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground">
                      {tip.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4">{tip.description}</p>

                  <ul className="space-y-2">
                    {tip.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></span>
                        <span className="text-sm text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Start Your Health Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background rounded-xl border border-border p-8 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-heading font-bold text-foreground mb-2">
                Track Progress
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Monitor your BMI regularly and track your progress over time
              </p>
              <Link to="/history">
                <Button variant="outline" className="w-full">
                  View History
                </Button>
              </Link>
            </div>

            <div className="bg-background rounded-xl border border-border p-8 text-center">
              <div className="text-4xl mb-4">🧮</div>
              <h3 className="font-heading font-bold text-foreground mb-2">
                Calculate BMI
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get your current BMI and understand what it means for your health
              </p>
              <Link to="/">
                <Button className="w-full">Calculate Now</Button>
              </Link>
            </div>

            <div className="bg-background rounded-xl border border-border p-8 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-heading font-bold text-foreground mb-2">
                Learn More
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Understand BMI categories and their health implications
              </p>
              <Link to="/chart">
                <Button variant="outline" className="w-full">
                  View Chart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="font-heading text-lg font-bold text-blue-900 mb-3">
              Medical Disclaimer
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              These tips are for general informational purposes only and should
              not be considered medical advice. Before making significant changes
              to your diet or exercise routine, consult with a healthcare
              professional, especially if you have any existing health
              conditions.
            </p>
            <p className="text-sm text-blue-800">
              Everyone's health needs are different, and what works for one
              person may not work for another. Consider working with a dietitian
              or personal trainer for personalized guidance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
