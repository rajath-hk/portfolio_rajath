import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code, Layers, Cloud, Palette, Cpu, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "Python", level: 90 },
        { name: "C#", level: 75 },
        { name: "JavaScript/TypeScript", level: 88 },
      ]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "React.js", level: 92 },
        { name: "Node.js", level: 85 },
        { name: "REST APIs", level: 88 },
        { name: "UI/UX Design (Figma)", level: 82 },
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI/ML & NLP",
      skills: [
        { name: "ChatGPT/OpenAI API", level: 90 },
        { name: "Llama 3", level: 88 },
        { name: "NLP & Text Processing", level: 85 },
        { name: "Generative AI", level: 87 },
        { name: "Shapes AI Module", level: 83 },
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Services", level: 80 },
        { name: "GitHub/Git", level: 92 },
        { name: "Linux Server Setup", level: 85 },
        { name: "Docker Basics", level: 75 },
        { name: "CI/CD Basics", level: 73 },
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Multimedia",
      skills: [
        { name: "Video Editing", level: 93 },
        { name: "Animation", level: 88 },
        { name: "Figma/UI Design", level: 85 },
        { name: "Adobe Creative Suite", level: 80 },
        { name: "Motion Graphics", level: 82 },
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 92 },
        { name: "Team Collaboration", level: 90 },
        { name: "Problem Solving", level: 95 },
        { name: "Creativity", level: 93 },
        { name: "Time Management", level: 88 },
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "language Skills",
      skills: [
        { name: "English", level: 95 },
        { name: "Kannada", level: 95 },
        { name: "Hindi", level: 95 },
        { name: "konakni", level: 93 },
        { name: "tulu", level: 50 },
        { name: "japanese", level: 20 },
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">MY SKILLS</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive toolkit for building modern digital solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="p-8 bg-muted border-4 border-border shadow-md hover:translate-x-2 hover:translate-y-2 transition-transform"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 border-4 border-border bg-primary text-primary-foreground">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold font-mono">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-background border-2 border-border">
                        <div
                          className="h-full bg-primary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Proficiencies */}
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono">
              TECHNICAL PROFICIENCIES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-background border-4 border-border shadow-md">
                <h3 className="text-xl font-bold mb-4 font-mono">Frontend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>→ React & Modern JS Frameworks</li>
                  <li>→ Responsive Design Patterns</li>
                  <li>→ State Management (Redux, Context)</li>
                  <li>→ CSS Frameworks & Animations</li>
                  <li>→ Web Performance Optimization</li>
                </ul>
              </div>

              <div className="p-6 bg-background border-4 border-border shadow-md">
                <h3 className="text-xl font-bold mb-4 font-mono">Backend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>→ Node.js & Express</li>
                  <li>→ RESTful API Design</li>
                  <li>→ Database Design (SQL/NoSQL)</li>
                  <li>→ Authentication & Security</li>
                  <li>→ Server-Side Logic & Optimization</li>
                </ul>
              </div>

              <div className="p-6 bg-background border-4 border-border shadow-md">
                <h3 className="text-xl font-bold mb-4 font-mono">AI/ML</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>→ LLM Integration (GPT, Llama)</li>
                  <li>→ Natural Language Processing</li>
                  <li>→ Multilingual Text Processing</li>
                  <li>→ Context-Aware Chatbots</li>
                  <li>→ AI API Integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="max-w-6xl mx-auto mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-mono">
              TOOLS & TECHNOLOGIES
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React", "Node.js", "Python", "TypeScript", "AWS", "Docker",
                "Git", "GitHub", "Figma", "VS Code", "Linux", "MongoDB",
                "PostgreSQL", "WebRTC", "OpenAI", "Llama", "Discord.py",
                "Express", "REST API", "WebSockets", "Adobe Premiere",
                "After Effects", "Photoshop"
              ].map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-muted border-4 border-border shadow-sm hover:translate-x-1 hover:translate-y-1 transition-transform font-bold"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Placeholder */}
          <div className="max-w-4xl mx-auto mt-20 p-8 bg-primary text-primary-foreground border-4 border-border text-center">
            <h2 className="text-2xl font-bold mb-4 font-mono">CONTINUOUS LEARNING</h2>
            <p className="text-lg opacity-90">
              Always expanding my skillset through online courses, documentation, and hands-on projects. 
              Currently exploring advanced AI architectures and cloud-native development patterns.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
