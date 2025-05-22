"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowDownIcon, Mic, Music, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(
        textRef.current.querySelectorAll(".animate-text"),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1 }
      );
      
      tl.fromTo(
        ".hero-button",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.4"
      );
      
      tl.fromTo(
        ".scroll-indicator",
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      );
      
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl parallax-bg" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl parallax-bg" />
      </div>
      
      {/* Hero Content */}
      <div className="container relative z-10">
        <div 
          ref={textRef}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Mic className="h-8 w-8 text-primary" />
            <Radio className="h-8 w-8 text-accent" />
            <Music className="h-8 w-8 text-primary" />
          </motion.div>

          <motion.h1 
            className="animate-text text-balance mb-6 bg-gradient-to-r from-primary to-accent clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello, I'm Shrouk Saeed
          </motion.h1>
          
          <motion.p 
            className="animate-text text-xl md:text-2xl mb-10 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional voice over artist bringing stories to life through the power of voice.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="min-w-36">
              <a href="#projects">Listen to My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-36">
              <a href="#contact">Hire Me</a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <motion.div
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll</span>
          <ArrowDownIcon className="h-5 w-5 text-primary" />
        </motion.div>
      </div>
    </section>
  );
}