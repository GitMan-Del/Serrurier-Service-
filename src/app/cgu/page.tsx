
export const metadata = {
  title: "CGU – Conditions Générales d’Utilisation | Serrurier Île-de-France",
  description: "Consultez les Conditions Générales d’Utilisation (CGU) du site Serrurier Services Île-de-France : accès, droits, propriété intellectuelle et responsabilité de l’utilisateur.",
  keywords: [
    "CGU serrurier",
    "conditions générales d'utilisation serrurier",
    "utilisation site serrurier",
    "CGU Île-de-France",
    "propriété intellectuelle serrurier"
  ]
};

export default function CGU() {
    return (
      <main className="w-full min-h-screen bg-white">
        {/* Header Title */}
        <section className="w-full py-24 bg-white text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900">
            Conditions Générales d&apos;Utilisation
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Dernière mise à jour : Juillet 2025
          </p>
        </section>
  
        {/* Content Box */}
        <section className="flex justify-center px-4 pb-24">
          <div className="max-w-4xl w-full bg-gray-50 shadow-lg rounded-2xl p-8 md:p-12 text-gray-800 text-base leading-relaxed space-y-6">
            {/* === Adaugă aici textul tău legal CGU === */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu
              tristique augue. Aliquam erat volutpat. Etiam laoreet orci ut justo
              porta, at dignissim leo efficitur.
            </p>
  
            <p>
              Vous pouvez remplacer ce contenu par vos conditions réelles. Assurez-vous
              qu&apos;elles couvrent les obligations légales, les responsabilités de l’utilisateur,
              la gestion des données personnelles, etc.
            </p>
  
            <p>
              En utilisant ce site, vous acceptez les présentes conditions. Pour toute
              question, veuillez nous contacter via la page de contact.
            </p>
          </div>
        </section>
      </main>
    );
  }
  