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
import pixelMockup from '@/assets/pixel.png';
import nabrassMockup from '@/assets/nabrass.png';
import lamsaMockup from '@/assets/lamsa.png';
import manaratAlmashreqMockup from '@/assets/manaratalmashreq.png';
import xlr8Mockup from '@/assets/xlr8.png';
import raadMockup from '@/assets/Raad.png';

const ProjectsSection = () => {
const projects = [
  {
    title: "XLR8 ERP System",
    description:
      "A full-featured ERP system designed to streamline business operations, including inventory management, sales tracking, and user role management. Built for scalability and performance with a modern web stack.",
    image: xlr8Mockup,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://xlr8.com/",
    featured: true
  },
  {
    title: "Breccia Store",
    description:
      "A complete e-commerce platform enabling customers to browse products, place orders, and manage purchases through a fast and user-friendly interface with secure backend integration.",
    image: brecciaMockup,
    technologies: ["React.js", "Supabase", "SQL"],
    liveUrl: "https://breccia-eg.com/",
    featured: true
  },
  {
    title: "Pixel Portfolio",
    description:
      "A modern and clean portfolio website developed for Pixel, focusing on strong visual presentation, smooth navigation, and responsive design across all devices.",
    image: pixelMockup,
    technologies: ["React.js", "Supabase", "SQL"],
    liveUrl: "https://pixeleg.com/",
    featured: true
  },
  {
    title: "Raad Website",
    description:
      "A modern and clean portfolio website developed for Raad, focusing on strong visual presentation, smooth navigation, and responsive design across all devices.",
    image: raadMockup,
    technologies: ["React.js", "Supabase", "SQL"],
    liveUrl: "https://raad-sa.com/",
    featured: true
  },
  {
    title: "Lightning Marketing Solutions",
    description:
      "The official website for Lightning Marketing Solutions, a full-service digital agency. The platform highlights services, showcases projects, and delivers a strong brand presence with a modern UI/UX.",
    image: lightningMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://lightningsolutions.net",
    featured: false
  },
  {
    title: "Eureka Store",
    description:
      "A full-stack e-commerce solution featuring user authentication, secure payments, and product management. Built with a scalable backend and a responsive frontend optimized for performance.",
    image: eurekaStoreMockup,
    technologies: ["React.js", "Django", "PostgreSQL"],
    liveUrl: "https://eureka-store.vercel.app/",
    githubUrl: "https://github.com/KhaledZ12/Eureka-Store",
    featured: true
  },
  {
    title: "Talabat Solution",
    description:
      "A comprehensive food delivery system inspired by Talabat, including restaurant management, order processing, and customer services with a robust backend architecture.",
    image: talabatSolutionMockup,
    technologies: [".NET Framework", "SQL Server", "Web API"],
    githubUrl: "https://github.com/KhaledZ12/Talabat.solution",
    featured: true
  },
  {
    title: "Contracting Company Website",
    description:
      "A professional Arabic website for a construction company, showcasing services, completed projects, and company profile with a clean and responsive layout.",
    image: contractingMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://almohtaaref.com/",
    featured: false
  },
  {
    title: "Shira Car Tashlih",
    description:
      "A modern service website for car scrap and used car trading, designed to clearly present services and improve customer communication.",
    image: carServiceMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://shiracartashlih.com/",
    featured: false
  },
  {
    title: "Alshruk Tashlih",
    description:
      "A clean and responsive website for car dismantling and scrap services, optimized for fast loading and easy navigation.",
    image: alshroukMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://alshuruqtashlih.com/",
    featured: false
  },
  {
    title: "Tashlih Car Shira",
    description:
      "A service-focused website for car dismantling businesses, built to enhance online presence and customer trust.",
    image: tashleehMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://tashlihcarshira.com/",
    featured: false
  },
  {
    title: "Ali Shoaan Law Firm",
    description:
      "An elegant website for a legal consultancy firm, highlighting services, expertise, and providing clear communication channels for clients.",
    image: lawFirmMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://alishoaan.com/",
    featured: false
  },
  {
    title: "Nawaf Almohsen Law Firm",
    description:
      "A professional legal services website designed to present the lawyer’s profile, practice areas, and contact information with a polished UI.",
    image: nawafMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://nawafalmohsen.com/",
    featured: false
  },
  {
    title: "Kanan Al-Amil",
    description:
      "A comprehensive platform for domestic worker services, including worker profiles, service listings, and an organized booking experience.",
    image: workerServicesMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://kanan-alamil.com/",
    featured: false
  },
  {
    title: "Nabrass",
    description:
      "A dedicated website for domestic worker recruitment services, focusing on clarity, trust, and responsive user experience.",
    image: nabrassMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://nabrass.com/",
    featured: false
  },
  {
    title: "Lamsa",
    description:
      "A modern recruitment platform for domestic workers, designed to simplify service browsing and improve customer engagement.",
    image: lamsaMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://ads-lamsa.com/",
    featured: false
  },
  {
    title: "Alawal",
    description:
      "A professional domestic worker services website built to enhance brand credibility and provide a smooth browsing experience.",
    image: alawalMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://alawul.sa/",
    featured: false
  },
  {
    title: "Manarat Almashreq",
    description:
      "A responsive platform for domestic worker services, focusing on accessibility, clean design, and clear service presentation.",
    image: manaratAlmashreqMockup,
    technologies: ["React", "Vite", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://manaratalmashreq.sa/",
    featured: false
  },
  {
    title: "Sheraa Tashlih",
    description:
      "A service-oriented website for car dismantling businesses, built with a modern UI to attract customers and improve visibility.",
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
