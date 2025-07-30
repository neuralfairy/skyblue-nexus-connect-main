import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar, User, ArrowRight, BookOpen, TrendingUp, 
  Globe, Zap, Phone, BarChart3, Users, Shield
} from "lucide-react";

const Blog = () => {
  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const featuredPost = {
    title: "The Future of Global Business Communication: AI-Powered Cloud Telephony",
    excerpt: "Discover how artificial intelligence is transforming business communication and why iGCT represents the next evolution in global connectivity.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    image: "/blog/featured.jpg"
  };

  const blogPosts = [
    {
      title: "10 Ways iGCT Can Reduce Your Communication Costs by 60%",
      excerpt: "Learn practical strategies to optimize your communication budget while improving global reach and call quality.",
      author: "Michael Chen",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Cost Optimization",
      icon: <TrendingUp className="w-5 h-5 text-primary" />
    },
    {
      title: "Global Expansion Made Simple: A Complete Guide to International Calling",
      excerpt: "Everything you need to know about setting up reliable international communication for your growing business.",
      author: "Emily Rodriguez",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Global Business",
      icon: <Globe className="w-5 h-5 text-primary" />
    },
    {
      title: "AI Analytics in Action: How Conversation Intelligence Drives Sales Success",
      excerpt: "Real-world examples of how AI-powered call analytics help sales teams improve performance and close more deals.",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "AI & Technology",
      icon: <Zap className="w-5 h-5 text-primary" />
    },
    {
      title: "Security First: Protecting Your Business Communications in 2024",
      excerpt: "Best practices for maintaining security and compliance in cloud-based communication systems.",
      author: "Sarah Johnson",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Security",
      icon: <Shield className="w-5 h-5 text-primary" />
    },
    {
      title: "Building High-Performance Sales Teams with Cloud Telephony",
      excerpt: "How modern communication tools enable sales teams to achieve better results and higher productivity.",
      author: "Michael Chen",
      date: "December 3, 2024",
      readTime: "8 min read",
      category: "Sales Strategy",
      icon: <Users className="w-5 h-5 text-primary" />
    },
    {
      title: "ROI Calculator: Measuring the Business Impact of iGCT Implementation",
      excerpt: "A comprehensive guide to calculating and maximizing the return on investment from your communication platform.",
      author: "Emily Rodriguez",
      date: "December 1, 2024",
      readTime: "12 min read",
      category: "Business Impact",
      icon: <BarChart3 className="w-5 h-5 text-primary" />
    }
  ];

  const categories = [
    "All Posts",
    "Industry Insights", 
    "AI & Technology",
    "Global Business",
    "Cost Optimization",
    "Security",
    "Sales Strategy"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <BookOpen className="w-4 h-4 mr-2" />
              Thought Leadership
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              iGCT Insights &
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on global communication, 
              AI technology, and business growth strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-card border-border overflow-hidden hover:shadow-elegant transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-primary flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <Phone className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <div className="text-sm">Featured Article</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="space-y-4">
                    <Badge className="bg-primary/10 text-primary">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button 
                      variant="hero" 
                      onClick={() => handleExternalLink('https://salescentri.com/resources/whitepapers-ebooks')}
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest Articles & Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our collection of in-depth articles, guides, and industry insights.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    {post.icon}
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{post.readTime}</div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleExternalLink('https://salescentri.com/resources/whitepapers-ebooks')}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Additional Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Dive deeper with our comprehensive guides, whitepapers, and educational content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Whitepapers</CardTitle>
                <CardDescription>In-depth research and industry analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleExternalLink('https://salescentri.com/resources/whitepapers-ebooks')}
                >
                  View Library
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Case Studies</CardTitle>
                <CardDescription>Real customer success stories and results</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleExternalLink('https://salescentri.com/resources/case-studies')}
                >
                  Read Stories
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Tutorials</CardTitle>
                <CardDescription>Step-by-step guides and best practices</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleExternalLink('https://salescentri.com/resources/tutorials-webinars')}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              Stay Updated with iGCT Insights
            </h2>
            <p className="text-lg text-secondary-foreground/80">
              Get the latest articles, industry insights, and product updates delivered to your inbox.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => handleExternalLink('https://salescentri.com/resources/whitepapers-ebooks')}
            >
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;