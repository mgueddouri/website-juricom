import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-heading">Contactez-nous</h1>
        <p className="text-text-secondary mt-4">Une question ? Une demande de démo ? N&apos;hésitez pas.</p>
      </div>
      <div className="max-w-xl mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
