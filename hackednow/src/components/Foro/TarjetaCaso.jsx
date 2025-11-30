"use client";

import { useRouter } from "next/navigation";

export default function TarjetaCaso({ caso }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/foro/CasoDelForo?id=${caso.id}`);
  };

  return (
    <div className="caso-card" onClick={handleClick}>
      <div className="caso-card-header">
        <p className="caso-usuario">{caso.usuario || "Usuario Anónimo"}</p>
        {caso.respuestaExpertos && (
          <span className="badge-experto">✓ Experto</span>
        )}
      </div>
      <h3>{caso.titulo}</h3>
      <p className="caso-categoria">{caso.categoria}</p>
      <div className="caso-etiquetas">
        {caso.etiquetas.map((etiqueta, index) => (
          <span key={index} className="etiqueta">
            {etiqueta}
          </span>
        ))}
      </div>
    </div>
  );
}
