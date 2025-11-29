"use client";

export default function SwitchAnonimo({ esAnonimo, setEsAnonimo }) {
  return (
    <div className="switch-anonimo-container">
      <div className="switch-info">
        <label htmlFor="anonimo-switch" className="switch-label">
          Compartir este caso en la comunidad del foro
        </label>
        <p className="switch-description">
          Tu caso será visible públicamente en el foro de la comunidad
        </p>
      </div>
      
      <button
        id="anonimo-switch"
        type="button"
        role="switch"
        aria-checked={esAnonimo}
        onClick={() => setEsAnonimo(!esAnonimo)}
        className={`switch-anonimo-toggle ${esAnonimo ? "active" : ""}`}
      >
        <span className="switch-thumb" />
      </button>
    </div>
  );
}
