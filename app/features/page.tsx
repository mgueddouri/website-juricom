'use client';

import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* === HEADER === */}
      <section className="text-center py-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Fonctionnalités</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment chaque module de Juricom transforme la gestion de votre cabinet en une expérience fluide,
            conforme et performante.
          </p>
        </div>
      </section>

      {/* === MODULE LAB === */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase text-[#4B3CFA] font-semibold tracking-wide mb-3">Module LAB</p>
            <h2 className="text-3xl font-bold mb-6">Lutte anti-blanchiment et conformité réglementaire</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Le module LAB centralise et automatise toutes vos obligations de conformité LAB-FCT et NPMQ. 
              De l’identification du client à la signature électronique de la lettre de mission, 
              Juricom vous fait gagner un temps considérable tout en garantissant une conformité sans faille.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✅ Questionnaires LAB-FCT préremplis automatiquement</li>
              <li>✅ Calcul automatique du scoring de risque et niveau de vigilance</li>
              <li>✅ Cartographie dynamique des risques clients et missions</li>
              <li>✅ Génération et signature électronique des lettres de mission</li>
              <li>✅ Suivi des diligences et maintien de la relation d’affaires</li>
            </ul>

            <p className="font-semibold text-[#4B3CFA] mb-4">À partir de 99€ HT / mois par cabinet (jusqu’à 15 collaborateurs)</p>
            <Link href="/pricing">
              <Button
                label="Essayer le module LAB"
                className="px-5 py-2 font-semibold rounded-full border-0 shadow-md"
                style={{
                  color: 'white',
                  background: 'linear-gradient(90deg, #4B3CFA 0%, #6E56FF 100%)',
                }}
              />
            </Link>
          </div>

          <div className="bg-[#F9FAFB] rounded-2xl p-10 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Fonctionnalités clés</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: 'pi pi-lock', title: 'Sécurité RGPD' },
                { icon: 'pi pi-user-edit', title: 'Scoring automatique' },
                { icon: 'pi pi-chart-line', title: 'Cartographie dynamique' },
                { icon: 'pi pi-file-edit', title: 'Signature électronique' },
                { icon: 'pi pi-calendar', title: 'Alertes et rappels' },
                { icon: 'pi pi-server', title: 'Archivage sécurisé' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[#4B3CFA]/10 text-[#4B3CFA] w-10 h-10 flex items-center justify-center rounded-lg">
                    <i className={`${f.icon}`}></i>
                  </div>
                  <p className="text-gray-700">{f.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* === MODULE QUALITY === */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-white rounded-2xl p-10 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Fonctionnalités clés</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: 'pi pi-tasks', title: 'Suivi des missions' },
                { icon: 'pi pi-calendar', title: 'Échéances automatiques' },
                { icon: 'pi pi-users', title: 'Suivi des intervenants' },
                { icon: 'pi pi-chart-bar', title: 'Tableaux de bord qualité' },
                { icon: 'pi pi-check-circle', title: 'Workflows internes' },
                { icon: 'pi pi-file', title: 'Reporting consolidé' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[#6E56FF]/10 text-[#6E56FF] w-10 h-10 flex items-center justify-center rounded-lg">
                    <i className={`${f.icon}`}></i>
                  </div>
                  <p className="text-gray-700">{f.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm uppercase text-[#6E56FF] font-semibold tracking-wide mb-3">Module Quality</p>
            <h2 className="text-3xl font-bold mb-6">Pilotage qualité et performance du cabinet</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Le module Quality permet de suivre les missions, les échéances et les intervenants en temps réel.
              Vous disposez d’une vision complète du planning et de la performance du cabinet, avec des tableaux de bord dynamiques.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✅ Planification et suivi automatisé des tâches</li>
              <li>✅ Workflows qualité configurables selon vos processus</li>
              <li>✅ Tableaux de bord de performance et indicateurs clés</li>
              <li>✅ Gestion des actions correctives et historiques</li>
              <li>✅ Collaboration fluide entre intervenants</li>
            </ul>

            <p className="font-semibold text-[#6E56FF] mb-4">19€ HT / mois / utilisateur</p>
            <Link href="/pricing">
              <Button
                label="Découvrir le module Quality"
                className="px-5 py-2 font-semibold rounded-full border-0 shadow-md"
                style={{
                  background: 'linear-gradient(90deg, #6E56FF 0%, #4B3CFA 100%)',
                  color: 'white',
                }}
              />
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      {/* === MODULE PROX’EXPERT === */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase text-[#4B3CFA] font-semibold tracking-wide mb-3">Module Prox’Expert</p>
            <h2 className="text-3xl font-bold mb-6">Outil de prospection intelligent</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Le module Prox’Expert (bientôt disponible) aidera les cabinets à développer leur clientèle grâce à un moteur
              de prospection intelligent.  
              Connecté à vos outils métiers, il vous permettra de segmenter vos prospects, suivre les interactions et automatiser
              les relances.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✅ Ciblage intelligent et scoring des prospects</li>
              <li>✅ Gestion du pipeline commercial</li>
              <li>✅ Automatisation des relances et des suivis</li>
              <li>✅ Intégration avec vos outils CRM et emailing</li>
              <li>✅ Analyse des performances commerciales</li>
            </ul>

            <Button
              label="Disponible prochainement"
              disabled
              className="px-5 py-2 font-semibold rounded-full border-0"
              style={{
                background: '#ccc',
                color: '#555',
              }}
            />
          </div>

          <div className="bg-[#F9FAFB] rounded-2xl p-10 shadow-sm text-center flex flex-col justify-center">
            <i className="pi pi-bullhorn text-5xl text-[#4B3CFA] mb-6"></i>
            <h3 className="text-xl font-semibold mb-3">Boostez votre développement</h3>
            <p className="text-gray-600 mb-4">
              Une approche moderne de la prospection, pensée pour les cabinets d’expertise comptable.
            </p>
            <span className="text-[#4B3CFA] font-semibold">Prochainement disponible</span>
          </div>
        </div>
      </section>
    </div>
  );
}
