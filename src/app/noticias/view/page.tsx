"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleClient from "@/app/noticias/[slug]/ArticleClient";

interface Post {
  slug: string; title: string; excerpt: string; category: string;
  date: string; readTime: string; image: string; author: string;
  authorRole: string; content: string;
}

const categoryColors: Record<string, string> = {
  Infraestructura: "bg-terracotta-100 text-terracotta-700",
  Turismo:         "bg-blue-100 text-blue-700",
  Educación:       "bg-olive-100 text-olive-700",
  Desarrollo:      "bg-emerald-100 text-emerald-700",
  Energía:         "bg-yellow-100 text-yellow-700",
  Cultura:         "bg-purple-100 text-purple-700",
  Agricultura:     "bg-green-100 text-green-700",
};

export default function ArticleViewPage() {
  const [post, setPost]       = useState<Post | null>(null);
  const [related, setRelated] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const parts  = window.location.pathname.replace(/\/$/, "").split("/");
    const slug   = parts[parts.length - 1];

    fetch("/api/articles.php")
      .then(r => r.json())
      .then((articles: Post[]) => {
        const found = articles.find(a => a.slug === slug);
        if (!found) { setNotFound(true); return; }
        setPost(found);
        setRelated(articles.filter(a => a.slug !== slug).slice(0, 3));
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <>
      <Navbar />
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-olive-600 border-t-transparent rounded-full animate-spin" />
      </div>
      <Footer />
    </>
  );

  if (notFound || !post) return (
    <>
      <Navbar />
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">Artículo no encontrado.</p>
        <Link href="/noticias" className="text-olive-700 underline text-sm">Ver todas las noticias</Link>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute top-24 left-0 right-0">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <Link href="/noticias"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
              <ArrowLeft className="w-4 h-4" /> Todas las noticias
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pb-10 pt-20">
          <div className="container-max px-4 sm:px-6 lg:px-8 max-w-4xl">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}>
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Body */}
      <main className="bg-cream-50">
        <div className="container-max px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-5 py-6 border-b border-gray-200 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-olive-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">RBS</div>
              <div>
                <span className="font-semibold text-gray-900 block leading-tight">{post.author}</span>
                <span className="text-xs text-gray-400">{post.authorRole}</span>
              </div>
            </span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-gray-400" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-gray-400" />{post.readTime} de lectura</span>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed font-body py-8 border-b border-gray-100">{post.excerpt}</p>
          <ArticleClient content={post.content} />
        </div>

        {related.length > 0 && (
          <div className="border-t border-gray-200 mt-16 bg-white">
            <div className="container-max px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">También te puede interesar</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map(r => (
                  <Link key={r.slug} href={`/noticias/${r.slug}/`}
                    className="group block bg-cream-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-40 overflow-hidden">
                      <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${categoryColors[r.category] ?? "bg-gray-100 text-gray-700"}`}>{r.category}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-gray-900 text-sm group-hover:text-olive-700 transition-colors line-clamp-2 leading-snug mb-2">{r.title}</h3>
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3" />{r.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="bg-olive-800 py-16 text-center">
          <p className="text-cream-300 mb-4 text-sm">Continúa explorando</p>
          <Link href="/noticias"
            className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-xl font-semibold text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Ver todas las noticias
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
