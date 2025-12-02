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
      <AnimatedSection className="min-h-screen pt-20 relative overflow-hidden">
        {/* Fondo que cubre todo el AnimatedSection */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#009dff] opacity-10 blur-[120px] rounded-full pointer-events-none" />
        <HeroSection />
    </AnimatedSection>
      
      {/* Sección 1: El Cliente */}
      <AnimatedSection>
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
                El perfil proactivo
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                El Cliente: Javier Cela Hedo
              </h2>

              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                Javier trabaja en el sector tecnológico o administrativo y sabe que la seguridad es clave hoy en día. Es una persona proactiva, sea empleado o pequeño empresario, que busca estar un paso por delante de las amenazas. Sin embargo, se siente vulnerable ante un entorno digital donde los ciberataques y las filtraciones a grandes empresas son constantes.
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
                  <span>Perfil: Profesional IT o empresario consciente de los riesgos.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#009dff" }} className="mt-1 font-bold">➤</span>
                  <span>Situación: Busca protección activa ante noticias constantes de ataques.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#009dff" }} className="mt-1 font-bold">➤</span>
                  <span>Mindset: Proactivo, busca soluciones rápidas y efectivas.</span>
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
                  src="/images/AboutUs/Javier_Cela.jpeg"
                  alt="El Cliente: Javier Cela Hedo"
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
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
      </AnimatedSection>

      {/* Sección 2: Las Necesidades */}
      <AnimatedSection>
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
                  src="/images/AboutUs/Que.png"
                  alt="Las Necesidades"
                  className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                />
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
                ¿Qué busca Javier para estar seguro?
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Las Necesidades
              </h2>

              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                Javier necesita saber al instante si sus sistemas están siendo atacados o han sido vulnerados. No quiere perder tiempo; busca orientación inmediata sobre qué hacer tras un incidente para evitar pérdidas de información o dinero, y sentirse tranquilo sabiendo que tiene el control.
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
                  <span>Verificación de amenazas y estado del sistema.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#00ffaa" }} className="mt-1 font-bold">➤</span>
                  <span>Orientación rápida post-ataque para mitigar daños.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#00ffaa" }} className="mt-1 font-bold">➤</span>
                  <span>Información actualizada sobre filtraciones recientes.</span>
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
      </AnimatedSection>

      {/* Sección 3: Los Problemas */}
      <AnimatedSection>
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
                Obstáculos actuales
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Los Problemas
              </h2>

              <p className="text-[#E0E0E0] text-lg leading-relaxed">
                Aunque Javier es proactivo, a menudo carece del conocimiento técnico específico o se enfrenta a servicios de consultoría demasiado costosos. Al buscar por su cuenta en Google o foros, se abruma con información errónea y soluciones genéricas que no resuelven su caso particular.
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
                  <span>Falta de conocimiento técnico especializado.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#ff0099" }} className="mt-1 font-bold">➤</span>
                  <span>Consultorías costosas y atención poco personalizada.</span>
                </li>
                <li className="flex items-start gap-3 text-base text-[#E0E0E0]">
                  <span style={{ color: "#ff0099" }} className="mt-1 font-bold">➤</span>
                  <span>Sobrecarga de información errónea en la web.</span>
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
      </AnimatedSection>

      <AnimatedSection className="bg-gradient-to-b from-[#0b1219] via-[#009dff]/5 to-[#0b1219]" >
        <SolutionSection />
      </AnimatedSection>
      
      <AnimatedSection className="bg-[#0b1219]">
        <StatsSection />
      </AnimatedSection>
      
      <AnimatedSection>
        <CTASection />
      </AnimatedSection>
    </>
  );
}