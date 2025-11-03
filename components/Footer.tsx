const Footer = () => {
  return (
    <footer className="bg-background-dark text-text-secondary py-8 mt-16">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Juricom. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-primary">Politique de confidentialité</a>
          <a href="#" className="hover:text-primary">Conditions d&apos;utilisation</a>
          <a href="/contact" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
