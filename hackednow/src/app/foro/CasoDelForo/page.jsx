"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import casosData from "@/data/casos.json";
import "./caso-detalle.css";

function CasoDelForoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [caso, setCaso] = useState(null);

  useEffect(() => {
    const casoId = searchParams.get('id');
    
    if (!casoId) return;
    
    // Buscar el caso en localStorage
    const casosGuardados = localStorage.getItem('casos');
    const casosLocalStorage = casosGuardados ? JSON.parse(casosGuardados) : []; // Si no hay casos, usar array vacío
    
    // Combinar con casos del JSON
    const todosLosCasos = [...casosLocalStorage, ...casosData];
    
    // Buscar el caso por ID
    const casoEncontrado = todosLosCasos.find(c => c.id === casoId);
    
    if (casoEncontrado) {
      setCaso(casoEncontrado);
    }
  }, [searchParams]);

  if (!caso) {
    return (
      <div className="caso-detalle-container">
        <p>Cargando caso...</p>
      </div>
    );
  }

  return (
    <div className="caso-detalle-container">
      <button onClick={() => router.back()} className="boton-volver">
        ← Volver al Foro
      </button>

      <div className="caso-detalle-card">
        <div className="caso-header">
          <p className="caso-usuario">{caso.usuario || "Usuario Anónimo"}</p>
          <p className="caso-fecha">
            {new Date(caso.fechaCreacion).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>

        <h1 className="caso-titulo">{caso.titulo}</h1>

        <div className="caso-meta">
          <span className="caso-categoria-badge">{caso.categoria}</span>
          <div className="caso-etiquetas-detalle">
            {caso.etiquetas.map((etiqueta, index) => (
              <span key={index} className="etiqueta-detalle">
                {etiqueta}
              </span>
            ))}
          </div>
        </div>

        <div className="caso-descripcion">
          <h2>Descripción del caso</h2>
          <p>{caso.descripcion}</p>
        </div>
      </div>

      {/* Respuesta de Expertos */}
      {caso.respuestaExpertos && (
        <div className="respuesta-expertos">
          <h2>💼 Respuesta nuestros Expertos</h2>
          <div className="experto-card">
            <div className="experto-header">
              <div>
                <p className="experto-nombre">{caso.respuestaExpertos.experto}</p>
                <p className="experto-especialidad">{caso.respuestaExpertos.especialidad}</p>
              </div>
              <span className="experto-fecha">
                {new Date(caso.respuestaExpertos.fecha).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
            <p className="experto-texto">{caso.respuestaExpertos.texto}</p>
          </div>
        </div>
      )}

      <div className="caso-comentarios">
        <h2>Comentarios ({caso.comentarios?.length || 0})</h2>
        {caso.comentarios && caso.comentarios.length > 0 ? (
          <div className="comentarios-lista">
            {caso.comentarios.map((comentario) => (
              <div key={comentario.id} className="comentario">
                <div className="comentario-header">
                  <span className="comentario-usuario">👤 {comentario.usuario}</span>
                  <span className="comentario-fecha">
                    {new Date(comentario.fecha).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <p className="comentario-texto">{comentario.texto}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="sin-comentarios">No hay comentarios aún. Sé el primero en comentar.</p>
        )}
      </div>
    </div>
  );
}

export default function CasoDelForo() {
  return (
    <Suspense fallback={
      <div className="caso-detalle-container">
        <p>Cargando caso...</p>
      </div>
    }>
      <CasoDelForoContent />
    </Suspense>
  );
}
