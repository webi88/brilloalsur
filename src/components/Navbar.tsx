"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ContactModal from "./ContactModal";

const navLinks = [
  { label: "Inicio", href: "#inicio", external: false },
  { label: "Noticias", href: "/noticias", external: true },
  { label: "Voces", href: "#voces", external: false },
  { label: "Historia", href: "#historia", external: false },
  { label: "Nosotros", href: "#nosotros", external: false },
  { label: "Oportunidades", href: "#oportunidades", external: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate home then scroll — store target in sessionStorage for home to pick up
      sessionStorage.setItem("scrollTo", href);
      router.push("/");
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href={isHome ? "#inicio" : "/"}
          onClick={(e) => {
            e.preventDefault();
            handleClick("#inicio");
          }}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="Regresémosle el Brillo al Sur"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
          <span
            className={`hidden sm:block font-bold text-sm md:text-base transition-colors ${
              scrolled ? "text-olive-700" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-montserrat, sans-serif)", fontWeight: 700 }}
          >
            Regresémosle el Brillo al Sur
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.external ? (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-olive-500/10 ${
                  scrolled
                    ? "text-gray-700 hover:text-olive-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-olive-500/10 ${
                  scrolled
                    ? "text-gray-700 hover:text-olive-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={() => setContactOpen(true)}
            className={`ml-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 hover:bg-olive-500/10 ${
              scrolled ? "text-gray-700 hover:text-olive-600" : "text-white/90 hover:text-white"
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            Contacto
          </button>
          <a
            href="#voces"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#voces");
            }}
            className="ml-1 px-4 py-2 bg-terracotta-500 text-white rounded-lg text-sm font-semibold hover:bg-terracotta-600 transition-colors"
          >
            Participa
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.external ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-olive-50 hover:text-olive-600 font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-olive-50 hover:text-olive-600 font-medium"
                  >
                    {link.label}
                  </a>
                )
              )}
              <button
                onClick={() => { setMobileOpen(false); setContactOpen(true); }}
                className="block w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-olive-50 hover:text-olive-600 font-medium text-left flex items-center gap-2 mt-1"
              >
                <Send className="w-4 h-4" /> Contacto
              </button>
              <a
                href="#voces"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("#voces");
                }}
                className="block px-3 py-2 bg-terracotta-500 text-white rounded-lg text-center font-semibold mt-2"
              >
                Participa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </motion.nav>
  );
}
