import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";

const baseUrl = process.env.NEXT_PUBLIC_URL || "https://serrurierservice.vercel.app";

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
    
    // Keywords varianta lunga
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
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-serrurier-services-ile-de-france.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Serrurier Services Île-de-France",
          "image": "https://serrurierservice.vercel.app/logo-serrurier-services-ile-de-france.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "54-45 Avenue Hoche",
            "addressLocality": "Paris",
            "postalCode": "75008",
            "addressCountry": "FR"
          },
          "telephone": "+33659514692",
          "url": "https://serrurierservice.vercel.app/",
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
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
