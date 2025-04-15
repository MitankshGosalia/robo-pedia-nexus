
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Book, Star, Clock } from "lucide-react";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

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
          </TabsContent>

          <TabsContent value="saved" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Add saved topics content here */}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-4">
            {/* Add learning progress content here */}
          </TabsContent>

          <TabsContent value="contributions" className="space-y-4">
            {/* Add user contributions content here */}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DashboardPage;
