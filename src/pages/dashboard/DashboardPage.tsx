
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Book, Star, Clock, BookOpen, Lightbulb, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const savedTopics = [
    {
      title: "Industrial Robotics",
      description: "Overview of industrial robot applications",
      link: "/topics/robot-types"
    },
    {
      title: "AI in Manufacturing",
      description: "Implementation of AI in modern manufacturing",
      link: "/topics/ai-robotics"
    },
    {
      title: "Control Systems",
      description: "Advanced robotics control systems",
      link: "/topics/control-systems"
    }
  ];

  const learningProgress = [
    {
      topic: "Robot Types",
      progress: 75,
      lastAccessed: "2 days ago"
    },
    {
      topic: "Components",
      progress: 45,
      lastAccessed: "1 week ago"
    },
    {
      topic: "Control Systems",
      progress: 30,
      lastAccessed: "3 days ago"
    }
  ];

  const contributions = [
    {
      title: "Added new glossary terms",
      date: "2024-04-15",
      impact: "+5 terms"
    },
    {
      title: "Updated control systems article",
      date: "2024-04-10",
      impact: "Major revision"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-4 animate-fade-in">Welcome to RoboPedia</h1>
          <p className="text-muted-foreground">Your personal robotics learning dashboard</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-4" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 h-auto">
            <TabsTrigger value="overview" className="py-3">Overview</TabsTrigger>
            <TabsTrigger value="saved" className="py-3">Saved Topics</TabsTrigger>
            <TabsTrigger value="progress" className="py-3">Learning Progress</TabsTrigger>
            <TabsTrigger value="contributions" className="py-3">Contributions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="hover:scale-105 transition-transform duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Topics Explored</CardTitle>
                  <Book className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                </CardContent>
              </Card>
              
              <Card className="hover:scale-105 transition-transform duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Saved Articles</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                </CardContent>
              </Card>
              
              <Card className="hover:scale-105 transition-transform duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hours Spent</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8.5</div>
                </CardContent>
              </Card>
              
              <Card className="hover:scale-105 transition-transform duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Contributions</CardTitle>
                  <Bot className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Completed AI in Robotics module</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Trophy className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Earned Control Systems badge</p>
                        <p className="text-xs text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Link to="/topics/future-tech" className="block">
                      <Card className="hover:bg-accent/50 transition-colors">
                        <CardContent className="p-4">
                          <h4 className="font-medium">Future of Robotics</h4>
                          <p className="text-sm text-muted-foreground">Explore emerging trends</p>
                        </CardContent>
                      </Card>
                    </Link>
                    <Link to="/topics/components" className="block">
                      <Card className="hover:bg-accent/50 transition-colors">
                        <CardContent className="p-4">
                          <h4 className="font-medium">Robot Components</h4>
                          <p className="text-sm text-muted-foreground">Learn about essential parts</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {savedTopics.map((topic, index) => (
                <Link key={index} to={topic.link}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{topic.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            <div className="grid gap-4">
              {learningProgress.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg flex justify-between items-center">
                      {item.topic}
                      <span className="text-sm text-muted-foreground">
                        Last accessed: {item.lastAccessed}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {item.progress}% complete
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contributions" className="space-y-4">
            <div className="grid gap-4">
              {contributions.map((contribution, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{contribution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <p className="text-muted-foreground">{contribution.date}</p>
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {contribution.impact}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DashboardPage;
