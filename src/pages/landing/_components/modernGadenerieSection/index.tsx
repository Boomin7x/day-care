import {
  Brain,
  CheckCircle,
  Eye,
  Heart,
  MessageCircle,
  Target,
  Users,
  Zap,
} from "lucide-react";

const ModernGarderieSections = () => {
  const developmentAspects = [
    { name: "Spirituel", icon: Heart },
    { name: "Cognitif", icon: Brain },
    { name: "Social", icon: Users },
    { name: "Affectif", icon: Heart },
    { name: "Moteur", icon: Zap },
    { name: "Linguistique", icon: MessageCircle },
    { name: "Intellectuel", icon: Target },
    { name: "Sensoriel", icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50/30 to-green-100/20">
      {/* Floating Announcement Bar */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-green-100/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="relative overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 to-green-500 px-8 py-3 shadow-lg shadow-yellow-400/25">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-green-300/20 animate-pulse"></div>
              <div className="relative flex items-center gap-3 text-white font-medium">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-white animate-ping opacity-75"></div>
                </div>
                <span className="text-lg">
                  La Garderie est <span className="font-bold">OUVERTE</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-yellow-200/20 to-green-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-green-200/20 to-yellow-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto ">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <div className="space-y-8">
              {/* Header with Modern Typography */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-50 to-green-50 border border-yellow-100/50">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-slate-700">
                    Éducation de qualité depuis 2025
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-green-600 bg-clip-text text-transparent">
                    Éducation inclusive
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 to-yellow-400 bg-clip-text text-transparent">
                    & Pédagogie interactive
                  </span>
                </h1>

                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full"></div>
              </div>

              {/* Description with Modern Card Design */}
              <div className="space-y-6">
                <div className="relative p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-xl shadow-green-900/5">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">
                      Le Centre d'Accueil et de Développement Holistique pour
                      Petits Enfants GRAINES D'ÉVEIL
                    </strong>{" "}
                    a été fondé en 2025 par{" "}
                    <strong className="text-slate-900">
                      Mme Diana KENTOH Epse TANKOU
                    </strong>{" "}
                    afin d'offrir des services de garde d'enfants de haute
                    qualité.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-green-100/50 border border-yellow-200/30">
                    <h3 className="font-semibold text-slate-800 mb-2">
                      Notre Mission
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Environnement propice au développement global et au
                      bien-être des enfants âgés de <strong>0 à 6 ans</strong>.
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-yellow-100/50 border border-green-200/30">
                    <h3 className="font-semibold text-slate-800 mb-2">
                      Notre Approche
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Accompagnement bienveillant des enfants neuro-typiques et
                      ceux ayant des besoins spécifiques.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-green-50 border border-yellow-200/30">
                  <p className="text-slate-700 leading-relaxed">
                    Notre objectif est de soutenir l'épanouissement de chaque
                    enfant, quelles que soient ses capacités, pour qu'il
                    devienne un individu conscient, équilibré et heureux.
                  </p>
                </div>
              </div>

              {/* Development Aspects - Modern Grid */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800">
                  Aspects développés chez l'enfant
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {developmentAspects.map((aspect) => {
                    const IconComponent = aspect.icon;
                    return (
                      <div
                        key={aspect.name}
                        className="group relative p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/30 hover:border-green-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 hover:-translate-y-1"
                      >
                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-100 to-green-100 group-hover:from-yellow-200 group-hover:to-green-200 transition-colors">
                            <IconComponent className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                            {aspect.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Image Column with Modern Design */}
            <div className="relative">
              <div className="relative group">
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-green-400 rounded-2xl rotate-12 opacity-80 group-hover:rotate-45 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-yellow-400 rounded-xl -rotate-12 opacity-80 group-hover:-rotate-45 transition-transform duration-500"></div>

                {/* Main image container */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-green-50 p-2 shadow-2xl shadow-green-900/10 group-hover:shadow-3xl group-hover:shadow-green-900/15 transition-shadow duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/img/apropos.jpg"
                      alt="Enfants à la garderie"
                      className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Stats floating cards */}
                <div className="absolute -right-8 top-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-yellow-400 bg-clip-text text-transparent">
                      0-6
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      ans
                    </div>
                  </div>
                </div>

                <div className="absolute -left-8 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent">
                      2025
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      Fondée
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-20 fill-green-100/50"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default ModernGarderieSections;
