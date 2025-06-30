
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Search, ShoppingCart, Star, Filter } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'business', name: 'Business Cards' },
    { id: 'banners', name: 'Banners & Standees' },
    { id: 'brochures', name: 'Brochures & Flyers' },
    { id: 'apparel', name: 'T-Shirts & Apparel' },
    { id: 'promotional', name: 'Promotional Items' }
  ];

  const products = [
    {
      id: '1',
      name: 'Premium Business Cards',
      price: 299,
      originalPrice: 399,
      image: '/placeholder.svg',
      category: 'business',
      rating: 4.8,
      reviews: 124,
      description: 'High-quality matte finish business cards',
      features: ['350 GSM Paper', 'Matte Lamination', '100 Cards']
    },
    {
      id: '2',
      name: 'Flex Banner Printing',
      price: 1499,
      originalPrice: 1799,
      image: '/placeholder.svg',
      category: 'banners',
      rating: 4.9,
      reviews: 89,
      description: 'Weather-resistant flex banners',
      features: ['HD Printing', 'UV Resistant', 'Custom Size']
    },
    {
      id: '3',
      name: 'Tri-fold Brochures',
      price: 799,
      originalPrice: 999,
      image: '/placeholder.svg',
      category: 'brochures',
      rating: 4.7,
      reviews: 67,
      description: 'Professional tri-fold brochures',
      features: ['Art Paper', 'Full Color', '100 Pieces']
    },
    {
      id: '4',
      name: 'Custom T-Shirt Printing',
      price: 499,
      originalPrice: 699,
      image: '/placeholder.svg',
      category: 'apparel',
      rating: 4.6,
      reviews: 156,
      description: 'Premium cotton t-shirts with custom prints',
      features: ['100% Cotton', 'HD Vinyl Print', 'All Sizes']
    },
    {
      id: '5',
      name: 'Promotional Keychains',
      price: 199,
      originalPrice: 299,
      image: '/placeholder.svg',
      category: 'promotional',
      rating: 4.5,
      reviews: 203,
      description: 'Custom branded keychains',
      features: ['Metal Finish', 'Laser Engraving', 'Bulk Orders']
    },
    {
      id: '6',
      name: 'Roll-up Standees',
      price: 2999,
      originalPrice: 3499,
      image: '/placeholder.svg',
      category: 'banners',
      rating: 4.8,
      reviews: 45,
      description: 'Portable roll-up display standees',
      features: ['Aluminum Base', 'Retractable', 'Carrying Case']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen pt-20 px-4 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">Our Products</h1>
          <p className="text-xl text-muted-foreground">
            Discover our wide range of premium printing products
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-morphism border-border/20 focus:border-primary"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-primary animate-pulse-glow" : ""}
              >
                <Filter size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="glass-morphism hover:neon-glow transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-accent-foreground">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">({product.reviews} reviews)</span>
                  </div>

                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                    <span className="text-muted-foreground line-through">₹{product.originalPrice}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 space-y-3">
                <div className="flex gap-2 w-full">
                  <Link to={`/products/${product.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </Link>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
