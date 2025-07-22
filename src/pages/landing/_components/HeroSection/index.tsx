import React from "react";
import { ArrowRight, Heart, Users, Star, Sun, Smile } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/img/enfant3.jfif')] bg-cover bg-center bg-no-repeat">
      {/* Optimized Overlay for daycare warmth */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-purple-900/50 to-orange-900/40" />

      {/* Floating Elements - Child-friendly */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-yellow-300/60 rounded-full animate-bounce delay-0" />
        <div className="absolute top-32 right-16 w-2 h-2 bg-pink-300/60 rounded-full animate-bounce delay-300" />
        <div className="absolute bottom-40 left-1/4 w-2.5 h-2.5 bg-blue-300/60 rounded-full animate-bounce delay-700" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-green-300/60 rounded-full animate-pulse" />
        <Star className="absolute top-16 right-1/4 w-4 h-4 text-yellow-200/50 animate-pulse delay-1000" />
        <Sun className="absolute bottom-20 right-12 w-5 h-5 text-orange-200/40 animate-spin slow" />
      </div>

      {/* Main Content Container */}
      <div className="relative py-16 lg:py-0 z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Welcome Badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/90 backdrop-blur-md shadow-lg mb-8 border border-white/20">
          <Smile className="w-5 h-5 text-orange-500" />
          <span className="text-sm font-semibold text-gray-700 tracking-wide">
            Bienvenue dans notre famille.
          </span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
            Graines
            <br />
            <span className="relative text-yellow-200">
              d'Éveil
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-80" />
            </span>
          </h1>
        </div>

        {/* Subtitle with daycare focus */}
        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg sm:text-xl text-white/95 font-medium leading-relaxed drop-shadow-lg">
            Centre d'Accueil et de Développement Holistique
            <br />
            <span className="text-yellow-200 font-bold text-xl sm:text-2xl">
              pour Petits Enfants
            </span>
          </p>
        </div>

        {/* Key Features - Daycare focused */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/25 transition-all duration-300 group shadow-lg">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-300 mb-2 mx-auto group-hover:scale-110 transition-transform drop-shadow-md" />
            <p className="text-white font-semibold text-xs sm:text-sm">
              Bienveillance
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/25 transition-all duration-300 group shadow-lg">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300 mb-2 mx-auto group-hover:scale-110 transition-transform drop-shadow-md" />
            <p className="text-white font-semibold text-xs sm:text-sm">
              Socialisation
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/25 transition-all duration-300 group shadow-lg">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 mb-2 mx-auto group-hover:scale-110 transition-transform drop-shadow-md" />
            <p className="text-white font-semibold text-xs sm:text-sm">Éveil</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20 hover:bg-white/25 transition-all duration-300 group shadow-lg">
            <Sun className="w-6 h-6 sm:w-8 sm:h-8 text-orange-300 mb-2 mx-auto group-hover:scale-110 transition-transform drop-shadow-md" />
            <p className="text-white font-semibold text-xs sm:text-sm">
              Épanouissement
            </p>
          </div>
        </div>

        {/* CTA Buttons - Daycare appropriate */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-400 via-yellow-500 to-green-500 rounded-full font-bold text-white shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-lg">
            <span>Découvrir nos services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-300 to-pink-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
          </button>

          <button className="px-8 py-4 bg-white/20 border-2 border-white/40 rounded-full font-semibold text-white backdrop-blur-md hover:bg-white/30 hover:border-white/60 transition-all duration-300 text-lg shadow-lg">
            Visiter notre crèche
          </button>
        </div>

        {/* Tagline - More daycare appropriate */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl max-w-2xl mx-auto">
          <p className="text-white/95 text-lg sm:text-xl font-medium mb-2">
            "Là où les rêves prennent racine"
          </p>
          <p className="text-yellow-200 text-base font-light italic">
            Un environnement sécurisé et stimulant pour l'épanouissement de
            votre enfant
          </p>
        </div>
      </div>

      {/* Scroll Indicator - Playful */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-yellow-300 rounded-full mt-2 animate-bounce shadow-sm" />
        </div>
        <p className="text-white/70 text-xs mt-2 font-medium">Découvrir</p>
      </div>
      {/* 
        Removed <style jsx> block because it is not valid in a .tsx file 
        and was causing a TypeScript error. If you need to add custom styles,
        consider using a global CSS file or Tailwind classes.
      */}
    </section>
  );
};

export default HeroSection;
