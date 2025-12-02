import React from "react";

export default function SegundaEntrevista() {
  const color = "#009dff"; 
  const colorLow = "#009dff10"; 
  const colorBorder = "#009dff30"; 

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* 1. IMAGEN (Izquierda) */}
        <div className="w-full md:w-1/2 md:order-1">
          <div
            className="relative aspect-video rounded-2xl overflow-hidden border group transition-all duration-500 shadow-2xl"
            style={{ borderColor: colorBorder }}
          >
            <div
              className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${color}20, transparent)` }}
            />
            
            <img
              src="/images/AboutUs/Alternativas.png" 
              alt="Alternativas actuales"
              className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
            />
            
            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold pointer-events-none select-none">
              4
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6 md:order-2">
          
          <div
            className="inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-2"
            style={{ borderColor: colorBorder, backgroundColor: colorLow, color: color }}
          >
            Alternativas Insuficientes
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Las Alternativas
          </h2>

          <p className="text-[#E0E0E0] text-lg leading-relaxed">
            Actualmente, el sector intenta protegerse con <strong>herramientas básicas</strong> como firewalls y antivirus tradicionales. Si bien son soluciones económicas, resultan incompletas para proteger datos sensibles frente a amenazas complejas.
          </p>

          {/* Lista con checks azules */}
          <ul
            className="space-y-3 mt-6 p-5 rounded-xl border-l-4 bg-[#172a36]/50"
            style={{ borderColor: color }}
          >
            <li className="flex items-center gap-3 text-base text-[#E0E0E0]">
              <span style={{ color: color }} className="font-bold text-lg">➤</span>
              <span>Uso de antivirus tradicionales (protección básica).</span>
            </li>
            <li className="flex items-center gap-3 text-base text-[#E0E0E0]">
              <span style={{ color: color }} className="font-bold text-lg">➤</span>
              <span>Ventaja: Coste reducido y fácil implementación.</span>
            </li>
            <li className="flex items-center gap-3 text-base text-[#E0E0E0]">
              <span style={{ color: color }} className="font-bold text-lg">➤</span>
              <span>Desventaja: Vulnerable ante ataques sofisticados e IoT.</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="flex justify-center mt-16">
        <div
          className="w-1 h-16 rounded-full"
          style={{ background: `linear-gradient(to bottom, ${color}, transparent)` }}
        />
      </div>
    </div>
  );
}