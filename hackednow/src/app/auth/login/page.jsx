"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Credenciales hardcodeadas
  const DEMO_USER = {
    email: 'demo@hackednow.com',
    password: 'demo123',
    nombre: 'Usuario Demo',
    avatar: 'https://ui-avatars.com/api/?name=Usuario+Demo&background=009dff&color=fff&bold=true'
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simular un pequeño delay (como si fuera una petición al backend)
    setTimeout(() => {
      if (email === DEMO_USER.email && password === DEMO_USER.password) {
        // Login exitoso
        const userData = {
          email: DEMO_USER.email,
          nombre: DEMO_USER.nombre,
          avatar: DEMO_USER.avatar
        };
        
        // Guardar en localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Redirigir al home
        router.push('/');
      } else {
        // Login fallido
        setError('Credenciales incorrectas. Usa las credenciales de demo.');
        setIsLoading(false);
      }
    }, 500);
  };

  const autoFillDemo = () => {
    setEmail(DEMO_USER.email);
    setPassword(DEMO_USER.password);
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card principal */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Iniciar sesión
            </h1>
            <p className="text-[#8db5ce] text-sm">
              Accede a tu cuenta de HACKED NOW
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8db5ce]/50 focus:outline-none focus:border-[#009dff] focus:ring-1 focus:ring-[#009dff] transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#8db5ce]/50 focus:outline-none focus:border-[#009dff] focus:ring-1 focus:ring-[#009dff] transition-colors"
                placeholder="••••••••"
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Botón submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#009dff] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#0088dd] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#172a36] text-[#8db5ce]">o</span>
            </div>
          </div>

          {/* Credenciales de Demo */}
          <div className="bg-[#009dff]/10 border border-[#009dff]/30 rounded-lg p-4 flex items-start gap-2 mb-3">
         
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#009dff] flex-shrink-0 mt-0.5">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-[#009dff] mb-1">
                  Usuario de demostración
                </p>
                <p className="text-xs text-[#8db5ce] space-y-1">
                  <span className="block"><strong>Email:</strong> demo@hackednow.com</span>
                  <span className="block"><strong>Password:</strong> demo123</span>
                </p>
              </div>
           
          </div>

          {/* Link al registro (deshabilitado) */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#8db5ce]">
              ¿No tienes cuenta?{' '}
              <span className="text-white/50 cursor-not-allowed" title="Registro no disponible en demo">
                Registrarse
              </span>
            </p>
          </div>
        </div>

        {/* Link volver */}
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