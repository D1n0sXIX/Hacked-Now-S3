import noticiasData from '../../data/noticias.json'; 

export default function Noticias() {
  
  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        
        {/* Título Principal */}
        <h1 className="text-4xl font-extrabold text-white-900 mb-10">
          Página de Noticias
        </h1>

        {/* Contenedor del grid para las noticias */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> {}
          
          {noticiasData.map((noticia) => (
            
        
            <article 
              key={noticia.id} 
 
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl flex flex-col" // Flex-col para apilar imagen y texto
            >
              
              {}
              <div className="relative w-full h-48 overflow-hidden"> {}
                <img 
                  src={noticia.imagen} 
                  alt={noticia.titulo} 
                  className="w-full h-full object-cover 
                             transform transition-transform duration-300 hover:scale-110" 
                />
              </div>

              {}
              <div className="p-4 flex flex-col flex-grow"> {}
                <div>
                  {}
                  <h2 className="text-xl font-bold text-white mb-2 leading-snug"> {}
                    {noticia.titulo}
                  </h2>
                  
                  {}
                  <p className="text-sm text-gray-400"> {}
                    Fuente: {noticia.fuente} | Fecha: {noticia.fecha}
                  </p>
                </div>
                
                {/*Enlace "READ NOW"*/}
                { <div className="mt-auto pt-4"> 
                    <a 
                      href={`/noticias/${noticia.id}`} 
                      className="text-blue-400 font-semibold text-sm hover:text-blue-300 transition-colors"
                    >
                      READ NOW →
                    </a>
                </div>
                }
              </div>

            </article>
          ))}
        </section>

      </main>
    </div>
  );
}