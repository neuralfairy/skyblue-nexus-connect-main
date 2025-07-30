import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Phone, Globe, Zap, Shield, BarChart3, Settings, 
  Mic, Users, Clock, Target, Headphones, Bot,
  ArrowRight, PlayCircle, CheckCircle
} from "lucide-react";

const Features = () => {
  const [activeDemo, setActiveDemo] = useState("voice");

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const coreFeatures = [
    {
      icon: <Phone className="w-8 h-8 text-primary" />,
      title: "Global Voice Network",
      description: "Connect to 150+ countries with premium voice quality and lowest latency routing.",
      features: ["Premium carriers", "Intelligent routing", "Real-time failover"]
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI-Powered Analytics",
      description: "Advanced call analytics with sentiment analysis and conversation insights.",
      features: ["Sentiment tracking", "Call scoring", "Predictive analytics"]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "CRM Integration",
      description: "Seamlessly integrate with 50+ CRM platforms and sales tools.",
      features: ["Salesforce sync", "HubSpot connector", "Custom APIs"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance certifications.",
      features: ["SOC 2 Type II", "GDPR compliant", "256-bit encryption"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Real-time Reporting",
      description: "Comprehensive dashboards with real-time metrics and custom reports.",
      features: ["Live dashboards", "Custom reports", "API access"]
    },
    {
      icon: <Headphones className="w-8 h-8 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support with dedicated account management.",
      features: ["24/7 availability", "Dedicated CSM", "Priority support"]
    }
  ];

  const advancedFeatures = [
    {
      category: "Voice Intelligence",
      features: [
        "Real-time transcription with 99% accuracy",
        "Conversation sentiment analysis",
        "Key moment detection and tagging",
        "Automated call summaries",
        "Voice biometric authentication"
      ]
    },
    {
      category: "Global Connectivity",
      features: [
        "150+ country coverage with local numbers",
        "Multi-carrier redundancy and failover",
        "Intelligent least-cost routing",
        "Local presence in 50+ cities",
        "Emergency calling compliance"
      ]
    },
    {
      category: "Integration & APIs",
      features: [
        "RESTful APIs with comprehensive documentation",
        "Webhook support for real-time events",
        "Pre-built CRM connectors",
        "Custom workflow automation",
        "Third-party tool integrations"
      ]
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
              iGCT Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Powerful Features for
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Global Communication</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our iGCT platform transforms your communication strategy with advanced features, 
              AI-powered insights, and seamless global connectivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => handleExternalLink('https://salescentri.com/solutions/use-case-navigator/demo')}
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Interactive Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Core Platform Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to scale your global communication and drive better results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience iGCT in Action</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how our platform works with interactive demos and real-world scenarios.
            </p>
          </div>

          <Tabs value={activeDemo} onValueChange={setActiveDemo} className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="voice">Voice Intelligence</TabsTrigger>
              <TabsTrigger value="analytics">Analytics Dashboard</TabsTrigger>
              <TabsTrigger value="integration">CRM Integration</TabsTrigger>
            </TabsList>
            
            <TabsContent value="voice" className="mt-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mic className="w-6 h-6 text-primary" />
                    <span>AI-Powered Voice Intelligence</span>
                  </CardTitle>
                  <CardDescription>
                    Real-time call analysis with sentiment detection and conversation insights.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-subtle rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-muted-foreground">Live Call Analysis</span>
                      <Badge className="bg-primary/10 text-primary">Active</Badge>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Sentiment Score</span>
                        <span className="text-sm font-bold text-primary">+0.8 Positive</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full bg-gradient-primary w-4/5 rounded-full"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">4.2s</div>
                          <div className="text-xs text-muted-foreground">Avg Response Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">127</div>
                          <div className="text-xs text-muted-foreground">Keywords Detected</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleExternalLink('https://salescentri.com/solutions/use-case-navigator/demo')}
                  >
                    Try Interactive Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="mt-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <span>Real-time Analytics Dashboard</span>
                  </CardTitle>
                  <CardDescription>
                    Comprehensive insights and reporting for data-driven decisions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gradient-subtle rounded-lg p-4 text-center">
                      <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">23.4s</div>
                      <div className="text-sm text-muted-foreground">Avg Call Duration</div>
                    </div>
                    <div className="bg-gradient-subtle rounded-lg p-4 text-center">
                      <Target className="w-6 h-6 text-accent mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">89.2%</div>
                      <div className="text-sm text-muted-foreground">Connection Rate</div>
                    </div>
                    <div className="bg-gradient-subtle rounded-lg p-4 text-center">
                      <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">1,247</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleExternalLink('https://salescentri.com/solutions/use-case-navigator/demo')}
                  >
                    View Full Dashboard Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integration" className="mt-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-6 h-6 text-primary" />
                    <span>Seamless CRM Integration</span>
                  </CardTitle>
                  <CardDescription>
                    Connect with your favorite tools and automate your workflow.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho'].map((crm) => (
                      <div key={crm} className="bg-gradient-subtle rounded-lg p-4 text-center">
                        <div className="w-8 h-8 bg-primary/20 rounded mx-auto mb-2"></div>
                        <div className="text-sm font-medium text-foreground">{crm}</div>
                        <div className="text-xs text-primary">Connected</div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleExternalLink('https://salescentri.com/solutions/psa-suite/integrations')}
                  >
                    View All Integrations
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Advanced Capabilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore the depth of our platform with enterprise-grade features and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((section, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              Ready to Transform Your Communication?
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Join thousands of businesses already using iGCT to scale their global outreach.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => handleExternalLink('https://salescentri.com/get-started/book-demo')}
              >
                Book Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;