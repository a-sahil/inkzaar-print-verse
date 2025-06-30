
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Printer, Image, Shirt, FileText, Award, Megaphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Printer,
      title: 'Digital Printing',
      description: 'High-quality digital printing for all your business needs',
      features: ['HD Quality', 'Fast Turnaround', 'Bulk Orders'],
      color: 'text-blue-500'
    },
    {
      icon: Image,
      title: 'Large Format Printing',
      description: 'Banners, posters, and signage in any size',
      features: ['Weather Resistant', 'Custom Sizes', 'UV Protection'],
      color: 'text-green-500'
    },
    {
      icon: Shirt,
      title: 'Apparel Printing',
      description: 'Custom t-shirts, uniforms, and promotional wear',
      features: ['Various Materials', 'Bulk Discounts', 'Design Support'],
      color: 'text-purple-500'
    },
    {
      icon: FileText,
      title: 'Marketing Materials',
      description: 'Brochures, flyers, and promotional materials',
      features: ['Creative Design', 'Quality Paper', 'Fast Delivery'],
      color: 'text-orange-500'
    },
    {
      icon: Award,
      title: 'Corporate Branding',
      description: 'Complete branding solutions for businesses',
      features: ['Logo Design', 'Brand Guidelines', 'Print Materials'],
      color: 'text-red-500'
    },
    {
      icon: Megaphone,
      title: 'Event Marketing',
      description: 'Event banners, standees, and promotional items',
      features: ['Event Planning', 'On-site Setup', 'Bulk Orders'],
      color: 'text-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From digital printing to complete branding solutions, we offer comprehensive 
            advertising and printing services to help your business stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="glass-morphism hover:neon-glow transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="mr-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Request Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center glass-morphism rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Our team specializes in creating 
            custom printing and advertising solutions tailored to your specific needs.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
