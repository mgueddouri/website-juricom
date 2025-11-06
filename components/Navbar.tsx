'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import dynamic from 'next/dynamic';

const LoginButton = dynamic(() => import('./LoginButton'), { ssr: false });

const Navbar = () => {
  const items = [
    {
      label: 'Accueil',
      url: '/',
    },
    {
      label: 'Fonctionnalités',
      url: '/features',
    },
    {
      label: 'Tarifs',
      url: '/pricing',
    },
    {
      label: 'Contact',
      url: '/contact',
    },
  ];

  const end = (
    <div className="flex items-center gap-4">
      <Link href="/api/checkout">
        <Button label="S'abonner" />
      </Link>
      <LoginButton />
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Juricom Logo" width={150} height={40} />
        </Link>
        <div className="flex items-center gap-8">
          <Menubar model={items} className="p-menubar" />
          {end}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
