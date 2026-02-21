import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
  {
    "title": "HegdeOS",
    "subtitle": "Featured Project - Next-Gen Operating System",
    "description": "HegdeOS is an open-source operating system project (details limited). It aims to explore low-level system programming with custom kernel development, multitasking, and a graphical interface.",
    "longDescription": "This flagship personal project involves designing a standalone operating system from the ground up. It likely encompasses kernel development, process scheduling, memory management, and a basic GUI, serving as a platform to experiment with systems-level concepts. Since HegdeOS is a solo endeavor, the team size is one.",
    "technologies": ["C", "C++", "Assembly", "Linux Kernel"],
    "features": [
      "Custom kernel architecture",
      "Preemptive multitasking",
      "Basic graphical user interface (GUI)",
      "Lightweight design for learning OS principles"
    ],
    "githubUrl": "#",
    "demoUrl": "#",
    "status": "In Development",
    "teamSize": "Solo Project"
  },
  {
    "title": "FocusList",
    "subtitle": "Minimalist To-Do List App",
    "description": "FocusList is a minimal, pastel-themed to-do list app built with Flutter and Realm:contentReference[oaicite:0]{index=0}.",
    "longDescription": "FocusList offers a clean, pastel-themed interface built with Flutter (Dart) and uses Realm for local data storage:contentReference[oaicite:1]{index=1}. It employs an MVVM architecture (with Provider) and includes unit tests for reliability:contentReference[oaicite:2]{index=2}. Key features include adding, toggling, and deleting tasks (each shown as soft pastel tiles) and offline data persistence via Realm:contentReference[oaicite:3]{index=3}.",
    "technologies": ["Flutter", "Dart", "Realm DB", "Provider (MVVM)"],
    "features": [
      "Add, toggle, and delete tasks",
      "Soft pastel tile backgrounds for tasks",
      "Quick task entry via a floating action button (FAB)",
      "Local data persistence using Realm DB",
      "MVVM architecture with Provider for state management",
      "Unit tested with mock dependencies"
    ],
    "githubUrl": "https://github.com/rajathk/focuslist",
    "demoUrl": "#",
    "status": "Completed",
    "teamSize": "Solo Project"
  },
  {
    "title": "Agile Tracker (Backend)",
    "subtitle": "Spring Boot Project Management API",
    "description": "Agile Tracker Backend is a project management application (backend) implemented using Java and Spring Boot:contentReference[oaicite:4]{index=4}.",
    "longDescription": "This backend service provides RESTful APIs for managing projects, tasks, and user accounts. It is developed with Spring Boot for rapid setup of endpoints and typically uses a relational database (e.g., MySQL) for persistence. The backend also includes a Dockerfile for containerized deployment.",
    "technologies": ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker"],
    "features": [
      "RESTful API endpoints for project and task management",
      "CRUD operations for projects, tasks, and user entities",
      "Secure authentication support (e.g., JWT)",
      "Containerized deployment via Docker"
    ],
    "githubUrl": "https://github.com/rajathk/agile-tracker-backend",
    "demoUrl": "#",
    "status": "Completed",
    "teamSize": "Solo Project"
  },
  {
    "title": "Agile Tracker (Frontend)",
    "subtitle": "React Project Management UI",
    "description": "Agile Tracker Frontend is a project management application (frontend) built with React:contentReference[oaicite:5]{index=5}.",
    "longDescription": "This React-based frontend provides a user interface for managing projects and tasks, consuming the APIs provided by the backend. It likely includes components for creating and updating tasks and presents data in a clean dashboard or kanban style. The app is fully client-side and uses modern JavaScript (ES6+) and CSS for styling.",
    "technologies": ["JavaScript", "React", "HTML", "CSS"],
    "features": [
      "Interactive task board interface",
      "Responsive design for project management",
      "Integration with Agile Tracker backend APIs",
      "Client-side data handling and state management"
    ],
    "githubUrl": "https://github.com/rajathk/agile-tracker-frontend",
    "demoUrl": "#",
    "status": "Completed",
    "teamSize": "Solo Project"
  },
  {
    "title": "Saltwater.github.io",
    "subtitle": "Static Personal Website",
    "description": "Saltwater.github.io appears to be a static personal website repository (no detailed information available).",
    "longDescription": "This repository contains a static website (last updated 2015) comprising HTML, CSS, and image assets. It was likely used as a personal or project site featuring custom styling. No descriptive README or live demo link is provided.",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "features": [
      "Static content with custom CSS styling",
      "Local image assets (in 'images' folder)",
      "Likely hosted as a personal site (no live demo available)"
    ],
    "githubUrl": "https://github.com/rajathk/saltwater.github.io",
    "demoUrl": "#",
    "status": "Completed",
    "teamSize": "Solo Project"
  },
  {
    "title": "Game4Rage",
    "subtitle": "Static Site (Custom Domain)",
    "description": "Game4Rage is a static website repository (details not specified). It includes a CNAME, indicating a custom domain was used.",
    "longDescription": "This repository holds a static site (likely for a gaming-related project) with HTML/CSS content. It has a CNAME file set (potentially pointing to a custom domain), but no README or visible content description. It appears to be an archived project with no active development.",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "features": [
      "Custom CNAME configuration (custom domain)",
      "Static pages and assets (no dynamic backend)",
      "Game-related content (presumably, based on name)"
    ],
    "githubUrl": "https://github.com/rajathk/game4rage",
    "demoUrl": "#",
    "status": "Completed",
    "teamSize": "Solo Project"
  },
  {
    "title": "Rajath K Portfolio (rajathk.github.io)",
    "subtitle": "Personal Portfolio Website",
    "description": "Personal portfolio website hosted by Rajath K to showcase his projects, skills, and contact information.",
    "longDescription": "This is Rajath's personal portfolio site, containing sections for his bio, project gallery, and contact details. It is a static site built primarily with HTML, CSS, and a touch of JavaScript, designed with responsive layouts for desktop and mobile viewing. The site is live at http://www.rajathraomore.com.",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "features": [
      "Professional resume and bio section",
      "Project gallery with links to source code",
      "Contact form or email link",
      "Responsive design for various devices"
    ],
    "githubUrl": "https://github.com/rajathk/rajathk.github.io",
    "demoUrl": "http://www.rajathraomore.com",
    "status": "Completed",
    "teamSize": "Solo Project"
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
