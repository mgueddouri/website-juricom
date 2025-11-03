import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-background-dark text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-text-main">
          Juricom : La solution SaaS pour les cabinets comptables
        </h1>
        <p className="text-xl text-text-secondary mt-4">
          Gérez vos missions, signez vos documents et suivez votre activité en temps réel.
        </p>
        <div className="mt-8 space-x-4">
          <Link href="/pricing" className="bg-primary text-white py-3 px-6 rounded hover:bg-secondary">
            S&apos;abonner
          </Link>
          <Link href="/features" className="bg-white text-primary border border-primary py-3 px-6 rounded hover:bg-gray-100">
            Voir les fonctionnalités
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
