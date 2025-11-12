'use client';

import { Button } from 'primereact/button';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="bg-white text-[#1A1A1A]">
      {/* === HEADER === */}
      <section className="py-24 text-center bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Nos tarifs</h1>
          <p className="text-gray-600 text-lg mb-8">
            Choisissez le module qui correspond à votre cabinet et faites passer votre conformité au niveau supérieur.
          </p>
        </div>
      </section>

      {/* === TARIFS === */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {/* === MODULE LAB === */}
          <div className="rounded-2xl p-10 bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">LAB</h2>
              <p className="text-gray-600 mb-6">Lutte anti-blanchiment & conformité réglementaire</p>
              <p className="text-4xl font-bold text-[#4B3CFA] mb-2">
                99 € HT<span className="text-lg font-medium text-gray-500"> / mois</span>
              </p>
              <p className="text-gray-500 mb-8">Inclut 1 expert-comptable et jusqu’à 15 collaborateurs</p>

              <ul className="text-gray-700 space-y-3 mb-10">
                <li>✅ Questionnaires LAB-FCT automatisés</li>
                <li>✅ Scoring de risque et cartographie dynamique</li>
                <li>✅ Signature électronique des lettres de mission</li>
                <li>✅ Suivi des diligences LAB-FCT</li>
                <li>✅ Traçabilité complète et archivage sécurisé</li>
              </ul>
            </div>
            <Link href="/api/checkout">
              <Button
                label="Souscrire"
                className="w-full py-3 text-lg font-semibold rounded-full border-0 shadow-md transition-all"
                style={{
                  background: 'linear-gradient(90deg, #4B3CFA 0%, #6E56FF 100%)',
                  color: 'white',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = 'linear-gradient(90deg, #3A2CFF 0%, #5B40FF 100%)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = 'linear-gradient(90deg, #4B3CFA 0%, #6E56FF 100%)')
                }
              />
            </Link>
          </div>

          {/* === MODULE QUALITY === */}
          <div className="rounded-2xl p-10 bg-[#F9FAFB] shadow-sm border border-gray-100 hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Quality</h2>
              <p className="text-gray-600 mb-6">Pilotage qualité & suivi des missions</p>
              <p className="text-4xl font-bold text-[#6E56FF] mb-2">
                19 € HT<span className="text-lg font-medium text-gray-500"> / mois / utilisateur</span>
              </p>
              <p className="text-gray-500 mb-8">Disponible pour les cabinets disposant du module LAB</p>

              <ul className="text-gray-700 space-y-3 mb-10">
                <li>✅ Suivi des échéances et intervenants</li>
                <li>✅ Tableaux de bord qualité</li>
                <li>✅ Workflows et actions correctives</li>
                <li>✅ Reporting consolidé multi-cabinet</li>
                <li>✅ Collaboration et alertes automatisées</li>
              </ul>
            </div>
            <Link href="/pricing#contact">
              <Button
                label="Ajouter Quality"
                className="w-full py-3 text-lg font-semibold rounded-full border-0 shadow-md transition-all"
                style={{
                  background: 'linear-gradient(90deg, #6E56FF 0%, #4B3CFA 100%)',
                  color: 'white',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = 'linear-gradient(90deg, #5A45FF 0%, #3E30FF 100%)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = 'linear-gradient(90deg, #6E56FF 0%, #4B3CFA 100%)')
                }
              />
            </Link>
          </div>

          {/* === MODULE PROX’EXPERT === */}
          <div className="rounded-2xl p-10 bg-white shadow-sm border border-gray-100 flex flex-col justify-between opacity-70">
            <div>
              <h2 className="text-2xl font-bold mb-2">Prox’Expert</h2>
              <p className="text-gray-600 mb-6">Outil de prospection intelligente</p>
              <p className="text-4xl font-bold text-gray-500 mb-2">Bientôt</p>
              <p className="text-gray-500 mb-8">Disponible prochainement</p>

              <ul className="text-gray-600 space-y-3 mb-10">
                <li>✅ Scoring intelligent des prospects</li>
                <li>✅ Suivi des interactions et relances</li>
                <li>✅ Intégration CRM & emailing</li>
                <li>✅ Analyses et reporting commercial</li>
              </ul>
            </div>
            <Button
              label="Prochainement"
              disabled
              className="w-full py-3 text-lg font-semibold rounded-full border-0"
              style={{
                background: '#E5E7EB',
                color: '#555',
              }}
            />
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="py-20 bg-gradient-to-r from-[#4B3CFA] to-[#6E56FF] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à digitaliser la conformité de votre cabinet ?</h2>
        <p className="text-lg mb-10 opacity-90">
          Passez à Juricom et profitez d’une solution tout-en-un pour la conformité, la qualité et la performance.
        </p>
        <Link href="/api/checkout">
          <Button
            label="Souscrire à Juricom"
            className="px-8 py-3 text-lg font-semibold rounded-full border-0 shadow-xl"
            style={{
              background: 'white',
              color: '#4B3CFA',
            }}
          />
        </Link>
      </section>
    </main>
  );
}
