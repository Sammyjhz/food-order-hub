import { Link } from "react-router-dom";
import { Menu, X, User, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-heading text-2xl font-bold text-primary">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-heading text-lg font-bold">
              💪
            </div>
            <span className="hidden sm:inline">HealthCalc</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground hover:text-primary font-medium transition">
              Calculator
            </Link>
            <Link to="/chart" className="text-foreground hover:text-primary font-medium transition">
              BMI Chart
            </Link>
            <Link to="/history" className="text-foreground hover:text-primary font-medium transition">
              History
            </Link>
            <Link to="/tips" className="text-foreground hover:text-primary font-medium transition">
              Tips
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Link to="/account" className="hidden sm:flex">
              <Button variant="ghost" size="icon">
                <User size={20} />
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            <Link
              to="/"
              className="block text-foreground hover:text-primary font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Calculator
            </Link>
            <Link
              to="/chart"
              className="block text-foreground hover:text-primary font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              BMI Chart
            </Link>
            <Link
              to="/history"
              className="block text-foreground hover:text-primary font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              History
            </Link>
            <Link
              to="/tips"
              className="block text-foreground hover:text-primary font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tips
            </Link>
            <Link
              to="/account"
              className="flex items-center gap-2 text-foreground hover:text-primary font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User size={18} />
              Account
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
