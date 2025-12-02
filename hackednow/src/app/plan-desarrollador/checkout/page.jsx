import React from 'react';

export default function CheckoutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      
      <div className="max-w-3xl mx-auto">
        {/* Título de la página */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Finalizar Suscripción Premium
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Completa tus datos para activar tu plan premium por 5€/mes.
          </p>
        </header>

        {/* Contenedor del Formulario (Estilo Card) */}
        <div className="card p-8 md:p-10">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Nombre */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Nombre
                </label>
                <input 
                  type="text" 
                  placeholder="Tu nombre"
                  className="p-3 rounded-lg border bg-opacity-20 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)', 
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)',
                    '--tw-ring-color': 'var(--accent-blue)'
                  }}
                  required
                />
              </div>

              {/* Apellido */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Apellido
                </label>
                <input 
                  type="text" 
                  placeholder="Tu apellido"
                  className="p-3 rounded-lg border bg-opacity-20 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)', 
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)',
                    '--tw-ring-color': 'var(--accent-blue)'
                  }}
                  required
                />
              </div>

              {/* DNI */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                  DNI / NIF
                </label>
                <input 
                  type="text" 
                  placeholder="12345678X"
                  className="p-3 rounded-lg border bg-opacity-20 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)', 
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)',
                    '--tw-ring-color': 'var(--accent-blue)'
                  }}
                  required
                />
              </div>

              {/* Número de teléfono */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Número de teléfono
                </label>
                <input 
                  type="tel" 
                  placeholder="+34 600 000 000"
                  className="p-3 rounded-lg border bg-opacity-20 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)', 
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)',
                    '--tw-ring-color': 'var(--accent-blue)'
                  }}
                  required
                />
              </div>
            </div>

            {/* Correo Electrónico (Ancho completo) */}
            <div className="flex flex-col mb-8">
              <label className="mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                Correo electrónico
              </label>
              <input 
                type="email" 
                placeholder="ejemplo@correo.com"
                className="p-3 rounded-lg border bg-opacity-20 focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: 'var(--bg-primary)', 
                  borderColor: 'var(--border-primary)',
                  color: 'var(--text-primary)',
                  '--tw-ring-color': 'var(--accent-blue)'
                }}
                required
              />
            </div>

            {/* Sección de Pago */}
            <div className="mb-8 pt-6 border-t" style={{ borderColor: 'var(--border-primary)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Datos de Pago
              </h3>
              
              <div className="flex flex-col">
                <label className="mb-2 font-medium" style={{ color: 'var(--text-secondary)' }}>
                  Número de Tarjeta
                </label>
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000"
                  className="p-3 rounded-lg border bg-opacity-20 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--bg-primary)', 
                    borderColor: 'var(--border-primary)',
                    color: 'var(--text-primary)',
                    '--tw-ring-color': 'var(--accent-blue)'
                  }}
                  required
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <input 
                      type="text" 
                      placeholder="MM/AA"
                      className="p-3 rounded-lg border bg-opacity-20 focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--bg-primary)', 
                        borderColor: 'var(--border-primary)',
                        color: 'var(--text-primary)',
                        '--tw-ring-color': 'var(--accent-blue)'
                      }}
                      required
                    />
                     <input 
                      type="text" 
                      placeholder="CVC"
                      className="p-3 rounded-lg border bg-opacity-20 focus:outline-none focus:ring-2"
                      style={{ 
                        backgroundColor: 'var(--bg-primary)', 
                        borderColor: 'var(--border-primary)',
                        color: 'var(--text-primary)',
                        '--tw-ring-color': 'var(--accent-blue)'
                      }}
                      required
                    />
                </div>
              </div>
            </div>

            {/* Botón de Confirmación */}
            <button type="submit" className="btn-primary w-full py-4 text-lg font-bold shadow-lg hover:brightness-110 transition-all">
              Pagar 5€ y Activar Premium
            </button>
            
            <p className="text-center text-sm mt-4" style={{ color: 'var(--text-secondary)' }}>
              Pagos seguros cifrados con SSL.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}