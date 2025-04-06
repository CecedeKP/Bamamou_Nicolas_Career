
import { BookOpen, Award, GraduationCap, CheckCircle } from "lucide-react";

const Education = () => {
  const formalEducation = [
    {
      degree: "Ph.D. in Electrical Engineering",
      institution: "Stanford University",
      year: "2012 - 2015",
      description: "Specialized in advanced battery management systems for electric vehicles."
    },
    {
      degree: "M.S. in Electrical Engineering",
      institution: "Massachusetts Institute of Technology",
      year: "2010 - 2012",
      description: "Focus on power electronics and embedded systems."
    },
    {
      degree: "B.S. in Electrical Engineering",
      institution: "University of California, Berkeley",
      year: "2006 - 2010",
      description: "Minor in Computer Science, Graduated with Honors."
    }
  ];

  const certifications = [
    {
      title: "Advanced PCB Design",
      provider: "Altium Designer",
      year: "2020",
      credential: "ALT-PCB-2020"
    },
    {
      title: "Battery Systems Professional",
      provider: "IEEE",
      year: "2018",
      credential: "IEEE-BSP-2018"
    },
    {
      title: "Certified Embedded Systems Engineer",
      provider: "ARM",
      year: "2019",
      credential: "ARM-ESE-2019"
    },
    {
      title: "Frontend Web Development",
      provider: "Meta",
      year: "2021",
      credential: "META-FWD-2021"
    }
  ];

  const onlineCourses = [
    {
      title: "Advanced Machine Learning",
      platform: "Coursera",
      institution: "Stanford University",
      completed: "2022"
    },
    {
      title: "IoT Specialization",
      platform: "edX",
      institution: "UC San Diego",
      completed: "2021"
    },
    {
      title: "Full-Stack Development Bootcamp",
      platform: "Udemy",
      institution: "App Academy",
      completed: "2020"
    }
  ];

  return (
    <section id="education" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education & Learning</h2>
        <p className="section-subtitle">A lifetime of continuous learning and professional development</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formal Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Formal Education</h3>
            </div>
            
            <div className="space-y-8">
              {formalEducation.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">{edu.year}</div>
                  <h4 className="text-lg font-bold">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground mt-2">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-accent/10">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Professional Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <div>
                    <h4 className="font-semibold">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {cert.provider} · {cert.year} · {cert.credential}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Online Courses */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Online Learning</h3>
              </div>
              
              <div className="space-y-4">
                {onlineCourses.map((course, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold">{course.title}</h4>
                    <p className="text-sm text-primary">
                      {course.platform} · {course.institution}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Completed: {course.completed}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
