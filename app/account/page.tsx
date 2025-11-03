export default function AccountPage() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold">Mon Compte</h1>
      <p className="text-text-secondary mt-4">Gérez votre abonnement et vos informations de facturation.</p>
      {/* Stripe Customer Portal will be embedded here */}
    </div>
  );
}
