"use client";

export default function BotonesAccion({ onPublicar, onGuardarBorrador }) {
  return (
    <div className="botones-accion-container">
      <button
        type="button"
        onClick={onPublicar}
        className="boton-publicar"
      >
        Publicar Caso
      </button>

      <button
        type="button"
        onClick={onGuardarBorrador}
        className="boton-borrador"
      >
        Guardar Borrador
      </button>
    </div>
  );
}
