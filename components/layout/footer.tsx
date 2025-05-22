"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/20 py-16 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <span className="text-2xl font-medium">
                Shrouk<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Creating stunning digital experiences with a focus on elegant design and smooth interactions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {item}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              {[
                { label: "LinkedIn", icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com" },
                { label: "GitHub", icon: <Github className="h-4 w-4" />, href: "https://github.com" },
                { label: "Twitter", icon: <Twitter className="h-4 w-4" />, href: "https://twitter.com" },
                { label: "Email", icon: <Mail className="h-4 w-4" />, href: "mailto:shrouk@example.com" },
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    target={item.label !== "Email" ? "_blank" : undefined}
                    rel={item.label !== "Email" ? "noreferrer" : undefined}
                  >
                    {item.icon}
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shrouk Saeed. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}