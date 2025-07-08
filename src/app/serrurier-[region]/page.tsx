import RegionMainPage from "../RegionMainPage";

const REGIONS = [
  { slug: "ile-de-france", name: "Île-de-France" },
  { slug: "auvergne-rhone-alpes", name: "Auvergne-Rhône-Alpes" },
  { slug: "bourgogne-franche-comte", name: "Bourgogne-Franche-Comté" },
  { slug: "bretagne", name: "Bretagne" },
  { slug: "centre-val-de-loire", name: "Centre-Val de Loire" },
  { slug: "corse", name: "Corse" },
  { slug: "grand-est", name: "Grand Est" },
  { slug: "hauts-de-france", name: "Hauts-de-France" },
  { slug: "normandie", name: "Normandie" },
  { slug: "nouvelle-aquitaine", name: "Nouvelle-Aquitaine" },
  { slug: "occitanie", name: "Occitanie" },
  { slug: "pays-de-la-loire", name: "Pays de la Loire" },
  { slug: "provence-alpes-cote-d-azur", name: "Provence-Alpes-Côte d'Azur" }
];

export async function generateStaticParams() {
  return REGIONS.map(region => ({ region: region.slug }));
}

export async function generateMetadata({ params }: { params: { region: string } }) {
  const region = REGIONS.find(r => r.slug === params.region);
  if (!region) return { title: "Serrurier Service Express" };
  return {
    title: `Serrurier ${region.name} - Urgence 24h/24 & 7j/7`,
    description: `Ouverture de porte, dépannage de serrure, changement de cylindre en urgence dans la région ${region.name}. Interventions express 24h/24 et 7j/7 par des serruriers qualifiés.`,
    keywords: [
      `serrurier urgence ${region.name}`,
      `ouverture de porte ${region.name}`,
      `dépannage serrure ${region.name}`,
      `changement cylindre ${region.name}`,
      `serrurier pas cher ${region.name}`,
      `intervention rapide serrurier ${region.name}`,
      `serrurier 24h/24 ${region.name}`,
      `serrurier nuit ${region.name}`,
      `dépannage serrurerie express ${region.name}`,
      `artisan serrurier local ${region.name}`
    ],
    robots: "index, follow"
  };
}

// Funcția paginii trebuie să fie SINC, nu async!
export default function RegionPage({ params }: { params: { region: string } }) {
  const region = REGIONS.find(r => r.slug === params.region);
  if (!region) return <div>Région non trouvée.</div>;
  return <RegionMainPage regionName={region.name} />;
} 