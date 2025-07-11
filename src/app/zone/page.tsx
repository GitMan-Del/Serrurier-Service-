import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zones d’intervention | Serrurier Services Île-de-France",
  description: "Découvrez toutes les zones d’Île-de-France où nous intervenons rapidement : Paris, Seine-Saint-Denis, Val-de-Marne, Hauts-de-Seine, Essonne, Val-d'Oise, Yvelines. Serrurier local, intervention 24h/24 et 7j/7 !",
  keywords: [
    "serrurier Paris",
    "serrurier Île-de-France",
    "serrurier Seine-Saint-Denis",
    "serrurier Val-de-Marne",
    "serrurier Hauts-de-Seine",
    "serrurier Essonne",
    "serrurier Val-d'Oise",
    "serrurier Yvelines",
    "intervention rapide serrurier",
    "zones d’intervention serrurier",
  ],
};

const ZONE_LIST = [
  "Paris (75)",
  "Seine-Saint-Denis (93)",
  "Val-de-Marne (94)",
  "Hauts-de-Seine (92)",
  "Essonne (91)",
  "Val-d'Oise (95)",
  "Yvelines (78)",
];

export default function ZonePage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Zones d’intervention – Serrurier Île-de-France</h1>
      <p className="mb-6 text-lg">
        Notre équipe intervient rapidement dans toute l’Île-de-France, 24h/24 et 7j/7. Nous sommes proches de vous pour toute urgence ou besoin de sécurisation :
      </p>
      <ul className="list-disc pl-6 mb-8">
        {ZONE_LIST.map((zone) => (
          <li key={zone} className="mb-1 text-base font-medium">{zone}</li>
        ))}
      </ul>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Pourquoi choisir un serrurier local&nbsp;?</h2>
        <ul className="list-disc pl-6">
          <li>Intervention rapide, généralement en moins de 30 minutes</li>
          <li>Tarifs transparents et justes</li>
          <li>Services garantis, réalisés par des professionnels qualifiés</li>
          <li>Disponibilité totale, de jour comme de nuit, week-ends inclus</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Contactez-nous pour une intervention dans votre secteur&nbsp;!</h2>
        <p>
          Appelez-nous au <a href="tel:+33659514692" className="text-blue-600 underline">06 59 51 46 92</a> ou utilisez notre formulaire de contact pour une prise de rendez-vous rapide.
        </p>
      </section>
    </main>
  );
} 