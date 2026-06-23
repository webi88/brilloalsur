import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import SocialCarousel from "@/components/SocialCarousel";
import NoticiasCarousel from "@/components/BlogCarousel";
import VocesSection from "@/components/VocesSection";
import Footer from "@/components/Footer";
import ScrollToSection from "@/components/ScrollToSection";
import { fetchPosts } from "@/lib/supabase";

export const revalidate = 60;

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main>
      <ScrollToSection />
      <Navbar />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Noticias */}
      <NoticiasCarousel posts={posts} />

      {/* 3. Voz de nuestra gente */}
      <VocesSection />

      {/* 4. Historia */}
      <div className="bg-white">
        <VideoSection
          id="historia"
          badge="Historia de nuestro territorio"
          title="Del rezago histórico a la"
          highlight="promesa del futuro"
          description="Durante décadas, el sur de Quintana Roo ha vivido a la sombra del desarrollo acelerado del norte. Mientras Cancún y la Riviera Maya crecían exponencialmente, nuestros municipios enfrentaban carencias en infraestructura, educación, salud y empleo. Pero esta historia no define nuestro destino. Hoy, con nuevas inversiones en conectividad como el Tren Maya, y con un renovado interés en el turismo sustentable y la economía verde, el sur tiene la oportunidad histórica de escribir un nuevo capítulo: uno de prosperidad compartida y desarrollo con identidad."
          reversed
          image="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=800&q=80"
          imageAlt="Patrimonio histórico del sur de Quintana Roo"
        />
      </div>

      {/* 5. Nosotros */}
      <VideoSection
        id="nosotros"
        badge="Quiénes somos"
        title="Una iniciativa ciudadana por el"
        highlight="bienestar del sur"
        description="Somos un colectivo de ciudadanos, organizaciones y voces comprometidas con el desarrollo integral de la región sur de Quintana Roo. Creemos que Felipe Carrillo Puerto, Bacalar y Othón P. Blanco tienen el potencial para convertirse en un modelo de crecimiento sustentable, equitativo y respetuoso con nuestra riqueza natural y cultural. A través del diálogo abierto, buscamos generar consenso sobre las prioridades que definirán el futuro de nuestra región."
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
        imageAlt="Comunidad del sur de Quintana Roo"
      />

      {/* 6. Oportunidades */}
      <div className="bg-white">
        <VideoSection
          id="oportunidades"
          badge="Oportunidades del desarrollo"
          title="Inversión con impacto"
          highlight="real y sustentable"
          description="La región sur ofrece oportunidades únicas en turismo ecológico, energías renovables, agroindustria sustentable, desarrollo inmobiliario responsable y tecnología. Con una ubicación estratégica, acceso a mercados internacionales por Chetumal y una riqueza natural incomparable — desde la Laguna de Bacalar hasta la Reserva de Sian Ka'an — el potencial de crecimiento es enorme. Pero insistimos: el desarrollo debe ser para todos, debe respetar el medio ambiente y debe honrar la identidad cultural maya que nos define."
          reversed
          image="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=800&q=80"
          imageAlt="Oportunidades de desarrollo sustentable en el sur"
        />
      </div>

      {/* 7. Únete a la conversación */}
      <SocialCarousel />

      <Footer />
    </main>
  );
}
