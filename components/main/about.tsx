"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mic, Radio, Music, Headphones, Video, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });
    
    if (textRef.current) {
      tl.fromTo(
        textRef.current.querySelectorAll(".gsap-reveal"),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }
      );
    }
    
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1 },
        "-=0.5"
      );
    }
    
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="order-2 lg:order-1" 
            ref={imageRef}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:ml-0">
              <Image
                src="https://images.pexels.com/photos/7129620/pexels-photo-7129620.jpeg"
                alt="Shrouk Saeed in recording studio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              <div className="absolute top-4 left-4 w-24 h-24 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-4 right-4 w-24 h-24 border-r-2 border-b-2 border-primary/50" />
            </div>
          </div>
          
          <div className="order-1 lg:order-2" ref={textRef}>
            <h2 className="gsap-reveal text-4xl md:text-5xl font-medium mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="gsap-reveal text-lg text-muted-foreground">
                I'm Shrouk Saeed, a professional voice over artist with a passion for bringing stories and messages to life through the power of voice.
              </p>
              
              <p className="gsap-reveal text-muted-foreground">
                With over 5 years of experience in voice acting and audio production, I combine technical expertise with creative interpretation to deliver compelling vocal performances that resonate with audiences.
              </p>
              
              <p className="gsap-reveal text-muted-foreground">
                My approach focuses on understanding the unique requirements of each project, ensuring that every word is delivered with the perfect tone, emotion, and clarity.
              </p>
            </div>
            
            <div className="gsap-reveal grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                {
                  icon: <Mic className="h-5 w-5 text-primary" />,
                  title: "Voice Acting",
                  description: "Versatile vocal performances",
                },
                {
                  icon: <Headphones className="h-5 w-5 text-primary" />,
                  title: "Audio Quality",
                  description: "Professional studio setup",
                },
                {
                  icon: <Languages className="h-5 w-5 text-primary" />,
                  title: "Languages",
                  description: "Multiple accent options",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-card p-4 rounded-lg"
                >
                  <div className="mb-2">{item.icon}</div>
                  <h3 className="font-medium mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="gsap-reveal"
            >
              <Button asChild className="group">
                <a href="#projects">
                  Listen to My Work
                  <Radio className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}