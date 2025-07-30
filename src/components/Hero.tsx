import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Globe, Phone, Zap } from "lucide-react";

const Hero = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Zap className="w-4 h-4 mr-2" />
                iGCT - Global Cloud Telephony
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Scale Your Outreach with
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Global Cloud</span> Telephony
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transform your sales and customer communication with our intelligent Global Cloud Telephony (iGCT) platform. 
                Connect with prospects worldwide using advanced voice solutions, AI-powered analytics, and seamless integrations.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">99.9% Uptime Guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">Global Coverage</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">AI-Powered Analytics</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-foreground">CRM Integration</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => handleExternalLink('https://salescentri.com/get-started/book-demo')}
                className="group"
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
              >
                Start Free Trial
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500K+</div>
                <div className="text-sm text-muted-foreground">Calls Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-up">
            <div className="relative bg-card rounded-2xl shadow-elegant p-8 border border-border">
              {/* Dashboard Preview */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">iGCT Dashboard</h3>
                  <Badge variant="outline" className="bg-primary/10 text-primary">Live</Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-subtle rounded-lg p-4 text-center">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">847</div>
                    <div className="text-sm text-muted-foreground">Active Calls</div>
                  </div>
                  <div className="bg-gradient-subtle rounded-lg p-4 text-center">
                    <Phone className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">23.4s</div>
                    <div className="text-sm text-muted-foreground">Avg Response</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Call Quality</span>
                    <span className="text-sm font-medium text-foreground">98.7%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary w-[98.7%] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Global Coverage</span>
                    <span className="text-sm font-medium text-foreground">99.2%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary w-[99.2%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary rounded-full p-3 shadow-glow animate-pulse-glow">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent rounded-full p-3 shadow-elegant">
              <Globe className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;