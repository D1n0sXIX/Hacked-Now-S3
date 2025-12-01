import { CommunityIcon, ExpertIcon, ToolsIcon, MoneyIcon } from "@/components/ui/Icons";

function SolutionCard({ icon, title, description, color, badge }) {
  return (
    <div className="bg-[#172a36]/60 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all group hover:-translate-y-2 relative overflow-hidden">
      {badge && (
        <div className="absolute top-0 right-0 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-lg">
          {badge}
        </div>
      )}

      <div
        className="h-14 w-14 rounded-lg flex items-center justify-center mb-6 mx-auto transition-all"
        style={{
          backgroundColor: `${color}20`,
          color: color,
        }}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm text-[#E0E0E0]/80 leading-relaxed">{description}</p>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <section className="relative py-32 snap-start snap-always">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1219] via-[#009dff]/5 to-[#0b1219] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          La Solución:{" "}
          <span className="text-[#009dff] drop-shadow-[0_0_15px_rgba(0,157,255,0.4)]">
            HACKED NOW
          </span>
        </h2>
        <p className="max-w-3xl mx-auto text-xl text-[#E0E0E0] mb-16">
          Cerramos el ciclo completo de la ciberseguridad con un ecosistema integrado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Comunidad */}
          <SolutionCard
            icon={<CommunityIcon />}
            title="Comunidad e IA"
            description="Respuestas inmediatas de usuarios y nuestra IA asistente para casos urgentes."
            color="#009dff"
          />

          {/* Card 2: Expertos */}
          <SolutionCard
            icon={<ExpertIcon />}
            title="Expertos Verificados"
            description="Ayuda profesional validada para casos críticos que requieren intervención experta."
            color="#00ffaa"
            badge="PREMIUM"
          />

          {/* Card 3: Tools */}
          <SolutionCard
            icon={<ToolsIcon />}
            title="Tools & News"
            description="Herramientas de desencriptado y alertas de filtraciones en tiempo real."
            color="#ff0099"
          />

          {/* Card 4: Marketplace (Full Width) */}
          <div className="lg:col-span-3">
            <div className="bg-[#172a36]/60 p-8 rounded-xl border border-white/10 hover:border-purple-500 transition-all group hover:-translate-y-2">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="h-16 w-16 bg-purple-500/20 rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <MoneyIcon />
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Conviértete en Experto</h3>
                  <p className="text-[#E0E0E0]/80">
                    Resuelve casos, sube de rango y comienza a cobrar comisiones por tu ayuda experta.
                  </p>
                </div>
                <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-sm transition-all hover:scale-105 shadow-lg">
                  Empezar Carrera
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}