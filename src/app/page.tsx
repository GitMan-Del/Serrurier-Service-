"use client";

import Image from "next/image";
import { Sun , Star , EyeIcon, DoorOpen, AlarmClock, KeyRound, ShieldOff, ShieldCheck, Settings, Users, Lightbulb } from "lucide-react";
import dynamic from "next/dynamic";
const TestimonialCarousel = dynamic(() => import("./components/TestimonialCarousel"), { ssr: false });
import Footer from "./components/Footer";
import CallBtn from "./components/CallBtn";
import { useEffect, useRef } from "react";

export default function MainPage() {
  // Ref pentru toate h1/h2
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  // Ref pentru descrieri
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  // Ref pentru footer
  const footerRef = useRef<HTMLElement | null>(null);
  // Ref pentru imagini animate
  const animatedImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  // Ref pentru cardurile de servicii
  const servicesCardRefs = useRef<(HTMLElement | null)[]>([]);
  // Ref pentru butonul din sectiunea servicii
  const servicesBtnRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Adaug animatia potrivita in functie de data-anim-type
            const animType = (entry.target as HTMLElement).dataset.animType;
            if (animType) {
              entry.target.classList.add(animType);
            } else {
              entry.target.classList.add("reveal-from-bottom");
            }
            if (entry.target.classList.contains("reveal-delay")) {
              // delay e deja in clasa
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    headingRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    descRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    if (footerRef.current) observer.observe(footerRef.current);
    animatedImgRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    servicesCardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    if (servicesBtnRef.current) observer.observe(servicesBtnRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full min-h-screen text-[var(--color-primary)] mx-auto">
      {/* Hero */}
      <div id="top" className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:px-40 px-1 pt-20 md:pt-0 overflow-hidden">
        {/* SVG background - sub tot conținutul */}
        <svg
          viewBox="0 0 940 768"
          className="absolute left-0 top-0 h-full w-full md:w-[60%] z-0"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="hero background serrurier services"
        >
          <path
            d="
              M900 0
              C773 8 503 24 468 156
              c-35 132 162 259 280 323
              118 64 152 65 172 139
              19 74-12 126-56 150
              C890 760 880 768 860 768
              H0
              V0
              h900
              Z
            "
            fill="#AEDFF7"
          />
        </svg>


        <div className="md:w-1/2 w-full md:items-start md:text-start text-center items-center justify-center flex flex-col z-10 gap-5">
          <h1
            ref={el => { headingRefs.current[0] = el; }}
            className="font-playfair font-normal md:text-6xl text-4xl md:max-w-2xl opacity-0"
          >Serrurier Service Express Urgence 24h/24</h1>
          <p
            ref={el => { descRefs.current[0] = el; }}
            className="max-w-2xl md:text-lg text-sm font-worksans opacity-0 reveal-delay"
          >
            Ouverture de porte rapide, dépannage de serrure et remplacement de cylindre en urgence, interventions express 24h/24 et 7j/7 dans toute l’Île-de-France. Nos serruriers qualifiés interviennent sans aucun dégât, de jour comme de nuit, pour vous garantir un accès sécurisé à votre domicile ou à vos locaux professionnels.
          </p>
          <div className="flex flex-row gap-5">
          <a
            href="https://wa.me/33659514692"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hover:scale-105 transition-all duration-200 hover:cursor-pointer btn-fade-in px-6 py-3 text-base md:text-lg rounded-lg min-w-[48px] min-h-[48px] flex items-center justify-center"
          >
            📬 Contactez-nous
          </a>
          <CallBtn />
          </div>

          <div className="w-full btn-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full md:max-w-3xl items-start rounded-2xl md:border md:border-[#333333] p-4 ">
              <div className="flex flex-col items-start gap-2">
                <Sun fill="black" className="w-5 h-5" />
                <p className="max-w-[180px] sm:max-w-none items-start text-start text-sm">
                  Disponibles jour et nuit, y compris les week-ends et jours fériés.
                </p>
              </div>
              <div className="flex flex-col  text-start gap-2">
                <EyeIcon className="w-5 h-5" />
                <p className="max-w-[180px] sm:max-w-none text-start text-sm">
                  Intervention rapide pour hôtels, agences, commerces et immeubles.
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

        <div className="md:w-1/2 w-full h-full items-center justify-center relative md:flex hidden z-10">
          <Image
            ref={el => { animatedImgRefs.current[0] = el; }}
            src="/serrurier-professionnel-intervention-rapide.png"
            alt="serrurier professionnel intervention rapide Île-de-France"
            width={635.31}
            height={778.19}
            data-anim-type="float-rotate-fade-right"
            className=""
          />
        </div>
      </div>
      <div className="w-full h-fit">
        <svg
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "auto" }}
          className="w-full"
          aria-label="separator design serrurier services"
        >
          <path d="M0,32 C240,96 480,0 720,64 C960,128 1200,32 1440,64 L1440,0 L0,0 Z" fill="#AEDFF7" />
        </svg>
      </div>

      {/* Cards Section (galerie) */}
      <section id="gallery" className="w-full min-h-[600px] md:h-screen md:p-0 py-20 relative flex items-center justify-center flex-col md:px-40">
        <Image
          src="/galerie-interventii-serrurier-ile-de-france.png"
          alt="galerie intervenții serrurier Île-de-France, exemple lucrări"
          width={1252}
          height={532.85}
          className="md:absolute w-full object-contain md:block hidden  btn-fade-in"
        />
        <Image
          src="/galerie-interventii-serrurier-mobile.png"
          alt="galerie intervenții serrurier Île-de-France mobil"
          width={1252}
          height={532.85}
          className="md:hidden w-full object-cover btn-fade-in"
        />
        <h2
          ref={el => { headingRefs.current[1] = el; }}
          className="font-playfair font-normal md:text-4xl text-4xl tracking-wider text-center md:mt-30 z-10 md:max-w-2xl mt-10 opacity-0"
        >Conseils pratiques & actualités serrurerie</h2>
        <p
          ref={el => { descRefs.current[1] = el; }}
          className="md:max-w-3xl max-w-full text-lg   font-worksans text-center z-10 mt-4 opacity-0 reveal-delay"
        >Découvrez dans notre galerie une sélection d’articles pratiques et illustrés, rédigés par nos serruriers experts. Profitez de nos conseils pour renforcer la sécurité de votre habitation, choisir la serrure la plus adaptée à vos besoins et réagir efficacement en cas d’urgence. Des contenus clairs et utiles pour vous accompagner au quotidien.</p>
      </section>
      {/* Testimoniale  */}
      <section id="avis" className="w-full min-h-[600px] md:h-screen relative flex items-center justify-start flex-col md:px-40 py-10 md:py-0">
        <Image
          src="/testimoniale-clienti-serrurier-ile-de-france.png"
          alt="testimoniale clienți serrurier Île-de-France, recenzii reale"
          width={1375}
          height={502}
          className="md:absolute w-[80%] md:block hidden reveal-from-bottom"
        />

        <Image
          src="/galerie-serrurier-mobile-suport.png"
          alt="galerie serrurier mobile suport Île-de-France"
          width={1252}
          height={532.85}
          className="md:hidden w-full object-cover reveal-from-bottom"
        />
        <h2
          ref={el => { headingRefs.current[2] = el; }}
          className="font-playfair font-normal md:text-4xl text-4xl tracking-wider text-center md:mt-100 mt-10 z-10 md:max-w-2xl opacity-0"
        >Avis clients serrurier Île-de-France</h2>
        <p
          ref={el => { descRefs.current[2] = el; }}
          className="md:max-w-2xl max-w-full text-lg font-worksans text-center z-10 mt-4 opacity-0 reveal-delay"
        >Découvrez les avis authentiques de nos clients satisfaits à Paris et dans toute l’Île-de-France. Réactivité, professionnalisme et interventions sans dommage nos serruriers sont vivement recommandés pour leur efficacité et leur sérieux.</p>
        <div className="w-full flex justify-center z-10 mt-4">
          <TestimonialCarousel />
        </div>
      </section>

      <section
        id="services"
        className="w-full py-20 bg-white"
        itemScope
        itemType="https://schema.org/Service"
      >
        <div className="max-w-[80%] mx-auto px-4">
          <h2 className="font-playfair text-4xl font-normal text-center mb-10">
            Services de serrurerie en Île-de-France
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {/* Ouverture de porte */}
            <article
              ref={el => { servicesCardRefs.current[0] = el; }}
              className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 min-h-[280px] max-w-[540px] mx-auto flex flex-col items-center text-center opacity-0"
              itemProp="hasOfferCatalog" itemScope itemType="https://schema.org/OfferCatalog"
            >
              <DoorOpen size={30} strokeWidth={2} className="text-slate-800 mb-2" />
              <h3 className="font-playfair text-xl mt-4 mb-2" itemProp="name">Ouverture de porte</h3>
              <p className="text-base text-gray-600" itemProp="description">
                Ouverture de porte rapide et sans dégât, 24h/24 et 7j/7, partout en Île-de-France.
              </p>
            </article>
            {/* Dépannage d'urgence */}
            <article
              ref={el => { servicesCardRefs.current[1] = el; }}
              className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 min-h-[280px] max-w-[540px] mx-auto flex flex-col items-center text-center opacity-0 reveal-delay"
              itemProp="itemListElement" itemScope itemType="https://schema.org/Service"
            >
              <AlarmClock size={30} strokeWidth={2} className="text-yellow-500 mb-2" />
              <h3 className="font-playfair text-xl mt-4 mb-2" itemProp="name">Dépannage d&apos;urgence 24h/24 et 7j/7</h3>
              <p className="text-base text-gray-600" itemProp="description">
                Intervention express pour tout problème de serrurerie, à toute heure, même les week-ends et jours fériés.
              </p>
            </article>
            {/* Changement de serrure */}
            <article
              ref={el => { servicesCardRefs.current[2] = el; }}
              className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 min-h-[280px] max-w-[540px] mx-auto flex flex-col items-center text-center opacity-0"
              itemProp="itemListElement" itemScope itemType="https://schema.org/Service"
            >
              <KeyRound size={30} strokeWidth={2} className="text-sky-500 mb-2" />
              <h3 className="font-playfair text-xl mt-4 mb-2" itemProp="name">Changement de serrure / cylindre</h3>
              <p className="text-base text-gray-600" itemProp="description">
                Remplacement de serrure ou cylindre sécurisé, adapté à tous types de portes.
              </p>
            </article>
            {/* Réparation après effraction */}
            <article
              ref={el => { servicesCardRefs.current[3] = el; }}
              className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 min-h-[280px] max-w-[540px] mx-auto flex flex-col items-center text-center opacity-0 reveal-delay"
              itemProp="itemListElement" itemScope itemType="https://schema.org/Service"
            >
              <ShieldOff size={30} strokeWidth={2} className="text-red-500 mb-2" />
              <h3 className="font-playfair text-xl mt-4 mb-2" itemProp="name">Réparation après effraction</h3>
              <p className="text-base text-gray-600" itemProp="description">
                Réparation rapide et sécurisée de portes et serrures après tentative d&apos;effraction.
              </p>
            </article>
            {/* Blindage de porte */}
            <article
              ref={el => { servicesCardRefs.current[4] = el; }}
              className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 min-h-[280px] max-w-[540px] mx-auto flex flex-col items-center text-center opacity-0"
              itemProp="itemListElement" itemScope itemType="https://schema.org/Service"
            >
              <ShieldCheck size={30} strokeWidth={2} className="text-indigo-500 mb-2" />
              <h3 className="font-playfair text-xl mt-4 mb-2" itemProp="name">Blindage de porte / pose de porte blindée</h3>
              <p className="text-base text-gray-600" itemProp="description">
                Installation de portes blindées et blindage pour une sécurité maximale.
              </p>
            </article>
            {/* Serrures multipoints */}
            <article
              ref={el => { servicesCardRefs.current[5] = el; }}
              className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 min-h-[280px] max-w-[540px] mx-auto flex flex-col items-center text-center opacity-0 reveal-delay"
              itemProp="itemListElement" itemScope itemType="https://schema.org/Service"
            >
              <Settings size={30} strokeWidth={2} className="text-emerald-500 mb-2" />
              <h3 className="font-playfair text-xl mt-4 mb-2" itemProp="name">Installation et entretien de serrures multipoints</h3>
              <p className="text-base text-gray-600" itemProp="description">
                Pose et maintenance de serrures multipoints certifiées pour une protection optimale.
              </p>
            </article>
            {/* Maintenance pro */}
            <article
              ref={el => { servicesCardRefs.current[6] = el; }}
              className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 min-h-[280px] max-w-[540px] mx-auto flex flex-col items-center text-center opacity-0"
              itemProp="itemListElement" itemScope itemType="https://schema.org/Service"
            >
              <Users size={30} strokeWidth={2} className="text-orange-400 mb-2" />
              <h3 className="font-playfair text-xl mt-4 mb-2" itemProp="name">Maintenance serrurerie pour professionnels</h3>
              <p className="text-base text-gray-600" itemProp="description">
                Contrats de maintenance et interventions dédiées aux entreprises, commerces et syndics.
              </p>
            </article>
            {/* Conseils sécurité */}
            <article
              ref={el => { servicesCardRefs.current[7] = el; }}
              className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 min-h-[280px] max-w-[540px] mx-auto flex flex-col items-center text-center opacity-0 reveal-delay"
              itemProp="itemListElement" itemScope itemType="https://schema.org/Service"
            >
              <Lightbulb size={30} strokeWidth={2} className="text-sky-500 mb-2" />
              <h3 className="font-playfair text-xl mt-4 mb-2" itemProp="name">Conseils en sécurité</h3>
              <p className="text-base text-gray-600" itemProp="description">
                Audit et recommandations personnalisées pour renforcer la sécurité de votre habitat ou local professionnel.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[700px] md:h-screen p-10 relative flex flex-col items-center justify-center md:px-40">
        <h2
          ref={el => { headingRefs.current[3] = el; }}
          className="font-playfair font-normal md:text-4xl text-4xl tracking-wider text-center md:mt-30 md:max-w-2xl z-20 mt-10 opacity-0"
        >Besoin d&apos;un serrurier en urgence en Île-de-France ?</h2>
        <p
          ref={el => { descRefs.current[3] = el; }}
          className="md:max-w-3xl max-w-full text-lg font-worksans text-center z-20 mt-4 opacity-0 reveal-delay"
        >Parcourez notre galerie pour découvrir des articles pratiques et illustrés, rédigés par nos spécialistes. Nos conseils vous aideront à sécuriser votre logement, à choisir la serrure idéale et à adopter les bons réflexes en cas d’urgence. Des ressources simples et efficaces pour votre tranquillité d’esprit au quotidien.</p>
        <a
          href="https://wa.me/33659514692"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 btn-fade-in"
        >
          <button className="btn-primary hover:scale-105 transition-all duration-200 hover:cursor-pointer flex items-center justify-center w-full">
            📬 Contactez-nous
          </button>
        </a>
        <Image
          ref={el => { animatedImgRefs.current[1] = el; }}
          src="/decor-ellipse-13.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute md:top-10 md:left-70 top-0 left-20 z-10" data-anim-type="animate-rotate-bounce-left"/>
        <Image
          ref={el => { animatedImgRefs.current[2] = el; }}
          src="/decor-ellipse-14.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-30 md:left-40 left-0 z-50" data-anim-type="animate-rotate-bounce-right"/>
        <Image
          ref={el => { animatedImgRefs.current[3] = el; }}
          src="/decor-ellipse-15.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-60 md:left-50 left-45 z-10 opacity-0 md:opacity-100" data-anim-type="animate-rotate-bounce-left"/>
        <Image
          ref={el => { animatedImgRefs.current[4] = el; }}
          src="/decor-ellipse-16.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-90 md:left-90 left-15 z-10" data-anim-type="animate-rotate-bounce-right"/>
        <Image
          ref={el => { animatedImgRefs.current[5] = el; }}
          src="/decor-ellipse-17.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="md:absolute top-20 md:left-96 left-5 z-50 hidden md:block" data-anim-type="animate-rotate-bounce-left"/> 
        <Image
          ref={el => { animatedImgRefs.current[6] = el; }}
          src="/decor-ellipse-18.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-10 md:right-70 right-0 z-10" data-anim-type="animate-rotate-bounce-right"/>
        <Image
          ref={el => { animatedImgRefs.current[7] = el; }}
          src="/decor-ellipse-19.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-30 md:right-40 right-15 z-50" data-anim-type="animate-rotate-bounce-left"/>
        <Image
          ref={el => { animatedImgRefs.current[8] = el; }}
          src="/decor-ellipse-20.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="md:absolute top-60 md:right-50 right-45 z-10 hidden md:block" data-anim-type="animate-rotate-bounce-right"/>
        <Image
          ref={el => { animatedImgRefs.current[9] = el; }}
          src="/decor-ellipse-21.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="absolute top-90 md:right-90 right-10 z-10" data-anim-type="animate-rotate-bounce-left"/>
        <Image
          ref={el => { animatedImgRefs.current[10] = el; }}
          src="/decor-ellipse-22.png"  alt="élément décoratif galerie serrurier" width={50} height={50} className="md:absolute top-20 md:right-96 right-5 z-50 hidden md:block" data-anim-type="animate-rotate-bounce-right"/>
      </section>

      <section ref={footerRef} className="w-full h-fit md:p-10 opacity-0 reveal-delay">
        <Footer />
      </section>
    </main>
  );
}