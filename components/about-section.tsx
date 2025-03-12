"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"; // Import Next.js Image component

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
              <Image
                src="/pic.jpg"
                alt="Dattaraj's professional photo"
                width={400} // Adjust width
                height={400} // Adjust height
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
              I am Dattaraj Ajay Chindarkar, a dedicated and passionate Computer Engineering 
              student currently pursuing my degree at SSPM College, Kankavli. With a strong 
              foundation in programming languages like Python, C, C++, Java, HTML, CSS, and 
              JavaScript, I am eager to apply my technical knowledge to develop innovative solutions.
            </p>
            <p className="text-muted-foreground mb-6">
              My academic journey has been enriched with practical experience, including an 
              internship in Python at Softmusk Info Pvt Ltd, where I gained hands-on experience 
              in software development. Additionally, I have worked on an Arduino-Based Robotic 
              Arm project, showcasing my interest in embedded systems and automation.
            </p>
            <p className="text-muted-foreground mb-8">
              I am constantly expanding my skill set, currently pursuing courses in Arduino and 
              Python&apos;s Django framework. My strengths lie in quick learning, teamwork, and 
              critical thinking, which help me adapt and thrive in dynamic environments.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-2">Programming</h4>
                  <p className="text-sm">
                    Python, C, C++, Java, JavaScript, HTML, CSS
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-2">Technologies</h4>
                  <p className="text-sm">
                    Arduino, Django, Software Testing
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-2">Strengths</h4>
                  <p className="text-sm">
                    Quick Learner, Teamwork, Critical Thinking
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold text-primary mb-2">Projects</h4>
                  <p className="text-sm">
                    Arduino-Based Robotic Arm
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
