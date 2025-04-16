
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MenuIcon,
  XIcon,
  BookOpen,
  Search,
  UserCircle,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status when component mounts and when location changes
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

  // Navigation items based on login status
  const getNavigationItems = () => {
    if (isLoggedIn) {
      return [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/topics/robot-types", label: "Robot Types" },
        { to: "/topics/components", label: "Components" },
        { to: "/topics/control-systems", label: "Control Systems" },
        { to: "/topics/ai-robotics", label: "AI in Robotics" },
        { to: "/topics/future-tech", label: "Future Tech" },
      ];
    }
    return [
      { to: "/topics/robot-types", label: "Robot Types" },
      { to: "/topics/components", label: "Components" },
      { to: "/topics/control-systems", label: "Control Systems" },
      { to: "/topics/ai-robotics", label: "AI in Robotics" },
      { to: "/topics/future-tech", label: "Future Tech" },
      { to: "/glossary", label: "Glossary" },
      { to: "/blog", label: "Blog" },
    ];
  };

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
            {getNavigationItems().map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition"
              >
                {item.label}
              </Link>
            ))}
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
                <Button variant="outline" size="icon" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
                </Button>
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
            {getNavigationItems().map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
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
                <button
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-muted"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  Log Out
                </button>
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
