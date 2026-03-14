"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  date: string;
  coursework?: string;
  grade?: string;
}

const education: EducationItem[] = [
  {
    institution: "Obafemi Awolowo University",
    degree: "Bsc Computer Science and Engineering",
    location: "Ife, Osun State",
    date: "2023-Present",
    coursework: "Software Development, System Design, Data Structures, Algorithms",
  },
  {
    institution: "AltSchool Africa",
    degree: "Frontend Engineering",
    location: "Online",
    date: "Completed",
    grade: "Distinction",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container-pattern-aligned">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold mb-16 text-center text-white space-mono-regular"
        >
          Education &{" "}
          <span className="text-luxury-gold">Certifications</span>
        </motion.h2>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(234, 179, 8, 0.5)" }}
              className="glass-card p-8 rounded-2xl border border-white/10 shadow-soft hover:shadow-lg hover:shadow-luxury-gold/10 transition-all duration-300"
            >
              {/* Icon + institution */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{edu.institution}</h3>
                  <p className="text-luxury-gold/80 text-sm">{edu.date}</p>
                </div>
              </div>

              <p className="text-white font-semibold mb-3">{edu.degree}</p>
              <p className="text-luxury-platinum/60 text-sm mb-3">{edu.location}</p>

              {edu.coursework && (
                <p className="text-luxury-platinum/60 text-xs mb-2">
                  <span className="font-semibold text-luxury-platinum/80">Relevant Coursework:</span>{" "}
                  {edu.coursework}
                </p>
              )}
              {edu.grade && (
                <p className="text-luxury-gold/80 text-xs font-semibold">{edu.grade}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card p-8 rounded-2xl border border-white/10"
        >
          <h3 className="text-white font-bold text-2xl mb-6">
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-1 gap-4">
            {[
              { title: "Diploma in Frontend Engineering", issuer: "AltSchool Africa" },
            ].map((cert) => (
              <motion.div
                key={cert.title}
                whileHover={{ scale: 1.02, borderColor: "rgba(234, 179, 8, 0.5)" }}
                transition={{ duration: 0.2 }}
                className="bg-luxury-gold/10 rounded-lg p-4 border border-luxury-gold/30"
              >
                <p className="text-luxury-gold font-semibold mb-1">{cert.title}</p>
                <p className="text-luxury-platinum/60 text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}