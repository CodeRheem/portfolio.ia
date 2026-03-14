"use client";

import { motion, useInView } from "framer-motion";
import { Globe, Palette, Code, Sparkles } from "lucide-react";
import { useRef } from "react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Web Design",
    description:
      "Creating beautiful, responsive web experiences that engage and convert users. Focusing on accessibility and performance.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Front-End Development",
    description:
      "Building fast, scalable front-end applications with modern frameworks like React, Vue, and Tailwind CSS.",
    icon: <Code className="w-6 h-6" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-24 bg-background-light/10 dark:bg-background-dark/10 space-mono-regular"
    >
      <div className="container-pattern-aligned">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* ── Left heading column ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 sticky top-32 text-white">
              My Toolkit For Your <br />
              <span className="text-luxury-gold">Next Big Idea</span>
            </h2>
            <p className="text-luxury-platinum/60 mb-8 lg:sticky lg:top-[280px]">
              I combine technical expertise with design thinking to deliver
              comprehensive solutions.
            </p>
          </motion.div>

          {/* ── Service cards grid ── */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  borderColor: "rgba(234, 179, 8, 0.5)",
                }}
                className="p-8 bg-white/[0.04] rounded-2xl border border-white/10 hover:shadow-lg hover:shadow-luxury-gold/10 transition-all duration-300 group"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: index % 2 === 0 ? 5 : -5,
                  }}
                  className="w-12 h-12 bg-luxury-gold/10 rounded-xl flex items-center justify-center mb-6 text-luxury-gold group-hover:bg-luxury-gold group-hover:text-black transition-colors duration-300"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-luxury-platinum/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}