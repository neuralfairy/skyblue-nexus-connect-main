import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, Globe, Award, TrendingUp, ArrowRight, 
  Phone, Zap, Shield, Target, CheckCircle, Star
} from "lucide-react";

const About = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const values = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global First",
      description: "We believe communication should have no boundaries. Our platform connects businesses across 150+ countries seamlessly."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible with AI-powered communication technology."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Trust & Security",
      description: "Your data and communications are protected with bank-grade security and industry certifications."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Results Driven",
      description: "We measure our success by your success. Every feature is designed to drive measurable business outcomes."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at major telecom provider with 15+ years in cloud communications.",
      image: "/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "AI and machine learning expert, previously led engineering teams at Fortune 500 companies.",
      image: "/team/michael.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Customer Success",
      bio: "Customer experience leader with deep expertise in B2B SaaS and telecommunications.",
      image: "/team/emily.jpg"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Infrastructure and scalability expert who has built systems handling millions of calls daily.",
      image: "/team/david.jpg"
    }
  ];

  const stats = [
    { value: "2019", label: "Founded" },
    { value: "500K+", label: "Monthly Calls" },
    { value: "150+", label: "Countries" },
    { value: "99.9%", label: "Uptime" }
  ];

  const certifications = [
    "SOC 2 Type II",
    "GDPR Compliant",
    "ISO 27001",
    "HIPAA Ready",
    "PCI DSS"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="bg-primary/20 text-primary-foreground border-primary-foreground/20">
              <Users className="w-4 h-4 mr-2" />
              About FreeLeadMagnets
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
              Connecting Businesses
              <span className="text-primary-glow"> Globally</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              We're on a mission to democratize global communication by making enterprise-grade 
              cloud telephony accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Empowering Global Business Communication
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2019, FreeLeadMagnets Solutions emerged from a simple observation: 
                businesses were struggling with expensive, complex telephony solutions that didn't scale with their growth.
              </p>
              <p className="text-lg text-muted-foreground">
                Our iGCT (Global Cloud Telephony) platform combines cutting-edge AI technology 
                with reliable global infrastructure to deliver enterprise-grade communication solutions 
                that are both powerful and easy to use.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Reduce communication costs by up to 60%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Improve global reach and connectivity</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Scale effortlessly with AI-powered insights</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-muted-foreground mt-2">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <Award className="w-4 h-4 mr-2" />
              Leadership Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet the Experts Behind iGCT
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience in telecommunications, 
              AI technology, and business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Security & Compliance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest standards of security and compliance to protect your data and communications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6 pb-6 px-8">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-primary" />
                    <span className="font-semibold text-foreground">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Based in Charlotte, Serving the World
            </h2>
            <p className="text-lg text-muted-foreground">
              Our headquarters are located in Charlotte, NC, but our cloud-first approach means 
              we serve customers globally with the same level of service and support.
            </p>
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="text-xl font-semibold text-foreground">FreeLeadMagnets Solutions</div>
                  <div className="text-muted-foreground">Charlotte, North Carolina</div>
                  <div className="text-muted-foreground">United States</div>
                </div>
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
              Ready to Join Our Global Communication Revolution?
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Experience the power of iGCT for yourself. Start your free trial today 
              or speak with our team about your specific needs.
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
                onClick={() => handleExternalLink('https://salescentri.com/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;