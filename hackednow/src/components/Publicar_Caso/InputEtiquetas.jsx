"use client";

import { useState } from "react";

export default function InputEtiquetas({ etiquetas, setEtiquetas }) {
  const [inputValue, setInputValue] = useState("");

  const handleAddEtiqueta = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!etiquetas.includes(inputValue.trim())) {
        setEtiquetas([...etiquetas, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const handleRemoveEtiqueta = (etiquetaToRemove) => {
    setEtiquetas(etiquetas.filter((etiqueta) => etiqueta !== etiquetaToRemove));
  };

  return (
    <div className="flex flex-col gap-3 mb-6">
      <label htmlFor="etiquetas" className="text-sm font-medium text-foreground">
        Etiquetas adicionales
      </label>
      
      <input
        id="etiquetas"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddEtiqueta}
        placeholder="Escribe una etiqueta y presiona Enter..."
        className="w-full px-4 py-3 bg-input-background border border-input rounded-lg 
                   text-foreground placeholder:text-muted-foreground
                   focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
                   transition-all duration-200"
      />

      {/* Mostrar etiquetas añadidas */}
      {etiquetas.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {etiquetas.map((etiqueta, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-3 py-1.5 
                       bg-accent text-accent-foreground rounded-full text-sm"
            >
              {etiqueta}
              <button
                type="button"
                onClick={() => handleRemoveEtiqueta(etiqueta)}
                className="hover:text-destructive transition-colors duration-200"
                aria-label={`Eliminar etiqueta ${etiqueta}`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </span>
          ))}
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        Presiona Enter para añadir etiquetas. {etiquetas.length > 0 && `(${etiquetas.length} añadidas)`}
      </p>
    </div>
  );
}
