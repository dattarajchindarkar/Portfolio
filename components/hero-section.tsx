"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SocialLinks from "./social-links";
import ResumeButton from "./resume-button";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]" />

      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m <span className="text-primary">Dattaraj</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full-stack developer crafting elegant solutions to complex problems
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ResumeButton />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown className="h-6 w-6 text-primary" />
        </a>
      </motion.div>
    </section>
  );
}
