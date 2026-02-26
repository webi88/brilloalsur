"use client";

import { motion } from "framer-motion";

interface ArticleClientProps {
  content: string;
}

export default function ArticleClient({ content }: ArticleClientProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="prose prose-lg prose-gray max-w-none py-10
        prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
        prose-ul:text-gray-600 prose-ul:space-y-2 prose-ul:pl-6
        prose-li:marker:text-terracotta-500
        prose-strong:text-gray-800 prose-strong:font-semibold
        prose-a:text-olive-700 prose-a:no-underline hover:prose-a:underline"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
