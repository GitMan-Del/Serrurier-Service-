import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Playfair_Display, Work_Sans } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });
const worksans = Work_Sans({ subsets: ['latin'], weight: ['300'] });

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://www.serrurierservices.fr";

export const metadata: Metadata = {
  title: "Serrurier Services – Dépannage 24h/24 & 7j/7",
  description: "Intervention rapide pour ouverture de porte, dépannage de serrure et changement de cylindre en Île-de-France. Serrurier agréé, disponible 24/7. Appelez maintenant !",
  keywords: [
    // Keywords principale
    "serrurier urgence Île-de-France",
    "Serrurier Services",
    "serrurier 24h/24 7j/7",
    "serrurier pas cher Île-de-France",
    "ouverture de porte urgence",
    "dépannage serrure rapide",
    "changement de serrure Île-de-France",
    "serrurier disponible immédiatement",
    "serrurier agréé assurance",
    "serrurier local proche de chez moi",
    // Din page.tsx (fara duplicate)
    "ouverture de porte",
    "dépannage serrure",
    "changement cylindre",
    "serrurier pas cher",
    "intervention rapide serrurier",
    "serrurier 24h/24",
    "serrurier nuit Île-de-France",
    "dépannage serrurerie express",
    "artisan serrurier local",
    // Combinatii cu regiunile principale (fără DOM)
    "serrurier urgence Auvergne-Rhône-Alpes",
    "serrurier urgence Bourgogne-Franche-Comté",
    "serrurier urgence Bretagne",
    "serrurier urgence Centre-Val de Loire",
    "serrurier urgence Corse",
    "serrurier urgence Grand Est",
    "serrurier urgence Hauts-de-France",
    "serrurier urgence Normandie",
    "serrurier urgence Nouvelle-Aquitaine",
    "serrurier urgence Occitanie",
    "serrurier urgence Pays de la Loire",
    "serrurier urgence Provence-Alpes-Côte d'Azur",
    "dépannage serrure Auvergne-Rhône-Alpes",
    "dépannage serrure Bourgogne-Franche-Comté",
    "dépannage serrure Bretagne",
    "dépannage serrure Centre-Val de Loire",
    "dépannage serrure Corse",
    "dépannage serrure Grand Est",
    "dépannage serrure Hauts-de-France",
    "dépannage serrure Normandie",
    "dépannage serrure Nouvelle-Aquitaine",
    "dépannage serrure Occitanie",
    "dépannage serrure Pays de la Loire",
    "dépannage serrure Provence-Alpes-Côte d'Azur",
    "ouverture de porte Auvergne-Rhône-Alpes",
    "ouverture de porte Bourgogne-Franche-Comté",
    "ouverture de porte Bretagne",
    "ouverture de porte Centre-Val de Loire",
    "ouverture de porte Corse",
    "ouverture de porte Grand Est",
    "ouverture de porte Hauts-de-France",
    "ouverture de porte Normandie",
    "ouverture de porte Nouvelle-Aquitaine",
    "ouverture de porte Occitanie",
    "ouverture de porte Pays de la Loire",
    "ouverture de porte Provence-Alpes-Côte d'Azur",
    // restul keyword-urilor deja existente
    "intervention serrurier en moins de 30 minutes",
    "porte claquée que faire serrurier",
    "remplacement de cylindre de serrure",
    "ouverture sans dégât porte blindée",
    "serrurier professionnel de nuit",
    "serrurier dimanche et jours fériés",
    "sécurisation après effraction",
    "serrurier haute sécurité Île-de-France",
    "tarif serrurier transparent",
    "urgence perte de clés",
    // SEO local
    "serrurier Paris urgence",
    "serrurier Seine-Saint-Denis rapide",
    "serrurier Val-de-Marne disponible",
    "serrurier Hauts-de-Seine express",
    "serrurier Essonne 24/24",
    "serrurier Val-d'Oise pas cher",
    "serrurier Yvelines ouverture de porte",
    // Keywords orientate pe servicii
    "ouverture de porte claquée",
    "dépannage serrurerie rapide et efficace",
    "installation de verrou de sécurité",
    "blindage de porte appartement",
    "maintenance serrure entreprise",
    "serrurier immeuble copropriété",
    "pose serrure multipoint",
    "conseils sécurité domicile",
  ],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl + "/",
  },
  openGraph: {
    title: "Serrurier Services Dépannage Rapide 24h/24",
    description:
      "Serrurier professionnel pour ouvertures de porte, remplacement de serrures et interventions d'urgence. Disponible en Île-de-France 24/7.",
    siteName: "Serrurier Services",
    images: [
      {
        url: baseUrl + "/opengraf-image.png",
        width: 1200,
        height: 630,
        alt: "Serrurier Express Dépannage 24h/24",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serrurier Services",
    description:
      "Ouverture de porte et dépannage serrurerie rapide 24/7. Intervention express partout en Île-de-France.",
    images: [baseUrl + "/opengraf-image.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="/logo-serrurier-services-ile-de-france.ico" sizes="any" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-1003293596"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-1003293596');
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Serrurier Services Île-de-France",
          "image": "https://serrurierservices.fr/logo-serrurier-services-ile-de-france.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "54-45 Avenue Hoche",
            "addressLocality": "Paris",
            "postalCode": "75008",
            "addressCountry": "FR"
          },
          "telephone": "+33659514692",
          "url": "https://serrurierservices.fr/",
          "priceRange": "€€",
          "openingHours": "Mo-Su 00:00-23:59",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "120"
          },
          "review": [
            {
              "@type": "Review",
              "author": "Karim B.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5" },
              "reviewBody": "Service rapide, clair et efficace. Technicien courtois, travail propre. Un vrai soulagement!"
            },
            {
              "@type": "Review",
              "author": "Julie R.",
              "reviewRating": { "@type": "Rating", "ratingValue": "5" },
              "reviewBody": "Serrurier très professionnel, intervention sans dégâts, tarif transparent. Je recommande!"
            }
          ]
        }` }} />
      </head>
      <body className={`antialiased ${playfair.className} ${worksans.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
