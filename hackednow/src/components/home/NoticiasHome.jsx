/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function NoticiasHome() {
  const noticias = [
    {
      id: 1,
      titulo: "Nueva filtración de datos afecta a miles de usuarios",
      fuente: "CyberNews",
      fecha: "15 de julio de 2024",
      imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiTN9YK8t8tiPwO3LjsgaABEdIxICRJgoMebH1UlTH79t5aJodYGLt3czw_pFN4WtAIhurxq9fGa7-DuFSqJHS0eHHSUKWfwvPTZP3_y2uqicbLU_5jZ5AzwOpqlTwxF5Py-J2WSRY89Ccgjq7ob3OUtcvA7TDg9pFdpuosUvlSeep5Z77_VdhlJ-fhcSmTKsNiTUdvsgp5DqglH2Xiitb4cjqTJI9WCywxx-DdW58VVDjJ-bOoR3rrcPyPMRmVZcXihBGgLyMtzk"
    },
    {
      id: 2,
      titulo: "Aumento de ataques de malware dirigidos a empresas",
      fuente: "Security Today",
      fecha: "10 de julio de 2024",
      imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOOfoP1Cl_QksGsi0Wsxr-pfIjAx4ppKtG8DjXfxGPENxVuGNLRRQXzkubHHBApoYVRGaFn72PcVedQFxb_rmMRznaru_y5NOkaOy0OY99H2FhYKDfuFZGL1FjaHLyVlet3TIS85mf9QWhSkx8M7rYTYNjr4dwXE2MqseDUzC_SHGZD2EOGlJ6RahKx-b4BvHAymk-15rTbK69pjfOURec6DDeRdE8OzUqWWmq_hriXIgHmZ8aZRymbS9eNwGBb3tmI-JrygMRe4U"
    },
    {
      id: 3,
      titulo: "Vulnerabilidad crítica descubierta en software ampliamente utilizado",
      fuente: "TechCrunch",
      fecha: "5 de julio de 2024",
      imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOF_yFg9haRUMbTqx3jPcBzSiK2C9sPoZUyVgjcCCvLBmaNQXjjDYE1SRLi6DHeIiJfLt7tZ1p3YaOIuQT4v-uOLOIkmiJW42tLrCQ6A0AuFYAGaFNfROxbjvKC5hLeunPl2DvmGB3ka4DtOEKTeh89UBUQFhXAwzD2bJQVPywpUQoGykkjzYTzIbNczzm4iAixvYq3_so8AdqH37sB5JGUqeSjXLREHwUNmPgkkq6HqlFXVmtlOJ29JENGOp0iPslGBbkNmCtXlo"
    }
  ];

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