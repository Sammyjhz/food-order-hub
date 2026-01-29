import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, MapPin, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItemCount = 2; // TODO: Connect to actual cart state

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-heading text-2xl font-bold text-primary">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-heading text-lg">
              🍽️
            </div>
            <span className="hidden sm:inline">FoodHub</span>
          </Link>

          {/* Delivery Address - Desktop */}
          <div className="hidden md:flex items-center gap-2 text-sm px-4 py-2 bg-muted rounded-lg">
            <MapPin size={16} className="text-primary" />
            <span className="text-muted-foreground">Delivering to:</span>
            <span className="font-semibold text-foreground">123 Main St...</span>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-foreground hover:bg-muted rounded-lg transition">
              <Search size={18} />
              <span className="text-sm">Search</span>
            </button>

            <Link to="/account" className="hidden sm:flex">
              <Button variant="ghost" size="icon">
                <User size={20} />
              </Button>
            </Link>

            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag size={20} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
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
            <div className="flex items-center gap-2 px-2 py-2 bg-muted rounded-lg">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Delivering to: 123 Main St...</span>
            </div>
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
