
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Tag } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  categories: string[];
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Collaborative Robots in Manufacturing",
    excerpt: "How collaborative robots are transforming manufacturing floors and working alongside human employees.",
    author: "Dr. Sarah Chen",
    date: "April 10, 2025",
    readTime: "8 min",
    categories: ["Industrial", "Collaboration"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Advances in Soft Robotics: Mimicking Biological Systems",
    excerpt: "Recent breakthroughs in soft robotics are enabling machines that can change shape and navigate complex environments.",
    author: "Michael Rodriguez",
    date: "April 8, 2025",
    readTime: "6 min",
    categories: ["Research", "Biomimicry"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Ethics in AI-Powered Robotics: Setting the Standards",
    excerpt: "As robots become more autonomous and intelligent, what ethical frameworks should guide their development?",
    author: "Prof. Amira Patel",
    date: "April 5, 2025",
    readTime: "10 min",
    categories: ["AI", "Ethics"],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Robotics in Healthcare: Transforming Patient Care",
    excerpt: "From surgical assistance to elderly care, robots are making significant inroads in healthcare settings.",
    author: "Dr. James Wilson",
    date: "April 3, 2025",
    readTime: "7 min",
    categories: ["Healthcare", "Service"],
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Open Source Robotics: Democratizing Innovation",
    excerpt: "How open source hardware and software are making robotics more accessible to developers worldwide.",
    author: "Alex Thompson",
    date: "March 30, 2025",
    readTime: "5 min",
    categories: ["Development", "Open Source"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Learning from Failure: Key Robotics Projects That Shaped the Field",
    excerpt: "Some of the most important advances in robotics came from projects that initially didn't succeed.",
    author: "Dr. Lisa Nakamura",
    date: "March 27, 2025",
    readTime: "9 min",
    categories: ["History", "Innovation"],
    image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?auto=format&fit=crop&q=80&w=800"
  }
];

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>(blogPosts);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "all") {
      setVisiblePosts(blogPosts);
    } else {
      setVisiblePosts(blogPosts.filter(post => 
        post.categories.some(category => 
          category.toLowerCase() === value.toLowerCase())
      ));
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Robotics Blog
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto animate-fade-in delay-100">
            Latest news, insights, and developments from the world of robotics and artificial intelligence.
          </p>
        </div>
        
        <Tabs defaultValue="all" onValueChange={handleTabChange}>
          <TabsList className="flex flex-wrap justify-center mb-8">
            <TabsTrigger value="all">All Topics</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
            <TabsTrigger value="industrial">Industrial</TabsTrigger>
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="ethics">Ethics</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <h3 className="font-display text-xl font-bold leading-tight hover:text-primary transition-colors">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.map((category, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-primary/10 text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground border-t">
                    <div className="flex flex-wrap items-center justify-between w-full">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {visiblePosts.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <p>No articles found in this category.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default BlogPage;
