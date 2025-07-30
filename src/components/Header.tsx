import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">FreeLeadMagnets</span>
              <span className="text-xs text-muted-foreground">Global Cloud Telephony</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/features" className="text-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Solutions <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-elegant py-2 z-50">
                  <button 
                    onClick={() => handleExternalLink('https://salescentri.com/solutions/psa-suite')}
                    className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    PSA Suite
                  </button>
                  <button 
                    onClick={() => handleExternalLink('https://salescentri.com/solutions/by-industry/it')}
                    className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    IT Industry
                  </button>
                  <button 
                    onClick={() => handleExternalLink('https://salescentri.com/solutions/by-use-case/sdr-teams')}
                    className="block w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted"
                  >
                    SDR Teams
                  </button>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
            >
              Free Trial
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => handleExternalLink('https://salescentri.com/get-started/book-demo')}
            >
              Book Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/features" className="text-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
                >
                  Free Trial
                </Button>
                <Button 
                  variant="hero"
                  onClick={() => handleExternalLink('https://salescentri.com/get-started/book-demo')}
                >
                  Book Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;