'use client';

import { Button } from 'primereact/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="py-28 text-center bg-gradient-to-b from-white to-[#F9FAFB] relative overflow-hidden">
      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/juricom-office.mp4" type="video/mp4" />
      </video>

      {/* Overlay pour contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-[#F9FAFB]/90"></div>

      {/* Contenu */}
      <div className="relative max-w-4xl mx-auto px-6">
        <p className="uppercase text-[#4B3CFA] font-semibold tracking-wide mb-3 text-sm md:text-base">
          L’intelligence du contrôle qualité
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          L’expert du contrôle qualité<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B3CFA] to-[#6E56FF]">
            pour les experts-comptables
          </span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Le logiciel intelligent développé par des experts-comptables pour les experts-comptables.
          Automatisez la conformité, la gestion qualité et la prospection — sans formation requise.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link
            href="https://calendly.com/leneliaexpert/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              label="Réserver une démo"
              className="px-8 py-3 text-lg font-semibold rounded-full border-0 shadow-xl"
              style={{
                background: 'linear-gradient(90deg, #4B3CFA 0%, #6E56FF 100%)',
                color: 'white',
              }}
            />
          </Link>

          <Link href="/demo">
            <button className="flex items-center justify-center gap-2 px-8 py-3 text-[#4B3CFA] bg-white border border-[#E5E7EB] rounded-full font-semibold text-lg hover:bg-[#F3F4F6] transition-all">
              <i className="pi pi-play-circle text-xl"></i>
              Voir une démo en vidéo
            </button>
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-10">
          Même les cabinets qui doivent se mettre rapidement en conformité peuvent s’appuyer sur Juricom pour rattraper leur retard.
          <br />
          Interface ergonomique, prise en main immédiate, aucun coût de formation.
        </p>
      </div>
    </section>

  );
};

export default HeroSection;
