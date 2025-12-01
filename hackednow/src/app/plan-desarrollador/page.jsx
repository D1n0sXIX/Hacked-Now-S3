import React from 'react';

// Datos del plan premium
const premiumDetails = {
  price: "5€",
  period: "al mes",
  title: "Plan Premium", // Título ajustado para coincidir con la imagen
  subtitle: "Acceso a soporte experto y herramientas impulsadas por IA para una ciberseguridad sin precedentes.",
  features: [
    {
      title: "Respuestas de Expertos",
      description: "Obtén soluciones y respuestas directas a tus problemas de ciberseguridad de la mano de profesionales verificados en el sector."
    },
    {
      title: "Asistente de IA Exclusivo",
      description: "Tendrás un asistente de inteligencia artificial exclusivo, entrenado para ayudarte en tiempo real con tus dudas de seguridad."
    },
    {
      // NUEVA CARACTERÍSTICA agregada según la imagen
      title: "Herramientas Avanzadas",
      description: "Hacked Now ofrece con su plan premium una serie de herramientas punteras que te serán de gran ayuda en tus auditorías y análisis de seguridad."
    },
  ]
};

export default function PremiumPlanPage() {
  const { price, period, title, subtitle, features } = premiumDetails;
  
  // URL actualizada para ir al formulario de pago
  const checkoutUrl = "/plan-desarrollador/checkout";
  
  // Ruta de la imagen logo-premium.png en la carpeta public/images
  const IMAGE_PATH = "/images/logo-premium.png"; 

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
      
      {/* Sección de Precios: Transormada en una cuadrícula para añadir más planes */}
      <section className="flex justify-center mb-20 px-4">
        
        {/* NUEVA ESTRUCTURA: Grid o Flex para la comparación de planes */}
        {/* Se usa md:grid-cols-3 para dejar espacio para 2 columnas más */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"> 
          
          {/* Columna 1: Placeholder para Plan Básico (para mantener el centrado visual) */}
          <div className="hidden md:block">
            {/* Aquí iría el código de la tarjeta del Plan Básico */}
            <div className="card text-center p-10 h-full opacity-0"></div>
          </div>
          
          {/* Columna Central: Tarjeta del Plan PREMIUM */}
          <div className="w-full">
            {/* Tarjeta de precio con el estilo 'card' */}
            <div className="card text-center p-10 h-full border-2" 
                 style={{ borderColor: 'var(--accent-blue)', 
                          transform: 'scale(1.05)', // Destaca la tarjeta premium
                          zIndex: 10 }}> 
              
              {/* Contenedor del Título y Logo */}
              <div className="flex flex-col items-center justify-center mb-4">
                  
                  {/* Título - AHORA VA PRIMERO */}
                  <h2 className="text-2xl font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--accent-blue)' }}>
                    PLAN PREMIUM
                  </h2>
                  
                  {/* LOGO DEBAJO DEL TÍTULO */}
                  <img 
                    src={IMAGE_PATH} 
                    alt="Logo Premium" 
                    className="w-20 h-20 object-contain" // Tamaño de ícono
                  />
                  
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
                Empezar Ahora
              </a>
            </div>
          </div>
          
          {/* Columna 3: Placeholder para Plan Desarrollador (para mantener el centrado visual) */}
          <div className="hidden md:block">
            {/* Aquí iría el código de la tarjeta del Plan Desarrollador */}
            <div className="card text-center p-10 h-full opacity-0"></div>
          </div>
          
        </div>
      </section>

      {/* Grid de Características */}
      <section className="mb-20 px-4">
        <h3 className="text-3xl font-bold text-center mb-10" style={{ color: 'var(--text-primary)' }}>
          ¿Qué incluye?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 hover:bg-opacity-80 transition-all">
              <h4 className="text-xl font-bold mb-4" style={{ color: 'var(--accent-blue)' }}>
                {feature.title}
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}