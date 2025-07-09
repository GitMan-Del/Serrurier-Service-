"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Navbar fixed top */}
      <nav className="fixed w-fit md:left-40 bg-transparent top-10 left-0 z-50 flex items-center justify-between px-6 py-3">
        <button
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-special)] shadow-lg hover:scale-105 transition-all group hover:cursor-pointer"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <div className="flex flex-col gap-2">
            <span className="block w-5 h-1 bg-white rounded transition-all"></span>
            <span className="block w-5 h-1 bg-white rounded transition-all"></span>
            <span className="block w-5 h-1 bg-white rounded transition-all"></span>
          </div>
        </button>
      </nav>
      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      {/* Sidebar */}
      <aside
        className={`fixed z-100 top-0 left-0 h-full w-72 max-w-[90vw] bg-white shadow-2xl flex flex-col pt-8 px-6 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
        role="navigation"
        aria-label="Menu principal"
      >
        <button
          className="self-end mb-8 text-2xl text-gray-500 hover:text-[var(--color-primary)] transition-colors hover:cursor-pointer"
          aria-label="Fermer le menu"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
        <nav className="flex flex-col gap-6 text-lg  ">
          <a href="#top" className="hover:underline" onClick={() => setOpen(false)}>Accueil</a>
          <a href="#gallery" className="hover:underline" onClick={() => setOpen(false)}>Galerie photos</a>
          <a href="#avis" className="hover:underline" onClick={() => setOpen(false)}>Avis clients</a>
          <a href="#services" className="hover:underline" onClick={() => setOpen(false)}>Nos services</a>
        </nav>
        <div className="mt-auto pt-10 text-xs text-gray-400">© 2025 Serrurier Services</div>
      </aside>
    </>
  );
} 