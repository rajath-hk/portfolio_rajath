import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background border-b-4 border-border shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 border-4 border-border bg-primary transition-transform group-hover:translate-x-1 group-hover:translate-y-1">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-mono hidden sm:block">RAJATH.DEV</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-bold text-sm uppercase tracking-wide transition-all hover:translate-x-1 hover:translate-y-1 ${
                  location.pathname === link.path
                    ? "text-primary underline decoration-4"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="border-4 border-border shadow-sm hover:translate-x-1 hover:translate-y-1 transition-transform"
            >
              <Link to="/contact">Hire Me</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-4 border-border shadow-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-muted border-4 border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 font-bold text-sm uppercase tracking-wide border-b-2 border-border ${
                  location.pathname === link.path ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="w-full mt-4 border-4 border-border shadow-sm"
            >
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Hire Me
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
