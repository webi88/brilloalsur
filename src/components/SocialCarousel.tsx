"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const socialPosts = [
  {
    platform: "Facebook",
    icon: "f",
    color: "bg-blue-600",
    user: "Diálogo por el Sur",
    handle: "@dialogoporelsur",
    content:
      "El sur de Quintana Roo tiene todo para convertirse en un polo de desarrollo sustentable. ¡Únete al diálogo! 🌿",
    likes: 234,
    shares: 45,
    date: "Hace 2 horas",
  },
  {
    platform: "TikTok",
    icon: "♪",
    color: "bg-black",
    user: "dialogosur",
    handle: "@dialogosur",
    content:
      "¿Sabías que Bacalar es uno de los destinos con mayor potencial turístico sustentable en todo México? 🏝️ #DesarrolloSur",
    likes: 1520,
    shares: 312,
    date: "Hace 5 horas",
  },
  {
    platform: "Instagram",
    icon: "📷",
    color: "bg-gradient-to-br from-purple-600 to-pink-500",
    user: "dialogoporelsur",
    handle: "@dialogoporelsur",
    content:
      "La riqueza natural y cultural del sur merece inversiones que la protejan y la potencien. Juntos es posible. 🌎✨",
    likes: 892,
    shares: 67,
    date: "Hace 1 día",
  },
  {
    platform: "X",
    icon: "𝕏",
    color: "bg-gray-900",
    user: "Diálogo Sur QRoo",
    handle: "@dialogo_sur",
    content:
      "El rezago histórico del sur de QRoo no es destino, es una deuda pendiente. Hoy trabajamos para saldarla con desarrollo real y justo. #SurQRoo",
    likes: 456,
    shares: 123,
    date: "Hace 3 horas",
  },
  {
    platform: "Facebook",
    icon: "f",
    color: "bg-blue-600",
    user: "Diálogo por el Sur",
    handle: "@dialogoporelsur",
    content:
      "Felipe Carrillo Puerto, Bacalar y Othón P. Blanco: tres municipios, un solo futuro de prosperidad compartida. 🤝",
    likes: 567,
    shares: 89,
    date: "Hace 6 horas",
  },
  {
    platform: "Instagram",
    icon: "📷",
    color: "bg-gradient-to-br from-purple-600 to-pink-500",
    user: "dialogoporelsur",
    handle: "@dialogoporelsur",
    content:
      "Nuestras comunidades merecen oportunidades reales: empleo digno, educación de calidad y servicios que funcionen. 💪🏽",
    likes: 1103,
    shares: 201,
    date: "Hace 2 días",
  },
];

export default function SocialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <section className="section-padding bg-olive-700 overflow-hidden">
      <div className="container-max mb-12">
        <AnimateOnScroll className="text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-cream-200 text-sm font-medium mb-4">
            Síguenos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Únete a la <span className="text-terracotta-400">conversación</span>
          </h2>
          <p className="text-cream-200 text-lg max-w-2xl mx-auto">
            Sé parte de nuestra comunidad digital. Meta: 20,000 seguidores en
            Facebook para amplificar la voz del sur.
          </p>
        </AnimateOnScroll>
      </div>

      <motion.div ref={containerRef} className="cursor-grab overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 px-4 sm:px-6 lg:px-8"
          animate={{ x: [-width, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          whileDrag={{ animationPlayState: "paused" }}
        >
          {[...socialPosts, ...socialPosts].map((post, i) => (
            <motion.div
              key={i}
              className="min-w-[260px] max-w-[260px] bg-white rounded-2xl p-4 shadow-lg flex-shrink-0"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 ${post.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}
                >
                  {post.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {post.user}
                  </p>
                  <p className="text-gray-500 text-xs">{post.handle}</p>
                </div>
                <span className="ml-auto text-xs text-gray-400">
                  {post.date}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {post.content}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 border-t pt-3">
                <span>❤️ {post.likes}</span>
                <span>🔄 {post.shares}</span>
                <span className="ml-auto font-medium text-olive-600">
                  {post.platform}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
