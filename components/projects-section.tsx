"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import ProjectCard from "./project-card";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product management, cart functionality, and payment processing.",
    image: "/eCommerce.png",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/Dattaraj/ecommerce-platform",
  },

  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A weather application with location-based forecasts, interactive maps, and historical data.",
    image: "/weatherDashboard.png",
    tags: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
    demoUrl: "https://weather-demo.example.com",
    githubUrl: "https://github.com/Dattaraj/weather-dashboard",
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "A comprehensive fitness application for tracking workouts, nutrition, and progress over time.",
    image: "/fitnessTracker.png",
    tags: ["Angular", "TypeScript", "Firebase", "NgRx"],
    demoUrl: "https://fitness-demo.example.com",
    githubUrl: "https://github.com/Dattaraj/fitness-tracker",
  },
];

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Here are some of the projects I&apos;ve worked on. Each one
            represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
