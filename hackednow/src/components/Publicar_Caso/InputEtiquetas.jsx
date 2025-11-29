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
    <div className="input-etiquetas-container">
      <label htmlFor="etiquetas">
        Etiquetas adicionales
      </label>
      
      <input
        id="etiquetas"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddEtiqueta}
        placeholder="Escribe una etiqueta y presiona Enter..."
      />

      {etiquetas.length > 0 && (
        <div className="etiquetas-display">
          {etiquetas.map((etiqueta, index) => (
            <span key={index} className="etiqueta-tag">
              {etiqueta}
              <button
                type="button"
                onClick={() => handleRemoveEtiqueta(etiqueta)}
                aria-label={`Eliminar etiqueta ${etiqueta}`}
              >
                <svg
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

      <p className="etiquetas-help-text">
        Presiona Enter para añadir etiquetas. {etiquetas.length > 0 && `(${etiquetas.length} añadidas)`}
      </p>
    </div>
  );
}
