import MainPage from "../page";

const REGIONS = [
  "auvergne-rhone-alpes",
  "bourgogne-franche-comte",
  "bretagne",
  "centre-val-de-loire",
  "corse",
  "grand-est",
  "hauts-de-france",
  "ile-de-france",
  "normandie",
  "nouvelle-aquitaine",
  "occitanie",
  "pays-de-la-loire",
  "provence-alpes-cote-d-azur"
] as const;

const regionNames: Record<string, string> = {
  "auvergne-rhone-alpes": "Auvergne-Rhône-Alpes",
  "bourgogne-franche-comte": "Bourgogne-Franche-Comté",
  "bretagne": "Bretagne",
  "centre-val-de-loire": "Centre-Val de Loire",
  "corse": "Corse",
  "grand-est": "Grand Est",
  "hauts-de-france": "Hauts-de-France",
  "ile-de-france": "Île-de-France",
  "normandie": "Normandie",
  "nouvelle-aquitaine": "Nouvelle-Aquitaine",
  "occitanie": "Occitanie",
  "pays-de-la-loire": "Pays de la Loire",
  "provence-alpes-cote-d-azur": "Provence-Alpes-Côte d'Azur"
};

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://serrurierservice.vercel.app";

export async function generateMetadata({ params }: { params: { region: string } }) {
  const region = params.region;
  const regionLabel = regionNames[region];

  if (!regionLabel) {
    return {
      title: "Serrurier Services – Dépannage 24h/24 & 7j/7",
      description: "Intervention rapide pour ouverture de porte, dépannage de serrure et changement de cylindre en Île-de-France et toată Franța. Serrurier agréé, disponible 24/7.",
    };
  }

  return {
    title: `Serrurier ${regionLabel} – Dépannage 24h/24 & 7j/7`,
    description: `Intervention rapide pour ouverture de porte, dépannage de serrure et changement de cylindre en ${regionLabel}. Serrurier agréé, disponible 24/7 dans toată regiunea ${regionLabel}.`,
    keywords: [
      `serrurier urgence ${regionLabel}`,
      `serrurier 24h/24 7j/7 ${regionLabel}`,
      `dépannage serrure ${regionLabel}`,
      `changement de serrure ${regionLabel}`,
      "serrurier agréé assurance",
      "serrurier local",
      "ouverture de porte urgence",
      "dépannage rapide",
      "serrurier pas cher"
    ],
    openGraph: {
      title: `Serrurier ${regionLabel} – Dépannage Rapide 24h/24`,
      description: `Serrurier professionnel pour ouvertures de porte, remplacement de serrures et interventions d'urgence en ${regionLabel}. Disponible 24/7.`,
      url: `${baseUrl}/${region}`,
      siteName: "Serrurier Services",
      images: [
        {
          url: `${baseUrl}/opengraf-image.png`,
          width: 1200,
          height: 630,
          alt: `Serrurier ${regionLabel} – Dépannage 24h/24`,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Serrurier ${regionLabel}`,
      description: `Ouverture de porte et dépannage serrurerie rapide 24/7. Intervention express partout en ${regionLabel}.`,
      images: [`${baseUrl}/opengraf-image.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default function RegionPage({ params }: { params: { region: string } }) {
  const { region } = params;
  // Verific dacă regiunea este una validă
  const regionValid = REGIONS.includes(region as (typeof REGIONS)[number]);
  // Dacă nu e validă, poți returna 404 sau main page default
  if (!regionValid) {
    return <MainPage />;
  }
  // Poți trimite regiunea ca prop pentru personalizare
  return <MainPage region={region} />;
} 