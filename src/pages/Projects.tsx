import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Rajath",
      subtitle: "Personal Portfolio Website",
      description:
        "A modern portfolio site showcasing projects, experience, and contact details with a clean and responsive layout.",
      longDescription:
        "This repository contains the source for my portfolio website. It focuses on performance, readability, and a structured section-based layout for projects, experience, and contact information.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui"],
      features: [
        "Responsive layout for desktop and mobile",
        "Project and experience showcase sections",
        "Reusable component-based UI architecture",
        "Client-side routing with React Router",
        "Consistent design tokens and utility styles",
      ],
      githubUrl: "https://github.com/rajath-hk/portfolio_rajath",
      demoUrl: "#",
      status: "Production",
      teamSize: "Solo Project",
    },
    {
      title: "AI Chatbot",
      subtitle: "Conversational Assistant Project",
      description:
        "An AI chatbot project focused on handling user prompts and generating contextual responses.",
      longDescription:
        "This project explores chatbot workflows, including prompt handling, response generation, and application structure for integrating language models into a usable interface.",
      technologies: ["Python", "API Integration", "NLP", "Frontend UI"],
      features: [
        "Prompt-response chat flow",
        "Context-aware message handling",
        "Configurable model or API integration layer",
        "Structured backend logic for chat requests",
        "Extensible codebase for future features",
      ],
      githubUrl: "https://github.com/rajath-hk/AI-Chatbot",
      demoUrl: "#",
      status: "Completed",
      teamSize: "Solo Project",
    },
    {
      title: "Online Classroom Platform",
      subtitle: "Virtual Learning System",
      description:
        "A classroom platform for managing online teaching workflows, interaction, and remote learning sessions.",
      longDescription:
        "The project is designed around remote classroom needs such as class participation, communication, and student-teacher coordination in a web-based environment.",
      technologies: ["React", "Node.js", "Real-time Communication", "Web App"],
      features: [
        "Classroom session management",
        "Interactive communication workflows",
        "User role support for instructor and learner",
        "Modular architecture for new classroom tools",
        "Responsive interface for common devices",
      ],
      githubUrl: "https://github.com/rajath-hk/Online-Classroom-Platform",
      demoUrl: "#",
      status: "Completed",
      teamSize: "Solo Project",
    },
    {
      title: "MadCreative",
      subtitle: "Creative Project Website",
      description:
        "A creative-focused web project highlighting branding, visual content, and presentation-driven pages.",
      longDescription:
        "MadCreative is structured as a showcase-oriented web project with emphasis on visual hierarchy, project storytelling, and crisp layout composition.",
      technologies: ["HTML", "CSS", "JavaScript", "Frontend Design"],
      features: [
        "Visual-first landing sections",
        "Project or service presentation blocks",
        "Custom styling with strong branding",
        "Simple navigation and content flow",
        "Reusable page structure for expansion",
      ],
      githubUrl: "https://github.com/rajath-hk/madcreative",
      demoUrl: "#",
      status: "Completed",
      teamSize: "Solo Project",
    },
    {
      title: "Timer",
      subtitle: "Time Tracking Utility",
      description:
        "A focused timer application built for productivity and time management use cases.",
      longDescription:
        "This project provides a simple and practical timer experience suitable for study sessions, workflow timing, and task-focused productivity cycles.",
      technologies: ["JavaScript", "Frontend", "State Management"],
      features: [
        "Start, pause, and reset controls",
        "Clear timer state visualization",
        "Minimal interface for quick usage",
        "Reliable interval handling logic",
        "Reusable timer component structure",
      ],
      githubUrl: "https://github.com/rajath-hk/timer",
      demoUrl: "#",
      status: "Completed",
      teamSize: "Solo Project",
    },
    {
      title: "Retro",
      subtitle: "Retro-Themed Web Experience",
      description:
        "A retro-inspired project exploring nostalgic UI patterns and stylistic frontend design.",
      longDescription:
        "Retro focuses on visual experimentation and themed interaction patterns, combining a classic aesthetic with modern frontend development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "UI Design"],
      features: [
        "Retro visual language and typography",
        "Theme-consistent components",
        "Interactive front-end behavior",
        "Layout tuned for modern screen sizes",
        "Modular files for maintainable styling",
      ],
      githubUrl: "https://github.com/rajath-hk/retro",
      demoUrl: "#",
      status: "Completed",
      teamSize: "Solo Project",
    },
    {
      title: "Attendance",
      subtitle: "Attendance Management System",
      description:
        "An attendance project to record, manage, and track user or student presence efficiently.",
      longDescription:
        "This project is built around attendance workflows, including record maintenance and structured tracking to reduce manual effort and improve consistency.",
      technologies: ["Web App", "Data Handling", "CRUD Operations"],
      features: [
        "Attendance record creation and updates",
        "Structured listing and tracking views",
        "Basic validation for entry integrity",
        "Simple management workflow for repeated use",
        "Extensible foundation for reporting features",
      ],
      githubUrl: "https://github.com/rajath-hk/attendance",
      demoUrl: "#",
      status: "Completed",
      teamSize: "Solo Project",
    },
    {
      title: "HegdeOS",
      subtitle: "Operating System Development Project",
      description:
        "A systems-level project exploring custom operating system components and low-level programming concepts.",
      longDescription:
        "HegdeOS is focused on core OS concepts such as low-level architecture, system behavior, and building foundational operating system functionality from scratch.",
      technologies: ["C", "C++", "Assembly", "Systems Programming"],
      features: [
        "Custom low-level systems code",
        "Exploration of kernel-oriented concepts",
        "Hands-on architecture and boot flow experimentation",
        "Incremental development of core OS modules",
        "Learning-focused implementation approach",
      ],
      githubUrl: "https://github.com/rajath-hk/HegdeOS",
      demoUrl: "#",
      status: "In Development",
      teamSize: "Solo Project",
    },
    {
      title: "Token",
      subtitle: "Token-Based App Concept",
      description:
        "A token-focused project centered around identity, authorization, or tokenized workflow handling.",
      longDescription:
        "This repository explores token-related logic and application structure, with emphasis on managing secure flows or token-driven operations in a practical codebase.",
      technologies: ["JavaScript", "Authentication Concepts", "Backend Logic"],
      features: [
        "Token creation or handling workflow",
        "Secure request flow structure",
        "Reusable utility functions for token operations",
        "Readable project organization",
        "Foundation for future auth enhancements",
      ],
      githubUrl: "https://github.com/rajath-hk/token",
      demoUrl: "#",
      status: "Completed",
      teamSize: "Solo Project",
    },
    {
      title: "Lofi YouTube Stream",
      subtitle: "Streaming Interface Project",
      description:
        "A lofi-themed streaming project intended for continuous playback and relaxed listening sessions.",
      longDescription:
        "This repository is oriented around a simple streaming experience, likely integrating YouTube playback and a lightweight UI for background music usage.",
      technologies: ["JavaScript", "YouTube Integration", "Frontend UI"],
      features: [
        "Embedded stream playback",
        "Minimal controls for continuous listening",
        "Lightweight and distraction-free layout",
        "Theme aligned to lofi style",
        "Simple deployment-friendly frontend",
      ],
      githubUrl: "https://github.com/rajath-hk/lofi-youtube-stream",
      demoUrl: "#",
      status: "Completed",
      teamSize: "Solo Project",
    },
    {
      title: "MGM Clinic",
      subtitle: "Clinic Management Project",
      description:
        "A healthcare-oriented project for organizing clinic workflows and operational records.",
      longDescription:
        "MGM Clinic focuses on practical clinic management needs, providing a project structure that can support records, scheduling, and streamlined staff workflows.",
      technologies: ["Web Application", "Data Management", "Admin UI"],
      features: [
        "Structured clinic data workflow",
        "Management-oriented user interface",
        "Organized records and operational flow",
        "Maintainable project architecture",
        "Extensible for additional clinic modules",
      ],
      githubUrl: "https://github.com/rajath-hk/MGM_CLINIC",
      demoUrl: "#",
      status: "Completed",
      teamSize: "Solo Project",
    },
    {
      title: "MGME AR By Rajath",
      subtitle: "Augmented Reality Experience",
      description:
        "An AR-focused project exploring immersive and interactive augmented reality application behavior.",
      longDescription:
        "This project investigates AR implementation patterns and user interaction design in augmented environments, with a structure suitable for iterative visual experimentation.",
      technologies: ["AR Development", "3D Interaction", "App Prototyping"],
      features: [
        "AR scene and interaction workflows",
        "Immersive visual experience concepts",
        "Prototype-friendly project setup",
        "Iteration-ready architecture for AR enhancements",
        "Foundation for production-grade AR use cases",
      ],
      githubUrl: "https://github.com/rajath-hk/MGME_AR_BY_RAJATH",
      demoUrl: "#",
      status: "In Development",
      teamSize: "Solo Project",
    },
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
                <Link to="/contact#contact">Get In Touch</Link>
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
