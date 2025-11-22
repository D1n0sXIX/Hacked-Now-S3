"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/foro', label: 'Foro' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/publicar-caso', label: 'Publicar caso' },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#203b4b] px-10 py-3">
      {/* Logo personalizado */}
      <Link href="/" className="flex items-center gap-3 text-white hover:text-[#009dff] transition-colors">
        <div className="text-[#009dff]">
            <Logo className="h-9 w-9" />
        </div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
          HACKED NOW
        </h2>
      </Link>

      {/* Navegación y botón */}
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium leading-normal transition-colors hover:text-[#009dff] ${
                pathname === link.href ? 'text-[#009dff]' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <Link
          href="auth/login"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009dff] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0088dd] transition-colors"
        >
          <span className="truncate">Login / Registro</span>
        </Link>
      </div>
    </header>
  );
}
