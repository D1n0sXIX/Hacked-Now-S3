"use client";

export default function BotonesAccion({ onPublicar, onGuardarBorrador }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      {/* Botón Publicar Caso */}
      <button
        type="button"
        onClick={onPublicar}
        className="boton-publicar flex-1"
      >
        Publicar Caso
      </button>

      {/* Botón Guardar Borrador */}
      <button
        type="button"
        onClick={onGuardarBorrador}
        className="boton-borrador flex-1"
      >
        Guardar Borrador
      </button>
    </div>
  );
}
