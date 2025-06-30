
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Package, 
  User, 
  Calendar,
  Settings,
  Star,
  Trophy,
  Target
} from 'lucide-react';

const UserDashboard = () => {
  const { user } = useAuth();
  const { totalItems, totalPrice } = useCart();

  const recentOrders = [
    { id: '1', product: 'Business Cards', status: 'Delivered', date: '2024-01-15', price: 299 },
    { id: '2', product: 'Banner Printing', status: 'In Progress', date: '2024-01-20', price: 1499 },
    { id: '3', product: 'Brochure Design', status: 'Pending', date: '2024-01-22', price: 799 }
  ];

  const quotations = [
    { id: '1', service: 'Custom Hoarding', status: 'Quoted', date: '2024-01-18', quote: 15000 },
    { id: '2', service: 'T-shirt Printing', status: 'Pending', date: '2024-01-21', quote: null }
  ];

  const influencerStats = {
    tier: 'Bronze',
    points: 250,
    nextTierPoints: 500,
    collaborations: 3,
    earnings: 2500
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'bg-green-500/20 text-green-400';
      case 'in progress': return 'bg-blue-500/20 text-blue-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400';
      case 'quoted': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-muted-foreground">Manage your orders, quotations, and profile from your dashboard</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-morphism hover:neon-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Cart Items</p>
                  <p className="text-2xl font-bold text-primary">{totalItems}</p>
                </div>
                <ShoppingCart className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-morphism hover:neon-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Cart Value</p>
                  <p className="text-2xl font-bold text-secondary">₹{totalPrice}</p>
                </div>
                <Package className="w-8 h-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-morphism hover:neon-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Orders</p>
                  <p className="text-2xl font-bold text-accent">{recentOrders.length}</p>
                </div>
                <Calendar className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="glass-morphism hover:neon-glow transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Tier Points</p>
                  <p className="text-2xl font-bold text-yellow-400">{influencerStats.points}</p>
                </div>
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="glass-morphism p-1">
            <TabsTrigger value="orders" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              My Orders
            </TabsTrigger>
            <TabsTrigger value="quotations" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              Quotations
            </TabsTrigger>
            <TabsTrigger value="influencer" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Influencer
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-muted data-[state=active]:text-muted-foreground">
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Recent Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 glass-morphism rounded-lg">
                      <div>
                        <h3 className="font-semibold">{order.product}</h3>
                        <p className="text-muted-foreground text-sm">Order #{order.id} • {order.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={`mb-2 ${getStatusColor(order.status)}`}>
                          {order.status}
                        </Badge>
                        <p className="font-semibold">₹{order.price}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Link to="/products">
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                        Browse More Products
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quotations" className="space-y-6">
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Service Quotations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quotations.map((quote) => (
                    <div key={quote.id} className="flex items-center justify-between p-4 glass-morphism rounded-lg">
                      <div>
                        <h3 className="font-semibold">{quote.service}</h3>
                        <p className="text-muted-foreground text-sm">Quote #{quote.id} • {quote.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={`mb-2 ${getStatusColor(quote.status)}`}>
                          {quote.status}
                        </Badge>
                        <p className="font-semibold">
                          {quote.quote ? `₹${quote.quote}` : 'Pending'}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Link to="/services">
                      <Button className="w-full bg-gradient-to-r from-secondary to-accent">
                        Request New Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="influencer" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-morphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    Influencer Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Current Tier:</span>
                    <Badge className="bg-yellow-500/20 text-yellow-400">{influencerStats.tier}</Badge>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress to Silver</span>
                      <span>{influencerStats.points}/{influencerStats.nextTierPoints}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(influencerStats.points / influencerStats.nextTierPoints) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{influencerStats.collaborations}</p>
                      <p className="text-muted-foreground text-sm">Collaborations</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-secondary">₹{influencerStats.earnings}</p>
                      <p className="text-muted-foreground text-sm">Earnings</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-morphism">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/influencer">
                    <Button className="w-full justify-start bg-gradient-to-r from-accent to-accent/80">
                      View Influencer Hub
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    Update Portfolio
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Collaboration History
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Name</label>
                    <p className="font-semibold">{user?.name}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Email</label>
                    <p className="font-semibold">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Account Type</label>
                    <Badge className="bg-primary/20 text-primary">User Account</Badge>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Member Since</label>
                    <p className="font-semibold">January 2024</p>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="mr-3">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button variant="outline">
                    Change Password
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;
