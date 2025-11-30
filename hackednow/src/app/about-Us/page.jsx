import Link from "next/link";

export default function AboutUs() {
  
  // --- DATOS DE LA PRESENTACIÓN ---
  const presentationSections = [
    {
      id: "que",
      title: "¿Qué es Hacked Now?",
      items: [
        "Foro digital colaborativo.",
        "Soluciones verificadas por expertos.",
        "Comunidad, aprendizaje y seguridad."
      ],
      imageAlt: "Grupo colaborando", 
      imageUrl: "/images/AboutUs/Que.png",
      align: "left"
    },
    {
      id: "como",
      title: "¿Cómo funciona?",
      items: [
        "Antecedentes de casos anteriores.",
        "Ayuda de la comunidad en tiempo real.",
        "Valoración y validación de expertos."
      ],
      imageAlt: "Experta analizando datos",
      imageUrl: "/images/AboutUs/Como.png",
      align: "right"
    },
    {
      id: "para-que",
      title: "¿Para qué?",
      description: "Para solucionar problemas reales de manera rápida y efectiva.",
      highlight: true, 
      imageAlt: "Solución de problemas"
    }
  ];

  // --- DATOS DE ENTREVISTAS (Placeholder) ---
  const entrevistaStats = [
    { label: "Personas Entrevistadas", value: "00", suffix: "+" },
    { label: "Sufrieron Ciberataques", value: "00", suffix: "%" },
    { label: "Buscan Ayuda Online", value: "00", suffix: "%" },
  ];

  return (
    <div className="min-h-screen bg-[#0b1219]">
      
      {/* =========================================
          SECCIÓN 1: HERO ORIGINAL 
      ========================================= */}
      <section className="relative py-16 md:py-24 text-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
            Sobre <span className="text-[#009dff] drop-shadow-[0_0_15px_rgba(0,157,255,0.3)]">HACKED NOW</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#E0E0E0] leading-relaxed text-opacity-90">
            ¿Hackeado? Solucionado.
          </p>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#009dff] opacity-10 blur-[100px] -z-10 rounded-full pointer-events-none" />
      </section>


      {/* =========================================
          SECCIÓN 2: ESTRUCTURA PRESENTACIÓN (RE-ESTILIZADA)
      ========================================= */}
      <section className="py-12 space-y-32">
        {presentationSections.map((section) => (
          <div key={section.id} className="container mx-auto px-6">
            
            {section.highlight ? (
              // --- DISEÑO ESPECIAL PARA "¿PARA QUÉ?" (Centrado y Azul) ---
              <div className="relative max-w-4xl mx-auto text-center">
                 <div className="absolute inset-0 bg-[#009dff] opacity-[0.03] blur-3xl rounded-full -z-10" />
                 
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-sans">
                  {section.title}
                </h2>
                
                <div className="bg-[#172a36]/50 border border-[#009dff]/30 p-8 md:p-12 rounded-2xl shadow-[0_0_30px_rgba(0,157,255,0.1)] backdrop-blur-sm relative overflow-hidden group hover:border-[#009dff]/50 transition-all duration-500">
                  <p className="text-2xl md:text-3xl text-white font-medium leading-normal relative z-10">
                    <span className="drop-shadow-[0_0_15px_rgba(0,157,255,0.4)]">{section.description}</span>
                  </p>
                  
                </div>
              </div>

            ) : (
              // --- DISEÑO PARA "¿QUÉ?" Y "¿CÓMO?"  ---
              <div className={`flex flex-col ${section.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}>
                
                {/* Columna de Texto */}
                <div className="w-full md:w-1/2 space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-white font-sans relative inline-block">
                    {section.title}
                    {/* Subrayado decorativo azul */}
                    <span className="absolute bottom-[-10px] left-0 w-1/3 h-1 bg-[#009dff] rounded-full"></span>
                  </h2>
                  <ul className="space-y-5 mt-8">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-xl md:text-2xl text-[#E0E0E0] font-medium tracking-wide leading-relaxed">
                        {/* Número/Viñeta en azul neón */}
                        <span className="text-[#009dff] font-bold drop-shadow-[0_0_8px_rgba(0,157,255,0.5)]"> {i + 1}.</span> 
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Columna de Imagen */}
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group bg-[#172a36]/30 backdrop-blur-sm hover:border-[#009dff]/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(0,157,255,0.2)]">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <img 
                          src={section.imageUrl} 
                          alt={section.imageAlt} 
                          className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                    
                  </div>
                </div>

              </div>
            )}
          </div>
        ))}
      </section>


      {/* =========================================
          SECCIÓN 3: ENTREVISTAS (PALETA AZUL)
      ========================================= */}
      <section className="py-24 mt-24 relative overflow-hidden">
        {/* Fondo sutil para separar sección */}
        <div className="absolute inset-0 bg-[#009dff] opacity-[0.02] pointer-events-none -skew-y-3 transform origin-top-left"></div>

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
              Impacto Real: <span className="text-[#009dff]">Entrevistas</span>
            </h2>
            <p className="text-[#E0E0E0] max-w-2xl mx-auto text-lg mt-4">
              Investigación con usuarios reales para comprender las necesidades de seguridad.
            </p>
          </div>

          {/* Grid de Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {entrevistaStats.map((stat, index) => (
              <div key={index} className="bg-[#172a36]/50 p-8 rounded-2xl border border-white/10 text-center hover:border-[#009dff]/60 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,157,255,0.15)] backdrop-blur-md">
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-[#009dff] transition-colors">
                  {stat.value}<span className="text-[#009dff] text-3xl">{stat.suffix}</span>
                </div>
                <p className="text-[#8db5ce] uppercase tracking-wider text-sm font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Citas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#172a36]/80 p-8 rounded-xl border-l-4 border-[#009dff] shadow-lg">
              <p className="text-lg text-white italic mb-6 leading-relaxed opacity-90">
                "Rellenar con entrevista"
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-1 bg-[#009dff] rounded-full"></div>
                 <p className="text-sm text-[#8db5ce] font-bold uppercase tracking-wider">Usuario Entrevistado #1</p>
              </div>
            </div>
            <div className="bg-[#172a36]/80 p-8 rounded-xl border-l-4 border-white/30 hover:border-[#009dff] transition-colors shadow-lg">
              <p className="text-lg text-white italic mb-6 leading-relaxed opacity-90">
                "Rellenar con entrevista"
              </p>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                 <p className="text-sm text-[#8db5ce] font-bold uppercase tracking-wider">Conclusión del Equipo</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================
                SECCIÓN 4: CTA FINAL
      ========================================= */}
      <section className="py-24 text-center relative z-10">
        <div className="container mx-auto px-6">
          {/* Contenedor con gradiente del borde */}
          <div className="bg-gradient-to-r from-[#009dff]/20 via-[#009dff]/5 to-[#009dff]/20 p-[1px] rounded-2xl inline-block shadow-[0_0_30px_rgba(0,157,255,0.15)]">
            {/* Contenedor interior */}
            <div className="bg-[#172a36]/95 border border-white/5 rounded-2xl p-10 md:p-16 max-w-4xl mx-auto backdrop-blur-md relative overflow-hidden">
              
               {/* Brillo interior sutil */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[#009dff] opacity-50 blur-md"></div>
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[#009dff] opacity-20 blur-md"></div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Quieres formar parte de la solución?
              </h2>
              <p className="text-[#E0E0E0] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Rellenar con un texto que anime al usuario a registrarse, colaborar en el foro o contactar con el equipo para mejorar la seguridad digital de todos.
              </p>
              
              <Link 
                href="/auth/register" 
                className="inline-block bg-[#009dff] text-black font-bold py-4 px-10 rounded-lg text-lg shadow-[0_0_20px_rgba(0,157,255,0.4)] hover:shadow-[0_0_35px_rgba(0,157,255,0.6)] hover:-translate-y-1 hover:bg-[#33b1ff] transition-all duration-300 relative z-20"
              >
                Únete a la comunidad
              </Link>

               {/* Decoración de fondo tech */}
               <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}