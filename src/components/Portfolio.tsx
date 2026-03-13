import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  image: string;
  url: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Break Fitnezz",
    description:
      "A modern fitness platform designed to help users improve their health and reach their fitness goals through structured workout programs, strength training, cardio sessions, and expert guidance.",
    tags: ["Fitness", "React", "Tailwind"],
    category: "Web App",
    image: "/images/projects/break-fitnezz.png",
    url: "https://break-fitnezz.vercel.app",
  },
  {
    id: 2,
    title: "Movix",
    description:
      "A modern movie discovery web application that allows users to explore trending movies, search for films, and view detailed information such as ratings, trailers, and release dates.",
    tags: ["Vue", "API", "Tailwind CSS"],
    category: "Entertainment",
    image: "/images/projects/movix.png",
    url: "https://movix-two-ruby.vercel.app",
  },
 {
  id: 3,
  title: "Note App",
  description: "A simple and responsive note-taking web application that allows users to create, edit, and delete notes while keeping ideas and tasks organized.",
  tags: ["NextJs", "JavaScript", "Tailwind CSS"],
  category: "Productivity",
  image: "/images/projects/note-app.png",
  url: ""
}
];

const categories = ["All Projects", "Web App", "Mobile"];

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

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group glass-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col h-full ${
        project.featured
          ? "border-2 border-luxury-gold/70 shadow-lg shadow-luxury-gold/20 transform md:-translate-y-6 z-10"
          : "border-white/10 hover:border-luxury-gold/40"
      }`}
    >
      <div className="h-56 overflow-hidden relative">
        <motion.div
          className={`absolute inset-0 z-10 transition-opacity duration-300 ${
            project.featured ? "bg-black/35" : "bg-luxury-gold/20"
          }`}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
            x: isHovered ? (mousePosition.x - 128) * 0.05 : 0,
            y: isHovered ? (mousePosition.y - 112) * 0.05 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          {project.featured ? (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
            >
              <Play className="w-8 h-8 text-black" />
            </motion.a>
          ) : (
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg"
            >
              View Details
            </motion.span>
          )}
        </motion.div>
      </div>
      <div
        className={`p-8 flex flex-col grow ${project.featured ? "bg-linear-to-b from-luxury-gold/10 to-transparent" : ""}`}
      >
        <div className="flex justify-between items-start mb-2">
          <motion.h3
            whileHover={{ x: 5 }}
            className="text-2xl font-bold mb-3 text-white group-hover:text-luxury-gold transition-colors"
          >
            {project.title}
          </motion.h3>
          {project.featured && (
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-luxury-gold text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider"
            >
              Featured
            </motion.span>
          )}
        </div>
        <p className="text-sm text-luxury-platinum/60 mb-6 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(234, 179, 8, 0.1)",
              }}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-luxury-platinum/80 font-medium cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "All Projects") return true;
    return p.category === selectedCategory.split(" / ")[0];
  });

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container-pattern-aligned">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-bold tracking-widest uppercase text-luxury-platinum/70 mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white space-mono-regular">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-luxury-gold to-luxury-bronze">
              Masterpieces
            </span>
          </h2>
          <p className="text-luxury-platinum/60 text-lg">
            A selection of projects where AI meets intuitive design to solve
            real-world problems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-luxury-gold text-black shadow-md shadow-luxury-gold/30"
                  : "border border-white/15 text-luxury-platinum/70 hover:border-luxury-gold hover:text-luxury-gold"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
