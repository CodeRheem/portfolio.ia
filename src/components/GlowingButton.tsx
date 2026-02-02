import React from 'react';

export default function GlowingButton() {
  return (
    <>
      <button
        className="relative bg-luxury-gold/10 border border-luxury-gold px-2 py-2 pl-7 mb-3 text-sm font-semibold text-luxury-gold rounded-full  transition-all duration-300 active:translate-y-0 uppercase"
      >
        {/* Glowing Dot */}
        <span className="absolute left-4 bottom-1 -translate-y-1/2 w-2 h-2 bg-luxury-gold rounded-full glow-dot"></span>
        Open to Opportunities
      </button>

      <style>{`
        @keyframes glow-dot {
          0%, 100% {
            box-shadow: 0 0 4px #D4AF37,
                        0 0 8px #D4AF37;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            box-shadow: 0 0 8px #D4AF37,
                        0 0 12px #D4AF37,
                        0 0 16px #D4AF37;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        .glow-dot {
          animation: glow-dot 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}