import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";



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
  metadataBase: new URL("https://serrurier-express.fr"),
  alternates: {
    canonical: "https://serrurier-express.fr",
  },
  openGraph: {
    title: "Serrurier Services – Dépannage Rapide 24h/24",
    description:
      "Serrurier professionnel pour ouvertures de porte, remplacement de serrures et interventions d'urgence. Disponible en Île-de-France 24/7.",
    url: "https://serrurier-express.fr",
    siteName: "Serrurier Services",
    images: [
      {
        url: "https://serrurier-express.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Serrurier Express – Dépannage 24h/24",
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
    images: ["https://serrurier-express.fr/og-image.jpg"],
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
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
