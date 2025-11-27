"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Logo from '@/components/ui/Logo';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/foro', label: 'Foro' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/publicar-caso', label: 'Publicar caso' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#203b4b] px-4 sm:px-6 lg:px-10 py-3 relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 text-white hover:text-[#009dff] transition-colors z-20">
        <div className="text-[#009dff]">
          <Logo className="h-8 w-8 sm:h-9 sm:w-9" />
        </div>
        <h2 className="text-white text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">
          HACKED NOW
        </h2>
      </Link>

      {/* Navegación Desktop y botón */}
      <div className="hidden lg:flex flex-1 justify-end gap-8">
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
          href="/auth/login"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#009dff] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#0088dd] transition-colors"
        >
          <span className="truncate">Login / Registro</span>
        </Link>
      </div>

      {/* Botón Hamburguesa Mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden z-20 flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span 
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span 
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span 
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Menú Mobile Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-30"
          onClick={closeMenu}
        />
      )}

      {/* Menú Mobile */}
      <div 
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-[#172a36] border-l border-[#203b4b] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-2 pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`text-base font-medium leading-normal transition-colors hover:text-[#009dff] py-3 px-4 rounded-lg ${
                pathname === link.href 
                  ? 'text-[#009dff] bg-white/5' 
                  : 'text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          
          <Link
            href="/auth/login"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center rounded-lg h-12 px-4 bg-[#009dff] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#0088dd] transition-colors"
          >
            Login / Registro
          </Link>
        </nav>
      </div>
    </header>
  );
}