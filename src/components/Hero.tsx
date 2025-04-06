
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16 pb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hello, I'm</span>
            <span className="text-primary">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            Engineer | Innovator | Creator
          </h2>
          <p className="text-lg mb-8 max-w-2xl">
            I transform complex engineering challenges into elegant solutions. With expertise spanning electrical systems, 
            battery design, embedded programming, and web development, I bring a unique perspective to every project.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View My Work
            </a>
            <a href="#contact" className="btn-accent flex items-center gap-2">
              Let's Connect
            </a>
          </div>
        </div>
        
        <div className="flex-1 max-w-md flex items-center justify-center animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 bg-primary/10 rounded-full absolute -top-6 -left-6"></div>
            <div className="w-72 h-72 md:w-80 md:h-80 bg-accent/10 rounded-full absolute -bottom-6 -right-6"></div>
            <div className="w-72 h-72 md:w-80 md:h-80 bg-white relative rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Professional Headshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
