import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-heading text-xl font-bold text-primary mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white font-heading text-lg">
                ✨
              </div>
              Nexus
            </Link>
            <p className="text-muted-foreground text-sm">
              Discover amazing products with personalized recommendations and seamless shopping.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-muted-foreground hover:text-primary transition">
                  Deals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>&copy; 2024 Nexus Store. All rights reserved.</p>
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
