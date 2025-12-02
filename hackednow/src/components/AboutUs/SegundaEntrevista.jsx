import React from "react";

// Configuración de colores (Global para mantener coherencia)
const color = "#009dff"; 
const colorLow = "#009dff10"; 
const colorBorder = "#009dff30"; 

// --- 1. COMPONENTE CLIENTE (Sarah) ---
export function SectionCliente() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* IMAGEN IZQUIERDA */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video rounded-2xl overflow-hidden border group transition-all duration-500 shadow-2xl" style={{ borderColor: colorBorder }}>
            <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105" style={{ background: `linear-gradient(135deg, ${color}20, transparent)` }} />
            <img
              src="/images/AboutUs/Cliente2.png" 
              alt="El Cliente: Sarah"
              className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {e.target.src = "https://via.placeholder.com/800x450/001a33/009dff?text=Cliente+Sarah"}}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-8xl font-bold pointer-events-none select-none"></div>
          </div>
        </div>

        {/* TEXTO DERECHA */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-2" style={{ borderColor: colorBorder, backgroundColor: colorLow, color: color }}>
            El perfil técnico
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">1. El Cliente: Sarah</h2>
          <p className="text-[#E0E0E0] text-lg leading-relaxed">
            Sarah es la CTO de 'NovaFin', una startup fintech en rápido crecimiento. Aunque es experta en tecnología, su equipo es pequeño y está desbordado por el desarrollo del producto, dejando brechas críticas en la seguridad.
          </p>
          <ul className="space-y-3 mt-6 p-5 rounded-xl border-l-4 bg-[#172a36]/50" style={{ borderColor: color }}>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Perfil: Directora de Tecnología (CTO).</span></li>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Contexto: Startup financiera con datos críticos.</span></li>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Estado: Sobrecargada por cumplimiento normativo.</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// --- 2. COMPONENTE NECESIDADES ---
export function SectionNecesidades() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
        {/* IMAGEN DERECHA */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video rounded-2xl overflow-hidden border group transition-all duration-500 shadow-2xl" style={{ borderColor: colorBorder }}>
            <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105" style={{ background: `linear-gradient(135deg, ${color}20, transparent)` }} />
            <img
              src="/images/AboutUs/Necesidades2.png" 
              alt="Necesidades"
              className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {e.target.src = "https://via.placeholder.com/800x450/001a33/009dff?text=Necesidades"}}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-8xl font-bold pointer-events-none select-none"></div>
          </div>
        </div>

        {/* TEXTO IZQUIERDA */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-2" style={{ borderColor: colorBorder, backgroundColor: colorLow, color: color }}>
            Requisitos Críticos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">2. Necesidades</h2>
          <p className="text-[#E0E0E0] text-lg leading-relaxed">
            La seguridad es un requisito legal para Sarah. Necesita monitoreo 24/7 de sus APIs, asegurar la encriptación de datos de usuarios y generar reportes de auditoría para inversores sin detener el desarrollo.
          </p>
          <ul className="space-y-3 mt-6 p-5 rounded-xl border-l-4 bg-[#172a36]/50" style={{ borderColor: color }}>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Monitoreo continuo de infraestructura cloud.</span></li>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Cumplimiento automatizado (GDPR / PCI-DSS).</span></li>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Respuesta a incidentes sin contratar más personal.</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// --- 3. COMPONENTE PROBLEMAS ---
export function SectionProblemas() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* IMAGEN IZQUIERDA */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video rounded-2xl overflow-hidden border group transition-all duration-500 shadow-2xl" style={{ borderColor: colorBorder }}>
            <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105" style={{ background: `linear-gradient(135deg, ${color}20, transparent)` }} />
            <img
              src="/images/AboutUs/Problemas2.png" 
              alt="Problemas"
              className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {e.target.src = "https://via.placeholder.com/800x450/001a33/009dff?text=Problemas"}}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-8xl font-bold pointer-events-none select-none"></div>
          </div>
        </div>

        {/* TEXTO DERECHA */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-2" style={{ borderColor: colorBorder, backgroundColor: colorLow, color: color }}>
            Puntos de Dolor
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">3. Problemas</h2>
          <p className="text-[#E0E0E0] text-lg leading-relaxed">
            El presupuesto para un equipo de seguridad dedicado (Blue Team) es inasumible. Además, sufre de 'fatiga de alertas': las herramientas actuales generan tanto ruido que su equipo ignora avisos reales.
          </p>
          <ul className="space-y-3 mt-6 p-5 rounded-xl border-l-4 bg-[#172a36]/50" style={{ borderColor: color }}>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Presupuesto limitado para talento senior.</span></li>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Exceso de falsos positivos en alertas.</span></li>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Miedo a una brecha que arruine la reputación.</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// --- 4. COMPONENTE ALTERNATIVAS ---
export function SectionAlternativas() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
        {/* IMAGEN DERECHA */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video rounded-2xl overflow-hidden border group transition-all duration-500 shadow-2xl" style={{ borderColor: colorBorder }}>
            <div className="absolute inset-0 transition-all duration-500 group-hover:scale-105" style={{ background: `linear-gradient(135deg, ${color}20, transparent)` }} />
            <img
              src="/images/AboutUs/Alternativas2.png" 
              alt="Alternativas"
              className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
              onError={(e) => {e.target.src = "https://via.placeholder.com/800x450/001a33/009dff?text=Alternativas"}}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-8xl font-bold pointer-events-none select-none"></div>
          </div>
        </div>

        {/* TEXTO IZQUIERDA */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-2" style={{ borderColor: colorBorder, backgroundColor: colorLow, color: color }}>
            Soluciones Insuficientes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">4. Alternativas</h2>
          <p className="text-[#E0E0E0] text-lg leading-relaxed">
            Las consultoras tradicionales tardan semanas en entregar informes estáticos. Las herramientas Open Source gratuitas carecen de soporte e integración, consumiendo más tiempo del que ahorran.
          </p>
          <ul className="space-y-3 mt-6 p-5 rounded-xl border-l-4 bg-[#172a36]/50" style={{ borderColor: color }}>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Consultoras tradicionales (Lentas y caras).</span></li>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Herramientas Open Source (Difíciles de mantener).</span></li>
            <li className="flex items-start gap-3 text-base text-[#E0E0E0]"><span style={{ color: color }} className="font-bold text-lg mt-0.5">➤</span><span>Seguros de ciberriesgo (No previenen el ataque).</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}