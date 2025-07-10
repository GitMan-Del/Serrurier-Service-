import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zone acoperite intervenții | Serrurier Services Île-de-France",
  description: "Descoperă toate zonele din Île-de-France unde intervenim rapid: Paris, Seine-Saint-Denis, Val-de-Marne, Hauts-de-Seine, Essonne, Val-d'Oise, Yvelines. Serrurier local, intervenție 24/7!",
  keywords: [
    "serrurier Paris",
    "serrurier Île-de-France",
    "serrurier Seine-Saint-Denis",
    "serrurier Val-de-Marne",
    "serrurier Hauts-de-Seine",
    "serrurier Essonne",
    "serrurier Val-d'Oise",
    "serrurier Yvelines",
    "intervenție rapidă serrurier",
    "zone acoperite serrurier",
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
      <h1 className="text-3xl font-bold mb-4">Zone acoperite – Intervenții Serrurier Île-de-France</h1>
      <p className="mb-6 text-lg">
        Echipa noastră intervine rapid în toate zonele din Île-de-France, 24/7. Suntem aproape de tine pentru orice urgență sau lucrare de securizare:
      </p>
      <ul className="list-disc pl-6 mb-8">
        {ZONE_LIST.map((zone) => (
          <li key={zone} className="mb-1 text-base font-medium">{zone}</li>
        ))}
      </ul>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">De ce să alegi un serrurier local?</h2>
        <ul className="list-disc pl-6">
          <li>Intervenție rapidă, de obicei sub 30 de minute</li>
          <li>Tarife transparente și corecte</li>
          <li>Servicii garantate și personal calificat</li>
          <li>Disponibilitate non-stop, inclusiv noaptea și în weekend</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">Contactează-ne pentru intervenții în zona ta!</h2>
        <p>
          Sunați la <a href="tel:+33659514692" className="text-blue-600 underline">06 59 51 46 92</a> sau folosiți formularul de contact pentru programări rapide.
        </p>
      </section>
    </main>
  );
} 