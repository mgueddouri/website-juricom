import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 font-heading">Une plateforme tout-en-un pour votre cabinet</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard title="Gestion des missions" description="Suivez l'avancement de vos missions en temps réel." icon="pi-briefcase" />
            <FeatureCard title="Signature électronique" description="Signez vos documents en ligne de manière sécurisée." icon="pi-file-edit" />
            <FeatureCard title="Tableau de bord" description="Visualisez vos indicateurs clés en un coup d'œil." icon="pi-chart-bar" />
          </div>
        </div>
      </section>
    </div>
  );
}
