"use client"

import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/AboutUs/HeroSection";
import SolutionSection from "@/components/AboutUs/SolutionSection";
import StatsSection from "@/components/AboutUs/StatsSection";
import CTASection from "@/components/AboutUs/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutUs() {
  const [visibleSections, setVisibleSections] = useState({});
  
  const refCliente = useRef();
  const refNecesidades = useRef();
  const refProblemas = useRef();

  const sections = [
    { id: "cliente", ref: refCliente },
    { id: "necesidades", ref: refNecesidades },
    { id: "problemas", ref: refProblemas },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setVisibleSections((prev) => ({
              ...prev,
              [id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

   useEffect(() => {
    document.documentElement.classList.add('snap-scroll');
    return () => {
      document.documentElement.classList.remove('snap-scroll');
    };
  }, []);

  return (
    <>
      <AnimatedSection 
        className="snap-start pt-20" // Padding solo en la primera
      >
        <HeroSection />
      </AnimatedSection>
      
      {/* Sección 1: El Cliente */}
      <div className="snap-start snap-always">
        <div
          ref={refCliente}
          data-id="cliente"
          className={`container mx-auto px-6 py-24 transition-all duration-1000 ${
            visibleSections.cliente ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Contenido Textual */}
            <div className="w-full md:w-1/2 space-y-6">
              <div
                className="inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-2"
                style={{
                  borderColor: "#009dff30",
                  backgroundColor: "#009dff10",
                  color: "#009dff",
                }}
              >
                El perfil vulnerable
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                El Cliente: Alex
              </h2>

              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                Alex es un freelance que gestiona datos sensibles de sus clientes. No es un experto informático; su prioridad es su negocio. Un día, recibe un correo urgente de un supuesto proveedor, hace clic y su pantalla se bloquea. El pánico se apodera de él.
              </p>

              <ul
                className="space-y-3 mt-6 p-6 rounded-xl border-l-4"
                style={{
                  backgroundColor: "#009dff10",
                  borderColor: "#009dff",
                }}
              >
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#009dff" }} className="mt-1 font-bold">➤</span>
                  <span>Perfil: Autónomo sin conocimientos técnicos.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#009dff" }} className="mt-1 font-bold">➤</span>
                  <span>Situación: Bajo ataque de Ransomware.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#009dff" }} className="mt-1 font-bold">➤</span>
                  <span>Estado emocional: Pánico y confusión.</span>
                </li>
              </ul>
            </div>

            {/* Imagen */}
            <div className="w-full md:w-1/2">
              <div
                className="relative aspect-video rounded-2xl overflow-hidden border group transition-all duration-500 shadow-2xl"
                style={{ borderColor: "#009dff30" }}
              >
                <div
                  className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #009dff20, transparent)" }}
                />
                <img
                  src="/images/AboutUs/Que.png"
                  alt="El Cliente: Alex"
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold pointer-events-none">
                  1
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Connector */}
          <div className="flex justify-center mt-16">
            <div
              className="w-1 h-16 rounded-full"
              style={{ background: "linear-gradient(to bottom, #009dff, transparent)" }}
            />
          </div>
        </div>
      </div>

      {/* Sección 2: Las Necesidades */}
      <div className="snap-start snap-always">
        <div
          ref={refNecesidades}
          data-id="necesidades"
          className={`container mx-auto px-6 py-24 transition-all duration-1000 ${
            visibleSections.necesidades ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Imagen (orden invertido) */}
            <div className="w-full md:w-1/2 md:order-1">
              <div
                className="relative aspect-video rounded-2xl overflow-hidden border group transition-all duration-500 shadow-2xl"
                style={{ borderColor: "#00ffaa30" }}
              >
                <div
                  className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #00ffaa20, transparent)" }}
                />
                <img
                  src="/images/AboutUs/Como.png"
                  alt="Las Necesidades"
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold pointer-events-none">
                  2
                </div>
              </div>
            </div>

            {/* Contenido Textual (orden invertido) */}
            <div className="w-full md:w-1/2 space-y-6 md:order-2">
              <div
                className="inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-2"
                style={{
                  borderColor: "#00ffaa30",
                  backgroundColor: "#00ffaa10",
                  color: "#00ffaa",
                }}
              >
                ¿Qué necesita Alex ahora mismo?
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Las Necesidades
              </h2>

              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                Alex no necesita un curso de ciberseguridad de 20 horas. Necesita recuperar sus archivos YA. Necesita saber si sus cuentas bancarias están seguras y necesita una garantía de que esto no volverá a pasar.
              </p>

              <ul
                className="space-y-3 mt-6 p-6 rounded-xl border-l-4"
                style={{
                  backgroundColor: "#00ffaa10",
                  borderColor: "#00ffaa",
                }}
              >
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#00ffaa" }} className="mt-1 font-bold">➤</span>
                  <span>Respuesta inmediata (Incident Response).</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#00ffaa" }} className="mt-1 font-bold">➤</span>
                  <span>Herramientas de desencriptado.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#00ffaa" }} className="mt-1 font-bold">➤</span>
                  <span>Asesoramiento experto sin tecnicismos.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Connector */}
          <div className="flex justify-center mt-16">
            <div
              className="w-1 h-16 rounded-full"
              style={{ background: "linear-gradient(to bottom, #00ffaa, transparent)" }}
            />
          </div>
        </div>
      </div>

      {/* Sección 3: Los Problemas */}
      <div className="snap-start snap-always">
        <div
          ref={refProblemas}
          data-id="problemas"
          className={`container mx-auto px-6 py-24 transition-all duration-1000 ${
            visibleSections.problemas ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Contenido Textual */}
            <div className="w-full md:w-1/2 space-y-6">
              <div
                className="inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-2"
                style={{
                  borderColor: "#ff009930",
                  backgroundColor: "#ff009910",
                  color: "#ff0099",
                }}
              >
                La barrera de entrada
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Los Problemas
              </h2>

              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                Al intentar solucionarlo, Alex se enfrenta a la realidad. Las consultoras piden miles de euros solo por auditoría. Los foros generales están llenos de ruido y opiniones contradictorias. No sabe en quién confiar.
              </p>

              <ul
                className="space-y-3 mt-6 p-6 rounded-xl border-l-4"
                style={{
                  backgroundColor: "#ff009910",
                  borderColor: "#ff0099",
                }}
              >
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#ff0099" }} className="mt-1 font-bold">➤</span>
                  <span>Altos costes de consultoría tradicional.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#ff0099" }} className="mt-1 font-bold">➤</span>
                  <span>Desinformación en redes abiertas.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#ff0099" }} className="mt-1 font-bold">➤</span>
                  <span>Miedo al daño reputacional.</span>
                </li>
              </ul>
            </div>

            {/* Imagen */}
            <div className="w-full md:w-1/2">
              <div
                className="relative aspect-video rounded-2xl overflow-hidden border group transition-all duration-500 shadow-2xl"
                style={{ borderColor: "#ff009930" }}
              >
                <div
                  className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #ff009920, transparent)" }}
                />
                <img
                  src="/images/AboutUs/Problemas.png"
                  alt="Los Problemas"
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold pointer-events-none">
                  3
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Connector */}
          <div className="flex justify-center mt-16">
            <div
              className="w-1 h-16 rounded-full"
              style={{ background: "linear-gradient(to bottom, #ff0099, transparent)" }}
            />
          </div>
        </div>
      </div>

      
      <AnimatedSection>
        <div className="snap-start snap-always">
        <SolutionSection />
      </div>
      </AnimatedSection>
      

      <AnimatedSection backgroundColor="black">
            <StatsSection />
      </AnimatedSection>
      
      <div className="snap-start snap-always">
        <CTASection />
      </div>
    </>
  );
}