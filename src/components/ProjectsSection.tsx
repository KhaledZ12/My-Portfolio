import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

// Import generated project images
import eurekaStoreMockup from '@/assets/eureka-store-mockup.jpg';
import brecciaMockup from '@/assets/brecciaMockup.png';
import lightningMockup from '@/assets/lightningMockup.jpg';
import talabatSolutionMockup from '@/assets/talabat-solution-enhanced-mockup.jpg';
import carServiceMockup from '@/assets/car-service-mockup.jpg';
import contractingMockup from '@/assets/contractingMockup.jpg';
import lawFirmMockup from '@/assets/law-firm-mockup.jpg';
import workerServicesMockup from '@/assets/worker-services-mockup.jpg';
import sheraaTashlihMockup from '@/assets/sheraa-tashlih-mockup.jpg';
import nawafMockup from '@/assets/nawaf.png';
import alshroukMockup from '@/assets/alshrouk.png';
import tashleehMockup from '@/assets/tashleeh.png';
import alawalMockup from '@/assets/alawal.png';


const ProjectsSection = () => {
  const projects = [
    {
      title: "Breccia Store",
      description: "Full e-commerce solution with authentication and payments. Built with modern web technologies for optimal performance.",
      image: brecciaMockup,
      technologies: ["React.js", "Supabase", "Sql", "Stripe"],
      liveUrl: "https://breccia-eg.com/",
      featured: true
    },
    {
      title: "Lightning Marketing Solutions",
      description: "Developed the official website for Lightning Marketing Solutions — a full-service digital agency specializing in web development, media buying, and marketing strategy.",
      image: lightningMockup,
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://lightningsolutions.net",
      featured: true
    },
    {
      title: "Eureka Store",
      description: "Full e-commerce solution with authentication, payments, and course management. Built with modern web technologies for optimal performance.",
      image: eurekaStoreMockup,
      technologies: ["React.js", "Django", "PostgreSQL", "Stripe"],
      liveUrl: "https://eureka-store.vercel.app/",
      githubUrl: "https://github.com/KhaledZ12/Eureka-Store",
      featured: true
    },
    {
      title: "Talabat Solution",
      description: "A comprehensive food delivery platform inspired by Talabat. Features restaurant management, order processing, and customer modules.",
      image: talabatSolutionMockup,
      technologies: [".NET Framework", "SQL Server", "Web API"],
      githubUrl: "https://github.com/KhaledZ12/Talabat.solution",
      featured: true
    },
    {
      title: "Contracting Company",
      description: "A professional Arabic construction company website showcasing services and projects with a modern responsive design.",
      image: contractingMockup,
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://almohtaaref.com/",
      featured: false
    },
    {
      title: "Shira Car Tashlih",
      description: "Professional car scrap and used cars service website with modern design and comprehensive service information.",
      image: carServiceMockup,
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://shiracartashlih.com/",
      featured: false
    },
    {
      title: "Alshruk Tashlih",
      description: "Professional car scrap and used cars service website with modern design and comprehensive service information.",
      image: alshroukMockup,
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://alshuruqtashlih.com/",
      featured: false
    },
    {
      title: "Tashlih Car Shira",
      description: "Professional car scrap and used cars service website with modern design and comprehensive service information.",
      image: tashleehMockup,
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://tashlihcarshira.com/",
      featured: false
    },
    {
      title: "Ali Shoaan Law Firm",
      description: "Elegant legal consultancy website featuring professional design, service portfolios, and client communication tools.",
      image: lawFirmMockup,
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://alishoaan.com/",
      featured: false
    },
    {
      title: "Nawaf Almohsen Law Firm",
      description: "Elegant legal consultancy website featuring professional design, service portfolios, and client communication tools.",
      image: nawafMockup,
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://nawafalmohsen.com/",
      featured: false
    },
    {
      title: "Kanan Al-Amil",
      description: "Comprehensive domestic worker services platform with booking system, worker profiles, and service management.",
      image: workerServicesMockup,
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://kanan-alamil.com/",
      featured: false
    },
    {
      title: "Alawal",
      description: "Comprehensive domestic worker services platform with booking system, worker profiles, and service management.",
      image: alawalMockup,
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://alawul.sa//",
      featured: false
    },
    {
      title: "Sheraa Tashlih",
      description: "Modern car scrap and used cars service website with enhanced user experience and mobile optimization.",
      image: sheraaTashlihMockup,
      technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
      liveUrl: "https://sheraa-tashlih.com/",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of web solutions built for real businesses and clients
          </p>
        </div>
        
        <div className="grid gap-8 max-w-7xl mx-auto">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card 
                key={project.title}
                className="gradient-card shadow-card border-border/50 hover:shadow-hover transition-smooth hover:scale-[1.02] animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <Badge className="gradient-primary text-primary-foreground">Featured</Badge>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button variant="default" size="sm" asChild className="gradient-primary">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card 
                key={project.title}
                className="gradient-card shadow-card border-border/50 hover:shadow-hover transition-smooth hover:scale-105 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover hover:scale-110 transition-smooth"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Visit
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
