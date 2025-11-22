// components/layout/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex justify-center border-t border-[#203b4b]">
      <div className="flex max-w-[960px] flex-1 flex-col items-center gap-4 py-8">
        {/* Enlaces esenciales */}
        <div className="flex gap-6 text-sm">
          <Link 
            href="/terminos" 
            className="text-[#8db5ce] hover:text-[#009dff] transition-colors"
          >
            Términos de uso
          </Link>
          <Link 
            href="/privacidad" 
            className="text-[#8db5ce] hover:text-[#009dff] transition-colors"
          >
            Privacidad
          </Link>
          <Link 
            href="/contacto" 
            className="text-[#8db5ce] hover:text-[#009dff] transition-colors"
          >
            Contacto
          </Link>
          <Link 
            href="https://github.com/D1n0sXIX/Hacked-Now-S3" 
            className="text-[#8db5ce] hover:text-[#009dff] transition-colors"
          >
            Repositorio
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[#8db5ce] text-sm font-normal">
          © 2025 HACKED NOW. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
