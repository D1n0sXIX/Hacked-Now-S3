import React from 'react';

// Componente de entrada reutilizable
const InputField = ({ label, id, type = 'text', placeholder, pattern }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full p-3 rounded-md border"
      style={{
        backgroundColor: 'var(--bg-tertiary)',
        borderColor: 'var(--border-primary)',
        color: 'var(--text-primary)',
      }}
      required
      pattern={pattern}
    />
  </div>
);

export default function CheckoutPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para procesar el pago aquí (simulación)
    console.log("Procesando pago...");
    // Usaremos una alerta temporal, en producción deberías usar un modal o mensaje en pantalla
    alert("¡Pago simulado exitoso! Redirigiendo..."); 
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold mb-2" style={{ color: 'var(--accent-blue)' }}>
            Formulario de Pago Premium
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Completa tus datos para activar la suscripción de 5€/mes.
          </p>
        </header>

        <div className="card p-8 md:p-12 shadow-2xl" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
              1. Datos Personales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Nombre" id="firstName" placeholder="Tu Nombre" />
              <InputField label="Apellido" id="lastName" placeholder="Tu Apellido" />
              <InputField label="DNI / NIE" id="dni" placeholder="Ej: 12345678A" />
              <InputField label="Teléfono" id="phone" type="tel" placeholder="Ej: 600 00 00 00" />
            </div>
            <InputField label="Correo Electrónico" id="email" type="email" placeholder="tu.correo@ejemplo.com" />

            <h2 className="text-2xl font-semibold mt-8 mb-6 pt-4 border-t" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-primary)' }}>
              2. Datos de Tarjeta Bancaria
            </h2>
            <InputField
              label="Número de Tarjeta"
              id="cardNumber"
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              pattern="\d{4}\s?\d{4}\s?\d{4}\s?\d{4}" // Acepta espacios o no
            />
            
            <div className="grid grid-cols-3 gap-4">
              <InputField label="Fecha Exp." id="expiry" type="text" placeholder="MM/AA" pattern="(0[1-9]|1[0-2])\/\d{2}" />
              <InputField label="CVV" id="cvv" type="text" placeholder="XXX" pattern="\d{3,4}" />
            </div>

            <p className="mt-8 text-sm" style={{ color: 'var(--text-secondary)' }}>
              Al hacer clic en 'Suscribirse', aceptas el pago recurrente de 5€/mes y nuestros términos y condiciones.
            </p>

            <button type="submit" className="btn-primary w-full py-3 mt-6 text-lg">
              Suscribirse y Pagar 5€
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}