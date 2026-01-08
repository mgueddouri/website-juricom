'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LoginButton = dynamic(() => import('./LoginButton'), { ssr: false });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Vérifie si l’utilisateur est connecté
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/auth/me');
        setIsLoggedIn(res.ok);
      } catch (err) {
        console.error('Erreur de vérification utilisateur :', err);
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  // Gestion du clic sur le bouton "S’abonner"
  const handleSubscribeClick = () => {
    if (isLoggedIn) {
      window.location.href = '/pricing'; // vers les formules
    } else {
      window.location.href = '/api/auth/signup'; // ✅ redirige vers Cognito Signup
    }
  };


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

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-[#1A1A1A] font-medium text-base">
          <Link href="/">Accueil</Link>
          <Link href="/features">Fonctionnalités</Link>
          <Link href="/pricing">Tarifs</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA dynamique */}
        <div className="flex items-center gap-4">
          <Button
            label="S’abonner"
            onClick={handleSubscribeClick}
            className="px-5 py-2 text-white font-medium rounded-full shadow-md border-0"
            style={{
              background: 'linear-gradient(90deg, #4B3CFA 0%, #6E56FF 100%)',
            }}
          />
          <LoginButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
