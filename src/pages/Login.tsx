
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, User, Settings } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState<'user' | 'admin'>('user');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password, loginType);
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      });
      navigate(loginType === 'admin' ? '/admin' : '/dashboard');
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Login Type Selector */}
        <div className="flex mb-8 p-1 glass-morphism rounded-lg">
          <button
            type="button"
            onClick={() => setLoginType('user')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all duration-300 ${
              loginType === 'user'
                ? 'bg-primary text-primary-foreground neon-glow'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <User size={18} />
            User Login
          </button>
          <button
            type="button"
            onClick={() => setLoginType('admin')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all duration-300 ${
              loginType === 'admin'
                ? 'bg-secondary text-secondary-foreground neon-glow'
                : 'text-muted-foreground hover:text-secondary'
            }`}
          >
            <Settings size={18} />
            Admin Login
          </button>
        </div>

        <Card className="glass-morphism border-border/20 animate-fade-in">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-pulse-glow">
              <span className="text-2xl font-bold text-white">I</span>
            </div>
            <div>
              <CardTitle className="text-2xl gradient-text">Welcome Back</CardTitle>
              <p className="text-muted-foreground mt-2">
                Sign in to your {loginType} account
              </p>
            </div>
            <Badge 
              variant={loginType === 'user' ? 'default' : 'secondary'} 
              className="animate-pulse-glow"
            >
              {loginType === 'user' ? 'User Portal' : 'Admin Portal'}
            </Badge>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="glass-morphism border-border/20 focus:border-primary focus:neon-glow transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="glass-morphism border-border/20 focus:border-primary focus:neon-glow transition-all duration-300 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <Link
                  to="/forgot-password"
                  className="text-primary hover:text-primary/80 transition-colors hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className={`w-full h-12 text-lg font-semibold transition-all duration-300 ${
                  loginType === 'user'
                    ? 'bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 animate-pulse-glow'
                    : 'bg-gradient-to-r from-secondary to-secondary/80 hover:opacity-90 animate-pulse-glow'
                }`}
              >
                {isLoading ? 'Signing In...' : `Sign In as ${loginType === 'user' ? 'User' : 'Admin'}`}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-primary hover:text-primary/80 transition-colors hover:underline font-medium"
                >
                  Sign up here
                </Link>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 glass-morphism rounded-lg border border-border/20">
              <p className="text-xs text-muted-foreground text-center mb-2">Demo Credentials:</p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center">
                  <p className="text-primary font-medium">User</p>
                  <p>user@demo.com</p>
                  <p>password123</p>
                </div>
                <div className="text-center">
                  <p className="text-secondary font-medium">Admin</p>
                  <p>admin@demo.com</p>
                  <p>admin123</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
