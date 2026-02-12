import { cn } from "@/lib/utils";
import HeroSection from "./HeroSection";

export default function DotBackground() {
  return (
    <div className="relative z-10 flex min-h-screen w-full items-center justify-center">
      <div
        className={cn(
          "absolute inset-0 opacity-40",
          "[background-size:32px_32px]",
          "[background-image:radial-gradient(#D4AF37_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
      <div className="relative z-20 w-full">
        <HeroSection />
      </div>
    </div>
  );
}
