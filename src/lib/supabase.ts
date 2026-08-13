import { createClient } from "@supabase/supabase-js";
import { posts as staticPosts } from "./posts";

/* Mismo caso que el panel de administración: las variables de entorno de
 * Vercel apuntan a un proyecto de Supabase que ya no resuelve en DNS, y esa
 * cuenta de Vercel dejó de ser accesible para corregirlas. Por eso el sitio
 * solo mostraba los artículos estáticos de posts.ts y no los publicados
 * desde el panel.
 *
 * La clave `anon` es pública por diseño (el navegador la recibe igualmente).
 * Si se recupera el acceso a Vercel, devolver esto a process.env.
 */
const SUPABASE_URL  = "https://zsfamrweexjkxjbsqaur.supabase.co";
const SUPABASE_ANON =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" +
  ".eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzZmFtcndlZXhqa3hqYnNxYXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk1ODE3NzksImV4cCI6MjA5NTE1Nzc3OX0" +
  ".bQxSdwwEO9L0Pr8WCoFDwdoxn77SLFqyQsVfwoabkKw";

const sbUrl  = SUPABASE_URL;
const sbAnon = SUPABASE_ANON;

export const SUPABASE_READY =
  sbUrl.startsWith("https://") && !sbUrl.includes("placeholder") && sbAnon.length > 20;

export const supabase = createClient(
  SUPABASE_READY ? sbUrl : "https://placeholder.supabase.co",
  SUPABASE_READY ? sbAnon : "placeholder",
  { auth: { persistSession: false } },
);

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
}

function normalize(row: Record<string, unknown>): Post {
  return {
    id:         String(row.id ?? ""),
    slug:       String(row.slug ?? ""),
    title:      String(row.title ?? ""),
    excerpt:    String(row.excerpt ?? ""),
    content:    String(row.content ?? ""),
    image:      String(row.cover_image ?? ""),
    category:   String(row.category ?? ""),
    date:       row.created_at
      ? new Date(String(row.created_at)).toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" })
      : "",
    readTime:   String(row.read_time ?? "5 min"),
    author:     String(row.author ?? "Redacción"),
    authorRole: "Regresémosle el Brillo al Sur",
  };
}

function staticToPost(s: typeof staticPosts[0]): Post {
  return { id: s.slug, ...s };
}

export async function fetchPosts(): Promise<Post[]> {
  let supabasePosts: Post[] = [];
  if (SUPABASE_READY) {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("site", "brilloalsur")
      .eq("status", "published")
      .order("created_at", { ascending: false });
    if (!error) supabasePosts = (data ?? []).map(normalize);
  }
  const existingSlugs = new Set(supabasePosts.map((p) => p.slug));
  const fallback = staticPosts.filter((p) => !existingSlugs.has(p.slug)).map(staticToPost);
  return [...supabasePosts, ...fallback];
}

export async function fetchPost(slug: string): Promise<Post | null> {
  if (SUPABASE_READY) {
    /* Nada impide publicar dos artículos con el mismo slug desde el panel, y
     * .single() devuelve error cuando hay más de una fila: el artículo daba
     * 404 en lugar de mostrarse. Con duplicados se toma el más reciente. */
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("site", "brilloalsur")
      .eq("slug", slug)
      .eq("status", "published")
      .order("created_at", { ascending: false })
      .limit(1);
    if (!error && data && data.length > 0) return normalize(data[0]);
  }
  const fallback = staticPosts.find((p) => p.slug === slug);
  return fallback ? staticToPost(fallback) : null;
}
