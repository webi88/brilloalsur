"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Floating leaf particle
function Leaf({ index }: { index: number }) {
  const delay = index * 0.7;
  const duration = 8 + (index % 5) * 2;
  const xStart = 5 + (index * 17) % 90;
  const size = 6 + (index % 4) * 3;

  return (
    <motion.div
      className="fixed pointer-events-none z-[5] opacity-0"
      style={{ left: `${xStart}vw`, top: "-20px" }}
      animate={{
        y: ["0vh", "110vh"],
        x: [0, 30 * (index % 2 === 0 ? 1 : -1), -20 * (index % 2 === 0 ? 1 : -1), 0],
        rotate: [0, 180, 360],
        opacity: [0, 0.35, 0.35, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.2, 0.8, 1],
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6 2 2 8 2 12c0 5 4 10 10 10 2-3 4-7 4-10 0-4-2-8-4-10z"
          fill="#6b7c3a"
          opacity="0.7"
        />
      </svg>
    </motion.div>
  );
}

// Wave SVG divider between sections
export function WaveDivider({ flip = false, color = "#f5f0e8" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`} style={{ height: 60 }}>
      <motion.svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-full"
        initial={{ x: -40, opacity: 0.7 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <motion.path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={color}
          animate={{
            d: [
              "M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z",
              "M0,20 C240,50 480,10 720,20 C960,50 1200,10 1440,20 L1440,60 L0,60 Z",
              "M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

// Parallax wind lines that drift across a section
export function WindLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-white/10 rounded-full"
          style={{
            top: `${15 + i * 18}%`,
            width: `${120 + i * 40}px`,
            left: "-200px",
          }}
          animate={{
            x: ["0vw", "120vw"],
            opacity: [0, 0.4, 0.4, 0],
          }}
          transition={{
            duration: 5 + i * 1.5,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Section entrance with nature-inspired stagger
export function NatureReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Parallax scroll layer — moves at a different speed to the page
export function ParallaxLayer({ children, speed = 0.3, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`${-50 * speed}px`, `${50 * speed}px`]);
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: smoothY }}>{children}</motion.div>
    </div>
  );
}

// Floating leaves overlay — rendered once at the top level
export function FloatingLeaves() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <Leaf key={i} index={i} />
      ))}
    </div>
  );
}

// Scroll progress bar at top of page
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-terracotta-500 origin-left z-[200]"
      style={{ scaleX }}
    />
  );
}
