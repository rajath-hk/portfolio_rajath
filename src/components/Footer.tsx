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
            <p className="text-muted-foreground mb-4">
              Full Stack Developer passionate about building innovative solutions with AI/ML and modern web technologies.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/rajath-hk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-4 border-border bg-background hover:translate-x-1 hover:translate-y-1 transition-transform"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajath-hegde-1742462ab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border-4 border-border bg-background hover:translate-x-1 hover:translate-y-1 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rajathhege71@gmail.com"
                className="p-2 border-4 border-border bg-background hover:translate-x-1 hover:translate-y-1 transition-transform"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-mono">QUICK LINKS</h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 inline-block"
                  >
                    → {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-mono">CONTACT INFO</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <a
                  href="mailto:rajathhege71@gmail.com"
                  className="text-muted-foreground hover:text-foreground break-all"
                >
                  rajathhege71@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <a
                  href="tel:+919482250897"
                  className="text-muted-foreground hover:text-foreground"
                >
                  +91 9482250897
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-muted-foreground"> Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t-4 border-border text-center">
          <p className="text-muted-foreground font-mono">
            © {currentYear} Rajath Hegde. All rights reserved. Built with React & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
