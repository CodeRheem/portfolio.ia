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
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 sm:mb-12 md:mb-16 text-center text-white space-mono-regular"
        >
          Education &{" "}
          <span className="text-luxury-gold">Certifications</span>
        </motion.h2>

        {/* Education cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(234, 179, 8, 0.5)" }}
              className="glass-card p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl border border-white/10 shadow-soft hover:shadow-lg hover:shadow-luxury-gold/10 transition-all duration-300"
            >
              {/* Icon + institution */}
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-luxury-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-luxury-gold" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-bold text-base sm:text-lg">{edu.institution}</h3>
                  <p className="text-luxury-gold/80 text-xs sm:text-sm">{edu.date}</p>
                </div>
              </div>

              <p className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{edu.degree}</p>
              <p className="text-luxury-platinum/60 text-xs sm:text-sm mb-2 sm:mb-3">{edu.location}</p>

              {edu.coursework && (
                <p className="text-luxury-platinum/60 text-xs mb-1 sm:mb-2">
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
          className="mt-8 sm:mt-10 md:mt-12 glass-card p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl border border-white/10"
        >
          <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-1 gap-3 sm:gap-4">
            {[
              { title: "Diploma in Frontend Engineering", issuer: "AltSchool Africa" },
            ].map((cert) => (
              <motion.div
                key={cert.title}
                whileHover={{ scale: 1.02, borderColor: "rgba(234, 179, 8, 0.5)" }}
                transition={{ duration: 0.2 }}
                className="bg-luxury-gold/10 rounded-lg p-3 sm:p-4 border border-luxury-gold/30"
              >
                <p className="text-luxury-gold font-semibold mb-1 text-sm sm:text-base">{cert.title}</p>
                <p className="text-luxury-platinum/60 text-xs sm:text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}