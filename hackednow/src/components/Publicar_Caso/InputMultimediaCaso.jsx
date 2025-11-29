"use client";

export default function InputMultimediaCaso() {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-foreground">
        Imagenes o Capturas del caso
      </label>
      <div className="w-full h-64 border-2 border-dashed border-input rounded-lg 
                      bg-input-background flex flex-col items-center justify-center gap-4
                      hover:border-muted-foreground transition-colors duration-200">
        <svg 
          className="w-12 h-12 text-muted-foreground" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        <button 
          type="button"
          className="px-6 py-2.5 rounded-lg font-semibold"
          style={{ backgroundColor: '#00b8ff', color: '#ffffff' }}
        >
          Subir Archivos
        </button>
        <p className="text-xs text-muted-foreground">
        </p>
      </div>
    </div>
  );
}
