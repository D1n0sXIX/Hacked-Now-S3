"use client";

export default function InputsTextoCaso({ titulo, setTitulo, descripcion, setDescripcion }) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Input Título */}
      <div className="flex flex-col gap-2">
        <label 
          htmlFor="titulo" 
          className="text-sm font-medium text-foreground"
        >
          Título del caso
        </label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ej: Phishing en correo corporativo"
          className="w-full px-4 py-3 bg-input-background border border-input rounded-lg 
                     text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
                     transition-all duration-200"
          maxLength={100}
        />
        <span className="text-xs text-muted-foreground">
          {titulo.length}/100 caracteres
        </span>
      </div>

      {/* Input Descripción */}
      <div className="flex flex-col gap-2">
        <label 
          htmlFor="descripcion" 
          className="text-sm font-medium text-foreground"
        >
          Descripción del caso
        </label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Describe detalladamente tu caso de ciberseguridad..."
          rows={8}
          className="w-full px-4 py-3 bg-input-background border border-input rounded-lg 
                     text-foreground placeholder:text-muted-foreground
                     focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
                     transition-all duration-200 resize-vertical"
          maxLength={2000}
        />
        <span className="text-xs text-muted-foreground">
          {descripcion.length}/2000 caracteres
        </span>
      </div>
    </div>
  );
}
