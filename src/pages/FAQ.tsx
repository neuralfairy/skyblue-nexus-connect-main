import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  HelpCircle, ArrowRight, Phone, Zap, DollarSign, 
  Shield, Settings, Users, Globe, MessageSquare
} from "lucide-react";

const FAQ = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: <Zap className="w-5 h-5 text-primary" />,
      faqs: [
        {
          question: "What is iGCT (Global Cloud Telephony)?",
          answer: "iGCT is our comprehensive cloud-based telephony platform that enables businesses to make and receive calls globally with enterprise-grade quality, AI-powered analytics, and seamless integrations. It replaces traditional phone systems with a modern, scalable solution."
        },
        {
          question: "How quickly can I get started with iGCT?",
          answer: "You can be up and running in under 5 minutes. Simply sign up for our free trial, choose your plan, and start making calls immediately. Our setup wizard guides you through the process, and no technical expertise is required."
        },
        {
          question: "Do I need special hardware or software?",
          answer: "No special hardware is required. iGCT works with any internet-connected device including computers, smartphones, tablets, and IP phones. You can use our web app, mobile apps, or integrate with your existing software."
        },
        {
          question: "Can I port my existing phone numbers?",
          answer: "Yes, we support number porting from most carriers worldwide. The process typically takes 1-3 business days for local numbers and 3-7 days for toll-free numbers. Our support team will handle the entire process for you."
        }
      ]
    },
    {
      title: "Features & Capabilities",
      icon: <Phone className="w-5 h-5 text-primary" />,
      faqs: [
        {
          question: "Which countries does iGCT support?",
          answer: "We provide coverage in 150+ countries worldwide with local phone numbers available in over 50 countries. Our global network ensures premium voice quality and reliable connections regardless of your location."
        },
        {
          question: "What AI features are included?",
          answer: "Our AI capabilities include real-time call transcription, sentiment analysis, conversation scoring, keyword detection, automated call summaries, and predictive analytics to help optimize your communication strategy."
        },
        {
          question: "How does the CRM integration work?",
          answer: "We offer native integrations with 50+ CRM platforms including Salesforce, HubSpot, Pipedrive, and Zoho. Call data, recordings, and insights are automatically synced to your CRM with no manual data entry required."
        },
        {
          question: "Can I record calls and is it compliant?",
          answer: "Yes, call recording is available with automatic compliance features including consent management, retention policies, and secure storage. We support compliance with GDPR, HIPAA, and other regulatory requirements."
        }
      ]
    },
    {
      title: "Pricing & Billing",
      icon: <DollarSign className="w-5 h-5 text-primary" />,
      faqs: [
        {
          question: "How does iGCT pricing work?",
          answer: "We offer transparent, tiered pricing based on monthly minutes and features. Plans start at $49/month for up to 1,000 minutes. Enterprise customers get custom pricing based on volume and specific requirements."
        },
        {
          question: "Are there any hidden fees or setup costs?",
          answer: "No, there are no setup fees, activation costs, or hidden charges. You only pay for your monthly subscription and any usage beyond your plan limits at our published per-minute rates."
        },
        {
          question: "Can I change my plan anytime?",
          answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences. There are no cancellation fees or long-term contracts required."
        },
        {
          question: "Do you offer annual billing discounts?",
          answer: "Yes, we offer a 20% discount when you pay annually. Enterprise customers may be eligible for additional volume discounts based on their usage requirements."
        }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="w-5 h-5 text-primary" />,
      faqs: [
        {
          question: "How secure is my data with iGCT?",
          answer: "We maintain bank-grade security with SOC 2 Type II certification, 256-bit encryption, and secure data centers. All communications are encrypted in transit and at rest, with regular security audits and monitoring."
        },
        {
          question: "What compliance certifications do you have?",
          answer: "We're compliant with SOC 2 Type II, GDPR, HIPAA, PCI DSS, and ISO 27001. Our platform is designed to meet the strictest security and privacy requirements for enterprise customers."
        },
        {
          question: "Where is my data stored?",
          answer: "Data is stored in secure, geo-redundant data centers in your region. We offer data residency options to ensure compliance with local regulations. All data centers meet the highest security standards."
        },
        {
          question: "Can I control user access and permissions?",
          answer: "Yes, we provide granular user management with role-based access controls, single sign-on (SSO) support, and detailed audit logs. Administrators can control what features and data each user can access."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: <Settings className="w-5 h-5 text-primary" />,
      faqs: [
        {
          question: "What support is available?",
          answer: "We offer 24/7 support for Enterprise customers and business hours support for other plans. Support includes live chat, email, phone, and our comprehensive knowledge base with tutorials and documentation."
        },
        {
          question: "How do I integrate iGCT with my existing systems?",
          answer: "We provide comprehensive APIs, webhooks, and pre-built integrations. Our technical team offers implementation support, and we have detailed documentation and SDKs for common programming languages."
        },
        {
          question: "What if I experience call quality issues?",
          answer: "Our network is designed for 99.9% uptime with automatic failover. If you experience issues, our support team provides real-time monitoring and troubleshooting. We also offer network optimization recommendations."
        },
        {
          question: "Do you provide training for my team?",
          answer: "Yes, we offer onboarding sessions, training webinars, and detailed documentation. Enterprise customers receive dedicated training sessions and ongoing support from their customer success manager."
        }
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
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Get Answers About
              <span className="bg-gradient-primary bg-clip-text text-transparent"> iGCT</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our Global Cloud Telephony platform, 
              features, pricing, and implementation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                      <Card className="bg-card border-border">
                        <AccordionTrigger className="px-6 py-4 text-left">
                          <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-muted-foreground text-base leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Need More Help?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Can't find what you're looking for? We're here to help with additional resources and support options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Live Chat</CardTitle>
                <CardDescription>Get instant answers from our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleExternalLink('https://salescentri.com/contact/support-request/live-chat')}
                >
                  Start Chat
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Phone Support</CardTitle>
                <CardDescription>Speak directly with our experts</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleExternalLink('https://salescentri.com/contact/support-request')}
                >
                  Call Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Documentation</CardTitle>
                <CardDescription>Comprehensive guides and tutorials</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleExternalLink('https://salescentri.com/docs/user-guide')}
                >
                  View Docs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Book Demo</CardTitle>
                <CardDescription>Schedule a personalized walkthrough</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleExternalLink('https://salescentri.com/get-started/book-demo')}
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Need Help CTA */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              Still Have Questions?
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Our team of iGCT experts is standing by to help you find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => handleExternalLink('https://salescentri.com/contact')}
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => handleExternalLink('https://salescentri.com/get-started/free-trial')}
              >
                Try Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;