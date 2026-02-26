"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

interface Testimonial {
  name: string;
  location: string;
  message: string;
  date: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    name: "María Elena García",
    location: "Felipe Carrillo Puerto",
    message:
      "Necesitamos que el sur deje de ser olvidado. Aquí hay gente trabajadora, cultura rica y ganas de salir adelante. Solo necesitamos las mismas oportunidades.",
    date: "12 Feb 2026",
  },
  {
    name: "José Luis Pech",
    location: "Bacalar",
    message:
      "El turismo puede ser una bendición si se hace bien. No queremos otro Cancún, queremos un Bacalar que crezca sin perder su magia.",
    date: "10 Feb 2026",
  },
  {
    name: "Ana Kú Chan",
    location: "Othón P. Blanco",
    message:
      "Chetumal merece mejores servicios de salud y educación. Mis hijos no deberían tener que irse al norte para estudiar una carrera digna.",
    date: "8 Feb 2026",
  },
  {
    name: "Roberto Dzul Nah",
    location: "Felipe Carrillo Puerto",
    message:
      "Como agricultor, veo el potencial de nuestra tierra. Con apoyo técnico y acceso a mercados, podríamos alimentar a toda la península.",
    date: "5 Feb 2026",
  },
  {
    name: "Lucía Martínez Poot",
    location: "Bacalar",
    message:
      "Soy artesana maya y quiero que nuestras tradiciones sean reconocidas y valoradas económicamente. El turismo cultural es el camino.",
    date: "3 Feb 2026",
  },
  {
    name: "Carlos Mendoza Ríos",
    location: "Othón P. Blanco",
    message:
      "La zona libre fue un motor económico por décadas. Necesitamos nuevos motores que generen empleo formal y bien pagado para todos.",
    date: "1 Feb 2026",
  },
];

export default function VocesSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setSubmitting(true);

    // Simulate API call - in production, this would POST to /api/comments
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newTestimonial: Testimonial = {
      name: formData.name,
      location: formData.location || "Quintana Roo",
      message: formData.message,
      date: new Date().toLocaleDateString("es-MX", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    setTestimonials((prev) => [newTestimonial, ...prev]);
    setFormData({ name: "", location: "", message: "" });
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const visibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (currentIndex + i + testimonials.length) % testimonials.length;
      cards.push({ ...testimonials[idx], offset: i });
    }
    return cards;
  };

  return (
    <section id="voces" className="section-padding bg-cream-100">
      <div className="container-max">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-medium mb-4">
            Voces
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
            La voz de <span className="text-terracotta-500">nuestra gente</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Escuchamos a quienes viven el día a día en el sur. Cada opinión cuenta
            para construir el futuro que merecemos.
          </p>
        </AnimateOnScroll>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="overflow-hidden py-8">
            <div className="flex items-center justify-center gap-6">
              {visibleCards().map((card, i) => (
                <motion.div
                  key={`${card.name}-${card.offset}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: card.offset === 0 ? 1 : 0.5,
                    scale: card.offset === 0 ? 1 : 0.85,
                    x: card.offset * 20,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`${
                    card.offset === 0
                      ? "w-full max-w-sm z-10"
                      : "hidden md:block w-full max-w-[280px] z-0"
                  }`}
                >
                  <div
                    className={`bg-white rounded-2xl p-5 shadow-lg ${
                      card.offset === 0 ? "shadow-xl border-2 border-terracotta-200" : ""
                    }`}
                  >
                    <MessageCircle className="w-6 h-6 text-terracotta-400 mb-3" />
                    <p className="text-gray-700 text-sm leading-relaxed mb-4 italic line-clamp-4">
                      &ldquo;{card.message}&rdquo;
                    </p>
                    <div className="border-t pt-3">
                        <p className="font-semibold text-gray-900 text-sm">
                          {card.name}
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5">
                          {card.location} · {card.date}
                        </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-olive-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-6 bg-terracotta-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-olive-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Comment Form */}
        <AnimateOnScroll className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
              Comparte tu opinión
            </h3>
            <p className="text-gray-500 mb-6">
              Tu voz es importante. Cuéntanos qué necesita tu comunidad.
            </p>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-olive-100 text-olive-700 rounded-lg text-sm font-medium"
              >
                ¡Gracias por compartir tu voz! Tu comentario ha sido registrado.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-olive-400 focus:ring-2 focus:ring-olive-100 outline-none transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ubicación
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    placeholder="Tu municipio o ciudad"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-olive-400 focus:ring-2 focus:ring-olive-100 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tu mensaje *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  placeholder="¿Qué necesita tu comunidad? ¿Qué oportunidades ves para el sur?"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-olive-400 focus:ring-2 focus:ring-olive-100 outline-none transition-all text-sm resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto px-8 py-3 bg-terracotta-500 hover:bg-terracotta-600 disabled:bg-gray-300 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar mi opinión
                  </>
                )}
              </button>
            </form>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
