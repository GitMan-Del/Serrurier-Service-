"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Urgence à 23h un samedi soir, serrure bloquée à l'entrée de mon restaurant. Service rapide, clair et efficace. Technicien courtois, travail propre. Un vrai soulagement!",
    name: "Karim B.",
    role: "Gérant de restaurant",
    avatar: "/karim.jpg",
    stars: 5,
  },
  {
    text: "J'ai claqué la porte en sortant jeter les poubelles... Le serrurier est arrivé en moins de 25 minutes. Très professionnel, intervention sans dégâts, tarif annoncé à l'avance. Je recommande sans hésiter !",
    name: "Julie R.",
    role: "Assistante médicale",
    avatar: "/julie.jpg",
    stars: 5,
  },
  {
    text: "Intervention rapide et efficace pour une porte bloquée. Le serrurier a été très rassurant et a tout expliqué. Merci !",
    name: "Marc D.",
    role: "Particulier",
    avatar: "/marc.jpg",
    stars: 5,
  },
  {
    text: "Très bon service, ponctuel et honnête. Je referai appel sans hésiter si besoin.",
    name: "Sophie L.",
    role: "Commerçante",
    avatar: "/sophie.jpg",
    stars: 5,
  },
];

function useResponsiveTestimonials() {
  const [visible, setVisible] = useState(2);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setVisible(1);
      } else {
        setVisible(2);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return visible;
}

export default function TestimonialCarousel() {
  const visible = useResponsiveTestimonials();
  const [start, setStart] = useState(0);
  const maxIndex = testimonials.length - visible;

  useEffect(() => {
    // Reset start index if visible changes and current start is out of bounds
    if (start > maxIndex) setStart(Math.max(0, maxIndex));
  }, [visible, maxIndex, start]);

  const handlePrev = () => setStart((s) => Math.max(0, s - 1));
  const handleNext = () => setStart((s) => Math.min(maxIndex, s + 1));

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 md:p-10 p-3">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center items-stretch">
        {testimonials.slice(start, start + visible).map((t, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white border border-gray-300 rounded-2xl p-6 shadow-sm relative min-w-[260px] max-w-[420px] flex flex-col justify-between mb-4 md:mb-0 mx-auto"
          >
            <div className="flex flex-row items-center gap-1 mb-2">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-800 text-base mb-6">“{t.text}”</p>
            <div className="flex flex-row items-center gap-3 mt-auto">
              <Image src={t.avatar} alt={t.name} width={48} height={48} className="rounded-full object-cover border border-gray-200" />
              <div>
                <div className="font-bold text-lg">{t.name}</div>
                <div className="text-gray-400 text-sm">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center gap-4 mt-2 justify-center w-full">
        <button
          onClick={handlePrev}
          disabled={start === 0}
          className={`rounded-full border border-gray-400 w-8 h-8 flex items-center justify-center text-xl transition-colors ${start === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          aria-label="Previous"
        >
          &#60;
        </button>
        <button
          onClick={handleNext}
          disabled={start === maxIndex}
          className={`rounded-full border border-gray-400 w-8 h-8 flex items-center justify-center text-xl transition-colors ${start === maxIndex ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100'}`}
          aria-label="Next"
        >
          &#62;
        </button>
      </div>
    </div>
  );
} 