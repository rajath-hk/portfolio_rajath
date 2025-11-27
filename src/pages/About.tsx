import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, Heart, Code, Palette, Zap } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <>
      <SEO
        title="About Rajath Hegde - Full Stack Developer & Creative Thinker"
        description="Learn about Rajath Hegde's journey as a full stack developer, AI enthusiast, and creative problem solver. Discover his education, skills, and passion for technology."
        keywords="about rajath hegde, full stack developer, ai ml, education, skills, portfolio"
      />
      <div className="min-h-screen">
        <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">ABOUT ME</h1>
            <p className="text-xl text-muted-foreground">
              Passionate developer, creative thinker, and continuous learner
            </p>
          </div>

          {/* Profile Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
                  BUILDING THE FUTURE, ONE LINE AT A TIME
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    I'm <strong className="text-foreground">Rajath Hegde</strong>, a versatile full-stack developer from Udupi, India, 
                    with a passion for creating intelligent, user-centric digital solutions.
                  </p>
                  <p>
                    Currently pursuing my <strong className="text-foreground">BCA at Mahatma Gandhi Memorial Evening College</strong>, 
                    I've already built real-world applications that serve users daily, from virtual classroom platforms to AI-powered chatbots.
                  </p>
                  <p>
                    My expertise spans the entire development stack—from crafting beautiful React interfaces to implementing 
                    sophisticated AI integrations with <strong className="text-foreground">GPT, Llama 3, and custom NLP solutions</strong>. 
                    I also bring a creative edge with professional video editing and animation skills.
                  </p>
                  <p>
                    What sets me apart is my ability to bridge technology and creativity, delivering solutions that are 
                    not only functional but also engaging and polished.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="border-4 border-border shadow-lg hover:translate-x-2 hover:translate-y-2 transition-transform"
                  >
                    <Link to="/contact">
                      <Download className="mr-2 w-5 h-5" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="border-4 border-border shadow-2xl overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Rajath Hegde"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-border bg-primary -z-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono">
              WHAT DRIVES ME
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-10 h-10" />,
                  title: "Innovation",
                  description: "Constantly exploring new technologies and methodologies to deliver cutting-edge solutions."
                },
                {
                  icon: <Heart className="w-10 h-10" />,
                  title: "User-Centric",
                  description: "Every project starts with understanding user needs and designing intuitive experiences."
                },
                {
                  icon: <Palette className="w-10 h-10" />,
                  title: "Creativity",
                  description: "Blending technical skills with artistic vision to create memorable digital experiences."
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-8 bg-muted border-4 border-border shadow-md hover:translate-x-2 hover:translate-y-2 transition-transform"
                >
                  <div className="inline-block p-4 border-4 border-border bg-background mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-mono">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-mono">
              EDUCATION
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  degree: "Bachelor of Computer Applications (BCA)",
                  institution: "Mahatma Gandhi Memorial Evening College, Udupi",
                  period: "Expected Graduation: September 2025",
                  details: "Relevant Coursework: Data Structures & Algorithms, DBMS, OOP, Software Engineering"
                },
                {
                  degree: "Pre-University Course (PUC) - PCM",
                  institution: "Karnataka State Board",
                  period: "Completed: 2022",
                  details: "Physics, Chemistry, Mathematics stream"
                },
                {
                  degree: "Secondary School Leaving Certificate (SSLC)",
                  institution: "Karnataka State Board",
                  period: "Completed: 2020",
                  details: "Foundation in core subjects"
                },
              ].map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-muted border-4 border-border shadow-md"
                >
                  <h3 className="text-xl font-bold mb-2 font-mono">{edu.degree}</h3>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Interests */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Languages */}
              <div>
                <h2 className="text-3xl font-bold mb-8 font-mono">LANGUAGES</h2>
                <div className="space-y-4">
                  {[
                    { lang: "Kannada", level: "Native" },
                    { lang: "English", level: "Fluent" },
                    { lang: "Hindi", level: "Fluent" },
                    { lang: "Tulu", level: "Native" },
                    { lang: "Konkani", level: "Conversational" },
                    { lang: "Japanese", level: "Beginner" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-muted border-2 border-border">
                      <span className="font-bold">{item.lang}</span>
                      <span className="text-sm text-muted-foreground">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <h2 className="text-3xl font-bold mb-8 font-mono">INTERESTS</h2>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Animation",
                    "Photography",
                    "Cajon",
                    "Gaming",
                    "Open Source",
                    "Creative Innovation",
                    "Music Production",
                    "Tech Blogging"
                  ].map((interest, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-primary text-primary-foreground border-4 border-border shadow-sm font-bold"
                    >
                      {interest}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
