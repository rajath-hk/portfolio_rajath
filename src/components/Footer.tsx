import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t-4 border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-mono">RAJATH HEGDE</h3>
            <p className="text-muted-foreground mb-6">
              Full-stack developer and creative technologist passionate about building 
              intelligent digital solutions that make a difference.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/rajath-hk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajath-hegde-1742462ab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rajathhege71@gmail.com"
                className="p-3 border-2 border-border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-mono">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-mono">CONTACT INFO</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a href="mailto:rajathhege71@gmail.com" className="text-muted-foreground hover:text-foreground break-all">
                  rajathhege71@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <a href="tel:+919482250897" className="text-muted-foreground hover:text-foreground">
                  +91 9482250897
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Udupi, Karnataka<br />India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Rajath Hegde. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;