"use client";

import { useState } from "react";

const categorias = [
  {
    id: "malware",
    nombre: "Malware",
    descripcion: "Software malicioso diseñado para dañar o infiltrarse en sistemas sin autorización"
  },
  {
    id: "phishing",
    nombre: "Phishing",
    descripcion: "Técnicas de engaño para obtener información confidencial haciéndose pasar por entidades legítimas"
  },
  {
    id: "ransomware",
    nombre: "Ransomware",
    descripcion: "Malware que cifra archivos y exige un rescate para recuperar el acceso a los datos"
  },
  {
    id: "vulnerabilidades",
    nombre: "Vulnerabilidades",
    descripcion: "Fallos de seguridad en sistemas, software o configuraciones que pueden ser explotados"
  },
  {
    id: "otros",
    nombre: "Otros",
    descripcion: "Otros tipos de amenazas o incidentes de ciberseguridad no clasificados anteriormente"
  }
];

export default function SelectorCategorias({ categoriaSeleccionada, setCategoriaSeleccionada }) {
  const [hoveredCategoria, setHoveredCategoria] = useState(null);

  return (
    <div className="selector-categorias-container">
      <label>
        Categoría del caso
      </label>
      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="categoria-item">
            <button
              type="button"
              onClick={() => setCategoriaSeleccionada(categoria.id)}
              onMouseEnter={() => setHoveredCategoria(categoria.id)}
              onMouseLeave={() => setHoveredCategoria(null)}
              className={`categoria-button ${categoriaSeleccionada === categoria.id ? 'selected' : ''}`}
            >
              {categoria.nombre}
            </button>
            
            {hoveredCategoria === categoria.id && (
              <div className="categoria-tooltip">
                <p>{categoria.descripcion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {categoriaSeleccionada && (
        <p className="categoria-seleccionada-text">
          Categoría seleccionada: <span>
            {categorias.find(c => c.id === categoriaSeleccionada)?.nombre}
          </span>
        </p>
      )}
    </div>
  );
}
