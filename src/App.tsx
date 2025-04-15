
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import RobotTypesPage from "./pages/topics/RobotTypesPage";
import ComponentsPage from "./pages/topics/ComponentsPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AIRoboticsPage from "./pages/topics/AIRoboticsPage";
import ControlSystemsPage from "./pages/topics/ControlSystemsPage";
import FutureTechPage from "./pages/topics/FutureTechPage";
import GlossaryPage from "./pages/GlossaryPage";
import BlogPage from "./pages/BlogPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topics/robot-types" element={<RobotTypesPage />} />
          <Route path="/topics/components" element={<ComponentsPage />} />
          <Route path="/topics/ai-robotics" element={<AIRoboticsPage />} />
          <Route path="/topics/control-systems" element={<ControlSystemsPage />} />
          <Route path="/topics/future-tech" element={<FutureTechPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
