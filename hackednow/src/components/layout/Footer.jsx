// components/layout/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex justify-center border-t border-[#203b4b]">
      <div className="flex max-w-[960px] flex-1 flex-col items-center gap-4 sm:gap-6 py-6 sm:py-8 px-4">
        {/* Enlaces esenciales */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
          <Link 
            href="/about-Us" 
            className="text-[#8db5ce] hover:text-[#009dff] transition-colors whitespace-nowrap"
          >
            About Us
          </Link>
          <Link 
            href="https://github.com/D1n0sXIX/Hacked-Now-S3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8db5ce] hover:text-[#009dff] transition-colors whitespace-nowrap"
          >
            Repositorio
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-[#8db5ce] text-xs sm:text-sm font-normal text-center">
          © 2025 HACKED NOW. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}