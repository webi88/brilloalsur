"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, X } from "lucide-react";
import type { Post } from "@/lib/supabase";

const categoryColors: Record<string, string> = {
  Infraestructura: "bg-terracotta-100 text-terracotta-700",
  Turismo: "bg-blue-100 text-blue-700",
  Educación: "bg-olive-100 text-olive-700",
  Energía: "bg-yellow-100 text-yellow-700",
  Cultura: "bg-purple-100 text-purple-700",
  Agricultura: "bg-green-100 text-green-700",
  Comunicado: "bg-terracotta-100 text-terracotta-700",
  Propuesta: "bg-olive-100 text-olive-700",
};

interface Props { posts: Post[] }

export default function NoticiasClient({ posts }: Props) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");

  const allCategories = ["Todas", ...Array.from(new Set(posts.map((p) => p.category)))];
  const isFiltering = query.trim().length > 0 || activeCategory !== "Todas";

  const filtered = posts.filter((p) => {
    const matchesCategory = activeCategory === "Todas" || p.category === activeCategory;
    const q = query.toLowerCase();
    return matchesCategory && (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
  });

  const featured = !isFiltering ? filtered[0] : null;
  const rest = !isFiltering ? filtered.slice(1) : filtered;

  return (
    <>
      {/* Hero header */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-olive-900">
        <video autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=80"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src="/noticias.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-olive-900/70 z-[1]" />
        <div className="relative z-[2] container-max px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cream-200 text-sm font-medium border border-white/20 mb-5">
              Noticias y análisis
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              El sur en <span className="text-terracotta-400">conversación</span>
            </h1>
            <p className="text-cream-300 max-w-xl mx-auto text-lg mb-10">
              Información, datos y perspectivas sobre el presente y futuro de la región sur de Quintana Roo.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar noticias…"
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 outline-none focus:border-white/50 text-sm transition-all"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <div className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {allCategories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat ? "bg-olive-700 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >{cat}</button>
          ))}
        </div>
      </div>

      <main className="bg-cream-50 min-h-screen">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12 pt-16">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No se encontraron noticias para &ldquo;{query}&rdquo;</p>
            </div>
          ) : (
            <>
              {featured && (
                <motion.div key={featured.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14">
                  <Link href={`/noticias/${featured.slug}`} className="group block">
                    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl bg-white">
                      <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden">
                        {featured.image && <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                        <span className={`absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category] ?? "bg-gray-100 text-gray-700"}`}>
                          {featured.category}
                        </span>
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <span className="text-xs font-semibold text-terracotta-500 uppercase tracking-widest mb-3">Artículo destacado</span>
                        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4 group-hover:text-olive-700 transition-colors leading-snug">{featured.title}</h2>
                        <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                        <div className="flex items-center gap-5 text-sm text-gray-400 mb-6">
                          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{featured.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime} de lectura</span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-olive-700 font-semibold group-hover:gap-3 transition-all">
                          Leer artículo completo <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((post, i) => (
                    <motion.div key={post.slug} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                      <Link href={`/noticias/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all h-full">
                        <div className="relative h-48 overflow-hidden">
                          {post.image && <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                          <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}>
                            {post.category}
                          </span>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                          </div>
                          <h3 className="font-heading font-bold text-gray-900 text-lg mb-2 group-hover:text-olive-700 transition-colors line-clamp-2 leading-snug">{post.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                          <span className="inline-flex items-center gap-1.5 text-terracotta-500 text-sm font-semibold group-hover:gap-2.5 transition-all">
                            Leer más <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
