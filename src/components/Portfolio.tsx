"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Layers, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: "Web App" | "Mobile" | "Entertainment" | "Productivity" | "Healthcare";
  url: string;
  accent: string;
  year: string;
  size?: "large" | "normal";
  image?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    id: 1,
    title: "Break Fitnezz",
    description:
      "A modern fitness platform helping users hit their health goals through structured workout programs, strength training, and expert cardio guidance.",
    tags: ["React", "Tailwind", "Fitness"],
    category: "Web App",
    url: "https://break-fitnezz.vercel.app",
    accent: "#f97316",
    year: "2024",
    size: "large",
    image: "/images/Screenshot 2026-03-28 101240.png",
  },
  {
    id: 2,
    title: "Movix",
    description:
      "Discover trending movies, search for films, and browse ratings, trailers, and release dates in one sleek interface.",
    tags: ["Vue", "REST API", "Tailwind CSS"],
    category: "Entertainment",
    url: "https://movix-two-ruby.vercel.app",
    accent: "#a855f7",
    year: "2024",
    image: "/images/Screenshot 2026-03-28 101540.png",
  },
  {
    id: 3,
    title: "Cure Ledger",
    description:
      "A healthcare records platform built to simplify medical data management and bridge the gap between patients and providers.",
    tags: ["Next.js", "TypeScript", "Healthcare"],
    category: "Healthcare",
    url: "https://cure-ledger.vercel.app",
    accent: "#10b981",
    year: "2024",
    image: "/images/Screenshot 2026-03-28 101930.png",
  },
  {
    id: 4,
    title: "KDB",
    description:
      "A focused productivity tool designed to help teams organise tasks, eliminate blockers, and maintain momentum through clean sprint workflows.",
    tags: ["React", "TypeScript", "Productivity"],
    category: "Productivity",
    url: "https://kdb-snowy.vercel.app",
    accent: "#22d3ee",
    year: "2024",
    image: "/images/Screenshot 2026-03-28 101857.png",
  },
];

const CATEGORIES = [
  "All",
  "Web App",
  "Entertainment",
  "Healthcare",
  "Productivity",
] as const;
type Category = (typeof CATEGORIES)[number];

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [hovered, setHovered] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isLarge = project.size === "large";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - left) / width,
      y: (e.clientY - top) / height,
    });
  };

  const imageSource = project.image || project.url;

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setMouse({ x: 0.5, y: 0.5 });
      }}
      className={isLarge ? "md:col-span-2" : ""}
    >
      <Card
        className="group relative overflow-hidden border border-luxury-gold/20 bg-white/5 backdrop-blur-sm h-full hover:bg-white/10 hover:border-luxury-gold/40 transition-all duration-300"
        style={{
          boxShadow: hovered
            ? `0 0 0 1px #eab308 40, 0 20px 60px -12px #eab30830`
            : "0 0 0 1px rgba(255,255,255,0.07)",
        }}
      >
        {/* Noise texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        <CardContent className="p-0 flex flex-col h-full">
          {/* ── Screenshot area ── */}
          <div
            className="relative overflow-hidden"
            style={{ height: isLarge ? "180px" : "140px" }}
          >
            {/* Screenshot */}
            {!imgError && (
              <motion.img
                src={imageSource}
                alt={`${project.title} preview`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                animate={{
                  scale: hovered ? 1.07 : 1.02,
                  x: hovered ? (mouse.x - 0.5) * 18 : 0,
                  y: hovered ? (mouse.y - 0.5) * 10 : 0,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full object-cover object-top"
                style={{ opacity: imgLoaded ? 1 : 0, transition: "opacity 0.6s" }}
              />
            )}

            {/* Fallback gradient when no image */}
            {imgError && (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #eab30815, #eab30805)`,
                }}
              >
                <Layers
                  className="w-12 h-12 opacity-20"
                  style={{ color: "#eab308" }}
                />
              </div>
            )}

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(13,13,13,0.1) 0%, rgba(13,13,13,0.7) 100%)",
              }}
            />

            {/* Top-left: category badge */}
            <div className="absolute top-3 left-3 z-20">
              <Badge
                variant="outline"
                className="text-[10px] font-bold tracking-widest uppercase border-0 backdrop-blur-md space-mono-regular"
                style={{
                  background: `#eab30820`,
                  color: "#eab308",
                  boxShadow: `inset 0 0 0 1px #eab30835`,
                }}
              >
                {project.category}
              </Badge>
            </div>

            {/* Top-right: year */}
            <span className="absolute top-3 right-3 z-20 text-[10px] text-white/30 space-mono-regular">
              {project.year}
            </span>

            {/* View live — slides up on hover */}
            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center"
              initial={false}
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={false}
                animate={{
                  y: hovered ? 0 : 12,
                  scale: hovered ? 1 : 0.9,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-1.5 text-sm font-semibold rounded-full px-5 py-2.5 text-black space-mono-regular"
                style={{ background: "#eab308" }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUpRight className="w-4 h-4" />
                View Live
              </motion.a>
            </motion.div>
          </div>

          {/* Accent line */}
          <div
            className="h-0.5 w-full"
            style={{
              background: `linear-gradient(to right, #eab30880, transparent)`,
            }}
          />

          {/* ── Content ── */}
          <div className="flex flex-col gap-3 p-5 flex-1">
            {/* Title row */}
            <div className="flex items-start justify-between gap-2">
              <h3
                className="text-lg font-bold text-white leading-snug tracking-tight group-hover:opacity-90 transition-opacity space-mono-regular"
              >
                {project.title}
              </h3>
              <motion.div
                animate={{ rotate: hovered ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 mt-0.5"
              >
                <ArrowUpRight
                  className="w-4 h-4 opacity-40 group-hover:opacity-70 transition-opacity"
                  style={{ color: "#eab308" }}
                />
              </motion.div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed line-clamp-2 flex-1 space-mono-regular">
              {project.description}
            </p>

            <Separator className="bg-white/10" />

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-sm text-[11px] font-medium text-white/50 border border-white/10 bg-white/5 space-mono-regular"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Portfolio Section ────────────────────────────────────────────────────────

export default function Portfolio() {
  const [selected, setSelected] = useState<Category>("All");
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  const filtered = projects.filter((p) =>
    selected === "All" ? true : p.category === selected
  );

  return (
    <>
      <section
        id="portfolio"
        className="relative py-28 overflow-hidden bg-black/50 md:bg-background-light/10 dark:md:bg-background-dark/10"
      >

        <div className="container-pattern-aligned relative z-10">

          {/* ── Header ── */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-luxury-gold/40" />
              <span
                className="text-xs font-bold tracking-[0.25em] uppercase text-luxury-gold space-mono-regular"
              >
                Selected Work
              </span>
              <Sparkles className="w-3 h-3 text-luxury-gold" />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              {/* Title */}
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight space-mono-regular"
              >
                Featured{" "}
                <span
                  className="text-luxury-gold"
                >
                  Works
                </span>
              </h2>

              {/* Description */}
              <p
                className="text-white/60 text-sm max-w-xs leading-relaxed lg:text-right space-mono-regular"
              >
                Engineering meets design to solve real-world problems. Every
                pixel intentional.
              </p>
            </div>
          </motion.div>

          {/* ── Filter tabs ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {CATEGORIES.map((cat) => {
              const active = selected === cat;
              return (
                <Button
                  key={cat}
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelected(cat)}
                  className="relative rounded-sm text-xs font-bold tracking-widest uppercase h-8 px-4 transition-all duration-300 space-mono-regular"
                  style={{
                    color: active ? "#080808" : "rgba(255,255,255,0.50)",
                    background: active ? "#eab308" : "transparent",
                    boxShadow: active ? "0 0 20px rgba(234,179,8,0.3)" : "none",
                    border: active
                      ? "none"
                      : "1px solid rgba(234,179,8,0.2)",
                  }}
                >
                  {active && (
                    <motion.span
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-sm"
                      style={{ background: "#eab308" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </Button>
              );
            })}

            {/* Project count */}
            <span
              className="ml-auto self-center text-xs text-white/40 space-mono-regular"
            >
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
          </motion.div>

          {/* ── Bento grid ── */}
          <motion.div
            ref={gridRef}
            animate={gridInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {filtered.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-24 gap-3"
                >
                  <Layers className="w-8 h-8 text-white/10" />
                  <p
                    className="text-white/30 text-xs tracking-widest uppercase space-mono-regular"
                  >
                    No projects in this category yet
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Footer line ── */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={gridInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 h-px origin-left"
            style={{
              background:
                "linear-gradient(to right, #eab30860, transparent)",
            }}
          />
        </div>
      </section>
    </>
  );
}