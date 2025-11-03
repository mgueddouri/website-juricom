'use client';

import { Button } from 'primereact/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="text-center py-20 bg-background-light">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-heading font-bold text-text-main"
        >
          Juricom : La solution SaaS pour les cabinets comptables
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-text-secondary mt-4 max-w-2xl mx-auto"
        >
          Gérez vos missions, signez vos documents et suivez votre activité en temps réel.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Link href="/api/checkout">
            <Button label="Commencer l'essai gratuit" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
