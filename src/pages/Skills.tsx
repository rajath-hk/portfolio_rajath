import React from "react";
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
        { name: "HTML/CSS/Tailwind", level: 95 },
        { name: "React/Next.js", level: 90 },
        { name: "Node.js/Express", level: 85 },
        { name: "MongoDB/SQL", level: 80 },
        { name: "RESTful APIs", level: 88 },
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI/ML Technologies",
      skills: [
        { name: "TensorFlow/Keras", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "NLP/NLU", level: 85 },
        { name: "Computer Vision", level: 70 },
        { name: "LLMs (GPT, Llama)", level: 90 },
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Production",
      skills: [
        { name: "Video Editing", level: 95 },
        { name: "Motion Graphics", level: 90 },
        { name: "Visual Effects", level: 85 },
        { name: "Color Grading", level: 88 },
        { name: "Sound Design", level: 80 },
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Tools & Platforms",
      skills: [
        { name: "Git/CI-CD", level: 85 },
        { name: "Docker", level: 75 },
        { name: "AWS/Azure", level: 70 },
        { name: "Linux", level: 80 },
        { name: "Figma", level: 85 },
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Adaptability", level: 95 },
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
              A comprehensive overview of my technical expertise and creative capabilities
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-muted border-4 border-border shadow-xl p-8 hover:translate-x-2 hover:translate-y-2 transition-transform"
              >
                <div className="inline-block p-4 border-4 border-border bg-background mb-6">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold mb-6 font-mono">{category.title}</h2>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-bold">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-background border-2 border-border">
                        <div
                          className="bg-primary h-2 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <div className="bg-primary text-primary-foreground border-4 border-border p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-mono">
                CONTINUOUS LEARNING
              </h2>
              <p className="text-lg opacity-90">
                I'm constantly exploring emerging technologies and refining my skills. 
                Currently focusing on advanced AI/ML techniques, cloud architectures, 
                and creative production workflows.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
