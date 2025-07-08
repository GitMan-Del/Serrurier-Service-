import Image from "next/image";
import { Sun , Star , EyeIcon } from "lucide-react";
import TestimonialCarousel from "./TestimonialCarousel";
import Footer from "./Footer";


export const metadata = {
  title: "Serrurier Services - Urgences 24h/24",
  description: "Ouverture de porte rapide, dépannage de serrure, changement de cylindre – interventions express 24h/24 et 7j/7 partout en Île-de-France. Contactez un serrurier fiable et réactif !",
  keywords: [
    // Génériques
    "serrurier urgence Île-de-France",
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
    "serrurier urgence Île-de-France",
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
    "dépannage serrure Île-de-France",
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
    "ouverture de porte Île-de-France",
    "ouverture de porte Normandie",
    "ouverture de porte Nouvelle-Aquitaine",
    "ouverture de porte Occitanie",
    "ouverture de porte Pays de la Loire",
    "ouverture de porte Provence-Alpes-Côte d'Azur"
  ],
  robots: "index, follow",
 
};



export default function MainPage({ region }: { region?: string } = {}) {
  // Mapare pentru nume regiuni frumoase
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
  const regionLabel = region ? regionNames[region] : undefined;

  return (
    <main className="w-full min-h-screen text-[var(--color-primary)] mx-auto">
      {/* Hero */}
      <div id="top" className="w-full mx-auto h-screen flex flex-row items-center justify-center md:px-40 px-1 relative">
      <Image src="/serrurier-urgence-ile-de-france-background.png" alt="serrurier urgence Île-de-France, service express 24/7" width={1006.28} height={1000} className="absolute h-full md:w-[60%] w-full p-0 top-0 left-0 "/>
        {/* Text Part */}
        <div className="md:w-1/2 w-full md:items-start md:text-start text-center items-center justify-center flex flex-col z-10 gap-5">
        <h1 className="font-playfair font-bold md:text-6xl text-4xl md:max-w-2xl">
          {regionLabel ? `Serrurier ${regionLabel} – Urgence 24h/24` : "Serrurier Service Express – Urgence 24h/24"}
        </h1>
        <p className="max-w-2xl md:text-lg text-sm   font-worksans">
          {regionLabel
            ? `Ouverture de porte rapide, dépannage de serrure et remplacement de cylindre en urgence — interventions express 24h/24 et 7j/7 dans toute la région ${regionLabel}. Nos serruriers qualifiés interviennent sans dégât, de jour comme de nuit, pour vous garantir un accès sécurisé à votre domicile ou local professionnel.`
            : "Ouverture de porte rapide, dépannage de serrure et remplacement de cylindre en urgence — interventions express 24h/24 et 7j/7 dans toute l'Île-de-France. Nos serruriers qualifiés interviennent sans dégât, de jour comme de nuit, pentru vous garantir un accès sécurisé à votre domicile ou local professionnel."}
        </p>
        <div className="flex flex-row gap-5">
        <button className="btn-primary hover:scale-105 transition-all duration-200 hover:cursor-pointer">📬 Contactez-nous</button>
        <button className="btn-sec hover:scale-105 transition-all duration-200 border hover:cursor-pointer font-medium">📞 07 56 12 34 56</button>
        </div>

       
        <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:max-w-3xl items-start rounded-2xl md:border md:border-[#333333] p-4 ">
          <div className="flex flex-col items-start gap-2">
            <Sun fill="black" className="w-5 h-5" />
            <p className="max-w-[180px] sm:max-w-none items-start text-start text-sm">
              Disponible de jour comme de nuit, même les week-ends et jours fériés.
            </p>
          </div>
          <div className="flex flex-col  text-start gap-2">
            <EyeIcon className="w-5 h-5" />
            <p className="max-w-[180px] sm:max-w-none text-start text-sm">
              Maintenance rapide pour hôtels, agences, commerces et immeubles.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 col-span-2 sm:col-span-1 border-none ">
            <Star fill="black" className="w-5 h-5" />
            <p className="max-w-[180px] sm:max-w-none text-start text-sm">
              Ouverture de porte sans destruction grâce à nos outils professionnels.
            </p>
          </div>
        </div>
        </div>
      </div>

      <div className="w-1/2 h-full items-center justify-center relative md:flex hidden">
      <Image src="/serrurier-professionnel-intervention-rapide.png" alt="serrurier professionnel intervention rapide Île-de-France" width={635.31} height={778.19} />
      </div>
    </div>
    <div className="w-full h-fit">
      <Image src="/separator-design-serrurier-services.png" alt="separator design serrurier services" width={1440} height={110} className="w-full h-28" />
    </div>

      {/* Cards Section (galerie) */}
      <section id="gallery" className="w-full h-screen md:p-0 py-20 relative flex items-center justify-center flex-col md:px-40">
        <Image
          src="/galerie-interventii-serrurier-ile-de-france.png"
          alt="galerie intervenții serrurier Île-de-France, exemple lucrări"
          width={1252}
          height={532.85}
          className=" md:absolute w-full object-contain md:block hidden"
        />
        <Image
          src="/galerie-interventii-serrurier-mobile.png"
          alt="galerie intervenții serrurier Île-de-France mobil"
          width={1252}
          height={532.85}
          className=" md:hidden w-full object-cover"
        />
        <h2 className="font-playfair font-bold md:text-4xl text-4xl tracking-wider text-center md:mt-30 z-10 md:max-w-2xl">Conseils pratiques & actualités serrurerie</h2>
        <p className="md:max-w-3xl max-w-full text-lg   font-worksans text-center z-10">Retrouvez dans notre galerie une sélection d&apos;articles pratiques et illustrés, conçus par nos experts serruriers. Découvrez nos conseils pour renforcer la sécurité de votre logement, choisir les serrures adaptées à vos besoins, et savoir comment réagir rapidement en cas d&apos;urgence. Des contenus simples et utiles pour vous accompagner au quotidien.</p>
      </section>
      {/* Testimoniale  */}
        <section id="avis" className="w-full h-screen relative flex items-center justify-start flex-col md:px-40">
        <Image
          src="/testimoniale-clienti-serrurier-ile-de-france.png"
          alt="testimoniale clienți serrurier Île-de-France, recenzii reale"
          width={1375}
          height={502}
          className=" md:absolute w-[80%]   md:block hidden"
        />

        <Image
          src="/galerie-serrurier-mobile-suport.png"
          alt="galerie serrurier mobile suport Île-de-France"
          width={1252}
          height={532.85}
          className=" md:hidden w-full object-cover"
        />
        <h2 className="font-playfair font-bold md:text-4xl text-4xl tracking-wider text-center md:mt-100 mt-10 z-10 md:max-w-2xl">Avis clients serrurier Île-de-France</h2>
        <p className="md:max-w-2xl max-w-full text-lg font-worksans text-center z-10">Découvrez les témoignages authentiques de nos clients satisfaits à Paris et dans toute l&apos;Île-de-France. Réactivité, professionnalisme et interventions sans dégât — nos serruriers sont recommandés pour...</p>
        <div className="w-full flex justify-center z-10">
          <TestimonialCarousel />
        </div>
        </section>


        <section className="w-full h-fit p-10 relative flex flex-col items-center justify-center md:px-40">
          <Image src="/decor-ellipse-13.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute md:top-10 md:left-70 top-0 left-20 z-10"/>
          <Image src="/decor-ellipse-14.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-30 md:left-40 left-0 z-50"/>
          <Image src="/decor-ellipse-15.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-60 md:left-50 left-45 z-10 opacity-0 md:opacity-100"/>
          <Image src="/decor-ellipse-16.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-90 md:left-90 left-15 z-10"/>
          <Image src="/decor-ellipse-17.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="md:absolute top-20 md:left-96 left-5 z-50 hidden"/> 
          <Image src="/decor-ellipse-18.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-10 md:right-70 right-0 z-10"/>
          <Image src="/decor-ellipse-19.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-30 md:right-40 right-15 z-50"/>
          <Image src="/decor-ellipse-20.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="md:absolute top-60 md:right-50 right-45 z-10"/>
          <Image src="/decor-ellipse-21.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-90 md:right-90 right-10 z-10"/>
          <Image src="/decor-ellipse-22.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="md:absolute top-20 md:right-96 right-5 z-50 hidden"/>
          <h2 className="font-playfair font-bold md:text-4xl text-4xl tracking-wider text-center md:mt-30 md:max-w-2xl z-20">Besoin d&apos;un serrurier en urgence en Île-de-France ?</h2>
          <p className="md:max-w-3xl max-w-full text-lg font-worksans text-center z-20">Retrouvez dans notre galerie une sélection d&apos;articles pratiques et illustrés, conçus par nos experts serruriers. Découvrez nos conseils pour renforcer la sécurité de votre logement, choisir les serrures adaptées à vos besoins, et savoir comment réagir rapidement en cas d&apos;urgence. Des contenus simples et utiles pour vous accompagner au quotidien.</p>
          <button className="btn-primary hover:scale-105 transition-all duration-200 hover:cursor-pointer mt-5">📬 Contactez-nous</button>
        </section>


       <section className="w-full h-fit md:p-10">
        <Footer />
       </section>
    </main> 
  );
}
