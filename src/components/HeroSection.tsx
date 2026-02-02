export default function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center py-20 md:py-32 mt-26">
      <h1
        className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white courier-prime-bold"
      >
        BUILD WITH{" "}<br />
        <span className="text-luxury-gold font-semibold text-6xl">PRECISION,</span>{" "}<br />
        INNOVATE WITH PURPOSE.
      </h1>
      <p
        className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark mb-8 max-w-3xl text-white"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        I'm Ibraheem Abdul-Rahman, a dedicated Front-End Developer specializing in
        building responsive and user-centric web applications. With a keen eye
        for detail and a passion for coding, I transform ideas into seamless
        digital experiences.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#projects"
          className="relative bg-white text-black font-semibold px-6 py-2 rounded-full shadow-lg shadow-luxury-gold/30 hover:scale-105 hover:shadow-xl hover:shadow-luxury-gold/40 hover:bg-luxury-gold transition-all duration-500 group"
        >
          <span className="relative z-10">View My Work</span>
          <span className="absolute -inset-1 border-2 border-luxury-gold bg-luxury-gold opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
        </a>

        <a
          href="#contact"
          className="relative bg-transparent border border-luxury-gold/10 text-white font-semibold px-9 py-2 rounded-full shadow-lg hover:bg-luxury-gold/20 hover:scale-105 transition-all duration-500 group"
        >
          <span className="relative z-10">About Me</span>
          <span className="absolute -inset-0.5 border border-luxury-gold opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
        </a>
      </div>
    </section>
  );
}
