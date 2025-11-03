import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-background-light py-8 mt-16 border-t border-gray-200">
      <div className="container mx-auto px-6 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} Juricom. Tous droits réservés.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/privacy" className="hover:text-primary">Politique de confidentialité</Link>
          <Link href="/terms" className="hover:text-primary">Conditions d&apos;utilisation</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
