
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Star, 
  Trophy, 
  Target, 
  Users, 
  TrendingUp, 
  Award,
  Instagram,
  Facebook,
  Youtube,
  Twitter
} from 'lucide-react';

const InfluencerHub = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [collaborationForm, setCollaborationForm] = useState({
    brandName: '',
    description: '',
    budget: '',
    timeline: '',
    requirements: ''
  });
  const [influencerForm, setInfluencerForm] = useState({
    name: '',
    email: '',
    phone: '',
    niche: '',
    instagram: '',
    facebook: '',
    youtube: '',
    twitter: '',
    followers: ''
  });

  const { toast } = useToast();

  const tiers = [
    {
      name: 'Bronze',
      minPoints: 0,
      maxPoints: 499,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-500/20',
      benefits: ['Basic collaboration opportunities', 'Monthly newsletters', 'Community access'],
      icon: Star
    },
    {
      name: 'Silver',
      minPoints: 500,
      maxPoints: 1499,
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/20',
      benefits: ['Priority collaboration matching', 'Exclusive campaigns', 'Performance analytics', 'All Bronze benefits'],
      icon: Trophy
    },
    {
      name: 'Gold',
      minPoints: 1500,
      maxPoints: Infinity,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      benefits: ['Premium brand partnerships', 'Higher commission rates', 'Personal account manager', 'All Silver benefits'],
      icon: Award
    }
  ];

  const handleCollaborationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Collaboration request submitted!",
      description: "We'll review your request and get back to you within 24 hours.",
    });
    setCollaborationForm({
      brandName: '',
      description: '',
      budget: '',
      timeline: '',
      requirements: ''
    });
  };

  const handleInfluencerRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration
    toast({
      title: "Registration submitted!",
      description: "Thank you for registering. We'll review your profile and contact you soon.",
    });
    setInfluencerForm({
      name: '',
      email: '',
      phone: '',
      niche: '',
      instagram: '',
      facebook: '',
      youtube: '',
      twitter: '',
      followers: ''
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Influencer Collaboration Hub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with top influencers and brands to create impactful marketing campaigns
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: Target },
            { id: 'tiers', label: 'Tier System', icon: Trophy },
            { id: 'collaborate', label: 'Request Collaboration', icon: Users },
            { id: 'register', label: 'Join as Influencer', icon: TrendingUp }
          ].map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant={activeTab === id ? "default" : "outline"}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 ${
                activeTab === id ? 'bg-primary animate-pulse-glow' : ''
              }`}
            >
              <Icon size={16} />
              {label}
            </Button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass-morphism hover:neon-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">500+ Influencers</h3>
                  <p className="text-muted-foreground">Active verified influencers across all platforms</p>
                </CardContent>
              </Card>

              <Card className="glass-morphism hover:neon-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-semibold mb-2">1000+ Campaigns</h3>
                  <p className="text-muted-foreground">Successful collaborations completed</p>
                </CardContent>
              </Card>

              <Card className="glass-morphism hover:neon-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-semibold mb-2">98% Success Rate</h3>
                  <p className="text-muted-foreground">Client satisfaction and campaign success</p>
                </CardContent>
              </Card>
            </div>

            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle>How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Submit Request</h3>
                    <p className="text-muted-foreground text-sm">Tell us about your brand and campaign goals</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-secondary">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Get Matched</h3>
                    <p className="text-muted-foreground text-sm">We match you with the perfect influencers</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Launch Campaign</h3>
                    <p className="text-muted-foreground text-sm">Execute and track your successful campaign</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tier System Tab */}
        {activeTab === 'tiers' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold gradient-text mb-4">Influencer Tier System</h2>
              <p className="text-muted-foreground">Earn points through successful collaborations and unlock exclusive benefits</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier, index) => (
                <Card key={tier.name} className={`glass-morphism hover:neon-glow transition-all duration-300 ${tier.bgColor}`}>
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-background/20 flex items-center justify-center`}>
                      <tier.icon className={`w-8 h-8 ${tier.color}`} />
                    </div>
                    <CardTitle className={`text-2xl ${tier.color}`}>{tier.name}</CardTitle>
                    <p className="text-muted-foreground">
                      {tier.minPoints} - {tier.maxPoints === Infinity ? '∞' : tier.maxPoints} points
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-current rounded-full mr-3 opacity-60" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle>How to Earn Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 glass-morphism rounded-lg">
                      <span>Complete a collaboration</span>
                      <Badge className="bg-primary/20 text-primary">+100 points</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 glass-morphism rounded-lg">
                      <span>Client gives 5-star rating</span>
                      <Badge className="bg-secondary/20 text-secondary">+50 points</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 glass-morphism rounded-lg">
                      <span>Refer a new influencer</span>
                      <Badge className="bg-accent/20 text-accent">+25 points</Badge>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 glass-morphism rounded-lg">
                      <span>Campaign exceeds targets</span>
                      <Badge className="bg-primary/20 text-primary">+75 points</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 glass-morphism rounded-lg">
                      <span>Complete profile setup</span>
                      <Badge className="bg-secondary/20 text-secondary">+20 points</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 glass-morphism rounded-lg">
                      <span>Monthly activity bonus</span>
                      <Badge className="bg-accent/20 text-accent">+30 points</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Collaboration Request Tab */}
        {activeTab === 'collaborate' && (
          <Card className="glass-morphism max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl gradient-text">Request Collaboration</CardTitle>
              <p className="text-center text-muted-foreground">
                Let us know about your brand and we'll connect you with the perfect influencers
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCollaborationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="brandName">Brand/Company Name</Label>
                    <Input
                      id="brandName"
                      value={collaborationForm.brandName}
                      onChange={(e) => setCollaborationForm({...collaborationForm, brandName: e.target.value})}
                      placeholder="Enter your brand name"
                      required
                      className="glass-morphism border-border/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range (₹)</Label>
                    <Input
                      id="budget"
                      value={collaborationForm.budget}
                      onChange={(e) => setCollaborationForm({...collaborationForm, budget: e.target.value})}
                      placeholder="e.g., 50,000 - 1,00,000"
                      required
                      className="glass-morphism border-border/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Campaign Description</Label>
                  <Textarea
                    id="description"
                    value={collaborationForm.description}
                    onChange={(e) => setCollaborationForm({...collaborationForm, description: e.target.value})}
                    placeholder="Describe your product/service and campaign goals..."
                    required
                    className="glass-morphism border-border/20 focus:border-primary min-h-24"
                  />
                </div>

                <div>
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Input
                    id="timeline"
                    value={collaborationForm.timeline}
                    onChange={(e) => setCollaborationForm({...collaborationForm, timeline: e.target.value})}
                    placeholder="e.g., 2-4 weeks"
                    required
                    className="glass-morphism border-border/20 focus:border-primary"
                  />
                </div>

                <div>
                  <Label htmlFor="requirements">Specific Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={collaborationForm.requirements}
                    onChange={(e) => setCollaborationForm({...collaborationForm, requirements: e.target.value})}
                    placeholder="Target audience, content type, platform preferences, etc."
                    className="glass-morphism border-border/20 focus:border-primary min-h-24"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary animate-pulse-glow">
                  Submit Collaboration Request
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Influencer Registration Tab */}
        {activeTab === 'register' && (
          <Card className="glass-morphism max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-2xl gradient-text">Join as Influencer</CardTitle>
              <p className="text-center text-muted-foreground">
                Register to become part of our exclusive influencer network
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInfluencerRegistration} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={influencerForm.name}
                      onChange={(e) => setInfluencerForm({...influencerForm, name: e.target.value})}
                      placeholder="Enter your full name"
                      required
                      className="glass-morphism border-border/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={influencerForm.email}
                      onChange={(e) => setInfluencerForm({...influencerForm, email: e.target.value})}
                      placeholder="Enter your email"
                      required
                      className="glass-morphism border-border/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={influencerForm.phone}
                      onChange={(e) => setInfluencerForm({...influencerForm, phone: e.target.value})}
                      placeholder="Enter your phone number"
                      required
                      className="glass-morphism border-border/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="niche">Content Niche</Label>
                    <Input
                      id="niche"
                      value={influencerForm.niche}
                      onChange={(e) => setInfluencerForm({...influencerForm, niche: e.target.value})}
                      placeholder="e.g., Fashion, Tech, Lifestyle"
                      required
                      className="glass-morphism border-border/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-4 block">Social Media Handles</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Instagram className="w-5 h-5 text-pink-500" />
                      <Input
                        placeholder="Instagram username"
                        value={influencerForm.instagram}
                        onChange={(e) => setInfluencerForm({...influencerForm, instagram: e.target.value})}
                        className="glass-morphism border-border/20 focus:border-primary"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Youtube className="w-5 h-5 text-red-500" />
                      <Input
                        placeholder="YouTube channel"
                        value={influencerForm.youtube}
                        onChange={(e) => setInfluencerForm({...influencerForm, youtube: e.target.value})}
                        className="glass-morphism border-border/20 focus:border-primary"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Facebook className="w-5 h-5 text-blue-500" />
                      <Input
                        placeholder="Facebook page"
                        value={influencerForm.facebook}
                        onChange={(e) => setInfluencerForm({...influencerForm, facebook: e.target.value})}
                        className="glass-morphism border-border/20 focus:border-primary"
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Twitter className="w-5 h-5 text-blue-400" />
                      <Input
                        placeholder="Twitter handle"
                        value={influencerForm.twitter}
                        onChange={(e) => setInfluencerForm({...influencerForm, twitter: e.target.value})}
                        className="glass-morphism border-border/20 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="followers">Total Followers (across all platforms)</Label>
                  <Input
                    id="followers"
                    value={influencerForm.followers}
                    onChange={(e) => setInfluencerForm({...influencerForm, followers: e.target.value})}
                    placeholder="e.g., 50,000"
                    required
                    className="glass-morphism border-border/20 focus:border-primary"
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-accent to-secondary animate-pulse-glow">
                  Register as Influencer
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default InfluencerHub;
