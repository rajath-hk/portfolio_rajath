import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles, Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <>
      <SEO
        title="Rajath Hegde - Full Stack Developer & AI Enthusiast"
        description="Full Stack Developer specializing in React, AI/ML integration, and creative problem solving. Building intelligent web applications with modern technologies."
        keywords="full stack developer, react, ai ml, web development, rajath hegde, portfolio"
      />
      <div className="min-h-screen">
        <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0" />
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-3 border-4 border-border bg-muted shadow-md animate-pulse">
              <span className="font-mono font-bold text-sm uppercase tracking-wider">
                👋 Available for Hire
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              HI, I'M
              <br />
              <span className="inline-block mt-2 px-6 py-2 border-4 border-border bg-primary text-primary-foreground shadow-xl">
                RAJATH HEGDE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold mb-8 text-muted-foreground max-w-2xl mx-auto">
              Full Stack Developer | AI/ML Enthusiast | Creative Problem Solver
            </p>
            
            <p className="text-lg mb-12 text-muted-foreground max-w-3xl mx-auto">
              I build intelligent web applications, integrate cutting-edge AI solutions, and create engaging digital experiences. 
              From React frontends to AI-powered backends, I turn ideas into reality.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="border-4 border-border shadow-lg hover:translate-x-2 hover:translate-y-2 transition-transform text-lg px-8"
              >
                <Link to="/projects">
                  View My Work <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-4 border-border shadow-lg hover:translate-x-2 hover:translate-y-2 transition-transform text-lg px-8"
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-mono">
            WHAT I DO
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-12 h-12" />,
                title: "Full Stack Development",
                description: "Building scalable web applications with modern frameworks like React, Node.js, and cloud infrastructure."
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "AI/ML Integration",
                description: "Implementing intelligent features with GPT, Llama 3, and custom NLP solutions for real-world applications."
              },
              {
                icon: <Rocket className="w-12 h-12" />,
                title: "Creative Production",
                description: "Professional video editing, animation, and UI/UX design for engaging digital content."
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-8 bg-background border-4 border-border shadow-md hover:translate-x-2 hover:translate-y-2 transition-transform"
              >
                <div className="mb-4 inline-block p-4 border-4 border-border bg-muted">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 font-mono">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "5+", label: "Technologies" },
              { number: "2+", label: "Years Experience" },
              { number: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 border-4 border-border bg-muted shadow-md"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 font-mono">{stat.number}</div>
                <div className="text-sm uppercase tracking-wide text-muted-foreground font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
            LET'S BUILD SOMETHING AMAZING
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you need a full-stack application, AI integration, or creative content, I'm here to help bring your vision to life.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-4 border-primary-foreground bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg text-lg px-8"
          >
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Home;
