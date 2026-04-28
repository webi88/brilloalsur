"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Clock, Newspaper } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { posts as libPosts } from "@/lib/posts";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  url?: string;
  slug?: string;
}

const fallbackPosts: BlogPost[] = libPosts.map((p) => ({ ...p, url: `/noticias/${p.slug}` }));

const categoryColors: Record<string, string> = {
  Infraestructura: "bg-terracotta-100 text-terracotta-700",
  Turismo: "bg-blue-100 text-blue-700",
  Educación: "bg-olive-100 text-olive-700",
  Desarrollo: "bg-emerald-100 text-emerald-700",
  Energía: "bg-yellow-100 text-yellow-700",
  Cultura: "bg-purple-100 text-purple-700",
  Agricultura: "bg-green-100 text-green-700",
};

// Card width + gap in px (must match CSS)
const CARD_W = 300;
const CARD_GAP = 24;

export default function BlogCarousel() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>(fallbackPosts);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // In production, fetch from Google Sheets API route
    // fetch('/api/blog').then(r => r.json()).then(data => setPosts(data));
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop ? (
    <StickyCarousel posts={posts} router={router} />
  ) : (
    <MobileCarousel posts={posts} router={router} />
  );
}

/* ─── Desktop: sticky horizontal scroll ──────────────────────────── */
function StickyCarousel({ posts, router }: { posts: BlogPost[]; router: ReturnType<typeof useRouter> }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [viewportW, setViewportW] = useState(1280);

  useEffect(() => {
    const update = () => setViewportW(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // total cards = posts + 1 CTA card
  const totalCards = posts.length + 1;
  // Total track width (all cards + gaps)
  const totalTrackWidth = totalCards * CARD_W + (totalCards - 1) * CARD_GAP;
  // How far we need to translate: track width minus visible viewport (minus left padding)
  const leftPad = 32; // pl-8 = 32px
  const maxTranslate = Math.max(0, totalTrackWidth - (viewportW - leftPad));
  // Scroll height: enough vertical scroll to cover the translation
  const scrollHeight = maxTranslate + viewportW + 200;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

  return (
    <section
      id="noticias"
      ref={sectionRef}
      style={{ height: scrollHeight }}
      className="relative bg-white"
    >
      {/* Sticky panel */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <div className="container-max pt-24 pb-8 px-8">
          <AnimateOnScroll className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-olive-100 text-olive-700 text-sm font-medium mb-3">
                  Noticias
                </span>
                <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900">
                  Noticias y <span className="text-terracotta-500">análisis</span>
                </h2>
              </div>
              <Link
                href="/noticias"
                className="flex-shrink-0 mt-1 flex items-center gap-2 px-5 py-2.5 border-2 border-olive-600 text-olive-700 hover:bg-olive-600 hover:text-white rounded-xl text-sm font-semibold transition-all"
              >
                Todas las noticias <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-gray-500 text-base max-w-2xl">
              Información, datos y perspectivas sobre el presente y futuro del sur de Quintana Roo.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Horizontal track */}
        <div className="flex-1 flex items-center overflow-visible pl-8">
          <motion.div
            style={{ x }}
            className="flex gap-6 will-change-transform"
          >
            {posts.map((post, i) => (
              <PostCard key={i} post={post} router={router} />
            ))}

            {/* CTA end card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={() => router.push("/noticias")}
              className="min-w-[300px] max-w-[300px] h-[380px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer bg-olive-800 flex flex-col items-center justify-center gap-5 shadow-xl group"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Newspaper className="w-7 h-7 text-white" />
              </div>
              <div className="text-center px-6">
                <p className="text-white font-heading font-bold text-xl mb-2">Ver todas las noticias</p>
                <p className="text-cream-300 text-sm">Explora el archivo completo de artículos y análisis</p>
              </div>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-terracotta-500 group-hover:bg-terracotta-400 text-white rounded-xl text-sm font-semibold transition-colors">
                Ir a noticias <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="pb-6 px-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="text-xs text-gray-400">Desplázate para ver más →</span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>
      </div>
    </section>
  );
}

/* ─── Mobile: drag carousel (unchanged behaviour) ────────────────── */
function MobileCarousel({ posts, router }: { posts: BlogPost[]; router: ReturnType<typeof useRouter> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, [posts]);

  return (
    <section id="noticias" className="section-padding bg-white">
      <div className="container-max mb-10">
        <AnimateOnScroll className="text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-olive-100 text-olive-700 text-sm font-medium mb-4">
            Noticias
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-4">
            Noticias y <span className="text-terracotta-500">análisis</span>
          </h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto mb-6">
            Información, datos y perspectivas sobre el presente y futuro del sur de Quintana Roo.
          </p>
          <Link
            href="/noticias"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-olive-700 hover:bg-olive-800 text-white rounded-xl text-sm font-semibold transition-colors"
          >
            Todas las noticias <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimateOnScroll>
      </div>

      <motion.div ref={containerRef} className="cursor-grab overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-5 px-4 sm:px-6"
        >
          {posts.map((post, i) => (
            <PostCard key={i} post={post} router={router} />
          ))}
          {/* CTA end card mobile */}
          <motion.div
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/noticias")}
            className="min-w-[240px] max-w-[240px] h-[340px] rounded-2xl flex-shrink-0 cursor-pointer bg-olive-800 flex flex-col items-center justify-center gap-4 shadow-lg"
          >
            <Newspaper className="w-8 h-8 text-white/70" />
            <p className="text-white font-heading font-bold text-base text-center px-4">Ver todas las noticias</p>
            <span className="text-xs text-cream-300 text-center px-6">Explora todos los artículos</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Shared post card ────────────────────────────────────────────── */
function PostCard({ post, router }: { post: BlogPost; router: ReturnType<typeof useRouter> }) {
  return (
    <motion.article
      className="min-w-[300px] max-w-[300px] h-[380px] bg-cream-50 rounded-2xl overflow-hidden shadow-md flex-shrink-0 group cursor-pointer flex flex-col"
      whileHover={{ y: -6 }}
      onClick={() => { const dest = post.slug ? `/noticias/${post.slug}` : post.url; if (dest) router.push(dest); }}
    >
      <div className="h-44 relative overflow-hidden bg-olive-200 flex-shrink-0">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-olive-200 to-olive-300 flex items-center justify-center">
            <span className="text-olive-500 text-4xl font-heading font-bold opacity-20">RBS</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
        </div>
        <h3 className="font-heading font-bold text-gray-900 text-base mb-2 group-hover:text-olive-600 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        <span className="inline-flex items-center gap-1 text-terracotta-500 text-sm font-semibold group-hover:gap-2 transition-all mt-auto pointer-events-none">
          Leer más <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </motion.article>
  );
}
