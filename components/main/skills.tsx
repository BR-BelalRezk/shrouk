"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { 
  Mic,
  Radio,
  Music,
  Video,
  Languages,
  Headphones,
  Settings,
  Timer
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Voice Acting",
    icon: <Mic className="h-5 w-5" />,
    skills: [
      { name: "Commercial Narration", level: 95 },
      { name: "Character Voices", level: 90 },
      { name: "Audiobook Narration", level: 88 },
      { name: "Corporate Voice Over", level: 92 },
      { name: "Accent Work", level: 85 },
    ],
  },
  {
    title: "Technical Skills",
    icon: <Settings className="h-5 w-5" />,
    skills: [
      { name: "Audio Production", level: 90 },
      { name: "Studio Recording", level: 88 },
      { name: "Audio Editing", level: 85 },
      { name: "Sound Engineering", level: 80 },
      { name: "Remote Recording", level: 92 },
    ],
  },
  {
    title: "Additional Skills",
    icon: <Languages className="h-5 w-5" />,
    skills: [
      { name: "Script Analysis", level: 95 },
      { name: "Voice Modulation", level: 90 },
      { name: "Timing & Pacing", level: 88 },
      { name: "Language Proficiency", level: 85 },
      { name: "Client Communication", level: 92 },
    ],
  },
];

const services = [
  {
    icon: <Radio />,
    title: "Commercial Voice Over",
    description: "Professional voice overs for TV, radio, and digital advertisements.",
  },
  {
    icon: <Headphones />,
    title: "Audiobook Narration",
    description: "Engaging storytelling for fiction and non-fiction audiobooks.",
  },
  {
    icon: <Video />,
    title: "Corporate Videos",
    description: "Clear and professional narration for corporate and training videos.",
  },
  {
    icon: <Music />,
    title: "IVR & Phone Systems",
    description: "Professional voice recordings for automated phone systems.",
  },
  {
    icon: <Timer />,
    title: "Same-Day Delivery",
    description: "Quick turnaround for urgent voice over projects.",
  },
  {
    icon: <Languages />,
    title: "Multiple Accents",
    description: "Various accent options to suit your project needs.",
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });
    
    if (headingRef.current) {
      tl.fromTo(
        headingRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }
      );
    }
    
    if (skillsRef.current) {
      gsap.fromTo(
        ".skill-progress",
        { width: 0 },
        { 
          width: "100%", 
          duration: 1.5, 
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };
  
  return (
    <section id="skills" ref={sectionRef} className="section relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container relative z-10">
        <div ref={headingRef} className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            Skills & <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Professional voice over services tailored to your project needs.
          </p>
        </div>
        
        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-card rounded-xl p-6 border border-border/50 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </span>
                <h3 className="text-xl font-medium">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span>{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="skill-progress h-full bg-primary rounded-full"
                        style={{ 
                          width: isInView ? `${skill.level}%` : "0%",
                          transition: `width 1s ease-out ${0.2 + (categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div ref={servicesRef}>
          <h3 className="text-2xl md:text-3xl font-medium text-center mb-12">
            Services I <span className="text-primary">Offer</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  {service.icon}
                </div>
                <h4 className="text-lg font-medium mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}