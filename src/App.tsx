import Navbar from "./components/Navbar";
import BackgroundImage from "./components/BackgroundImage";
import ContentWrapper from "./components/ContentWrapper";
import { motion } from "framer-motion";
import MyPhilosophy from "./components/MyPhilosophy";
import DotBackground from "./components/DotBackground";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#080808] text-text-main-light dark:text-text-main-dark font-sans transition-colors duration-300 relative selection:bg-primary selection:text-black">

        {/* Background Pattern SVG */}
        <BackgroundImage />

        {/* Fixed glow layer — sits above BackgroundImage, behind content */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

          {/* Luxury gold glow — left */}
          <div
            aria-hidden={true}
            className="absolute -left-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, #eab308 0%, #ca8a04 35%, transparent 70%)",
              filter: "blur(100px)",
              opacity: 0.45,
            }}
          />

          {/* Deep blue glow — right */}
          <div
            aria-hidden={true}
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, #2563eb 0%, #1e3a8a 35%, transparent 70%)",
              filter: "blur(100px)",
              opacity: 0.40,
            }}
          />

          {/* Center vignette to keep text readable */}
          <div
            aria-hidden={true}
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)",
            }}
          />

          {/* Animated floating blobs */}
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
            className="absolute bottom-[20%] right-[-5%] w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px]"
          />
        </div>

        <DotBackground />

        {/* All page content — sits above the glow layer */}
        <div className="relative z-10">
          <ContentWrapper>
            <Navbar />
            <MyPhilosophy />
            <Portfolio />
            <Services />
          </ContentWrapper>
        </div>
      </div>
    </>
  );
}

export default App;