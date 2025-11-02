import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CypheronLogo2 from "@/assets/cypheron_logo2.png";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Text */}
            <Link to="/" className="flex items-center gap-3">
              <img
                  src={CypheronLogo2}
                  alt="Cypheron Logo"
                  className="w-12 h-auto rounded"
              />
              <span className="text-2xl font-bold text-primary">Cypheron</span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                  to="/"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive("/") ? "text-foreground" : "text-muted-foreground"
                  }`}
              >
                Home
              </Link>
              <Link
                  to="/about"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive("/about") ? "text-foreground" : "text-muted-foreground"
                  }`}
              >
                About
              </Link>
              <Link
                  to="/services"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive("/services") ? "text-foreground" : "text-muted-foreground"
                  }`}
              >
                Services
              </Link>
              <Link
                  to="/contact"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive("/contact") ? "text-foreground" : "text-muted-foreground"
                  }`}
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;