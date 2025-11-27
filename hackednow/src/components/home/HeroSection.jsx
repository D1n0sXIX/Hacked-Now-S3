import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 text-center">
      <div className="container mx-auto px-6">
        <div className="relative max-w-4xl mx-auto">
          {/* Fondo difuminado decorativo */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-30 blur-sm"
            style={{
              backgroundImage: "url('https://www.genetec.com/binaries/content/gallery/illustrationstock_cyberthreats-recolored_adobestock_422696329.jpg')"
            }}
            aria-hidden="true"
          />

          {/* Contenido principal */}
          <div className="relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
              Tu escudo digital frente a los{" "}
              <span className="text-[#009dff]">ciberataques</span>.
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-[#E0E0E0]">
              En HACKED NOW, te proporcionamos las herramientas y el conocimiento 
              para protegerte de las amenazas en línea. Publica tu caso o explora 
              soluciones a problemas similares.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                href="/publicar-caso"
                className="w-full sm:w-auto bg-[#009dff] text-black font-bold py-3 px-8 rounded-lg text-base shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:bg-opacity-90 transition-all duration-300"
              >
                Publicar mi caso
              </Link>

              <Link 
                href="/foro"
                className="w-full sm:w-auto bg-white/5 text-white font-bold py-3 px-8 rounded-lg text-base border border-white/20 hover:bg-white/10 hover:border-white/40 transition-colors"
              >
                Explorar casos resueltos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}