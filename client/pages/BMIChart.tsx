import {
  Info,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function BMIChart() {
  return (
    <div className="bg-background">
      {/* Page Header */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-2">
            BMI Chart & Categories
          </h1>
          <p className="text-muted-foreground">
            Understand BMI ranges and what they mean for your health
          </p>
        </div>
      </section>

      {/* BMI Categories Overview */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                range: "Below 18.5",
                category: "Underweight",
                color: "border-blue-500 bg-blue-50",
                textColor: "text-blue-900",
                icon: TrendingDown,
                description: "May need to gain weight",
              },
              {
                range: "18.5 - 24.9",
                category: "Normal Weight",
                color: "border-green-500 bg-green-50",
                textColor: "text-green-900",
                icon: CheckCircle,
                description: "Healthy weight range",
              },
              {
                range: "25 - 29.9",
                category: "Overweight",
                color: "border-yellow-500 bg-yellow-50",
                textColor: "text-yellow-900",
                icon: AlertCircle,
                description: "May need to lose weight",
              },
              {
                range: "30+",
                category: "Obese",
                color: "border-red-500 bg-red-50",
                textColor: "text-red-900",
                icon: TrendingUp,
                description: "Higher health risks",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`border-l-4 ${item.color} rounded-lg p-6`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className={item.textColor} size={24} />
                    <div>
                      <p
                        className={`font-heading text-2xl font-bold ${item.textColor}`}
                      >
                        {item.range}
                      </p>
                      <p
                        className={`font-heading font-semibold ${item.textColor}`}
                      >
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm ${item.textColor}`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {/* Underweight */}
            <div className="bg-card rounded-xl border border-border p-8">
              <h2 className="font-heading text-2xl font-bold text-blue-700 mb-4">
                Underweight (BMI &lt; 18.5)
              </h2>
              <p className="text-muted-foreground mb-4">
                A BMI below 18.5 is considered underweight. This may indicate
                that you're not getting enough nutrients or have certain health
                conditions.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2 text-sm">
                <p className="font-semibold text-blue-900">
                  Health Considerations:
                </p>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>May increase risk of nutritional deficiencies</li>
                  <li>Could be associated with certain health conditions</li>
                  <li>May affect bone density and immune function</li>
                  <li>Consult a doctor if persistently underweight</li>
                </ul>
              </div>
            </div>

            {/* Normal Weight */}
            <div className="bg-card rounded-xl border border-border p-8">
              <h2 className="font-heading text-2xl font-bold text-green-700 mb-4">
                Normal Weight (BMI 18.5 - 24.9)
              </h2>
              <p className="text-muted-foreground mb-4">
                A BMI in this range is generally considered healthy and
                associated with lower health risks for most adults.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-2 text-sm">
                <p className="font-semibold text-green-900">Health Benefits:</p>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Lower risk of chronic diseases</li>
                  <li>Better overall health and wellness</li>
                  <li>Improved physical and mental well-being</li>
                  <li>Maintain this range with healthy habits</li>
                </ul>
              </div>
            </div>

            {/* Overweight */}
            <div className="bg-card rounded-xl border border-border p-8">
              <h2 className="font-heading text-2xl font-bold text-yellow-700 mb-4">
                Overweight (BMI 25 - 29.9)
              </h2>
              <p className="text-muted-foreground mb-4">
                A BMI in this range suggests you may be carrying excess weight
                relative to your height, which can increase certain health
                risks.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-2 text-sm">
                <p className="font-semibold text-yellow-900">
                  Health Considerations:
                </p>
                <ul className="list-disc list-inside text-yellow-800 space-y-1">
                  <li>
                    Increased risk of heart disease and high blood pressure
                  </li>
                  <li>Higher likelihood of type 2 diabetes</li>
                  <li>May affect joint and back health</li>
                  <li>
                    Consider lifestyle changes and consult a healthcare provider
                  </li>
                </ul>
              </div>
            </div>

            {/* Obese */}
            <div className="bg-card rounded-xl border border-border p-8">
              <h2 className="font-heading text-2xl font-bold text-red-700 mb-4">
                Obese (BMI ≥ 30)
              </h2>
              <p className="text-muted-foreground mb-4">
                A BMI of 30 or higher is classified as obese and is associated
                with increased health risks and potential chronic conditions.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-2 text-sm">
                <p className="font-semibold text-red-900">Health Risks:</p>
                <ul className="list-disc list-inside text-red-800 space-y-1">
                  <li>Significantly higher risk of heart disease and stroke</li>
                  <li>High likelihood of type 2 diabetes</li>
                  <li>Increased risk of certain cancers</li>
                  <li>Sleep apnea and respiratory issues</li>
                  <li>Strongly recommend consulting a healthcare provider</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="flex gap-4">
              <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-heading text-xl font-bold text-blue-900 mb-3">
                  Important Notes About BMI
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>
                    <span className="font-semibold">General Tool:</span> BMI is
                    a general screening tool and doesn't diagnose health
                    conditions.
                  </li>
                  <li>
                    <span className="font-semibold">Not for Everyone:</span> BMI
                    may not be accurate for athletes, elderly, or children.
                    Muscle weighs more than fat.
                  </li>
                  <li>
                    <span className="font-semibold">Medical Advice:</span> This
                    calculator is not a substitute for professional medical
                    advice. Always consult healthcare professionals.
                  </li>
                  <li>
                    <span className="font-semibold">Other Factors:</span> Waist
                    circumference, fitness level, and family history also affect
                    health risks.
                  </li>
                  <li>
                    <span className="font-semibold">Individual Variation:</span>{" "}
                    BMI categories are general guidelines. Individual health
                    depends on many factors.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BMI Calculation Formula */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
            How is BMI Calculated?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Metric */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-heading font-bold text-foreground mb-4">
                Metric Formula
              </h3>
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="font-mono text-sm text-foreground">
                  BMI = weight (kg) / height (m)²
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Divide your weight in kilograms by your height in meters,
                squared.
              </p>
            </div>

            {/* Imperial */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-heading font-bold text-foreground mb-4">
                Imperial Formula
              </h3>
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="font-mono text-sm text-foreground">
                  BMI = (weight (lbs) / height (in)²) × 703
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Divide weight in pounds by height in inches squared, then
                multiply by 703.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
