import { fetchPosts } from "@/lib/supabase";
import NoticiasClient from "./NoticiasClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 60;

export default async function NoticiasPage() {
  const posts = await fetchPosts();
  return (
    <>
      <Navbar />
      <NoticiasClient posts={posts} />
      <Footer />
    </>
  );
}


