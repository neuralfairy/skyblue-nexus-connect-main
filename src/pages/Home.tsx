import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, Globe, Zap, Users, BarChart3, Shield, 
  ArrowRight, CheckCircle, Star, Quote,
  TrendingUp, Clock, Target, HeadphonesIcon
} from "lucide-react";

const Home = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const features = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Connect to 150+ countries with premium voice quality and local presence."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "AI-Powered",
      description: "Advanced analytics with sentiment analysis and conversation insights."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance and end-to-end encryption."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with live metrics and custom reporting."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "TechFlow Solutions",
      content: "iGCT transformed our global outreach. We've seen a 40% increase in connection rates and significantly improved call quality across all our international campaigns.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      company: "GlobalConnect Corp",
      content: "The AI-powered analytics provide incredible insights into our team's performance. We can now optimize our calling strategies in real-time.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Success Manager",
      company: "ScaleUp Inc",
      content: "Implementation was seamless, and the support team is exceptional. Our customer satisfaction scores have improved dramatically since switching to iGCT.",
      rating: 5
    }
  ];

  const stats = [
    { value: "500K+", label: "Monthly Calls", icon: <Phone className="w-6 h-6 text-primary" /> },
    { value: "150+", label: "Countries", icon: <Globe className="w-6 h-6 text-primary" /> },
    { value: "99.9%", label: "Uptime", icon: <Target className="w-6 h-6 text-primary" /> },
    { value: "24/7", label: "Support", icon: <HeadphonesIcon className="w-6 h-6 text-primary" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <Zap className="w-4 h-4 mr-2" />
              Core Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose iGCT for Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Global Cloud Telephony platform combines cutting-edge technology with proven reliability 
              to deliver exceptional communication experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trusted by Growing Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join thousands of companies already scaling their communication with iGCT.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="mx-auto w-fit p-3 bg-primary/10 rounded-lg">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                Business Impact
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Measurable Results for Your Business
              </h2>
              <p className="text-lg text-muted-foreground">
                Our clients typically see significant improvements in their communication metrics 
                within the first 30 days of implementation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground"><strong>40% increase</strong> in connection rates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground"><strong>60% reduction</strong> in communication costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground"><strong>25% improvement</strong> in team productivity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-foreground"><strong>99.9% uptime</strong> guarantee</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => handleExternalLink('https://salescentri.com/resources/case-studies')}
                >
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
                >
                  Calculate ROI
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-card border-border shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <span>Performance Dashboard</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-subtle rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">847</div>
                      <div className="text-sm text-muted-foreground">Active Calls</div>
                    </div>
                    <div className="bg-gradient-subtle rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">98.7%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Call Quality</span>
                      <span className="text-sm font-medium text-foreground">Excellent</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-full bg-gradient-primary w-[95%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Global Coverage</span>
                      <span className="text-sm font-medium text-foreground">150+ Countries</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-full bg-gradient-primary w-full rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <Users className="w-4 h-4 mr-2" />
              Customer Success
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business leaders are saying about iGCT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/30" />
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              Ready to Scale Your Global Communication?
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Join thousands of businesses using iGCT to transform their outreach. 
              Start your free trial today or book a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
              >
                Start Free Trial
              </Button>
            </div>
            <p className="text-sm text-secondary-foreground/60">
              No credit card required • 14-day free trial • Setup in under 5 minutes
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;