export default function HeroSection() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight animate-fade-in">
          La Historia de{" "}
          <span className="text-[#009dff] drop-shadow-[0_0_20px_rgba(0,157,255,0.5)]">
            HACKED NOW
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-[#E0E0E0] leading-relaxed mb-4">
          ¿Hackeado? Solucionado.
        </p>
        <p className="max-w-2xl mx-auto text-lg text-[#E0E0E0]/80">
          Descubre cómo protegemos a nuestros clientes y recuperamos su tranquilidad.
        </p>

        <div className="mt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-[#009dff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

    </div>
  );
}