"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  url?: string;
}

const allPosts: BlogPost[] = [
  { title: "El Tren Maya como catalizador del desarrollo en el sur", excerpt: "Cómo la infraestructura de conectividad puede transformar las oportunidades económicas.", category: "Infraestructura", date: "15 Feb 2026" },
  { title: "Bacalar: turismo sustentable como modelo de crecimiento", excerpt: "La Laguna de los Siete Colores y el turismo responsable como motor de empleo.", category: "Turismo", date: "10 Feb 2026" },
  { title: "Educación y empleo: claves para cerrar la brecha histórica", excerpt: "Inversión en capital humano para el sur de Quintana Roo.", category: "Educación", date: "5 Feb 2026" },
  { title: "Energía solar en la selva: la oportunidad verde del sureste", excerpt: "300 días de sol al año: potencial para convertirse en hub de energías limpias.", category: "Energía", date: "1 Feb 2026" },
  { title: "Cultura maya: patrimonio vivo como motor económico", excerpt: "El turismo cultural, la gastronomía y las industrias creativas del sur.", category: "Cultura", date: "28 Ene 2026" },
  { title: "Agroindustria sustentable: el campo como futuro del sur", excerpt: "Tecnificación agrícola en Felipe Carrillo Puerto y sus alrededores.", category: "Agricultura", date: "20 Ene 2026" },
];

const categoryColors: Record<string, string> = {
  Infraestructura: "bg-terracotta-100 text-terracotta-700",
  Turismo: "bg-blue-100 text-blue-700",
  Educación: "bg-olive-100 text-olive-700",
  Energía: "bg-yellow-100 text-yellow-700",
  Cultura: "bg-purple-100 text-purple-700",
  Agricultura: "bg-green-100 text-green-700",
};

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState<BlogPost[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = allPosts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const showDropdown = focused && query.trim().length >= 2;

  const handleSelect = (post: BlogPost) => {
    setQuery("");
    setFocused(false);
    const el = document.getElementById("noticias");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      className="relative w-full max-w-xl mx-auto mt-8"
    >
      {/* Search input */}
      <div
        className={`flex items-center gap-3 bg-white/15 backdrop-blur-md border rounded-2xl px-4 py-3 transition-all duration-300 ${
          focused ? "border-white/60 bg-white/20 shadow-xl shadow-black/20" : "border-white/25"
        }`}
      >
        <Search className="w-5 h-5 text-white/70 flex-shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder="Busca noticias, temas, municipios…"
          className="flex-1 bg-transparent text-white placeholder-white/50 outline-none text-sm font-body"
        />
        <AnimatePresence>
          {query && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Predictive dropdown */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {results.length === 0 ? (
              <div className="px-5 py-6 text-center text-gray-400 text-sm">
                No se encontraron resultados para &ldquo;{query}&rdquo;
              </div>
            ) : (
              <ul>
                {results.map((post, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      onClick={() => handleSelect(post)}
                      className="w-full text-left px-5 py-3.5 hover:bg-cream-50 transition-colors flex items-start gap-3 group border-b border-gray-50 last:border-0"
                    >
                      <span className={`mt-0.5 text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${categoryColors[post.category] ?? "bg-gray-100 text-gray-600"}`}>
                        {post.category}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 text-sm font-semibold line-clamp-1 group-hover:text-olive-700 transition-colors">
                          {post.title}
                        </p>
                        <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{post.excerpt}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-olive-500 flex-shrink-0 mt-1 transition-colors" />
                    </button>
                  </motion.li>
                ))}
                <li>
                  <button
                    onClick={() => { setFocused(false); document.getElementById("noticias")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="w-full text-center px-5 py-3 text-olive-600 hover:text-olive-800 text-xs font-medium hover:bg-olive-50 transition-colors"
                  >
                    Ver todas las noticias →
                  </button>
                </li>
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
