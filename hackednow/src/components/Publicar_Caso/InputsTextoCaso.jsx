"use client";

export default function InputsTextoCaso({ titulo, setTitulo, descripcion, setDescripcion }) {
  return (
    <div className="input-texto-container">
      <div className="input-group">
        <label htmlFor="titulo">
          Título del caso
        </label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ej: Phishing en correo corporativo"
          maxLength={100}
        />
        <span className="input-contador">
          {titulo.length}/100 caracteres
        </span>
      </div>

      <div className="input-group">
        <label htmlFor="descripcion">
          Descripción del caso
        </label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Describe detalladamente su caso ..."
          rows={8}
          maxLength={2000}
        />
        <span className="input-contador">
          {descripcion.length}/2000 caracteres
        </span>
      </div>
    </div>
  );
}
