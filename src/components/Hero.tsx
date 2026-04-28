"use client";

import { motion } from "framer-motion";
import HeroSearch from "./HeroSearch";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: "85vh",
        background: "linear-gradient(135deg, #0a3d62 0%, #006994 20%, #0097b2 40%, #00b4a0 58%, #2ecc71 75%, #f39c12 90%, #e74c3c 100%)",
      }}
    >
      {/* Animated gradient orbs — Caribbean depth */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Deep turquoise orb */}
        <motion.div
          className="absolute rounded-full blur-3xl opacity-60"
          style={{ width: 700, height: 700, top: "-15%", left: "-10%", background: "radial-gradient(circle, #00d4ff 0%, #0097b2 50%, transparent 80%)" }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Emerald jungle orb */}
        <motion.div
          className="absolute rounded-full blur-3xl opacity-50"
          style={{ width: 600, height: 600, bottom: "-10%", right: "5%", background: "radial-gradient(circle, #1abc9c 0%, #27ae60 50%, transparent 80%)" }}
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Warm sunset orb */}
        <motion.div
          className="absolute rounded-full blur-3xl opacity-40"
          style={{ width: 500, height: 500, top: "30%", right: "20%", background: "radial-gradient(circle, #f39c12 0%, #e74c3c 60%, transparent 80%)" }}
          animate={{ x: [0, 25, -15, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Caribbean blue center */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-30"
          style={{ width: 800, height: 400, top: "40%", left: "25%", background: "radial-gradient(ellipse, #00c9ff 0%, transparent 70%)" }}
          animate={{ scaleX: [1, 1.15, 1], scaleY: [1, 0.9, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Video (plays on top of gradient when available) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover z-[1] pointer-events-none"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark overlay for text contrast — lighter than before to let gradient show */}
      <div className="absolute inset-0 bg-black/30 z-[2]" />


      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24 pb-8 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-cream-100 text-sm font-medium border border-white/20">
            Felipe Carrillo Puerto · Bacalar · Othón P. Blanco
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-4 sm:mb-6 flex justify-center"
        >
          <img
            src="/logo-titulo.png"
            alt="Regresémosle el Brillo al Sur"
            className="w-full max-w-[220px] sm:max-w-xs md:max-w-sm lg:max-w-md h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-base sm:text-xl text-cream-200 mb-6 sm:mb-10 font-body leading-relaxed"
        >
          Construimos juntos el futuro de la región sur de Quintana Roo.
          Un espacio de consenso para impulsar el bienestar, la inversión
          sustentable y la justicia social que nuestro territorio merece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a
            href="#nosotros"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#nosotros")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 sm:py-4 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-xl text-base sm:text-lg font-semibold transition-all hover:scale-105 shadow-lg shadow-terracotta-500/30"
          >
            Conoce la iniciativa
          </a>
          <a
            href="#voces"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#voces")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-xl text-base sm:text-lg font-semibold transition-all border border-white/30 hover:scale-105"
          >
            Comparte tu voz
          </a>
        </motion.div>

        <HeroSearch />
      </div>
    </section>
  );
}
