"use client"

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// --- SUB-COMPONENTE: GRÁFICA ANIMADA ---
function AnimatedDonut({ percentage, label, color }) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = parseInt(percentage);
      const duration = 2000; 
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, percentage]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius; 
  const strokeDashoffset = isVisible ? circumference - (percentage / 100) * circumference : circumference;

  return (
    <div ref={domRef} className="flex flex-col items-center group cursor-default">
      <div className="relative w-40 h-40 transition-transform duration-500 hover:scale-110">
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-20 transition-opacity duration-1000"
          style={{ backgroundColor: isVisible ? color : 'transparent' }} 
        />
        
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#172a36"
            strokeWidth="12"
            fill="transparent"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke={color}
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all ease-out"
            style={{ transitionDuration: '2000ms' }} 
          />
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-white tabular-nums drop-shadow-md">
            {count}%
          </span>
        </div>
      </div>
      
      <p className="mt-6 text-[#E0E0E0] font-medium text-center max-w-[200px] group-hover:text-white transition-colors">
        {label}
      </p>
    </div>
  );
}

// --- PÁGINA PRINCIPAL ABOUT US ---
export default function AboutUs() {
  
  const storySections = [
    {
      id: "cliente",
      title: "1. El Cliente: Alex",
      subtitle: "El perfil vulnerable",
      description: "Alex es un freelance que gestiona datos sensibles de sus clientes. No es un experto informático; su prioridad es su negocio. Un día, recibe un correo urgente de un supuesto proveedor, hace clic y su pantalla se bloquea. El pánico se apodera de él.",
      items: [
        "Perfil: Autónomo sin conocimientos técnicos.",
        "Situación: Bajo ataque de Ransomware.",
        "Estado emocional: Pánico y confusión."
      ],
      imageUrl: "/images/AboutUs/Que.png", 
      align: "left"
    },
    {
      id: "necesidades",
      title: "2. Las Necesidades",
      subtitle: "¿Qué necesita Alex ahora mismo?",
      description: "Alex no necesita un curso de ciberseguridad de 20 horas. Necesita recuperar sus archivos YA. Necesita saber si sus cuentas bancarias están seguras y necesita una garantía de que esto no volverá a pasar.",
      items: [
        "Respuesta inmediata (Incident Response).",
        "Herramientas de desencriptado.",
        "Asesoramiento experto sin tecnicismos."
      ],
      imageUrl: "/images/AboutUs/Como.png", 
      align: "right"
    },
    {
      id: "problemas",
      title: "3. Los Problemas",
      subtitle: "La barrera de entrada",
      description: "Al intentar solucionarlo, Alex se enfrenta a la realidad. Las consultoras piden miles de euros solo por auditoría. Los foros generales están llenos de ruido y opiniones contradictorias. No sabe en quién confiar.",
      items: [
        "Altos costes de consultoría tradicional.",
        "Desinformación en redes abiertas.",
        "Miedo al daño reputacional."
      ],
      imageUrl: "/images/AboutUs/Problemas.png", 
      align: "left"
    },
    {
      id: "alternativas",
      title: "4. Las Alternativas Fallidas",
      subtitle: "Lo que intentó y no funcionó",
      description: "Intentó usar un antivirus gratuito (demasiado tarde). Buscó en Google y terminó descargando más malware. Contactó con un informático local que no estaba especializado en ciberseguridad y tardaba días en responder.",
      items: [
        "Googlear soluciones (Peligroso).",
        "Soporte técnico genérico (Lento).",
        "Antivirus estándar (Ineficaz post-ataque)."
      ],
      imageUrl: "/images/AboutUs/alternativas.png", 
      align: "right"
    }
  ];

  const chartStats = [
    { 
      percentage: 85, 
      label: "Casos Resueltos por la Comunidad", 
      color: "#009dff" 
    },
    { 
      percentage: 60, 
      label: "Ahorro vs. Consultoría Tradicional", 
      color: "#00ffaa" 
    },
    { 
      percentage: 92, 
      label: "Satisfacción con Expertos Verificados", 
      color: "#ff0099" 
    }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#172a36] via-[#0b1219] to-[#0b1219]">
      
      {/* SECCIÓN 1: HERO */}
      <section className="relative py-16 md:py-24 text-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            La Historia de <span className="text-[#009dff] drop-shadow-[0_0_15px_rgba(0,157,255,0.3)]">HACKED NOW</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#E0E0E0] leading-relaxed text-opacity-90">
            ¿Hackeado? Solucionado.
          </p>
          <p> Descubre cómo protegemos a nuestros clientes y recuperamos su tranquilidad.</p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#009dff] opacity-10 blur-[100px] -z-10 rounded-full pointer-events-none" />
      </section>

      {/* SECCIÓN 2: NARRATIVA */}
      <section className="py-12 space-y-24">
        {storySections.map((section) => (
          <div key={section.id} className="container mx-auto px-6">
            <div className={`flex flex-col ${section.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
              
              <div className="w-full md:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full border border-[#009dff]/30 bg-[#009dff]/10 text-[#009dff] text-xs font-bold uppercase tracking-wider mb-2">
                  {section.subtitle}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-sans">
                  {section.title}
                </h2>
                <p className="text-[#E0E0E0] text-lg leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-3 mt-4 bg-[#172a36]/40 p-6 rounded-xl border-l-2 border-[#009dff]">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-[#E0E0E0]/80">
                      <span className="text-[#009dff] mt-1">➤</span> 
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group bg-[#172a36]/30 backdrop-blur-sm hover:border-[#009dff]/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(0,157,255,0.2)]">
                  <img 
                     src={section.imageUrl} 
                     alt={section.title} 
                     className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 flex items-center justify-center -z-10">

                   </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* SECCIÓN 3: LA SOLUCIÓN (DEMO) */}
      <section className="py-24 mt-20 relative">
         <div className="absolute inset-0 bg-gradient-to-b from-[#0b1219] via-[#009dff]/5 to-[#0b1219] -z-10 pointer-events-none" />

         <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              5. La Solución: <span className="text-[#009dff]">HACKED NOW</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-[#E0E0E0] mb-12">
              ¿Por qué somos únicos? Porque cerramos el ciclo completo de la ciberseguridad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="bg-[#172a36]/60 p-8 rounded-xl border border-white/10 hover:border-[#009dff] transition-all group hover:-translate-y-2">
                  <div className="h-12 w-12 bg-[#009dff]/20 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-[#009dff] transition-colors">
                    <svg className="w-6 h-6 text-[#009dff] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Comunidad e Inteligencia Colectiva</h3>
                  <p className="text-sm text-[#E0E0E0]/70">Expones tu caso y obtienes respuestas inmediatas de otros usuarios o de nuestra IA asistente.</p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#172a36]/60 p-8 rounded-xl border border-white/10 hover:border-[#009dff] transition-all group hover:-translate-y-2 relative overflow-hidden">
                   <div className="absolute top-0 right-0 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded-bl-lg">PREMIUM</div>
                  <div className="h-12 w-12 bg-[#009dff]/20 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-[#009dff] transition-colors">
                    <svg className="w-6 h-6 text-[#009dff] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Expertos Verificados</h3>
                  <p className="text-sm text-[#E0E0E0]/70">¿Necesitas manos expertas? Contrata ayuda profesional validada por la plataforma para casos críticos.</p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#172a36]/60 p-8 rounded-xl border border-white/10 hover:border-[#009dff] transition-all group hover:-translate-y-2">
                  <div className="h-12 w-12 bg-[#009dff]/20 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:bg-[#009dff] transition-colors">
                    <svg className="w-6 h-6 text-[#009dff] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Tools & News</h3>
                  <p className="text-sm text-[#E0E0E0]/70">Acceso directo a herramientas de desencriptado y alertas de filtraciones que te afectan directamente.</p>
                </div>

                 {/* Card 4 (CORREGIDO) */}
                 <div className="bg-[#172a36]/60 p-8 rounded-xl border border-white/10 hover:border-[#009dff] transition-all group hover:-translate-y-2 lg:col-span-3">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="h-16 w-16 bg-purple-500/20 rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                         <svg className="w-8 h-8 text-purple-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-white mb-1">Conviértete en Experto</h3>
                        <p className="text-sm text-[#E0E0E0]/70">¿Sabes solucionar problemas? Resuelve casos, sube de rango y comienza a cobrar comisiones por tu ayuda experta.</p>
                    </div>
                    <Link href="/auth/register" className="ml-auto px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-sm transition-colors">
                        Empezar Carrera
                    </Link>
                  </div>
                </div>
            </div>
         </div>
      </section>

      {/* SECCIÓN 4: ESTADÍSTICAS ANIMADAS */}
      <section className="py-24 bg-[#080d12] relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Resultados <span className="text-[#009dff]">Medibles</span></h2>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {chartStats.map((stat, index) => (
              <AnimatedDonut 
                key={index}
                percentage={stat.percentage}
                label={stat.label}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CTA FINAL */}
      <section className="py-24 text-center relative z-10">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-[#009dff]/20 via-[#009dff]/5 to-[#009dff]/20 p-[1px] rounded-2xl inline-block shadow-[0_0_30px_rgba(0,157,255,0.15)]">
            <div className="bg-[#172a36]/95 border border-white/5 rounded-2xl p-10 md:p-16 max-w-4xl mx-auto backdrop-blur-md relative overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[#009dff] opacity-50 blur-md"></div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[#009dff] opacity-20 blur-md"></div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                No dejes que tu historia termine mal
              </h2>
              <p className="text-[#E0E0E0] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Únete a la plataforma donde expertos, IA y comunidad trabajan juntos para protegerte.
              </p>
              
              <Link 
                href="/auth/register" 
                className="inline-block bg-[#009dff] text-black font-bold py-4 px-10 rounded-lg text-lg shadow-[0_0_20px_rgba(0,157,255,0.4)] hover:shadow-[0_0_35px_rgba(0,157,255,0.6)] hover:-translate-y-1 hover:bg-[#33b1ff] transition-all duration-300 relative z-20"
              >
                Únete a la comunidad
              </Link>

               <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}