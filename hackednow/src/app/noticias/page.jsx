import noticiasData from '../../data/noticias.json'; 

export default function Noticias() {
  
  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        
        <h1 className="text-4xl font-extrabold text-white mb-10">
          Ultimas Noticias
        </h1>

        <section className="flex flex-col gap-8">
          
          {noticiasData.map((noticia) => (
            
            <article 
              key={noticia.id} 
              className="flex flex-col md:flex-row md:h-72 bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
            >
              
              {/* Bloque de la Imagen */}
              <div className="relative w-full h-48 md:h-full md:w-1/3 overflow-hidden flex-shrink-0">
                {/* Categoria*/}
                <span className="absolute top-4 left-4 bg-gray-700 text-white text-xs font-semibold px-2.5 py-0.5 rounded uppercase tracking-wide z-10">
                  {noticia.categoria}
                </span>

                {/* Imagen */}
                <img 
                  src={noticia.imagen} 
                  alt={noticia.titulo} 
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110" 
                />
              </div>

              {/* Bloque del Contenido */}
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-between md:h-full"> 
                <div>
                  {/* Titulo de la noticia */}
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight"> 
                    {noticia.titulo}
                  </h2>
                  
                  {/* Descripción de la noticia */}
                  <p className="text-base text-gray-300 mb-4 line-clamp-3"> 
                    {noticia.descripcion}
                  </p>
                </div>
                
                {/* Enlace Read Now */}
                <div className="mt-auto">
                    <p className="text-sm text-gray-400 mb-2">
                        Fuente: {noticia.fuente} | Fecha: {noticia.fecha}
                    </p>
                    <a 
                      href={`/noticias/${noticia.id}`} 
                      className="text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors" 
                    >
                      LEER AHORA→
                    </a>
                </div>
              </div>

            </article>
          ))}
        </section>

      </main>
    </div>
  );
}
