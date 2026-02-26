"use client";

import { useState } from "react";
import { Send, MapPin, Mail, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const linkColumns = [
  {
    title: "Iniciativa",
    links: [
      "Quiénes somos",
      "Nuestra historia",
      "Equipo",
      "Transparencia",
      "Contacto",
    ],
  },
  {
    title: "Desarrollo",
    links: [
      "Oportunidades",
      "Inversión sustentable",
      "Turismo responsable",
      "Energía verde",
      "Agricultura",
    ],
  },
  {
    title: "Comunidad",
    links: [
      "Blog",
      "Voces ciudadanas",
      "Eventos",
      "Voluntariado",
      "Redes sociales",
    ],
  },
  {
    title: "Municipios",
    links: [
      "Felipe Carrillo Puerto",
      "Bacalar",
      "Othón P. Blanco",
      "Laguna de Bacalar",
      "Sian Ka'an",
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // In production, POST to /api/subscribe
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-olive-800 text-cream-200">
      {/* Newsletter bar */}
      <div className="border-b border-olive-700">
        <div className="container-max section-padding !py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Suscríbete al boletín
              </h3>
              <p className="text-cream-300 text-sm">
                Recibe actualizaciones sobre el desarrollo del sur directamente
                en tu correo.
              </p>
            </div>
            <form
              onSubmit={handleSubscribe}
              className="flex w-full lg:w-auto gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                className="flex-1 lg:w-80 px-4 py-3 rounded-xl bg-olive-700 border border-olive-600 text-white placeholder-olive-400 focus:border-terracotta-400 focus:ring-2 focus:ring-terracotta-400/20 outline-none transition-all text-sm"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white rounded-xl font-semibold transition-colors flex items-center gap-2 text-sm whitespace-nowrap"
              >
                <Send className="w-4 h-4" />
                {subscribed ? "¡Listo!" : "Suscribirme"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Diálogo por el Desarrollo del Sur"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-heading font-bold text-white text-lg">
                  Diálogo por el
                </p>
                <p className="font-heading font-bold text-terracotta-400 text-lg -mt-1">
                  Desarrollo del Sur
                </p>
              </div>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed">
              Una iniciativa ciudadana para impulsar el desarrollo sustentable,
              la inversión responsable y el bienestar integral en la región sur
              de Quintana Roo. Construimos consenso para un futuro más justo.
            </p>
            <div className="space-y-2 text-sm text-cream-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-terracotta-400" />
                Chetumal, Quintana Roo, México
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-terracotta-400" />
                contacto@dialogoporelsur.mx
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-olive-700 hover:bg-terracotta-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-olive-700 hover:bg-terracotta-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-olive-700 hover:bg-terracotta-500 rounded-full flex items-center justify-center transition-colors text-sm font-bold"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-olive-700 hover:bg-terracotta-500 rounded-full flex items-center justify-center transition-colors text-sm font-bold"
              >
                ♪
              </a>
            </div>
          </div>

          {/* Link columns */}
          {linkColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream-300 hover:text-terracotta-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-olive-700">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>
            © {new Date().getFullYear()} Diálogo por el Desarrollo del Sur. Todos
            los derechos reservados.
          </p>
          <p>
            Desarrollado por{" "}
            <a
              href="https://webi.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              webi.mx
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
