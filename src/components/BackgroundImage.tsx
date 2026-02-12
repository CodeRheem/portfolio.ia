export default function BackgroundImage() {
  return (
    <div className="fixed inset-0 pointer-events-none bg-black z-[1]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        fill="none"
        className="w-full h-full"
        preserveAspectRatio="none"
        style={{ background: "transparent" }}
      >
        <defs>
          <style>
            {`
              .line {
                stroke: var(--line-colour, #ffffff);
                stroke-width: 1;
                stroke-opacity: 0.75;
                vector-effect: non-scaling-stroke;
                stroke-linecap: round;
                fill: none;
              }
              .line-strong {
                stroke-opacity: 0.9;
              }
            `}
          </style>
        </defs>

        {/* Vertical grid lines */}
        <line className="line" x1="120" y1="0" x2="120" y2="900" />
        <line className="line" x1="1320" y1="0" x2="1320" y2="900" />

        {/* Bottom-left quadrant — Centre at (0, 900) */}
        <path className="line line-strong" d="M 280 900 A 280 280 0 0 0 0 620" />
        <path className="line" d="M 200 900 A 200 200 0 0 0 0 700" />
        <path className="line" d="M 120 900 A 120 120 0 0 0 0 780" />

        {/* Radial lines for bottom-left quadrant */}
        <line className="line" x1="0" y1="900" x2="280" y2="900" />
        <line className="line" x1="0" y1="900" x2="0" y2="620" />
        <line className="line" x1="0" y1="900" x2="198" y2="702" />
        <line className="line" x1="0" y1="900" x2="242" y2="758" />
        <line className="line" x1="0" y1="900" x2="141" y2="659" />

        {/* Top-right quadrant — Centre at (1440, 0) */}
        <path className="line line-strong" d="M 1160 0 A 280 280 0 0 1 1440 280" />
        <path className="line" d="M 1240 0 A 200 200 0 0 1 1440 200" />
        <path className="line" d="M 1320 0 A 120 120 0 0 1 1440 120" />

        {/* Radial lines for top-right quadrant */}
        <line className="line" x1="1440" y1="0" x2="1160" y2="0" />
        <line className="line" x1="1440" y1="0" x2="1440" y2="280" />
        <line className="line" x1="1440" y1="0" x2="1242" y2="198" />
        <line className="line" x1="1440" y1="0" x2="1198" y2="142" />
        <line className="line" x1="1440" y1="0" x2="1299" y2="241" />
      </svg>
    </div>
  );
}