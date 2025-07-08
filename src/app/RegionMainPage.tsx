import Image from "next/image";
import TestimonialCarousel from "./TestimonialCarousel";
import Footer from "./Footer";

interface RegionMainPageProps {
  regionName: string;
}

export default function RegionMainPage({ regionName }: RegionMainPageProps) {
  return (
    <main className="w-full min-h-screen text-[var(--color-primary)] mx-auto">
      {/* Hero */}
      <div id="top" className="w-full mx-auto h-screen flex flex-row items-center justify-center md:px-40 px-1 relative">
        <Image src="/serrurier-urgence-ile-de-france-background.png" alt={`serrurier urgence ${regionName}, service express 24/7`} width={1006.28} height={1000} className="absolute h-full md:w-[60%] w-full p-0 top-0 left-0 "/>
        {/* Text Part */}
        <div className="md:w-1/2 w-full md:items-start md:text-start text-center items-center justify-center flex flex-col z-10 gap-5">
          <h1 className="font-playfair font-bold md:text-6xl text-4xl md:max-w-2xl">Serrurier Service Express {regionName ? `– ${regionName}` : ""} Urgence 24h/24</h1>
          <p className="max-w-2xl md:text-lg text-sm   font-worksans">
            Ouverture de porte rapide, dépannage de serrure et remplacement de cylindre en urgence — interventions express 24h/24 et 7j/7 dans toute {regionName}. Nos serruriers qualifiés interviennent sans dégât, de jour comme de nuit, pentru vous garantir un accès sécurisé à votre domicile sau local profesional din {regionName}.
          </p>
          <div className="flex flex-row gap-5">
            <button className="btn-primary hover:scale-105 transition-all duration-200 hover:cursor-pointer">📬 Contactez un serrurier în {regionName}</button>
            <button className="btn-sec hover:scale-105 transition-all duration-200 border hover:cursor-pointer font-medium">📞+33659514692</button>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:max-w-3xl items-start rounded-2xl md:border md:border-[#333333] p-4 ">
              <div className="flex flex-col items-start gap-2">
                <span className="inline-flex"><svg width="20" height="20" fill="black"><circle cx="10" cy="10" r="10" /></svg></span>
                <p className="max-w-[180px] sm:max-w-none items-start text-start text-sm">
                  Disponible de jour comme de nuit, même les week-ends et jours fériés, partout în {regionName}.
                </p>
              </div>
              <div className="flex flex-col  text-start gap-2">
                <span className="inline-flex"><svg width="20" height="20"><rect width="20" height="20" fill="#333" /></svg></span>
                <p className="max-w-[180px] sm:max-w-none text-start text-sm">
                  Maintenance rapide pour hôtels, agences, commerces et immeubles din {regionName}.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 col-span-2 sm:col-span-1 border-none ">
                <span className="inline-flex"><svg width="20" height="20" fill="black"><polygon points="10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7" /></svg></span>
                <p className="max-w-[180px] sm:max-w-none text-start text-sm">
                  Ouverture de porte sans destruction grâce à nos outils professionnels, oriunde în {regionName}.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full items-center justify-center relative md:flex hidden">
          <Image src="/serrurier-professionnel-intervention-rapide.png" alt={`serrurier professionnel intervention rapide ${regionName}`} width={635.31} height={778.19} />
        </div>
      </div>
      <div className="w-full h-fit">
        <Image src="/separator-design-serrurier-services.png" alt="separator design serrurier services" width={1440} height={110} className="w-full h-28" />
      </div>

      {/* Cards Section (galerie) */}
      <section id="gallery" className="w-full h-screen md:p-0 py-20 relative flex items-center justify-center flex-col md:px-40">
        <Image
          src="/galerie-interventii-serrurier-ile-de-france.png"
          alt={`galerie intervenții serrurier ${regionName}, exemple lucrări`}
          width={1252}
          height={532.85}
          className=" md:absolute w-full object-contain md:block hidden"
        />
        <Image
          src="/galerie-interventii-serrurier-mobile.png"
          alt={`galerie intervenții serrurier ${regionName} mobil`}
          width={1252}
          height={532.85}
          className=" md:hidden w-full object-cover"
        />
        <h2 className="font-playfair font-bold md:text-4xl text-4xl tracking-wider text-center md:mt-30 z-10 md:max-w-2xl">Conseils pratiques & actualités serrurerie în {regionName}</h2>
        <p className="md:max-w-3xl max-w-full text-lg   font-worksans text-center z-10">Retrouvez dans notre galerie o selecție de articole practice și ilustrate, concepute de experții noștri serruriers din {regionName}. Descoperiți sfaturi pentru a vă întări securitatea locuinței, a alege yala potrivită și a reacționa rapid în caz de urgență în {regionName}.</p>
      </section>
      {/* Testimoniale  */}
      <section id="avis" className="w-full h-screen relative flex items-center justify-start flex-col md:px-40">
        <Image
          src="/testimoniale-clienti-serrurier-ile-de-france.png"
          alt={`testimoniale clienți serrurier ${regionName}, recenzii reale`}
          width={1375}
          height={502}
          className=" md:absolute w-[80%]   md:block hidden"
        />

        <Image
          src="/galerie-serrurier-mobile-suport.png"
          alt={`galerie serrurier mobile suport ${regionName}`}
          width={1252}
          height={532.85}
          className=" md:hidden w-full object-cover"
        />
        <h2 className="font-playfair font-bold md:text-4xl text-4xl tracking-wider text-center md:mt-100 mt-10 z-10 md:max-w-2xl">Avis clients serrurier {regionName}</h2>
        <p className="md:max-w-2xl max-w-full text-lg font-worksans text-center z-10">Descoperiți mărturiile autentice ale clienților noștri din {regionName}. Rapiditate, profesionalism și intervenții fără daune — serruriers recomandați în {regionName}!</p>
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
        <h2 className="font-playfair font-bold md:text-4xl text-4xl tracking-wider text-center md:mt-30 md:max-w-2xl z-20">Besoin d&apos;un serrurier en urgence în {regionName} ?</h2>
        <p className="md:max-w-3xl max-w-full text-lg font-worksans text-center z-20">Contactează-ne pentru intervenții rapide și sigure în toată regiunea {regionName}. Securitatea ta este prioritatea noastră!</p>
        <button className="btn-primary hover:scale-105 transition-all duration-200 hover:cursor-pointer mt-5">📬 Contactez un serrurier în {regionName}</button>
      </section>

      <section className="w-full h-fit md:p-10">
        <Footer />
      </section>
    </main>
  );
} 