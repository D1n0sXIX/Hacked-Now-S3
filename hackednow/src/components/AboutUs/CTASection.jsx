import Link from 'next/link';

export default function CTASection() {
  return (
    <div className="w-full h-full flex items-center justify-center text-center relative z-10">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-r from-[#009dff]/20 via-[#009dff]/5 to-[#009dff]/20 p-[1px] rounded-3xl inline-block shadow-[0_0_40px_rgba(0,157,255,0.2)]">
          <div className="bg-[#172a36]/95 border border-white/5 rounded-3xl p-12 md:p-20 max-w-4xl mx-auto backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[#009dff] opacity-50 blur-md" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-[#009dff] opacity-20 blur-md" />

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              No dejes que tu historia <br className="hidden md:block" />
              termine mal
            </h2>

            <p className="text-[#E0E0E0] text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Únete a la plataforma donde expertos, IA y comunidad trabajan juntos para protegerte.
            </p>
            
            <Link href="/register">
              <button 
                className="inline-block bg-[#009dff] text-black font-bold py-5 px-12 rounded-lg text-lg shadow-[0_0_25px_rgba(0,157,255,0.5)] hover:shadow-[0_0_40px_rgba(0,157,255,0.7)] hover:-translate-y-1 hover:bg-[#33b1ff] transition-all duration-300 relative z-20 cursor-pointer"
              >
                Únete a la comunidad →
              </button>
            </Link>

            <div className="mt-10 flex justify-center gap-8 text-sm text-[#E0E0E0]/60">
              <span>✓ Gratis para empezar</span>
              <span>✓ Sin tarjeta requerida</span>
              <span>✓ Soporte 24/7</span>
            </div>

            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] pointer-events-none mix-blend-overlay" />
          </div>
        </div>
      </div>
    </div>
  );
}