import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "IT & Network Engineer",
      company: "Arab Contractors Company",
      period: "Current Position",
      type: "Full-time",
      description: "Leading IT infrastructure management, network administration, and system optimization. Responsible for maintaining Windows systems, troubleshooting network issues, and implementing technology solutions that enhance operational efficiency.",
      achievements: [
        "Managing enterprise network infrastructure",
        "System administration and troubleshooting",
        "IT support and user training",
        "Network security implementation"
      ]
    },
    {
      title: "Freelance Full-Stack Developer",
      company: "Independent Contractor",
      period: "Ongoing",
      type: "Freelance",
      description: "Developing modern web applications for clients worldwide, specializing in MERN-stack and database solutions. Delivering complete digital solutions from concept to deployment with focus on performance and user experience.",
      achievements: [
        "Built and deployed 6+ client websites",
        "Led full-stack development projects",
        "Database design and API development",
        "Modern responsive web applications"
      ]
    }
  ];

  const education = {
    degree: "Bachelor's in Computer Engineering",
    institution: "University",
    description: "Comprehensive foundation in computer systems, software engineering, and digital technologies with focus on practical applications and industry best practices."
  };

  return (
    <section id="experience" className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey in full-stack development and Network engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Professional Experience */}
          {experiences.map((experience, index) => (
            <Card
              key={experience.title}
              className="gradient-card shadow-card border-border/50 hover:shadow-hover transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground">{experience.title}</CardTitle>
                    <CardDescription className="text-lg text-primary font-medium">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge className="gradient-primary text-primary-foreground w-fit">
                      {experience.period}
                    </Badge>
                    <Badge variant="outline" className="border-accent/40 text-accent w-fit">
                      {experience.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {experience.description}
                </p>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Education */}
          <Card className="gradient-card shadow-card border-border/50 hover:shadow-hover transition-smooth animate-fade-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-foreground">Education</CardTitle>
                  <CardDescription className="text-lg text-primary font-medium">
                    {education.degree}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="border-accent/40 text-accent">
                  Academic
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {education.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;