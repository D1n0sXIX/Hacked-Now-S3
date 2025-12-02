"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
    aceptaTerminos: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro (no funcional por ahora)
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Crear cuenta
            </h1>
            <p className="text-[#8db5ce] text-sm">
              Únete a la comunidad de HACKED NOW
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nombre completo */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-white mb-2">
                Nombre completo
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8db5ce]/50 focus:outline-none focus:border-[#009dff] focus:ring-1 focus:ring-[#009dff] transition-colors"
                placeholder="Juan Pérez"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8db5ce]/50 focus:outline-none focus:border-[#009dff] focus:ring-1 focus:ring-[#009dff] transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            {/* Contraseña */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8db5ce]/50 focus:outline-none focus:border-[#009dff] focus:ring-1 focus:ring-[#009dff] transition-colors"
                placeholder="••••••••"
              />
              <p className="text-[#8db5ce]/70 text-xs mt-1">
                Mínimo 8 caracteres
              </p>
            </div>

            {/* Confirmar contraseña */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-2">
                Confirmar contraseña
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8db5ce]/50 focus:outline-none focus:border-[#009dff] focus:ring-1 focus:ring-[#009dff] transition-colors"
                placeholder="••••••••"
              />
            </div>

            {/* Términos y condiciones */}
            <div className="flex items-start gap-3">
              <input
                id="aceptaTerminos"
                name="aceptaTerminos"
                type="checkbox"
                checked={formData.aceptaTerminos}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-[#009dff] focus:ring-[#009dff] focus:ring-offset-0"
              />
              <label htmlFor="aceptaTerminos" className="text-sm text-[#8db5ce]">
                Acepto los{' '}
                <Link href="/terminos" className="text-white hover:text-[#009dff] transition-colors">
                  términos y condiciones
                </Link>
                {' '}y la{' '}
                <Link href="/privacidad" className="text-white hover:text-[#009dff] transition-colors">
                  política de privacidad
                </Link>
              </label>
            </div>

            {/* Botones */}
            <div className='flex flex-col gap-2 pt-2'>
              <button
                type="submit"
                className="w-full bg-[#009dff] text-black font-bold py-3 px-4 rounded-lg hover:bg-[#0088dd] transition-colors"
              >
                Crear cuenta
              </button>
              
            </div>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#172a36] text-[#8db5ce]">o</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#8db5ce]">  
              ¿Ya tienes cuenta?{' '}
              <Link 
                href="/auth/login" 
                className="text-white hover:text-[#009dff] transition-colors font-medium"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link 
            href="/" 
            className="text-sm text-[#8db5ce] hover:text-[#009dff] transition-colors inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}