import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                ABHIDH GROUP
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Empowering growth through education and innovation.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@abhidh.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Business District, City</span>
              </div>
            </div>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="font-semibold mb-4">Abhidh Academy</h4>
            <div className="space-y-2">
              <Link to="/academy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Overview
              </Link>
              <Link to="/academy/school-training" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Soft Skills Training
              </Link>
              <Link to="/academy/technical-training" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Technical Training
              </Link>
              <Link to="/academy/corporate-training" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Corporate Training
              </Link>
            </div>
          </div>

          {/* Creative Links */}
          <div>
            <h4 className="font-semibold mb-4">Abhidh Creative</h4>
            <div className="space-y-2">
              <Link to="/creative" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Overview
              </Link>
              <Link to="/creative/digital-marketing" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Digital Marketing
              </Link>
              <Link to="/creative/development" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                IT & Development
              </Link>
              <Link to="/creative/design" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Creative Solutions
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Who We Are
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog & Insights
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/careers" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 ABHIDH Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/abidhgroup" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/abidhgroup" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://facebook.com/abidhgroup" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;