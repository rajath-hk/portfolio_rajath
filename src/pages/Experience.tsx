import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, Code, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Video Editor & Content Creator",
      company: "MOV Agency",
      type: "Freelance",
      period: "2023 - Present",
      location: "Remote",
      description: "Creating engaging educational content for digital marketing and editing courses",
      achievements: [
        "Edited 50+ educational videos for e-learning platform",
        "Created custom animations to enhance learning experience",
        "Collaborated with instructors to develop content flow and structure",
        "Delivered high-quality production on tight deadlines",
        "Improved viewer engagement by 40% through dynamic editing techniques"
      ],
      technologies: ["Adobe Premiere Pro", "After Effects", "Photoshop", "Animation"]
    },
    {
      role: "Full Stack Developer",
      company: "Personal Projects",
      type: "Self-Employed",
      period: "2022 - Present",
      location: "Remote",
      description: "Developing innovative web applications with modern technologies",
      achievements: [
        "Built real-time virtual classroom platform with WebRTC video conferencing",
        "Created AI-powered chatbot using GPT and Llama 3 models",
        "Developed responsive websites with React, Node.js, and MongoDB",
        "Implemented authentication systems and RESTful APIs",
        "Deployed applications using cloud services like Vercel and Render"
      ],
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "GPT API", "Llama 3"]
    },
    {
      role: "Creative Designer",
      company: "Freelance",
      type: "Contract",
      period: "2021 - 2023",
      location: "Remote",
      description: "Designing visual content for brands and digital platforms",
      achievements: [
        "Created brand identities for 10+ startups",
        "Designed UI/UX for mobile and web applications",
        "Produced motion graphics for social media campaigns",
        "Developed print materials for marketing events",
        "Managed design projects from concept to delivery"
      ],
      technologies: ["Figma", "Illustrator", "Photoshop", "After Effects", "Premiere Pro"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">MY EXPERIENCE</h1>
            <p className="text-xl text-muted-foreground">
              A journey through my professional development and creative endeavors
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />
              
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative mb-12 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 md:left-1/2 top-2 w-5 h-5 bg-primary border-4 border-border rounded-full transform md:-translate-x-1/2" />
                  
                  <div className={`bg-muted border-4 border-border shadow-xl p-8 hover:translate-x-2 hover:translate-y-2 transition-transform ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <h2 className="text-2xl font-bold font-mono">{exp.role}</h2>
                      <span className="px-3 py-1 bg-background border-2 border-border text-sm font-bold">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-background border-2 border-border text-sm font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Highlight */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-primary text-primary-foreground border-4 border-border p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-mono">
                EDUCATION & GROWTH
              </h2>
              <p className="text-lg opacity-90">
                Currently pursuing MCA at AMC Engineering College while continuously 
                expanding my skills through hands-on projects and real-world experiences.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
