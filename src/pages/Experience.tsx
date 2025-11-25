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
      company: "Personal Projects & Open Source",
      type: "Self-Employed",
      period: "2022 - Present",
      location: "Udupi, India",
      description: "Building real-world web applications with modern technologies and AI integration",
      achievements: [
        "Developed 10+ full-stack applications using React and backend technologies",
        "Integrated AI capabilities including Llama 3 and OpenAI APIs",
        "Implemented real-time features using WebRTC and WebSockets",
        "Used proper version control and GitHub workflows for all projects",
        "Created scalable, user-friendly applications serving 100+ users"
      ],
      technologies: ["React", "Node.js", "Python", "AI/ML", "AWS", "GitHub"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">EXPERIENCE</h1>
            <p className="text-xl text-muted-foreground">
              Professional journey of building, creating, and innovating
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-12 border-l-4 border-border"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[13px] top-0 w-6 h-6 bg-primary border-4 border-border" />
                  
                  <div className="bg-muted border-4 border-border shadow-md p-6 md:p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold font-mono mb-2">
                            {exp.role}
                          </h2>
                          <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                            <span className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4" />
                              {exp.company}
                            </span>
                            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold border-2 border-border">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono text-sm">{exp.period}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{exp.location}</div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground">{exp.description}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-4 font-mono flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        KEY ACHIEVEMENTS
                      </h3>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="text-primary font-bold mt-1">→</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-bold mb-3 font-mono flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        TECHNOLOGIES USED
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
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

          {/* Skills Developed */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono">
              SKILLS DEVELOPED
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-muted border-4 border-border shadow-md">
                <h3 className="text-xl font-bold mb-4 font-mono">Technical Excellence</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>→ Full-Stack Development</li>
                  <li>→ AI/ML Integration</li>
                  <li>→ Real-Time Systems</li>
                  <li>→ Cloud Infrastructure</li>
                  <li>→ API Design & Integration</li>
                </ul>
              </div>

              <div className="p-6 bg-muted border-4 border-border shadow-md">
                <h3 className="text-xl font-bold mb-4 font-mono">Creative Production</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>→ Video Editing & Post-Production</li>
                  <li>→ Motion Graphics & Animation</li>
                  <li>→ UI/UX Design</li>
                  <li>→ Content Strategy</li>
                  <li>→ Visual Storytelling</li>
                </ul>
              </div>

              <div className="p-6 bg-muted border-4 border-border shadow-md">
                <h3 className="text-xl font-bold mb-4 font-mono">Professional Skills</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>→ Project Management</li>
                  <li>→ Client Communication</li>
                  <li>→ Problem Solving</li>
                  <li>→ Deadline Management</li>
                  <li>→ Team Collaboration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="max-w-4xl mx-auto mt-20 p-8 bg-primary text-primary-foreground border-4 border-border text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 font-mono">
              READY TO COLLABORATE?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary border-4 border-primary-foreground font-bold hover:translate-x-2 hover:translate-y-2 transition-transform"
            >
              LET'S TALK
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
