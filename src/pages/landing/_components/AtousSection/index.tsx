import { Heart } from "lucide-react";
import AtoutCard from "./AtousCard";

export interface Atout {
  icon: string;
  title: string;
}

const atouts: Atout[] = [
  {
    icon: "img/icon/garderie.png",
    title: "Un environnement differencier et spacieux",
  },
  {
    icon: "img/icon/personnel.png",
    title: "Personnel bienveillant et qualifié",
  },
  {
    icon: "img/icon/surveillance.png",
    title: "Espace sous Caméra de Suveillance",
  },
  {
    icon: "img/icon/cantine.png",
    title: "Cantine",
  },
  {
    icon: "img/icon/agent-de-securite.png",
    title: "Un Agent de sécurité compétent",
  },
];

const AtousSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-gradient-to-br from-yellow-50/30 via-white to-green-50/30 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-yellow-200/10 to-green-200/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-200/10 to-blue-200/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-300 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-32 left-16 w-6 h-6 bg-green-300 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-300 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-green-500 text-transparent bg-clip-text mb-4">
            <Heart className="w-8 h-8 text-yellow-500" fill="currentColor" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Pourquoi nous choisir
            </span>
            <Heart className="w-8 h-8 text-green-500" fill="currentColor" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text mb-6">
            Nos Atouts
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez ce qui fait de Graines d'Éveil un environnement unique et
            sécurisé pour l'épanouissement de votre enfant
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {atouts?.map((item, index) => (
            <div
              key={index}
              className="transform transition-all duration-500"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "slideInUp 0.8s ease-out forwards",
              }}
            >
              <AtoutCard atout={item} index={index} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <span className="relative z-10">
              Je veux mieux connaître Graines d'Éveil
            </span>
            <Heart
              className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300 relative z-10"
              fill="currentColor"
            />

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
    </section>
  );
};

export default AtousSection;
