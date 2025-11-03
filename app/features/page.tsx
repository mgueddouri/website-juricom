import FeatureCard from '@/components/FeatureCard';

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-heading">Fonctionnalités</h1>
        <p className="text-text-secondary mt-4">Découvrez en détail comment Juricom peut transformer votre cabinet.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard title="Gestion des missions" description="Suivez l'avancement de vos missions en temps réel." icon="pi-briefcase" />
        <FeatureCard title="Signature électronique" description="Signez vos documents en ligne de manière sécurisée." icon="pi-file-edit" />
        <FeatureCard title="Tableau de bord" description="Visualisez vos indicateurs clés en un coup d'œil." icon="pi-chart-bar" />
        <FeatureCard title="Facturation automatisée" description="Générez et envoyez vos factures automatiquement." icon="pi-dollar" />
        <FeatureCard title="Portail client" description="Offrez à vos clients un espace personnel sécurisé." icon="pi-users" />
        <FeatureCard title="Support prioritaire" description="Obtenez de l'aide rapidement grâce à notre support dédié." icon="pi-prime" />
      </div>
    </div>
  );
}
