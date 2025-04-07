
import { useState } from 'react';
import { ExternalLink, Code, Battery, Cpu, Zap, Globe } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ElectricVehicle from "@/assets/images/Engineering EBike.jpg";

const Projects = () => {
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'electrical', name: 'Electrical Engineering' },
    { id: 'battery', name: 'Battery Design' },
    { id: 'embedded', name: 'Embedded Systems' },
    { id: 'web', name: 'Web Development' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Advanced PCB Design for IoT Sensors',
      category: 'electrical',
      image: '',
      description: 'Multi-layer PCB designed for low-power IoT environmental sensors with integrated wireless communication.',
      tags: ['PCB Design', 'IoT', 'Low Power'],
      icon: <Zap className="h-6 w-6" />,
    },
    {
      id: 2,
      title: 'Electric Vehicle Battery Management System',
      category: 'battery',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
      description: 'Designed and implemented a sophisticated BMS for electric vehicles, focusing on safety and efficiency.',
      tags: ['BMS', 'EV', 'SolidWorks'],
      icon: <Battery className="h-6 w-6" />,
    },
    {
      id: 3,
      title: 'Smart Home Energy Storage',
      category: 'battery',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
      description: 'Residential battery system designed for optimal energy management with solar integration.',
      tags: ['Energy Storage', 'Renewable Energy'],
      icon: <Battery className="h-6 w-6" />,
    },
    {
      id: 4,
      title: 'Real-time Data Processing Firmware',
      category: 'embedded',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600',
      description: 'Firmware for STM32 microcontrollers enabling real-time processing of sensor data for industrial applications.',
      tags: ['STM32', 'Firmware', 'Sensors'],
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      id: 5,
      title: 'Wireless Mesh Network for Industrial Monitoring',
      category: 'embedded',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600',
      description: 'Developed a robust mesh network for monitoring industrial equipment in harsh environments.',
      tags: ['IoT', 'Mesh Network', 'ESP32'],
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      id: 6,
      title: 'Engineering Portfolio Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
      description: 'Responsive personal portfolio website showcasing engineering projects and technical skills.',
      tags: ['React', 'Tailwind CSS', 'Responsive'],
      icon: <Globe className="h-6 w-6" />,
    },
    {
      id: 7,
      title: 'Electric vehicle System Integration',
      category: 'electrical',
      image: ElectricVehicle,
      description: 'Integrated electrical systems for an electric bike, including motor control and battery management.',
      tags: ['MCU', 'ECU/VCU', 'OBC', 'DC-DC', 'Battery'],
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  const filteredProjects = 
    activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Explore my engineering work across different disciplines</p>
        
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full ${activeCategory === category.id ? 'bg-primary' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                  {project.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" /> View Details
                </Button>
                {project.category === 'embedded' || project.category === 'web' ? (
                  <Button variant="outline" size="sm">
                    <Code className="h-4 w-4 mr-2" /> View Code
                  </Button>
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-accent hover:bg-accent/90">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
