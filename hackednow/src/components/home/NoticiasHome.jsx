/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import noticias from "@/data/noticias.json"; 

export default function NoticiasHome() {

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Noticias y filtraciones recientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
            <div 
              key={noticia.id}
              className="bg-white/3 rounded-lg overflow-hidden border border-white/10 hover:border-[#00FFFF]/50 transition-all duration-300 group"
            >
              {/* Imagen */}
              <div className="bg-gray-900/50 h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src={noticia.imagen} 
                  alt={noticia.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-white line-clamp-2">
                  {noticia.titulo}
                </h3>
                <p className="text-sm text-[#E0E0E0]/70">
                  Fuente: {noticia.fuente} | Fecha: {noticia.fecha}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver más */}
        <div className="text-center mt-12">
          <Link 
            href="/noticias"
            className="inline-block bg-white/5 text-white font-bold py-3 px-8 rounded-lg text-base border border-white/20 hover:bg-white/10 hover:border-white/40 transition-colors"
          >
            Ver más noticias
          </Link>
        </div>
      </div>
    </section>
  );
}