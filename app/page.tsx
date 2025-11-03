import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Simplifiez la gestion de votre cabinet comptable</h2>
          {/* Add more sections here */}
        </div>
      </section>
    </div>
  );
}
