"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="font-playfair text-6xl font-bold text-[#1e293b] mb-4">404</h1>
      <h2 className="font-playfair text-2xl font-normal text-[#1e293b] mb-2">Page non trouvée</h2>
      <p className="font-worksans text-lg text-gray-600 mb-8 max-w-xl">
        Oups ! La page que vous cherchez n&apos;existe pas ou a été déplacée.<br />
        Retournez à l&apos;accueil pour continuer votre navigation.
      </p>
      <Link href="/">
        <span className="inline-block bg-[#AEDFF7] text-[#1e293b] font-medium px-6 py-3 rounded-lg shadow hover:bg-[#90cbe6] transition-all duration-200">
          Retour à l&apos;accueil
        </span>
      </Link>
    </div>
  );
} 