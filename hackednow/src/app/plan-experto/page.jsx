'use client'; // Necesario para usar Hooks de estado (useState)

import React, { useState, useRef } from 'react';

export default function ExpertPlanPage() {
  // Estado para manejar el archivo, el estado de la aplicación y el proceso de envío
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('Máximo 5MB. Solo se aceptan archivos PDF.');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const formRef = useRef(null); 

  // Simulación de la subida de archivos (sin servidor)
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(null); // Limpiar archivo anterior
    setUploadStatus('Máximo 5MB. Solo se aceptan archivos PDF.'); // Resetear estado

    if (selectedFile) {
      if (selectedFile.type === 'application/pdf') {
        if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
            setUploadStatus('⚠️ El archivo es demasiado grande (máximo 5MB).');
            e.target.value = null; // Reset input field
            return;
        }
        setFile(selectedFile);
        setUploadStatus(`Archivo seleccionado: ${selectedFile.name}`);
      } else {
        setUploadStatus('❌ Por favor, selecciona solo archivos PDF.');
        e.target.value = null; // Reset input field
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    if (!file) {
      setUploadStatus('⚠️ Por favor, sube tu certificado.');
      return;
    }
    
    setIsSubmitting(true);
    setUploadStatus('Enviando solicitud y certificados...');

    // Simulación de una llamada API para enviar datos y archivos (3 segundos)
    setTimeout(() => {
      setIsSubmitting(false);
      setUploadStatus('✅ Solicitud enviada con éxito. Revisaremos tus credenciales pronto.');
      
      // Mostrar modal de confirmación
      setShowModal(true); 

      // Opcional: Limpiar el formulario después del éxito
      if (formRef.current) {
        formRef.current.reset();
        setFile(null);
      }

    }, 3000); 
  };

  return (
    <div className="container mx-auto py-20 px-4">
      
      {/* Modal de Confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="card p-8 w-full max-w-sm text-center" style={{ borderColor: 'var(--accent-blue)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent-blue)' }}>¡Solicitud Recibida!</h3>
            <p className="mb-6" style={{ color: 'var(--text-primary)' }}>
              Revisaremos tu documentación. Recibirás una respuesta en 72 horas.
            </p>
            <button 
              onClick={() => setShowModal(false)} 
              className="btn-primary py-2 px-6"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Encabezado Principal */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
          Únete a la Red de Expertos de HACKED NOW
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Conviertete en un Experto Certificado, ayuda a nuestra comunidad en el foro y genera ingresos por cada solución validada.
        </p>
      </header>

      {/* Sección de Beneficios (Grid) */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          
          <div className="card p-6">
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--accent-blue)' }}>
              Comisiones por Solución
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Obtén una comisión por cada caso resuelto o validado en nuestra sección de foro exclusivo para expertos.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--accent-blue)' }}>
              Reconocimiento Certificado
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Destaca como una voz autorizada en ciberseguridad y aumenta tu prestigio profesional dentro de la plataforma.
            </p>
          </div>
          
          <div className="card p-6">
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--accent-blue)' }}>
              Acceso a Casos Exclusivos
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Accede a los casos más complejos y a las últimas vulnerabilidades reportadas por la comunidad antes que nadie.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Formulario de Aplicación y Certificación */}
      <section className="max-w-4xl mx-auto">
        <div className="card p-8 md:p-10" style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}>
          
          <h2 className="text-3xl font-semibold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
            Formulario de Aplicación
          </h2>

          <form onSubmit={handleSubmit} ref={formRef}>
            {/* Datos Básicos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Nombre Completo</label>
                <input type="text" id="fullName" name="fullName" className="w-full p-3 rounded-md border" required style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-primary)', color: 'var(--text-primary)' }} placeholder="Tu Nombre y Apellido" />
              </div>
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Perfil de LinkedIn (o profesional)</label>
                <input type="url" id="linkedin" name="linkedin" className="w-full p-3 rounded-md border" required style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-primary)', color: 'var(--text-primary)' }} placeholder="https://linkedin.com/in/..." />
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="expertise" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>Área de Especialidad</label>
              <select id="expertise" name="expertise" className="w-full p-3 rounded-md border" required style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-primary)', color: 'var(--text-primary)' }}>
                <option value="">Selecciona tu área principal</option>
                <option value="web">Seguridad Web/OWASP</option>
                <option value="mobile">Seguridad Móvil</option>
                <option value="pentesting">Pentesting de Redes</option>
                <option value="forensics">Análisis Forense</option>
                <option value="cloud">Seguridad en la Nube</option>
              </select>
            </div>

            {/* Sistema de Subida de Certificados */}
            <h3 className="text-xl font-semibold mb-4 border-t pt-4" style={{ color: 'var(--text-primary)', borderColor: 'var(--border-primary)' }}>
              2. Certificación (Documento PDF)
            </h3>

            <div className="flex items-center space-x-4 mb-6">
              <label className={`btn-secondary py-3 px-6 cursor-pointer ${isSubmitting ? 'opacity-50' : ''}`} style={{ transition: 'background-color 0.2s ease' }}>
                {file ? "Cambiar Archivo" : "Subir Certificado (.pdf)"}
                <input
                  type="file"
                  accept="application/pdf"
                  name="certificate"
                  onChange={handleFileChange}
                  className="hidden"
                  disabled={isSubmitting}
                />
              </label>
              {/* Retroalimentación dinámica del estado de subida */}
              <div 
                className={`text-sm ${uploadStatus.startsWith('✅') ? 'text-green-400' : uploadStatus.startsWith('⚠️') || uploadStatus.startsWith('❌') ? 'text-red-400' : ''}`} 
                style={{ color: uploadStatus.startsWith('✅') ? '#4CAF50' : uploadStatus.startsWith('⚠️') || uploadStatus.startsWith('❌') ? '#F44336' : 'var(--text-secondary)' }}
              >
                {uploadStatus}
              </div>
            </div>

            {/* Botón de Envío */}
            <button 
              type="submit" 
              className={`btn-primary w-full py-4 text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando Solicitud...' : 'Enviar Solicitud y Credenciales'}
            </button>
          </form>
        </div>
      </section>
      
    </div>
  );
}