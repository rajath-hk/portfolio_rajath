import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Zap, Award } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Online Classroom Platform",
      subtitle: "Real-Time Virtual Learning Environment",
      description: "A comprehensive virtual classroom platform enabling real-time video communication, live chat, and class management for remote education.",
      longDescription: "Built for MOV Agency's digital marketing program, this platform provides a seamless virtual classroom experience with WebRTC-powered video conferencing, text chat, user authentication, and class scheduling.",
      technologies: ["React", "WebRTC", "Node.js", "Socket.io", "MongoDB", "Authentication"],
      features: [
        "Real-time peer-to-peer video communication using WebRTC",
        "Live text chat with message history",
        "User authentication and role management",
        "Class scheduling and calendar integration",
        "Responsive design for mobile and desktop",
        "99% uptime serving 50+ concurrent users"
      ],
      githubUrl: "https://github.com/rajath-hk/classroom-platform",
      demoUrl: "#",
      status: "Production",
      teamSize: "Solo Project"
    },
    {
      title: "AI-Powered Chatbot",
      subtitle: "Intelligent Customer Support Assistant",
      description: "An advanced chatbot leveraging GPT and Llama 3 models to provide intelligent customer support with contextual understanding and personalized responses.",
      longDescription: "This project demonstrates the integration of cutting-edge AI models to create a conversational agent capable of understanding context, maintaining conversation history, and providing accurate responses to user queries.",
      technologies: ["Python", "GPT API", "Llama 3", "FastAPI", "React", "Tailwind CSS"],
      features: [
        "Natural Language Processing with GPT and Llama 3",
        "Context-aware conversation management",
        "Custom training for domain-specific knowledge",
        "Multi-language support",
        "Integration-ready API endpoints",
        "Analytics dashboard for conversation insights"
      ],
      githubUrl: "https://github.com/rajath-hk/ai-chatbot",
      demoUrl: "#",
      status: "Development",
      teamSize: "Solo Project"
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal Brand Showcase",
      description: "A modern, responsive portfolio website showcasing my skills, projects, and experiences with interactive elements and smooth animations.",
      longDescription: "This very website you're browsing is a project that demonstrates my frontend development skills with React, TypeScript, and modern UI frameworks. It features responsive design, dark/light mode, and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
      features: [
        "Fully responsive design for all device sizes",
        "Dark/light mode with system preference detection",
        "Smooth animations and transitions",
        "Performance optimized with lazy loading",
        "SEO-friendly structure",
        "Accessible UI components"
      ],
      githubUrl: "https://github.com/rajath-hk/portfolio",
      demoUrl: "https://rajath-hk.github.io/portfolio_rajath/",
      status: "Production",
      teamSize: "Solo Project"
    },
    {
      title: "Video Editing Reel",
      subtitle: "Creative Showreel Compilation",
      description: "A professionally edited video reel showcasing my creative video editing and motion graphics skills for promotional and entertainment purposes.",
      longDescription: "This project demonstrates my creative abilities in video editing, motion graphics, color grading, and storytelling. The reel combines various projects to showcase versatility and technical proficiency.",
      technologies: ["Adobe Premiere Pro", "After Effects", "Photoshop", "DaVinci Resolve"],
      features: [
        "Professional color grading and correction",
        "Complex motion graphics and animations",
        "Audio mixing and sound design",
        "Storytelling through visual narrative",
        "Industry-standard export settings",
        "Multiple format deliveries"
      ],
      githubUrl: "#",
      demoUrl: "#",
      status: "Completed",
      teamSize: "Solo Project"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">MY PROJECTS</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of my technical and creative work, from web applications to video productions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-muted border-4 border-border shadow-xl hover:translate-x-2 hover:translate-y-2 transition-transform"
              >
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2 font-mono">{project.title}</h2>
                      <h3 className="text-xl text-primary mb-3">{project.subtitle}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-background border-2 border-border text-sm font-bold flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.teamSize}
                      </span>
                      <span className="px-3 py-1 bg-background border-2 border-border text-sm font-bold">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{project.longDescription}</p>

                  <div className="mb-6">
                    <h4 className="font-bold mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-bold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-background border-2 border-border text-sm font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.githubUrl !== "#" && (
                      <Button asChild variant="outline" className="border-4 border-border shadow-md">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.demoUrl !== "#" && (
                      <Button asChild className="border-4 border-border shadow-md">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <div className="bg-primary text-primary-foreground border-4 border-border p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-mono">
                HAVE A PROJECT IN MIND?
              </h2>
              <p className="text-lg opacity-90 mb-6">
                I'm always excited to work on new challenges and bring creative ideas to life. 
                Let's collaborate and build something amazing together!
              </p>
              <Button asChild size="lg" variant="outline" className="border-4 border-primary-foreground bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg">
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;