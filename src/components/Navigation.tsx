import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Search, 
  Mountain, 
  MapPin,
  Calendar,
  Phone,
  Home
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      // Navigate to home page first, then scroll to section
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, type: 'scroll' },
    { id: 'monasteries', label: 'Monasteries', icon: Mountain, type: 'scroll' },
    { id: 'map', label: 'Map', icon: MapPin, type: 'scroll' },
    { id: 'culture', label: 'Culture', icon: Calendar, type: 'link', path: '/culture' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <Mountain className="w-8 h-8 text-primary" />
            <span className="text-xl font-medium text-foreground">Sikkim Monasteries</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={item.path!}
                  className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              )
            ))}
          </div>

          {/* Search and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.type === 'link' ? (
                  <Link
                    key={item.id}
                    to={item.path!}
                    className="flex items-center space-x-3 w-full px-3 py-2 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 w-full px-3 py-2 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-200"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                )
              ))}
              {/* Search bar removed from mobile menu */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
