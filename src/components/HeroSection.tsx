import GlowingButton from "./GlowingButton";

export default function HeroSection() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32 mt-16 sm:mt-20 md:mt-26">
      <GlowingButton />
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white font-display-playfair">
        BUILD WITH <br />
        <span className="text-luxury-gold font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          PRECISION,
        </span>{" "}
        <br />
        INNOVATE WITH PURPOSE.
      </h1>
      
      <p className="text-base sm:text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark mb-6 sm:mb-8 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-white font-body-space px-4">
        Hi, I'm <span className="text-white font-semibold">Ibraheem Abdulrahman</span>. A Software Engineer crafting innovative and intelligent systems.
      </p>
      
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none px-4">
        <a
          href="#projects"
          className="relative bg-white text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg shadow-luxury-gold/30 hover:scale-105 hover:shadow-xl hover:shadow-luxury-gold/40 hover:bg-luxury-gold transition-all duration-500 group text-sm sm:text-base"
        >
          <span className="relative z-10">View My Work</span>
          <span className="absolute -inset-1 border-2 border-luxury-gold bg-luxury-gold opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
        </a>

        <a
          href="#about"
          className="relative border  border-luxury-gold/20 text-white font-semibold px-8 sm:px-10 py-2.5 sm:py-3 rounded-full shadow-lg hover:bg-luxury-gold/20 hover:scale-105 transition-all duration-500 group text-sm sm:text-base"
        >
          <span className="relative z-10">About Me</span>
          <span className="absolute -inset-0.5 border border-luxury-gold opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
        </a>
      </div>
    </section>
  );
}