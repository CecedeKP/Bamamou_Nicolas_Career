
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "Circuit Design", percentage: 95 },
    { name: "PCB Layout", percentage: 90 },
    { name: "Battery Systems", percentage: 92 },
    { name: "SolidWorks", percentage: 85 },
    { name: "Embedded C/C++", percentage: 88 },
    { name: "RTOS", percentage: 82 },
    { name: "React", percentage: 80 },
    { name: "HTML/CSS/JS", percentage: 85 },
  ];

  const engineeringSkills = [
    {
      category: "Electrical & Electronics",
      items: [
        "Circuit Design & Analysis",
        "PCB Layout & Fabrication",
        "Signal Integrity",
        "Power Electronics",
        "SPICE Simulation",
        "Oscilloscope & DMM Proficiency"
      ]
    },
    {
      category: "Battery Engineering",
      items: [
        "Cell Selection & Testing",
        "Pack Design",
        "Thermal Management",
        "BMS Architecture",
        "Safety Systems",
        "Performance Analysis"
      ]
    },
    {
      category: "Embedded Systems",
      items: [
        "Microcontroller Programming",
        "RTOS Implementation",
        "Firmware Development",
        "Sensor Integration",
        "Communication Protocols",
        "Low Power Optimization"
      ]
    },
    {
      category: "Web Development",
      items: [
        "Frontend Design",
        "Responsive Web Apps",
        "React/Next.js",
        "RESTful APIs",
        "UI/UX Principles",
        "Performance Optimization"
      ]
    },
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technical expertise across multiple engineering disciplines</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Technical Proficiency</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8">Engineering Disciplines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {engineeringSkills.map((category, index) => (
                <div key={index} className="bg-secondary/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-primary mb-4">{category.category}</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t">
          <h3 className="text-2xl font-bold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Altium Designer", "Eagle CAD", "LTspice", "SolidWorks", 
              "ANSYS", "Arduino", "STM32", "ESP32", "FreeRTOS", 
              "Python", "C/C++", "React", "Tailwind CSS", "Git", 
              "MATLAB", "LabVIEW"
            ].map((tool, index) => (
              <span key={index} className="bg-secondary px-4 py-2 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
