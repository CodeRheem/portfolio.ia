import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: "Web App" | "Mobile" | "Entertainment" | "Productivity";
  url: string;
  image?: string;
  featured?: boolean;
  accent?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Break Fitnezz",
    description:
      "A modern fitness platform designed to help users improve their health and reach their fitness goals through structured workout programs, strength training, cardio sessions, and expert guidance.",
    tags: ["Fitness", "React", "Tailwind"],
    category: "Web App",
    url: "https://break-fitnezz.vercel.app",
    image: "/images/break-fitnezz.png",
    accent: "#f97316",
  },
  {
    id: 2,
    title: "Movix",
    description:
      "A modern movie discovery web application that allows users to explore trending movies, search for films, and view detailed information such as ratings, trailers, and release dates.",
    tags: ["Vue", "REST API", "Tailwind CSS"],
    category: "Entertainment",
    url: "https://movix-two-ruby.vercel.app",
    image: "/images/movix%20(1).png",
    accent: "#a855f7",
  },
  {
    id: 3,
    title: "SprintFixer",
    description:
      "A modern productivity web application designed to help users organize tasks, manage workflows, and stay focused by breaking work into manageable sprints.",
    tags: ["Next.js", "TypeScript", "Productivity"],
    category: "Productivity",
    url: "https://sprintfixer-frontend.vercel.app",
    accent: "#22d3ee",
  },
];

const CATEGORIES = [
  "All Projects",
  "Web App",
  "Entertainment",
  "Productivity",
  "Mobile",
] as const;
type Category = (typeof CATEGORIES)[number];

function getLiveScreenshot(url: string): string {
  const normalizedUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  return `https://image.thum.io/get/width/1280/crop/720/${normalizedUrl}`;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: { opacity: 0, y: -24, scale: 0.95, transition: { duration: 0.3 } },
};

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const accent = project.accent ?? "#eab308";
  const screenshotSrc = project.image ?? getLiveScreenshot(project.url);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      layout
      whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-white/25 transition-colors duration-500"
      style={{
        boxShadow: hovered
          ? `0 0 40px 0 ${accent}22, 0 20px 60px -10px rgba(0,0,0,0.6)`
          : "0 4px 30px rgba(0,0,0,0.4)",
      }}
    >
      {/* Spotlight glow that follows the cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: hovered
            ? `radial-gradient(300px circle at ${mouse.x}px ${mouse.y}px, ${accent}18, transparent 70%)`
            : "none",
        }}
      />

      {/* ── Image area ── */}
      <div className="relative h-52 overflow-hidden bg-white/5">
        {/* Project image */}
        {!imgError && (
          <motion.img
            src={screenshotSrc}
            alt={`${project.title} live preview`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            animate={{
              scale: hovered ? 1.06 : 1,
              x: hovered ? (mouse.x - 160) * 0.04 : 0,
              y: hovered ? (mouse.y - 104) * 0.04 : 0,
            }}
            transition={{ duration: 0.4 }}
            className={`w-full h-full object-cover object-top transition-opacity duration-700 ${
              imgLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Dark overlay + View Live button on hover */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center"
          style={{
            background: hovered
              ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
            transition: "background 0.4s ease",
          }}
        >
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-black shadow-xl"
            style={{ background: accent }}
          >
            <ExternalLink className="w-4 h-4" />
            View Live
          </motion.a>
        </motion.div>

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 z-30 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{
            background: `${accent}22`,
            color: accent,
            border: `1px solid ${accent}44`,
          }}
        >
          {project.category}
        </span>


      </div>

      {/* ── Card content ── */}
      <div className="flex flex-col grow p-6 gap-4">
        <div className="flex items-start justify-between gap-3">
          <motion.h3
            className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors duration-300 leading-snug"
            style={{ "--accent": accent } as React.CSSProperties}
          >
            {project.title}
          </motion.h3>

          {project.featured && (
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-black"
              style={{ background: accent }}
            >
              <Sparkles className="w-2.5 h-2.5" />
              Featured
            </motion.span>
          )}
        </div>

        <p className="text-sm text-white/50 leading-relaxed line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 rounded-full text-[11px] font-medium text-white/60 border border-white/10 bg-white/5 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Portfolio section ─────────────────────────────────────────────────────────

export default function Portfolio() {
  const [selected, setSelected] = useState<Category>("All Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = projects.filter((p) =>
    selected === "All Projects" ? true : p.category === selected
  );

  return (
    <section id="portfolio" className="py-28 relative overflow-hidden space-mono-regular">
      {/* Ambient background blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse, #eab30855, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
        
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Masterpieces
            </span>
          </h2>
          <p className="text-white/50 text-base">
            A curated selection of projects where thoughtful engineering meets
            intuitive design to solve real-world problems.
          </p>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {CATEGORIES.map((cat) => {
            const active = selected === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => setSelected(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "text-black shadow-lg shadow-yellow-500/30"
                    : "border border-white/15 text-white/50 hover:border-white/30 hover:text-white"
                }`}
                style={active ? { background: "#eab308" } : {}}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Project grid ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white/30 mt-16 text-sm"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}