import PricingCard from '@/components/PricingCard';

export default function PricingPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-heading">Nos tarifs</h1>
        <p className="text-text-secondary mt-4">Choisissez le plan adapté à la croissance de votre cabinet.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <PricingCard plan="Starter" price="49€/mois" features={["Gestion des missions", "Signature électronique", "Support par email"]} />
        <PricingCard plan="Pro" price="99€/mois" features={["Tout le plan Starter", "Tableau de bord avancé", "Support prioritaire"]} />
        <PricingCard plan="Cabinet+" price="Sur devis" features={["Tout le plan Pro", "Marque blanche", "API d'intégration"]} />
      </div>
    </div>
  );
}
