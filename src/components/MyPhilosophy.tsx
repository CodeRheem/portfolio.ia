import { motion, useInView } from "framer-motion";
import { Sparkles, BookOpen, Headphones, Network } from "lucide-react";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container-pattern-aligned relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="sticky top-32">
              <div className="flex items-center gap-2 mb-6 text-luxury-gold">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
                <span className="text-sm font-bold tracking-widest uppercase text-luxury-platinum/70">My Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8 text-white space-mono-regular"></h2>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-none mb-8 text-white space-mono-regular">Bridging the Gap Between <span className="text-transparent bg-clip-text bg-linear-to-r from-luxury-gold to-luxury-bronze">Human Idea</span> & Digital Reality.</h2>
              <motion.a
                href="#experience"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-lg font-medium text-white border-b-2 border-luxury-gold pb-1 hover:text-luxury-gold transition-colors group"
              >
                See my journey
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-sm"
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12">
            <motion.div
              variants={containerVariants}
              className="text-luxury-platinum/70 space-y-8 text-lg leading-relaxed"
            >
              <motion.p
                variants={itemVariants}
                className="first-letter:text-5xl first-letter:font-bold first-letter:text-luxury-gold first-letter:float-left first-letter:mr-3"
              >
              I&apos;m Abdul-Rahman Ibraheem, a Software Engineer creating scalable web applications and exploring AI to build tools that make technology smarter and more useful for everyone.
              </motion.p>
              <motion.p variants={itemVariants}>
                My philosophy centers on creating solutions that are not just functional but transformative. Every project I build is designed to make a meaningful impact — from helping people learn faster to improving productivity through intelligent technology.
              </motion.p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-6"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:shadow-lg hover:shadow-luxury-gold/20 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg text-white">Intellectual Curiosity</h3>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                    className="text-luxury-gold bg-luxury-gold/10 p-2 rounded-lg group-hover:bg-luxury-gold group-hover:text-black transition-colors duration-300"
                  >
                    <BookOpen className="w-5 h-5" />
                  </motion.div>
                </div>
                <p className="text-sm text-luxury-platinum/60">
                  Currently exploring the depths of AI ethics and Machine Learning architectures. Always reading, always learning.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:shadow-lg hover:shadow-luxury-gold/20 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg text-white">Creative Flow</h3>
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                    className="text-luxury-gold bg-luxury-gold/10 p-2 rounded-lg group-hover:bg-luxury-gold group-hover:text-black transition-colors duration-300"
                  >
                    <Headphones className="w-5 h-5" />
                  </motion.div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex gap-1 h-4 items-end">
                    {[2, 4, 3, 2].map((height, i) => (
                      <motion.span
                        key={i}
                        className="w-1 bg-luxury-gold"
                        style={{ height: `${height * 4}px` }}
                        animate={{
                          height: [`${height * 4}px`, `${(height + 2) * 4}px`, `${height * 4}px`],
                        }}
                        transition={{
                          duration: 0.8 + i * 0.2,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-mono text-luxury-platinum/50">Now Playing: Deep Focus Lo-Fi</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:shadow-lg hover:shadow-luxury-gold/20 transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg text-white">Structured Process</h3>
                  <motion.div
                    whileHover={{ rotate: [0, 360] }}
                    transition={{ duration: 0.7 }}
                    className="text-luxury-gold bg-luxury-gold/10 p-2 rounded-lg group-hover:bg-luxury-gold group-hover:text-black transition-colors duration-300"
                  >
                    <Network className="w-5 h-5" />
                  </motion.div>
                </div>
                <div className="flex gap-2">
                  <motion.span
                    className="h-1.5 flex-1 rounded-full bg-luxury-gold transition-all duration-300"
                    whileHover={{ scaleY: 1.8 }}
                  />
                  <span className="h-1.5 flex-1 rounded-full bg-white/10"></span>
                  <span className="h-1.5 flex-1 rounded-full bg-white/10"></span>
                  <span className="h-1.5 flex-1 rounded-full bg-white/10"></span>
                </div>
                <p className="text-xs mt-3 text-luxury-platinum/50">Discovery → Strategy → Build → Launch</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}