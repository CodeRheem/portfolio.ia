import { useEffect, useRef, useState } from "react";

export default function BackgroundImage() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineColor, setLineColor] = useState("#ffffff");

  useEffect(() => {
    // Get the line color from CSS variable
    const updateLineColor = () => {
      if (containerRef.current) {
        const computedStyle = getComputedStyle(containerRef.current);
        const color = computedStyle.getPropertyValue('--line-colour').trim();
        const finalColor = color || "#ffffff";
        setLineColor(finalColor);
      }
    };

    updateLineColor();

    // Update on dark mode toggle
    const observer = new MutationObserver(updateLineColor);
    if (document.documentElement) {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class'],
      });
    }

    return () => observer.disconnect();
  }, []);

  // Update lines when color changes
  useEffect(() => {
    if (svgRef.current && lineColor) {
      const lines = svgRef.current.querySelectorAll('.line');
      lines.forEach((line) => {
        (line as SVGElement).setAttribute('stroke', lineColor);
      });
    }
  }, [lineColor]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none bg-pattern z-[1]"
      style={{
        opacity: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        fill="none"
        className="w-full h-full"
        preserveAspectRatio="none"
        style={{
          opacity: 1,
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      >
        <defs>
          <style>
            {`
              .line {
                stroke: ${lineColor};
                stroke-width: 0.5;
                stroke-opacity: 0.6;
                vector-effect: non-scaling-stroke;
                stroke-linecap: round;
                fill: none;
              }
              .line-strong {
                stroke-opacity: 0.8;
                stroke-width: 0.5;
              }
            `}
          </style>
        </defs>

        {/* Vertical grid lines (only two) - scaled to new viewBox */}
        <line className="line line-strong" x1="160" y1="0" x2="160" y2="1080" stroke={lineColor} />
        <line className="line line-strong" x1="1760" y1="0" x2="1760" y2="1080" stroke={lineColor} />

        {/* Bottom-left quadrant */}
        {/* Centre at (0, 1080) */}
        <path className="line line-strong" d="M 373 1080 A 373 373 0 0 0 0 707" stroke={lineColor} />
        <path className="line" d="M 267 1080 A 267 267 0 0 0 0 813" stroke={lineColor} />
        <path className="line" d="M 160 1080 A 160 160 0 0 0 0 920" stroke={lineColor} />

        {/* Radial lines for bottom-left quadrant */}
        <line className="line" x1="0" y1="1080" x2="373" y2="1080" stroke={lineColor} />
        <line className="line" x1="0" y1="1080" x2="0" y2="707" stroke={lineColor} />
        <line className="line" x1="0" y1="1080" x2="264" y2="816" stroke={lineColor} />
        <line className="line" x1="0" y1="1080" x2="323" y2="910" stroke={lineColor} />
        <line className="line" x1="0" y1="1080" x2="188" y2="791" stroke={lineColor} />

        {/* Top-right quadrant */}
        {/* Centre at (1920, 0) */}
        <path className="line line-strong" d="M 1547 0 A 373 373 0 0 1 1920 373" stroke={lineColor} />
        <path className="line" d="M 1653 0 A 267 267 0 0 1 1920 267" stroke={lineColor} />
        <path className="line" d="M 1760 0 A 160 160 0 0 1 1920 160" stroke={lineColor} />

        {/* Radial lines for top-right quadrant */}
        <line className="line" x1="1920" y1="0" x2="1547" y2="0" stroke={lineColor} />
        <line className="line" x1="1920" y1="0" x2="1920" y2="373" stroke={lineColor} />
        <line className="line" x1="1920" y1="0" x2="1656" y2="264" stroke={lineColor} />
        <line className="line" x1="1920" y1="0" x2="1597" y2="170" stroke={lineColor} />
        <line className="line" x1="1920" y1="0" x2="1732" y2="289" stroke={lineColor} />
      </svg>
    </div>
  );
}