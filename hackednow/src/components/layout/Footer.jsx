"use client"
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/foro', label: 'Foro' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/publicar-caso', label: 'Publicar caso' },
    { href: '/login', label: 'Login / Registro' },
  ];

  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <div className="flex flex-col gap-6 px-5 py-10 text-center">
          {/* Links del footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-row sm:justify-around">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#8db5ce] text-base font-normal leading-normal min-w-40 hover:text-[#009dff] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[#8db5ce] text-base font-normal leading-normal">
            © 2024 HACKED NOW. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
