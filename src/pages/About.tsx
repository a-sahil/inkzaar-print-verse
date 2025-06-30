
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Globe, label: 'Projects Completed', value: '1000+' },
    { icon: Zap, label: 'Team Members', value: '25+' }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality, ensuring every project meets the highest standards.'
    },
    {
      title: 'Customer Focused',
      description: 'Our clients are at the heart of everything we do, driving our commitment to excellence.'
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to stay ahead of the curve.'
    },
    {
      title: 'Reliability',
      description: 'You can count on us to deliver on time, every time, with consistent quality.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold gradient-text mb-6">About Inkzaar</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Inkzaar is a leading advertising and printing company that specializes in delivering 
            high-quality printing services and innovative influencer marketing solutions. Since our 
            inception, we've been committed to helping businesses grow through creative and effective 
            marketing strategies.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="glass-morphism text-center hover:neon-glow transition-all duration-300">
                <CardContent className="p-6">
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to revolutionize the advertising industry, Inkzaar has grown 
                from a small printing shop to a comprehensive marketing solutions provider. Our 
                journey began with a simple belief: every business deserves access to professional, 
                high-quality marketing materials.
              </p>
              <p>
                Over the years, we've expanded our services to include cutting-edge influencer 
                marketing, helping brands connect with their audiences in authentic and meaningful ways. 
                Today, we serve hundreds of clients across various industries, from startups to 
                established enterprises.
              </p>
              <p>
                Our commitment to innovation and customer satisfaction has made us a trusted partner 
                for businesses looking to make a lasting impact in their markets.
              </p>
            </div>
          </div>
          <div className="glass-morphism rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              To empower businesses with exceptional printing services and innovative marketing 
              solutions that drive growth and create lasting brand impressions.
            </p>
            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the leading provider of integrated advertising solutions, setting new standards 
              for quality, creativity, and customer service in the industry.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-morphism hover:neon-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Overview */}
        <div className="text-center glass-morphism rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">What We Do</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="secondary" className="text-sm py-2 px-4">Digital Printing</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Large Format Printing</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Influencer Marketing</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Brand Design</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Corporate Branding</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Event Marketing</Badge>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            From business cards to billboard campaigns, from micro-influencer partnerships to 
            celebrity endorsements, we provide comprehensive solutions that cover every aspect 
            of your marketing needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
