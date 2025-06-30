
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  ShoppingCart, 
  Menu, 
  X, 
  LogOut,
  Settings,
  Package,
  Home,
  Contact,
  Calendar
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { totalItems } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/products', label: 'Products', icon: Package },
    { path: '/services', label: 'Services', icon: Settings },
    { path: '/influencer', label: 'Influencer Hub', icon: User },
    { path: '/about', label: 'About', icon: Calendar },
    { path: '/contact', label: 'Contact', icon: Contact },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-sky-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="text-lg font-bold text-sky-500">Inkzaar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-2 py-1 rounded-lg transition-all duration-300 ${
                  isActive(path)
                    ? 'text-sky-500 bg-sky-500/10'
                    : 'text-gray-300 hover:text-sky-500 hover:bg-sky-500/5'
                }`}
              >
                <Icon size={14} />
                <span className="text-sm">{label}</span>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            {user ? (
              <>
                {/* Cart */}
                <Link to="/cart" className="relative">
                  <Button variant="ghost" size="sm" className="relative h-8 px-2">
                    <ShoppingCart size={16} />
                    {totalItems > 0 && (
                      <Badge className="absolute -top-1 -right-1 bg-sky-500 text-white text-xs h-4 w-4 p-0 flex items-center justify-center">
                        {totalItems}
                      </Badge>
                    )}
                  </Button>
                </Link>

                {/* User Menu */}
                <div className="relative group">
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 h-8 px-2">
                    <User size={16} />
                    <span className="hidden sm:block text-sm">{user.name}</span>
                  </Button>
                  
                  {/* Dropdown */}
                  <div className="absolute right-0 mt-1 w-48 bg-black border border-gray-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-1">
                      <Link
                        to={user.role === 'admin' ? '/admin' : '/dashboard'}
                        className="flex items-center space-x-2 w-full text-left p-2 rounded hover:bg-sky-500/10 text-gray-300 hover:text-sky-500 transition-colors text-sm"
                      >
                        <Settings size={14} />
                        <span>Dashboard</span>
                      </Link>
                      <button
                        onClick={logout}
                        className="flex items-center space-x-2 w-full text-left p-2 rounded hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-colors text-sm"
                      >
                        <LogOut size={14} />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="h-8 px-3 text-sm">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="h-8 px-3 text-sm">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-8 px-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-2 border-t border-gray-800">
            <div className="flex flex-col space-y-1">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(path)
                      ? 'text-sky-500 bg-sky-500/10'
                      : 'text-gray-300 hover:text-sky-500 hover:bg-sky-500/5'
                  }`}
                >
                  <Icon size={14} />
                  <span className="text-sm">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
