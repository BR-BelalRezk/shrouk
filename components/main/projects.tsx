"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ArrowUpRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Commercial Voice Over",
    description: "Professional voice overs for national TV and radio commercials.",
    image: "https://images.pexels.com/photos/7129631/pexels-photo-7129631.jpeg",
    tags: ["Commercial", "TV", "Radio", "Narration"],
    link: "#",
  },
  {
    id: 2,
    title: "Audiobook Narration",
    description: "Engaging storytelling for fiction and non-fiction audiobooks.",
    image: "https://images.pexels.com/photos/7129624/pexels-photo-7129624.jpeg",
    tags: ["Audiobooks", "Narration", "Character Voices"],
    link: "#",
  },
  {
    id: 3,
    title: "Corporate Training",
    description: "Clear and professional voice overs for e-learning and training materials.",
    image: "https://images.pexels.com/photos/7129157/pexels-photo-7129157.jpeg",
    tags: ["E-Learning", "Corporate", "Training"],
    link: "#",
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
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
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }
      );
    }
  }, []);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
  
  return (
    <section id="projects" ref={sectionRef} className="section bg-muted/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div ref={headingRef} className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            My <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground">
            Listen to samples of my voice over work across different genres and styles.
          </p>
        </div>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="project-card bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-border/50 group"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="icon" variant="secondary" className="rounded-full">
                    <Play className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Link 
                  href={project.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Listen to Sample
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <a href="#" className="inline-flex items-center gap-2">
              View All Samples
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}