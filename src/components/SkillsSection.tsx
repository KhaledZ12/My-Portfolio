import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [".NET Core Framework", "C#", "SQL Server", "PostgreSQL", "MySQL", "API Development"]
    },
    {
      title: "Frontend Development", 
      icon: "🎨",
      skills: ["React.js", "React + Vite + Tailwind", "HTML5", "CSS3", "JavaScript", "TypeScript"]
    },
    {
      title: "IT & Networking",
      icon: "🌐", 
      skills: ["Network Administration", "System Troubleshooting", "Windows Systems", "CCNA/CCNP", "Infrastructure Management"]
    },
    {
      title: "Digital Marketing",
      icon: "📊",
      skills: ["Social Media Management", "Media Buying", "Digital Strategy", "Content Marketing", "Analytics"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git", "Docker", "Azure", "Stripe Integration", "REST APIs", "Database Design"]
    },
    {
      title: "Business Skills",
      icon: "💼",
      skills: ["Project Management", "Client Relations", "Team Leadership", "Startup Operations", "Consulting"]
    }
  ];

  return (
    <section id="skills" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern software development and IT solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="gradient-card shadow-card border-border/50 hover:shadow-hover transition-smooth hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;