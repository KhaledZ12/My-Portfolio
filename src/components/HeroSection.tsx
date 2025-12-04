import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="gradient-primary bg-clip-text text-transparent">
              Khaled Alebyawy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up">
            Computer Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Passionate about building scalable web solutions, managing IT infrastructure, 
            and growing digital businesses through innovative technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="gradient-primary text-primary-foreground hover:shadow-hover transition-smooth hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-smooth hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 animate-slide-up">
            <a 
              href="https://github.com/KhaledZ12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/khaled-alebyawy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:elebyawy.khaled@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:01022751508"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;