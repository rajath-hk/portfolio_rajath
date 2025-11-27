import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mangjevd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.", {
          description: "Thank you for reaching out!"
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Error sending message", {
          description: "Please try again later."
        });
      }
    } catch (error) {
      toast.error("Network error", {
        description: "Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">GET IN TOUCH</h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project or just say hello!
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-muted border-4 border-border shadow-xl p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 font-mono">
                    SEND A MESSAGE
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="_subject" value={`New message from ${formData.name}: ${formData.subject}`} />
                    <input type="hidden" name="_cc" value="rajathhege71@gmail.com" />
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold mb-2 uppercase">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-4 border-border focus:border-primary"
                        placeholder="John Doe"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold mb-2 uppercase">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-4 border-border focus:border-primary"
                        placeholder="john@example.com"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold mb-2 uppercase">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="border-4 border-border focus:border-primary"
                        placeholder="Project Inquiry"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold mb-2 uppercase">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="border-4 border-border focus:border-primary min-h-[150px]"
                        placeholder="Tell me about your project..."
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full border-4 border-border shadow-md hover:translate-x-2 hover:translate-y-2 transition-transform"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                          SENDING...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          SEND MESSAGE
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="bg-muted border-4 border-border shadow-xl p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 font-mono">
                    CONTACT INFO
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-background border-2 border-border">
                      <div className="p-2 border-2 border-border bg-primary text-primary-foreground">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 uppercase text-sm">Email</h3>
                        <a
                          href="mailto:rajathhege71@gmail.com"
                          className="text-muted-foreground hover:text-foreground break-all"
                        >
                          rajathhege71@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-background border-2 border-border">
                      <div className="p-2 border-2 border-border bg-primary text-primary-foreground">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 uppercase text-sm">Phone</h3>
                        <a
                          href="tel:+919482250897"
                          className="text-muted-foreground hover:text-foreground"
                        >
                          +91 9482250897
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-background border-2 border-border">
                      <div className="p-2 border-2 border-border bg-primary text-primary-foreground">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1 uppercase text-sm">Location</h3>
                        <p className="text-muted-foreground">
                          Udupi, Karnataka<br />India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-muted border-4 border-border shadow-xl p-8">
                  <h2 className="text-2xl font-bold mb-6 font-mono">
                    CONNECT WITH ME
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://github.com/rajath-hk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 bg-background border-4 border-border hover:translate-x-2 hover:translate-y-2 transition-transform"
                    >
                      <Github className="w-6 h-6" />
                      <span className="font-bold">GitHub</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/rajath-hegde-1742462ab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 p-4 bg-background border-4 border-border hover:translate-x-2 hover:translate-y-2 transition-transform"
                    >
                      <Linkedin className="w-6 h-6" />
                      <span className="font-bold">LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-primary text-primary-foreground border-4 border-border p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3 font-mono">CURRENTLY AVAILABLE</h3>
                  <p className="opacity-90">
                    I'm actively seeking new opportunities and projects. 
                    Whether you have a full-time position or a freelance project, 
                    feel free to reach out!
                  </p>
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

export default Contact;