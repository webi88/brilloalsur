import { createClient } from "@supabase/supabase-js";
import { posts as staticPosts } from "./posts";

const sbUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL  ?? "";
const sbAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

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
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("site", "brilloalsur")
      .eq("slug", slug)
      .eq("status", "published")
      .single();
    if (!error && data) return normalize(data);
  }
  const fallback = staticPosts.find((p) => p.slug === slug);
  return fallback ? staticToPost(fallback) : null;
}
