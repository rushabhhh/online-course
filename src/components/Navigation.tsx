import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, User, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <BookOpen className="h-6 w-6" />
            LearnHub
          </Link>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for courses..."
                className="pl-10 bg-secondary/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/courses"
              className={`hidden md:block text-sm font-medium transition-colors hover:text-primary ${
                isActive("/courses") ? "text-primary" : "text-foreground"
              }`}
            >
              Courses
            </Link>
            
            <Link
              to="/dashboard"
              className={`hidden md:block text-sm font-medium transition-colors hover:text-primary ${
                isActive("/dashboard") ? "text-primary" : "text-foreground"
              }`}
            >
              My Learning
            </Link>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                0
              </span>
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
