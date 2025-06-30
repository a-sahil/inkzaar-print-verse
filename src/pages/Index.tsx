
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { 
  ArrowDown, 
  Package, 
  Settings, 
  User, 
  Check,
  ShoppingCart,
  Calendar,
  Contact
} from 'lucide-react';

const Index = () => {
  const { user } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Professional Printing Solutions",
      subtitle: "Transform your ideas into reality with our premium printing services",
      image: "/placeholder.svg",
      cta: "Explore Products"
    },
    {
      title: "Influencer Marketing Made Easy",
      subtitle: "Connect with top influencers and grow your brand exponentially",
      image: "/placeholder.svg",
      cta: "Join Network"
    },
    {
      title: "Custom Advertising Solutions",
      subtitle: "From concept to completion, we deliver advertising that works",
      image: "/placeholder.svg",
      cta: "Get Quote"
    }
  ];

  const features = [
    {
      icon: Package,
      title: "Premium Products",
      description: "High-quality printing materials and professional finishes",
      color: "primary"
    },
    {
      icon: Settings,
      title: "Custom Services",
      description: "Tailored solutions for all your advertising needs",
      color: "secondary"
    },
    {
      icon: User,
      title: "Influencer Network",
      description: "Connect with verified influencers across all platforms",
      color: "accent"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "10k+", label: "Products Delivered" },
    { number: "50+", label: "Influencer Partners" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 animate-pulse-glow">
              Welcome to Inkzaar
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {!user ? (
              <>
                <Link to="/login">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 animate-pulse-glow min-w-48">
                    Login as User
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 min-w-48">
                    Login as Admin
                  </Button>
                </Link>
              </>
            ) : (
              <Link to={user.role === 'admin' ? '/admin' : '/dashboard'}>
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary animate-pulse-glow">
                  Go to Dashboard
                </Button>
              </Link>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link to="/products">
              <Card className="glass-morphism hover:neon-glow transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Package className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <h3 className="font-semibold">Browse Products</h3>
                </CardContent>
              </Card>
            </Link>
            <Link to="/services">
              <Card className="glass-morphism hover:neon-glow transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Settings className="w-8 h-8 mx-auto mb-2 text-secondary" />
                  <h3 className="font-semibold">Custom Services</h3>
                </CardContent>
              </Card>
            </Link>
            <Link to="/influencer">
              <Card className="glass-morphism hover:neon-glow transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <User className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <h3 className="font-semibold">Influencer Hub</h3>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Why Choose Inkzaar?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with creative expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-morphism hover:neon-glow transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${feature.color}/10 flex items-center justify-center group-hover:animate-rotate-3d`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold gradient-text mb-2 neon-text">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust Inkzaar for their advertising needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary animate-pulse-glow">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Contact className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
