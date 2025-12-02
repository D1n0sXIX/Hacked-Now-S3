import React from 'react';

// Datos del plan premium
const premiumDetails = {
  price: "5€",
  period: "al mes",
  title: "Plan Premium",
  subtitle: "🛡️ No te conformes con menos. Conviértete en Premium y obtén nuestras ventajas.",
  features: [
    {
      title: "Respuestas de Expertos",
      description: "Obtén soluciones y respuestas directas de profesionales verificados.",
      imagePath: "/images/experto.png", // Asumido
      imageAlt: "Icono de Experto"
    },
    {
      title: "Asistente de IA Exclusivo",
      description: "Soporte en tiempo real entrenado en vulnerabilidades 'Cero Día'.",
      imagePath: "/images/chat-IA.png", // Asumido
      imageAlt: "Icono de Chat IA"
    },
    {
      title: "Herramientas Avanzadas",
      description: "Conjunto de herramientas punteras para auditorías y análisis de seguridad.",
      imagePath: "/images/herramienta.png", // Asumido
      imageAlt: "Icono de Herramientas"
    },
  ]
};

// Componente NO funcional para simular la interfaz de chat de IA
const AIChatSimulation = () => {
  const messageStyle = (isUser) => ({
    backgroundColor: isUser ? 'var(--accent-blue)' : 'var(--bg-tertiary)',
    color: isUser ? 'var(--text-primary)' : 'var(--text-secondary)',
    alignSelf: isUser ? 'flex-end' : 'flex-start',
    maxWidth: '80%',
    padding: '0.6rem 1rem',
    borderRadius: '1rem',
    borderTopLeftRadius: isUser ? '1rem' : '0.3rem',
    borderTopRightRadius: isUser ? '0.3rem' : '1rem',
    marginBottom: '0.75rem',
    wordBreak: 'break-word',
  });

  return (
    <div className="card w-full h-96 flex flex-col p-4 md:p-6" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
      
      {/* Ventana de Mensajes Simulados */}
      <div className="flex-1 overflow-y-auto mb-4 p-2 flex flex-col" style={{ scrollbarWidth: 'none' }}>
        
        {/* Mensaje 1: User */}
        <div style={messageStyle(true)}>
          <p className="text-sm">¿Cómo puedo mitigar un ataque XSS en mi aplicación React?</p>
        </div>

        {/* Mensaje 2: AI */}
        <div style={messageStyle(false)}>
          <p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent-blue)' }}>Hacked AI</p>
          <p className="text-sm">Para prevenir XSS, asegúrate de desinfectar todas las entradas de usuario antes de renderizarlas usando librerías como `dompurify` y configurar una Política de Seguridad de Contenido (CSP) estricta.</p>
        </div>
        
        {/* Mensaje 3: User */}
        <div style={messageStyle(true)}>
          <p className="text-sm">¿Qué es una vulnerabilidad de Día Cero?</p>
        </div>

        {/* Mensaje 4: AI */}
        <div style={messageStyle(false)}>
          <p className="text-sm font-semibold mb-1" style={{ color: 'var(--accent-blue)' }}>Hacked AI</p>
          <p className="text-sm">Es una vulnerabilidad desconocida por el fabricante del software. Nuestro modelo PRO está entrenado con las últimas tendencias para identificarlas antes de que sean explotadas masivamente.</p>
        </div>

      </div>

      {/* Input de Chat Simulada */}
      <div className="flex items-center space-x-2 border rounded-full p-1" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-tertiary)' }}>
        <input 
          type="text" 
          placeholder="Pregunta a Hacked AI..." 
          className="flex-1 p-2 bg-transparent text-sm focus:outline-none" 
          style={{ color: 'var(--text-primary)' }}
          disabled // No funcional
        />
        <button 
          className="btn-primary py-2 px-4 rounded-full text-sm opacity-70 cursor-default"
          style={{ backgroundColor: 'var(--accent-blue)' }}
          disabled // No funcional
        >
          Enviar
        </button>
      </div>

    </div>
  );
};


export default function PremiumPlanPage() {
  const { price, period, title, subtitle, features } = premiumDetails;
  
  // URL actualizada para ir al formulario de pago
  const checkoutUrl = "/plan-desarrollador/checkout";

  return (
    <div className="container mx-auto py-20">
      
      {/* Encabezado Principal */}
      <header className="text-center mb-16 px-4">
        {/* Título y subtítulo centrado en la página */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h1>
        <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {subtitle}
        </p>
      </header>
      
      {/* Sección de Precio (Destacada) */}
      <section className="flex justify-center mb-20 px-4">
        
        {/* Estructura para mostrar la tarjeta PREMIUM centrada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"> 
          
          <div className="hidden md:block"></div> {/* Placeholder izquierdo */}
          
          <div className="w-full">
            {/* Tarjeta de precio con el estilo 'card' */}
            <div className="card text-center p-10 h-full border-2" 
                 style={{ borderColor: 'var(--accent-blue)', 
                          transform: 'scale(1.05)', 
                          zIndex: 10 }}> 
              
              {/* Contenedor del Título y Logo */}
              <div className="flex flex-col items-center justify-center mb-4">
                  
                  {/* Título */}
                  <h2 className="text-2xl font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--accent-blue)' }}>
                    PLAN PREMIUM
                  </h2>
                  
              </div>
              
              <div className="flex items-end justify-center mb-6">
                <span className="text-6xl font-black" style={{ color: 'var(--text-primary)' }}>
                  {price.split('€')[0]}€
                </span>
                <span className="text-xl ml-2 mb-2" style={{ color: 'var(--text-secondary)' }}>
                  {period}
                </span>
              </div>
              
              <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
                Sin permanencia. Cancela cuando quieras.
              </p>
              
              <a href={checkoutUrl} className="btn-primary block w-full py-4 text-lg text-center">
                Unete Ahora
              </a>
            </div>
          </div>
          
          <div className="hidden md:block"></div> {/* Placeholder derecho */}
          
        </div>
      </section>

      {/* SECCIÓN 1: Grid de Características (Lo que incluye) */}
      <section className="mb-20 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
          ¿Qué incluye?
        </h3>
        
        {/* Grid con las 3 características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 hover:bg-opacity-80 transition-all">
              
              {/* Título */}
              <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--accent-blue)' }}>
                {feature.title}
              </h4>
              
              {/* Descripción */}
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', minHeight: '4.5rem' }}>
                {feature.description}
              </p>

              {/* ÍCONO DE IMAGEN - AHORA DEBAJO DEL TEXTO Y GRANDE */}
              <div className="flex justify-center mt-6">
                  <img 
                      src={feature.imagePath} 
                      alt={feature.imageAlt} 
                      className="w-full h-full object-contain opacity-80" // W-FULL H-32 AHORA ES GRANDE
                  />
              </div>
              {/* FIN DE ÍCONO */}

            </div>
          ))}
        </div>
      </section>
      
      {/* SECCIÓN 2: Simulación de Chat de IA (Nueva sección) */}
      <section className="mb-20 px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
          Prueba el Asistente de IA
        </h3>
        
        {/* Componente de la simulación del chat */}
        <AIChatSimulation />
      </section>
      
    </div>
  );
}