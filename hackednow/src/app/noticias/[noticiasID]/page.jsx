import noticiasData from '../../../data/noticias.json'; 
import Link from 'next/link'; 

// Componente para las noticias destacadas (Sidebar)
function NoticiasDestacadasSidebar({ currentNoticiaId }) {
    const noticiasDestacadas = noticiasData.filter(n => n.id !== currentNoticiaId).slice(0, 5); 

    return (
        // Contenedor del Sidebar
        <aside className="bg-gray-800 p-6 rounded-lg shadow-2xl text-white sticky top-4">
            <h2 className="text-xl font-bold border-b border-gray-700 pb-3 mb-4 text-blue-400">Otras Noticias</h2>
            
            <ul className="space-y-4">
                {noticiasDestacadas.map((item) => (
                    <li key={item.id} className="border-b border-gray-700 last:border-b-0 pb-3">
                        <Link 
                            href={`/noticias/${item.id}`} 
                            className="block hover:text-blue-300 transition-colors"
                        >
                            <img
                                src={item.imagen}
                                alt={item.titulo}
    
                                className="**w-full h-24 object-cover** rounded-md mb-2" 
                            />
                            
                            <p className="text-sm font-semibold">{item.titulo}</p>
                            <p className="text-xs text-gray-400 mt-1">{item.fecha}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}


export default async function NoticiaDetalle({ params }) {
  
  const paramValue = await params;
  const noticiaId = parseInt(paramValue.noticiasID, 10); 

  const noticia = noticiasData.find(n => n.id === noticiaId);

  const contenidoParrafos = noticia ? noticia.contenido.split('\n').map((parrafo, index) => (
    <p key={index} className="mb-4">
      {parrafo}
    </p>
  )) : null;

  // error en caso de noticia no encontrada (id no encontrada)
  if (!noticia) {
    return (
         <div className="container **mx-auto** px-4 py-8 text-center min-h-screen">
            <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
            <p className="text-xl text-gray-700">Noticia no encontrada.</p>
            <p className="text-sm text-gray-500 mt-2">No existe un artículo con ID: {paramValue.noticiasID}.</p>
        </div>
    );
  }


  return (
        <div className="py-8 ">
         <main className="mx-auto px-4 w-400"  >
            
            
            <div className="flex flex-col md:flex-row">
              
              
              <div className="w-full md:w-3/4"> 
          
                    <div className="bg-gray-800 p-8 rounded-lg shadow-2xl text-white">
                        
                        {/* CategorIa */}
                        <span className="inline-block bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                            {noticia.categoria}
                        </span>
                        
                        {/*Titulo*/}
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                            {noticia.titulo}
                        </h1>
                        
                 
                        <p className="text-sm text-gray-400 mb-8 border-b border-gray-700 pb-4">
                            <span className="font-semibold">Fuente: {noticia.fuente}</span> | Publicado el {noticia.fecha} | Autor: {noticia.autor}
                        </p>

                        {/*Imagen*/}
                        <img 
                            src={noticia.imagen} 
                            alt={noticia.titulo} 
                            className="block mx-auto w-auto h-auto max-h-96 rounded-lg mb-8 shadow-xl object-cover" 
                        />
                        
                        {/* Descripcion*/}
                        <div className="text-xl font-bold text-gray-200 mb-6 border-l-4 border-blue-400 pl-4">
                            <p>{noticia.descripcion}</p>
                        </div>
                        
                        {/* Contenido de la noticia */}
                        <div className="text-base text-gray-300 leading-relaxed space-y-6">
                            {contenidoParrafos}
                        </div>

                        {/* Enlace para volver */}
                        <div className="mt-10 pt-6 border-t border-gray-700">
                            <Link 
                                href="/noticias" 
                                className="text-blue-400 font-semibold text-lg hover:text-blue-300 transition-colors"
                            >
                                ← Volver a todas las noticias
                            </Link>
                        </div>
                    </div>
              </div> 
        
        
        {/* sidebar:*/}
        <div className="w-full md:w-1/4 hidden md:block">
            <NoticiasDestacadasSidebar currentNoticiaId={noticiaId} />
        </div>

        </div> 
      </main>
    </div>
  );
}