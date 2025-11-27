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
      stats: [
        { label: "Active Users", value: "50+" },
        { label: "Uptime", value: "99%" },
        { label: "Sessions", value: "100+" }
      ],
      github: "https://github.com/rajath-hk/classroom",
      impact: "Successfully used by 50+ students with consistent 99% uptime, enabling seamless remote learning during the digital transformation of education."
    },
    {
      title: "AI-Powered Discord Bot",
      subtitle: "Multilingual Intelligent Chatbot",
      description: "An advanced Discord bot with natural language understanding capabilities, supporting Hindi, English, and code-mixed conversations using Llama 3.",
      longDescription: "Leveraging the Shapes AI Module and Llama 3, this bot provides intelligent, context-aware responses in multiple languages with custom NLP pipeline for enhanced understanding.",
      technologies: ["Python", "Llama 3", "Discord.py", "NLP", "Shapes AI Module", "Machine Learning"],
      features: [
        "Multilingual support (Hindi, English, code-mixed text)",
        "Llama 3 integration for natural language understanding",
        "Custom NLP pipeline for contextual responses",
        "95%+ response accuracy rate",
        "Processes 1000+ messages efficiently",
        "Real-time conversation handling"
      ],
      stats: [
        { label: "Accuracy", value: "95%+" },
        { label: "Messages", value: "1000+" },
        { label: "Languages", value: "3" }
      ],
      github: "https://github.com/rajath-hk",
      impact: "Achieved 95%+ response accuracy with the ability to process over 1000 messages, providing intelligent multilingual support for diverse user communities."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">PROJECTS</h1>
            <p className="text-xl text-muted-foreground">
              Real-world applications solving real problems with cutting-edge technology
            </p>
          </div>

          {/* Projects */}
          <div className="max-w-6xl mx-auto space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-muted border-4 border-border shadow-xl p-8 md:p-12"
              >
                {/* Project Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold font-mono mb-2">
                        {project.title}
                      </h2>
                      <p className="text-lg text-primary font-bold">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        asChild
                        variant="outline"
                        className="border-4 border-border shadow-sm hover:translate-x-1 hover:translate-y-1 transition-transform"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <p className="text-muted-foreground">
                    {project.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3 font-mono">TECH STACK</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-primary text-primary-foreground border-4 border-border shadow-sm font-bold text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 font-mono flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    KEY FEATURES
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 p-3 bg-background border-2 border-border"
                      >
                        <span className="text-primary font-bold mt-1">✓</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-4 font-mono flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    PROJECT STATS
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {project.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="text-center p-4 bg-background border-4 border-border"
                      >
                        <div className="text-2xl md:text-3xl font-bold mb-1 font-mono">
                          {stat.value}
                        </div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground font-bold">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="p-6 bg-primary text-primary-foreground border-4 border-primary">
                  <h3 className="text-lg font-bold mb-3 font-mono flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    IMPACT & RESULTS
                  </h3>
                  <p className="text-sm opacity-90">{project.impact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Projects Teaser */}
          <div className="max-w-4xl mx-auto mt-16 p-8 bg-muted border-4 border-border text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-mono">
              MORE PROJECTS ON GITHUB
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Explore my other projects, contributions, and experiments on GitHub. From web applications to AI integrations, there's always something new in development.
            </p>
            <Button
              asChild
              size="lg"
              className="border-4 border-border shadow-lg hover:translate-x-2 hover:translate-y-2 transition-transform"
            >
              <a href="https://github.com/rajath-hk" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Visit My GitHub
              </a>
            </Button>
          </div>

          {/* Skills Applied */}
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono">
              SKILLS SHOWCASED
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Full-Stack Development",
                "Real-Time Communication",
                "AI/ML Integration",
                "API Design",
                "Database Management",
                "WebRTC",
                "Natural Language Processing",
                "Cloud Deployment"
              ].map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-background border-4 border-border text-center font-bold hover:translate-x-1 hover:translate-y-1 transition-transform"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
