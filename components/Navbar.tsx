import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-background-light shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Juricom Logo" width={150} height={40} />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-text-main hover:text-primary">Accueil</Link>
          <Link href="/features" className="text-text-main hover:text-primary">Fonctionnalités</Link>
          <Link href="/pricing" className="text-text-main hover:text-primary">Tarifs</Link>
        </div>
        <div>
          <Link href="/account" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary">
            Mon Compte
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
