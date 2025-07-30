import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Star, Zap, Users, Building, Phone } from "lucide-react";

const Pricing = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams getting started with global communication",
      badge: null,
      features: [
        "Up to 1,000 minutes/month",
        "25+ countries coverage",
        "Basic analytics dashboard",
        "Email support",
        "CRM integration (2 platforms)",
        "Standard voice quality"
      ],
      cta: "Start Free Trial",
      ctaUrl: "https://salescentri.com/get-started/free-trial",
      variant: "outline"
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses with higher volume needs",
      badge: "Most Popular",
      features: [
        "Up to 5,000 minutes/month",
        "100+ countries coverage",
        "Advanced analytics & reporting",
        "Priority support",
        "CRM integration (10+ platforms)",
        "Premium voice quality",
        "AI-powered insights",
        "Custom phone numbers"
      ],
      cta: "Start Free Trial",
      ctaUrl: "https://salescentri.com/get-started/free-trial",
      variant: "hero"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with complex needs",
      badge: "Best Value",
      features: [
        "Unlimited minutes",
        "150+ countries coverage",
        "Real-time analytics & AI",
        "24/7 dedicated support",
        "Unlimited CRM integrations",
        "Ultra-premium voice quality",
        "Advanced AI & automation",
        "Custom integrations & APIs",
        "Dedicated account manager",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      ctaUrl: "https://salescentri.com/contact/sales-inquiry",
      variant: "outline"
    }
  ];

  const features = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Global Voice Network",
      description: "Premium carriers and intelligent routing across 150+ countries"
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "AI-Powered Analytics",
      description: "Real-time insights and conversation intelligence"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Team Collaboration",
      description: "Built-in tools for sales teams and call center operations"
    },
    {
      icon: <Building className="w-6 h-6 text-primary" />,
      title: "Enterprise Security",
      description: "SOC 2 compliance, encryption, and data protection"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Simple, Transparent
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your business. Start with a 14-day free trial, 
              no credit card required. Scale as you grow.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-card border-border ${
                  plan.badge === "Most Popular" 
                    ? "ring-2 ring-primary shadow-elegant scale-105" 
                    : "hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.variant as any} 
                    className="w-full"
                    size="lg"
                    onClick={() => handleExternalLink(plan.ctaUrl)}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Included */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What's Included in Every Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              All plans include our core iGCT features with varying limits and support levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-fit p-4 bg-primary/10 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have questions about our pricing? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Can I change plans anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing differences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">What happens after the free trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  After your 14-day free trial, you'll be automatically enrolled in the Starter plan. 
                  You can cancel anytime during or after the trial period.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Are there any setup fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No setup fees, ever. You only pay for your monthly subscription and any additional 
                  usage beyond your plan limits.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Do you offer annual discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! Save 20% when you pay annually. Contact our sales team for custom Enterprise 
                  pricing and additional discounts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Join thousands of businesses already using iGCT to scale their global communication.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => handleExternalLink('https://salescentri.com/get-started/book-demo')}
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;