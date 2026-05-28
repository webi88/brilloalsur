import { NextResponse } from "next/server";
import { fetchPosts } from "@/lib/supabase";

export const revalidate = 60;

export async function GET() {
  try {
    const posts = await fetchPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}
