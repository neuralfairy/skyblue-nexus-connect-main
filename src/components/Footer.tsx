import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gradient-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">FreeLeadMagnets</h3>
                <p className="text-sm text-secondary-foreground/80">Solutions</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80">
              Global cloud-based telephony solutions to scale your outreach with iGCT technology.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Charlotte, NC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@freeleadmagnets.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <div className="space-y-2">
              <button 
                onClick={() => handleExternalLink('https://salescentri.com/solutions/psa-suite')}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                PSA Suite
              </button>
              <button 
                onClick={() => handleExternalLink('https://salescentri.com/platforms/lead-management/voice-ai-agent')}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Voice AI Agent
              </button>
              <button 
                onClick={() => handleExternalLink('https://salescentri.com/platforms/contact-intelligence/ai-aggregator')}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                AI Aggregator
              </button>
              <button 
                onClick={() => handleExternalLink('https://salescentri.com/solutions/use-case-navigator/demo')}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Interactive Demo
              </button>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                About Us
              </Link>
              <button 
                onClick={() => handleExternalLink('https://salescentri.com/company/careers')}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Careers
              </button>
              <button 
                onClick={() => handleExternalLink('https://salescentri.com/company/partners-affiliates')}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Partners
              </button>
              <Link to="/blog" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                Contact Us
              </Link>
              <button 
                onClick={() => handleExternalLink('https://salescentri.com/contact/support-request')}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Support Request
              </button>
              <button 
                onClick={() => handleExternalLink('https://salescentri.com/docs/user-guide')}
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                Documentation
              </button>
              <Link to="/faq" className="block text-secondary-foreground/80 hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-secondary-foreground/80">
              © 2024 FreeLeadMagnets Solutions. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Strategic Backlink */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => handleExternalLink('https://salescentri.com?utm_source=FreeLeadMagnets.com&utm_medium=footer&utm_campaign=partner_network')}
              className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors flex items-center space-x-1"
            >
              <span>Powered by Sales Intelligence Platform</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;