
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MenuIcon,
  XIcon,
  BookOpen,
  Search,
  UserCircle,
  LayoutDashboard,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // This is a placeholder - in real app would come from auth context
  const isLoggedIn = location.pathname.includes('/dashboard') || 
                     location.pathname === '/login' || 
                     location.pathname === '/register';

  return (
    <nav className="bg-white dark:bg-robotics-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary mr-2" />
              <span className="font-display font-bold text-xl text-foreground">
                Robo<span className="text-primary">Pedia</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <Link to="/topics/robot-types" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition">
              Robot Types
            </Link>
            <Link to="/topics/components" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition">
              Components
            </Link>
            <Link to="/topics/control-systems" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition">
              Control Systems
            </Link>
            <Link to="/topics/ai-robotics" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition">
              AI in Robotics
            </Link>
            <Link to="/topics/future-tech" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition">
              Future Tech
            </Link>
            <Link to="/glossary" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition">
              Glossary
            </Link>
            <Link to="/blog" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition">
              Blog
            </Link>
          </div>

          {/* Search & Auth */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            
            {isLoggedIn ? (
              <>
                <Link to="/dashboard">
                  <Button variant="outline" className="flex items-center">
                    <LayoutDashboard className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="outline" size="icon">
                    <UserCircle className="h-4 w-4" />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="flex items-center">
                    <UserCircle className="h-4 w-4 mr-2" />
                    Log in
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-robotics-background animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/topics/robot-types"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Robot Types
            </Link>
            <Link
              to="/topics/components"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </Link>
            <Link
              to="/topics/control-systems"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Control Systems
            </Link>
            <Link
              to="/topics/ai-robotics"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              AI in Robotics
            </Link>
            <Link
              to="/topics/future-tech"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Future Tech
            </Link>
            <Link
              to="/glossary"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Glossary
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
              </>
            ) : (
              <div className="pt-4 pb-3 border-t border-muted">
                <div className="flex items-center px-3">
                  <Button variant="outline" size="icon" className="mr-2">
                    <Search className="h-4 w-4" />
                  </Button>
                  <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full mb-2">
                      Log in
                    </Button>
                  </Link>
                </div>
                <div className="px-3">
                  <Link to="/register" className="w-full block" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
