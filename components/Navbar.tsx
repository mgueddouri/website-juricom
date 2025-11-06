'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';

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
    <Link href="/api/checkout">
      <Button label="S'abonner" />
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Juricom Logo" width={150} height={40} />
        </Link>
        <Menubar model={items} className="p-menubar" />
        {end}
      </div>
    </header>
  );
};

export default Navbar;
