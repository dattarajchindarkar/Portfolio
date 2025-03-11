"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative px-10"
          >
            <div className="aspect-square rounded-lg overflow-hidden border-4 border-background shadow-xl">
              <img
                src="/pic.jpg"
                alt="Dattaraj's professional photo"
                className="w-full h-full object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Hi there! I&apos;m Dattaraj
            </h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m a passionate full-stack developer with expertise in
              building modern web applications. With over 5 years of experience
              in the industry, I&apos;ve worked on a variety of projects ranging
              from small business websites to complex enterprise applications.
            </p>
            <p className="text-muted-foreground mb-6">
              My technical toolkit includes React, Next.js, Node.js, and various
              database technologies. I&apos;m particularly interested in
              creating intuitive user experiences and scalable backend
              solutions.
            </p>
            <p className="text-muted-foreground mb-8">
              When I&apos;m not coding, you can find me hiking in the mountains,
              reading science fiction, or experimenting with new recipes in the
              kitchen.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-2">Frontend</h4>
                  <p className="text-sm">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-2">Backend</h4>
                  <p className="text-sm">
                    Node.js, Express, PostgreSQL, MongoDB
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-2">Tools</h4>
                  <p className="text-sm">Git, Docker, AWS, Vercel</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-2">Design</h4>
                  <p className="text-sm">Figma, Adobe XD, UI/UX principles</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
