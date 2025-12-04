import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Khaled Alebyawy Logo" 
                className="h-12 w-auto"
              />
              <h3 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                Khaled Alebyawy
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Computer Engineer passionate about building scalable solutions 
              and helping businesses grow through innovative technology.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3 mb-4">
              <a 
                href="mailto:elebyawy.khaled@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail size={16} />
                elebyawy.khaled@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/KhaledZ12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/khaled-alebyawy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
      {/* Bottom Section */}
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Khaled Alebyawy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;