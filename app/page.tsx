'use client';

import Link from 'next/link';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

export default function Home() {
  return (
    <main className="bg-white text-[#1A1A1A]">
      {/* === HERO === */}
      <section className="py-28 text-center bg-gradient-to-b from-white to-[#F9FAFB] relative overflow-hidden">
        {/* Vidéo de fond */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100"
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
              des experts-comptables
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


      {/* === MODULES === */}
      <section className="py-24">
        <div className="text-center mb-16">
          <p className="text-sm uppercase text-[#4B3CFA] font-semibold tracking-wide">Modules</p>
          <h2 className="text-4xl font-bold mb-4">Une solution complète pour votre cabinet comptable</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Juricom se compose de trois modules indépendants mais parfaitement intégrés.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              icon: 'pi pi-search',
              title: 'Prospection',
              color: 'bg-[#4B3CFA]',
              text: 'Automatisez votre prospection et convertissez plus de leads en clients grâce à une segmentation avancée et un suivi intelligent.',
            },
            {
              icon: 'pi pi-folder',
              title: 'Dossier client',
              color: 'bg-[#6E56FF]',
              text: 'Centralisez les informations clients et documents dans un espace sécurisé et accessible en quelques clics.',
            },
            {
              icon: 'pi pi-chart-line',
              title: 'Suivi des dossiers',
              color: 'bg-[#4B3CFA]',
              text: 'Suivez l’avancement de vos missions, anticipez les échéances et optimisez la performance de votre équipe.',
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-[#F9FAFB] rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-100 text-left"
            >
              <div className={`${f.color} inline-flex items-center justify-center w-10 h-10 rounded-lg mb-5`}>
                <i className={`${f.icon} text-white text-lg`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{f.text}</p>
              <Link href="/features" className="text-[#4B3CFA] font-medium hover:underline">
                En savoir plus →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* === AVANTAGES === */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="text-center mb-16">
          <p className="text-sm uppercase text-[#4B3CFA] font-semibold tracking-wide">Avantages</p>
          <h2 className="text-4xl font-bold mb-4">Pourquoi choisir Juricom ?</h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          {[
            {
              icon: 'pi pi-clock',
              color: 'bg-[#4B3CFA]',
              title: 'Gagnez 40% de temps',
              text: 'Réduisez le temps passé sur la gestion des dossiers grâce à nos processus automatisés.',
            },
            {
              icon: 'pi pi-shield',
              color: 'bg-[#6E56FF]',
              title: 'Conforme RGPD / AML',
              text: 'Une solution sécurisée et conforme aux dernières réglementations pour protéger vos données et celles de vos clients.',
            },
            {
              icon: 'pi pi-bolt',
              color: 'bg-[#4B3CFA]',
              title: 'Intégration facile',
              text: 'Compatible avec vos outils existants : INQOM, SILAE, etc. Déploiement rapide et formation incluse.',
            },
            {
              icon: 'pi pi-chart-bar',
              color: 'bg-[#6E56FF]',
              title: 'Pilotage amélioré',
              text: 'Des tableaux de bord personnalisables pour suivre votre activité et prendre des décisions éclairées.',
            },
          ].map((adv, i) => (
            <div key={i} className="flex items-start gap-5">
              <div className={`${adv.color} flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0`}>
                <i className={`${adv.icon} text-white text-lg`}></i>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{adv.title}</h3>
                <p className="text-gray-600">{adv.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === TÉMOIGNAGES === */}
      <section className="py-24 bg-white">
        <div className="text-center mb-16">
          <p className="text-sm uppercase text-[#4B3CFA] font-semibold tracking-wide">Témoignages</p>
          <h2 className="text-4xl font-bold">Ils nous font confiance</h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              name: 'Pierre D.',
              title: 'Expert-comptable, Paris',
              text: '“Juricom a révolutionné notre façon de gérer les dossiers clients. Nous avons réduit de 30% le temps passé sur l’administratif.”',
            },
            {
              name: 'Sophie L.',
              title: 'Gérante de cabinet, Lyon',
              text: '“La fonction de prospection nous a permis d’augmenter notre taux de conversion de 15%. Un outil indispensable aujourd’hui.”',
            },
            {
              name: 'Thomas M.',
              title: 'Associé, Marseille',
              text: '“La conformité RGPD était un casse-tête. Avec Juricom, nous avons enfin une solution fiable et simple à utiliser.”',
            },
          ].map((t, i) => (
            <div key={i} className="bg-[#F9FAFB] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4B3CFA]/10 text-[#4B3CFA] w-10 h-10 rounded-full flex items-center justify-center">
                  <i className="pi pi-user text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* === CTA FINAL === */}
      <section className="py-20 bg-gradient-to-r from-[#4B3CFA] to-[#6E56FF] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à transformer votre cabinet ?</h2>
        <p className="text-lg mb-10 opacity-90">
          Découvrez comment Juricom peut vous aider à automatiser vos processus et à passer à la conformité sans effort.
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
                background: 'white',
                color: '#4B3CFA',
              }}
            />
          </Link>

          <Link href="/demo">
            <button className="flex items-center justify-center gap-2 px-8 py-3 text-white bg-transparent border border-white/60 rounded-full font-semibold text-lg hover:bg-white hover:text-[#4B3CFA] transition-all">
              <i className="pi pi-play-circle text-xl"></i>
              Voir une démo en vidéo
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
