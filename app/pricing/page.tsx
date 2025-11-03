import PricingCard from '@/components/PricingCard';

export default function PricingPage() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold">Nos tarifs</h1>
      <p className="text-text-secondary mt-4">Choisissez le plan qui vous convient le mieux.</p>
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <PricingCard plan="Starter" price="49€" features={["Gestion des missions", "Signature électronique", "Support par email"]} />
        <PricingCard plan="Pro" price="99€" features={["Tout le plan Starter", "Tableau de bord avancé", "Support prioritaire"]} />
        <PricingCard plan="Cabinet+" price="Sur devis" features={["Tout le plan Pro", "Marque blanche", "API d'intégration"]} />
      </div>
    </div>
  );
}
