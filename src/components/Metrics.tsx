import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface Metric {
  value: string;
  title: string;
  description: string;
  target: number;
  suffix: string;
}

const metrics: Metric[] = [
  {
    value: "10+",
    title: "Projects Delivered",
    description: "Across web, mobile & full-stack",
    target: 10,
    suffix: "+",
  },
  {
    value: "3+",
    title: "Years Experience",
    description: "Building modern web applications",
    target: 3,
    suffix: "+",
  },
  {
    value: "99%",
    title: "Client Satisfaction",
    description: "Rated across all completed work",
    target: 99,
    suffix: "%",
  },
];

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const spring = useSpring(0, { stiffness: 50, damping: 30 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <>
      <motion.span>{display}</motion.span>
      <span>{suffix}</span>
    </>
  );
}

export default function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="stats"
      className="py-24 overflow-hidden relative"
    >
      <div className="absolute inset-0 opacity-20 bg-size-[32px_32px] bg-[radial-gradient(#D4AF37_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_20%,black_40%,transparent_100%)]"></div>

      <div className="container-pattern-aligned relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
              className="p-4 group cursor-default"
            >
              {/* Animated number */}
              <motion.h3
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: index * 0.15 + 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-luxury-gold to-luxury-bronze mb-2"
              >
                <AnimatedNumber value={metric.target} suffix={metric.suffix} />
              </motion.h3>

              <p className="text-lg font-semibold text-white mt-2">
                {metric.title}
              </p>
              <p className="text-sm text-luxury-platinum/60 mt-1">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}