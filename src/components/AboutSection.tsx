import { Card, CardContent } from '@/components/ui/card';
import profilePicture from '@/assets/profile-picture.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate engineer combining technical expertise with business innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in mt-20">
            <Card className="gradient-card shadow-card border-border/50 hover:shadow-hover transition-smooth max-w-md mx-auto">
              <CardContent className="p-16">
                <div className="w-52 h-52 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-lg hover:border-primary/50 transition-all duration-300">
                  <img 
                    src={profilePicture}
                    alt="Khaled Alebyawy - Software & Network Engineer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
                    style={{ objectPosition: '50% 55%' }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Computer Engineer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated Software and Network Engineer with comprehensive experience in 
                backend development, frontend technologies, IT infrastructure, and digital 
                business solutions. My passion lies in creating robust, scalable applications 
                and managing complex Network environments.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                Professional Focus
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Full-stack web development with .NET Core and React
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  IT infrastructure and network administration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Digital marketing and business solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Client-focused web solutions and consulting
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                Education & Experience
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Bachelor's degree in Computer Engineering, combined with hands-on experience 
                in full-stack development as a freelance developer. I specialize in building 
                scalable web applications and delivering complete digital solutions for clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;