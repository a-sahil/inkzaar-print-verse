
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'The Future of Digital Printing: Trends to Watch in 2024',
      excerpt: 'Discover the latest innovations in digital printing technology and how they\'re reshaping the industry.',
      image: '/placeholder.svg',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Technology',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Influencer Marketing ROI: Measuring Success in Modern Campaigns',
      excerpt: 'Learn how to track and measure the effectiveness of your influencer marketing campaigns.',
      image: '/placeholder.svg',
      author: 'Mike Chen',
      date: '2024-01-12',
      category: 'Marketing',
      readTime: '7 min read'
    },
    {
      id: '3',
      title: 'Sustainable Printing Practices for Eco-Conscious Businesses',
      excerpt: 'Explore environmentally friendly printing options and how they benefit your business.',
      image: '/placeholder.svg',
      author: 'Emma Davis',
      date: '2024-01-10',
      category: 'Sustainability',
      readTime: '6 min read'
    },
    {
      id: '4',
      title: 'Building Brand Identity Through Consistent Print Materials',
      excerpt: 'Discover how cohesive print design strengthens your brand recognition and customer loyalty.',
      image: '/placeholder.svg',
      author: 'David Rodriguez',
      date: '2024-01-08',
      category: 'Branding',
      readTime: '4 min read'
    },
    {
      id: '5',
      title: 'The Rise of Micro-Influencers: Why Smaller Can Be Better',
      excerpt: 'Understanding the power of micro-influencers and how they can drive authentic engagement.',
      image: '/placeholder.svg',
      author: 'Lisa Wang',
      date: '2024-01-05',
      category: 'Marketing',
      readTime: '8 min read'
    },
    {
      id: '6',
      title: 'Print Quality vs. Speed: Finding the Perfect Balance',
      excerpt: 'Tips for optimizing your printing workflow without compromising on quality.',
      image: '/placeholder.svg',
      author: 'Tom Wilson',
      date: '2024-01-03',
      category: 'Technology',
      readTime: '5 min read'
    }
  ];

  const categories = ['All', 'Technology', 'Marketing', 'Branding', 'Sustainability'];

  return (
    <div className="min-h-screen pt-20 px-4 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Inkzaar Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends in printing, marketing, and brand development. 
            Get insights from our experts and industry leaders.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              className="glass-morphism hover:bg-primary hover:text-primary-foreground"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="glass-morphism hover:neon-glow transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-primary/10 text-primary">Featured</Badge>
                <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <Badge variant="secondary">{blogPosts[0].category}</Badge>
                </div>
                <Link to={`/blog/${blogPosts[0].id}`}>
                  <Button className="w-fit group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="glass-morphism hover:neon-glow transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-background/80 text-foreground">
                  {post.category}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" size="sm" className="group">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 text-center glass-morphism rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest insights, tips, and industry news 
            directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md bg-background border border-border focus:border-primary outline-none"
            />
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
