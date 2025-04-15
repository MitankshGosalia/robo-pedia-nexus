
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Rise of Collaborative Robots in Manufacturing",
    excerpt: "How cobots are changing the manufacturing landscape by working alongside human operators.",
    category: "Industry",
    date: "April 10, 2025",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    id: 2,
    title: "Advancements in Robot Vision Systems",
    excerpt: "Latest breakthroughs in computer vision technology enabling robots to see and understand their environment.",
    category: "Technology",
    date: "April 8, 2025",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 3,
    title: "Soft Robotics: The New Frontier",
    excerpt: "How flexible materials and biomimicry are inspiring a new generation of adaptive robot designs.",
    category: "Innovation",
    date: "April 5, 2025",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1"
  }
];

const RecentArticles = () => {
  return (
    <section className="py-16 bg-muted/30 dark:bg-robotics-background/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl font-bold mb-2">Latest in Robotics</h2>
            <p className="text-muted-foreground">Stay updated with the newest developments and insights</p>
          </div>
          <Link to="/blog" className="hidden md:inline-block">
            <Button variant="outline" className="mt-4 md:mt-0">
              View all articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={post.id} className="overflow-hidden border border-border transition-all duration-200 hover:shadow-md animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-primary px-2 py-1 bg-primary/10 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium mb-2 line-clamp-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-primary hover:text-primary/90 font-medium text-sm inline-flex items-center"
                >
                  Read more
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/blog">
            <Button>
              View all articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
