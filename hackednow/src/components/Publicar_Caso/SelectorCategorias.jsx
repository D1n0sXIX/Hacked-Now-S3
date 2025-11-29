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
    <div className="flex flex-col gap-3 mb-6">
      <label className="text-sm font-medium text-foreground">
        Categoría del caso
      </label>
      <div className="flex flex-wrap gap-3">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="relative">
            <button
              type="button"
              onClick={() => setCategoriaSeleccionada(categoria.id)}
              onMouseEnter={() => setHoveredCategoria(categoria.id)}
              onMouseLeave={() => setHoveredCategoria(null)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200
                ${categoriaSeleccionada === categoria.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {categoria.nombre}
            </button>
            
            {/* Tooltip con descripción */}
            {hoveredCategoria === categoria.id && (
              <div className="absolute z-10 w-64 p-3 mt-2 left-1/2 transform -translate-x-1/2
                            bg-popover border border-border rounded-lg shadow-xl
                            animate-in fade-in-0 zoom-in-95 duration-200">
                <p className="text-sm text-popover-foreground">
                  {categoria.descripcion}
                </p>
                {/* Flecha del tooltip */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2
                              w-4 h-4 rotate-45 bg-popover border-l border-t border-border">
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {categoriaSeleccionada && (
        <p className="text-xs text-muted-foreground">
          Categoría seleccionada: <span className="font-medium text-foreground">
            {categorias.find(c => c.id === categoriaSeleccionada)?.nombre}
          </span>
        </p>
      )}
    </div>
  );
}
