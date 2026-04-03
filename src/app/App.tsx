import React from 'react';

// IMPORTATION DU STYLE (C'est ce qui manquait pour le design !)
// On utilise le fichier présent dans ta racine src
import "../default_shadcn_theme.css"; 

// Importation de tes composants corrigés
import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { QuickIntro } from '../components/QuickIntro';
import { Pricing } from '../components/Pricing';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { FloatingSupport } from '../components/FloatingSupport';

export default function App() {
  return (
    /* Le bg-black assure un fond sombre pro pour Capella */
    <div className="min-h-screen bg-black text-white antialiased selection:bg-blue-500/30">
      
      {/* Barre de navigation */}
      <Header />

      {/* Contenu principal avec espacement automatique entre sections */}
      <main className="flex flex-col gap-0">
        
        {/* Section d'accueil (Titre & Appels à l'action) */}
        <Hero />

        {/* Petite présentation de l'agence */}
        <QuickIntro />

        {/* Liste des services SEO / Google Maps */}
        <Features />

        {/* Grille de tarifs */}
        <Pricing />

      </main>

      {/* Pied de page */}
      <Footer />

      {/* Bouton flottant d'assistance en bas à droite */}
      <FloatingSupport />

    </div>
  );
}
