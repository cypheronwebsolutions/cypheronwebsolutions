import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cypheron Web Solution</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              High-end web solutions to grow your business. We design, build, and scale digital experiences that drive results.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>cypheronwebsolution@gmail.com</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-primary-foreground transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Landing Pages</li>
              <li>Corporate Websites</li>
              <li>E-commerce Sites</li>
              <li>Analytics & Reports</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          © 2025 Cypheron Web Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
