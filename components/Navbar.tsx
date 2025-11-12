'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import dynamic from 'next/dynamic';

const LoginButton = dynamic(() => import('./LoginButton'), { ssr: false });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Fonctionnalités', href: '/features' },
    { label: 'Tarifs', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ];

  const end = (
    <div className="flex items-center gap-4">
      <Link href="/api/checkout">
        <Button label="S'abonner" />
      </Link>
      
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-white/90 shadow-md'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Juricom"
            width={150}
            height={40}
            className="hover:opacity-90 transition-opacity"
          />
        </Link>

        {/* Navigation simple */}
        <nav className="hidden md:flex gap-8 text-[#1A1A1A] font-medium text-base">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="hover:text-[#4B3CFA] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/api/checkout">
          <Button
            label="S’abonner"
            className="px-5 py-2 text-white font-medium rounded-full shadow-md border-0"
            style={{
              background: 'linear-gradient(90deg, #4B3CFA 0%, #6E56FF 100%)',
            }}
          />
        </Link>
        <LoginButton />
      </div>
    </header>
  );
};

export default Navbar;
