import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page non trouvée | Serrurier Services Île-de-France",
  description: "La page que vous recherchez n'existe pas. Retournez à l'accueil pour nos services de serrurerie en Île-de-France.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
        <p className="text-lg mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
} 