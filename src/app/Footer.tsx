import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-transparent pt-8 pb-4 mt-12 border-t border-gray-300 ">
      {/* Blue background shape */}
      <div className="absolute top-0 left-0 w-full flex justify-center h-64 md:h-52 -z-1">
        <div className="w-full h-full rounded-b-full md:w-1/3 bg-sky-200"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 ">
        {/* Col 1 */}
        <div className="flex-1 min-w-[220px]">
          <div className="flex flex-col items-start gap-2 mb-2">
            <Image src="/logo-serrurier-services-ile-de-france.png" alt="logo serrurier services Île-de-France" width={60} height={40} />
            <span className="font-bold text-lg">Serrurier Services</span>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            Serrurier Services propune des interventions rapides et fiables 24h/24 pour l&apos;ouverture de porte, le changement de serrure et tous dépannages en urgence. Nos techniciens qualifiés interviennent sans dégâts dans toute l&apos;Île-de-France.
          </p>
          <div className="flex gap-3 mt-2">
            {[1,2,3,4].map(i => (
              <span key={i} className="w-6 h-6 rounded-full bg-gray-200 inline-block"></span>
            ))}
          </div>
        </div>
        {/* Col 2 */}
        <div className="flex-1 min-w-[180px]">
          <h3 className="font-bold text-lg mb-2">Liens utiles</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><a href="#top" className="hover:underline">Accueil</a></li>
            <li><a href="#gallery" className="hover:underline">Galerie photos</a></li>
            <li><a href="#avis" className="hover:underline">Avis clients</a></li>
          </ul>
        </div>
        {/* Col 3 */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="font-bold text-lg mb-2">Urgence & Contact</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>
              <span className="inline-block mr-2">✉️</span>
              <a href="mailto:contact@serrurier-express.fr" className="hover:underline">adrian@expertsdemaison.fr</a>
            </li>
            <li>
              <span className="inline-block mr-2">📞</span>
              <a href="tel:0612345678" className="hover:underline">06 12 34 56 78 (7j/7 – 24h/24)</a>
            </li>
            <li>
              <span className="inline-block mr-2">📍</span>
              <a href="https://www.google.com/maps/place/Île-de-France" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Île-de-France – Intervention rapide à domicile
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-4 mt-8 pt-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-2">
        <div>© 2025 Serrurier Service</div>
        <div className="flex gap-4 flex-wrap justify-center md:justify-between text-center items-center">
          <Link href="/mentions-legales" className="underline">Mentions légales</Link>
          <Link href="/confidentialite" className="underline">Politique de confidentialité</Link>
          <Link href="/cgu" className="underline">Conditions générales d&apos;utilisation</Link>
        </div>
      </div>
    </footer>
  );
} 