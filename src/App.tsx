import Navbar from "./components/Navbar";
import BackgroundImage from "./components/BackgroundImage";
import ContentWrapper from "./components/ContentWrapper";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import DotBackground from "./components/DotBackground";

function App() {
  return (
    <>
      <div className="min-h-screen text-text-main-light dark:text-text-main-dark font-sans transition-colors duration-300 relative selection:bg-primary selection:text-black">
        {/* Background Pattern SVG - Behind everything but visible */}
        <BackgroundImage />

        {/* Background gradient blobs with subtle animation */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.6, 0.7, 0.6],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, -50, 0],
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.5, 0.4],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-[20%] right-[-5%] w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[100px] dark:bg-blue-500/10"
          />
        </div>
        <DotBackground />
        <ContentWrapper>
          <Navbar />
        </ContentWrapper>
      </div>
    </>
  );
}

export default App;
