import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 font-heading text-xl font-bold text-primary mb-4"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-heading text-lg font-bold">
                💪
              </div>
              HealthCalc
            </Link>
            <p className="text-muted-foreground text-sm">
              Your personal BMI calculator and health tracking companion.
              Monitor your health journey with easy-to-use tools and insights.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  BMI Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/chart"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  BMI Chart
                </Link>
              </li>
              <li>
                <Link
                  to="/history"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  to="/tips"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Health Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Health Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Nutrition Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Exercise Ideas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>
              &copy; 2024 HealthCalc. All rights reserved. Not a substitute for
              medical advice.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">
                Twitter
              </a>
              <a href="#" className="hover:text-primary transition">
                Instagram
              </a>
              <a href="#" className="hover:text-primary transition">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
