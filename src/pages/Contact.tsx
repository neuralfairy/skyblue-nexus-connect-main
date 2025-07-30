import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Phone, Mail, MapPin, Clock, ArrowRight, 
  MessageSquare, Calendar, Users, Headphones,
  Zap, CheckCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to external contact form with pre-filled data
    const params = new URLSearchParams(formData);
    handleExternalLink(`https://salescentri.com/contact/sales-inquiry?${params.toString()}`);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      action: "Call Now",
      url: "tel:+1-800-IGCT-PRO"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      action: "Start Chat",
      url: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Schedule Demo",
      description: "Book a personalized demo session",
      action: "Book Demo",
      url: "https://salescentri.com/get-started/calendly"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      url: "mailto:support@freeleadmagnets.com"
    }
  ];

  const supportOptions = [
    {
      title: "Sales Inquiry",
      description: "Questions about pricing, plans, or custom solutions",
      url: "https://salescentri.com/contact/sales-inquiry",
      icon: <Users className="w-5 h-5 text-primary" />
    },
    {
      title: "Technical Support",
      description: "Get help with platform issues or integration questions",
      url: "https://salescentri.com/contact/support-request",
      icon: <Headphones className="w-5 h-5 text-primary" />
    },
    {
      title: "Partnership Inquiry",
      description: "Explore partnership and integration opportunities",
      url: "https://salescentri.com/contact/partnerships",
      icon: <Zap className="w-5 h-5 text-primary" />
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
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              We're Here to
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Help</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about iGCT? Need help with implementation? Want to schedule a demo? 
              Our team of experts is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer multiple ways to get in touch based on your needs and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleExternalLink(method.url)}
                  >
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your communication needs..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us directly using the information below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Headquarters</div>
                        <div className="text-muted-foreground">
                          <div>Charlotte, North Carolina</div>
                          <div>United States</div>
                        </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-muted-foreground">+1 (800) IGCT-PRO</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground">info@freeleadmagnets.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Support Hours</div>
                        <div className="text-muted-foreground">
                          <div>24/7 for Enterprise customers</div>
                          <div>Mon-Fri 9AM-6PM EST for others</div>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Options */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Support Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {supportOptions.map((option, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      {option.icon}
                      <div className="flex-1">
                        <button
                          onClick={() => handleExternalLink(option.url)}
                          className="text-left"
                        >
                          <div className="font-semibold text-foreground hover:text-primary transition-colors">
                            {option.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {option.description}
                          </div>
                        </button>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">Our Response Commitment</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">&lt; 1 Hour</div>
                    <div className="text-primary-foreground/80">Sales Inquiries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">&lt; 24 Hours</div>
                    <div className="text-primary-foreground/80">General Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">&lt; 15 Min</div>
                    <div className="text-primary-foreground/80">Enterprise Priority</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;