"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => { setMounted(true); }, []);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "" }); }, 400);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  if (!mounted) return null;

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-md pointer-events-auto"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="relative bg-gradient-to-br from-olive-700 to-olive-800 px-8 pt-8 pb-10">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-cream-200 text-xs font-medium mb-3">
                    Contáctanos
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-white mb-1">
                    Escríbenos
                  </h2>
                  <p className="text-cream-300 text-sm">
                    Te responderemos a la brevedad posible.
                  </p>
                </div>

                {/* Body */}
                <div className="px-8 py-6">
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center gap-3 py-6 text-center"
                      >
                        <CheckCircle className="w-14 h-14 text-olive-600" />
                        <h3 className="font-heading font-bold text-gray-900 text-lg">¡Mensaje enviado!</h3>
                        <p className="text-gray-500 text-sm">Gracias por contactarnos, te responderemos pronto.</p>
                        <button
                          onClick={onClose}
                          className="mt-2 px-6 py-2.5 bg-olive-600 hover:bg-olive-700 text-white rounded-xl text-sm font-semibold transition-colors"
                        >
                          Cerrar
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">Nombre</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                            placeholder="Tu nombre completo"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-olive-400 focus:ring-2 focus:ring-olive-400/20 outline-none text-sm text-gray-900 placeholder-gray-400 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">Correo electrónico</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                            placeholder="tu@correo.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-olive-400 focus:ring-2 focus:ring-olive-400/20 outline-none text-sm text-gray-900 placeholder-gray-400 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1.5">Mensaje</label>
                          <textarea
                            required
                            rows={3}
                            value={form.message}
                            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                            placeholder="¿En qué podemos ayudarte?"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-olive-400 focus:ring-2 focus:ring-olive-400/20 outline-none text-sm text-gray-900 placeholder-gray-400 transition-all resize-none"
                          />
                        </div>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 bg-olive-700 hover:bg-olive-800 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                        >
                          <Send className="w-4 h-4" />
                          Enviar mensaje
                        </motion.button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>

                <div className="border-t border-gray-100 px-8 py-3">
                  <p className="text-center text-xs text-gray-400">
                    Regresémosle el Brillo al Sur · Quintana Roo, México
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modal, document.body);
}
