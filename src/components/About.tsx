
import { Download, Calendar, MapPin, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My Professional Journey</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg">
              With over 10 years of experience in engineering, I've built my career on solving complex 
              problems at the intersection of hardware and software. My journey began in electrical engineering, 
              where I developed a strong foundation in circuit design and analysis, before expanding my expertise 
              to battery systems, embedded programming, and web development.
            </p>
            
            <p className="text-lg">
              I thrive on challenging projects that require cross-disciplinary thinking. Whether I'm designing 
              a battery management system for electric vehicles, developing firmware for IoT devices, or creating 
              responsive web interfaces, I bring the same attention to detail and passion for excellence.
            </p>
            
            <p className="text-lg">
              My engineering philosophy centers on creating sustainable, scalable solutions that stand the test of time. 
              I believe in continuous learning and regularly expand my skillset to embrace emerging technologies.
            </p>
            
            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                <Download size={18} /> Download Resume
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md card-hover">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary min-w-5" size={20} />
                  <div>
                    <p className="font-medium">Date of Birth</p>
                    <p className="text-muted-foreground">April 15, 1994</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary min-w-5" size={20} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Beijing Daxing Yizhuang Economic Develipment Zone</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-primary min-w-5" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">bamamounicolas@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t flex items-center justify-between">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="text-muted-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">10+</h4>
                <p className="text-sm font-medium">Years Experience</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">50+</h4>
                <p className="text-sm font-medium">Projects Completed</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">20+</h4>
                <p className="text-sm font-medium">Happy Clients</p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-md text-center card-hover">
                <h4 className="text-4xl font-bold text-primary mb-1">15+</h4>
                <p className="text-sm font-medium">Awards Received</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
