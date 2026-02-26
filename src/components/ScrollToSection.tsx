"use client";

import { useEffect } from "react";

export default function ScrollToSection() {
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTo");
    if (!target) return;
    sessionStorage.removeItem("scrollTo");
    // Small delay to let the page render fully
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  return null;
}
