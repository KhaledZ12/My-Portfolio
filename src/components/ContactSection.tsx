import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, MapPin, Briefcase } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "elebyawy.khaled@gmail.com",
      href: "mailto:elebyawy.khaled@gmail.com",
      description: "Best for professional inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "01022751508",
      href: "tel:01022751508", 
      description: "Available for urgent matters"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "khaled-alebyawy",
      href: "https://www.linkedin.com/in/khaled-alebyawy",
      description: "Professional networking"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "KhaledZ12",
      href: "https://github.com/KhaledZ12",
      description: "View my code repositories"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or opportunity
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="text-center mb-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                I'm a passionate full-stack developer available for freelance projects. 
                I specialize in building modern web applications, from concept to deployment. 
                Let's discuss how I can help bring your ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-primary" size={20} />
                  <span className="text-foreground font-medium">Freelance Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" size={20} />
                  <span className="text-muted-foreground">Available for remote work worldwide</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {contactMethods.map((method, index) => (
                <Card 
                  key={method.title}
                  className="gradient-card shadow-card border-border/50 hover:shadow-hover transition-smooth hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <a 
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex flex-col items-center text-center gap-4 group"
                    >
                      <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                        <method.icon className="text-primary" size={28} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth text-lg">
                          {method.title}
                        </h4>
                        <p className="text-muted-foreground mb-2 font-medium">{method.value}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;