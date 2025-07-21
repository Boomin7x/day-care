import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage = () => {
  const values = [
    {
      image: "img/eglise.png",
      title: "FOI ET SPIRITUALITE EN CHRIST",
      description: "Essentiel pour développer une relation avec Dieu.",
      color: "bg-blue-100",
    },
    {
      image: "img/amour.png",
      title: "AMOUR ET COMPASSION",
      description:
        "Carburant pour que l'enfant se développe de façon harmonieuse.",
      color: "bg-pink-100",
    },
    {
      image: "img/respect.png",
      title: "INCLUSION ET RESPECT",
      description:
        "Education pour tous, quelques soient l'origine, les croyances et leurs capacités.",
      color: "bg-purple-100",
    },
    {
      image: "img/talent.png",
      title: "EXCELLENCE ET RESPONSABILITE",
      description: "Tout ce qu'il faut pour fournir un service de qualité.",
      color: "bg-green-100",
    },
  ];

  const objectives = [
    "Créer un environnement d'apprentissage stimulant et ludique qui favorise l'initiative, la curiosité et l'autonomie chez l'enfant.",
    "Mettre en place un projet éducatif innovant qui optimise les compétences holistiques pour un résultat satisfaisant chez les parents et les enfants et qui intègre le développement d'une relation personnelle avec Dieu le Père de notre Seigneur Jésus-Christ et la connaissance de sa parole.",
    "Collaborer avec les parents dans leurs rôle de parents pour des résultats efficaces et rapides au travers de mentorat, coaching, ateliers, et master class et sur leur leadership parental en ligne et en présentiel.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with background images */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('img/fond2.jpg')",
          backgroundSize: "cover",
        }}
      >
        {/* Top cloud decoration */}
        <div className="w-full">
          <img src="img/bg_nuage_bas_home.png" alt="" className="w-full" />
        </div>

        <div className="container mx-auto px-4 text-center py-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 drop-shadow-lg">
            À propos de nous
          </h1>
        </div>

        {/* Bottom cloud decoration */}
        <div className="w-full">
          <img src="img/nuage_bg.webp" alt="" className="w-full" />
        </div>
      </div>

      {/* Vision & Mission Section */}

      <div
        className=" mx-auto px-4 py-16"
        style={{
          backgroundImage: "url('img/fond2.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4">
                <img
                  src="img/cible-3d.png"
                  alt="vision"
                  width="150"
                  className="mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">
                NOTRE VISION
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg leading-relaxed text-gray-700">
                Fournir des{" "}
                <span className="font-bold text-yellow-600">armes solides</span>{" "}
                à nos touts petits afin qu'au cours de leur vie,{" "}
                <span className="font-bold text-blue-600">
                  ils puissent affronter et vaincre tous les combats
                </span>{" "}
                qui se présenteront à eux et ce même dans leur vie d'adulte et
                faire la fierté de leur parent.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4">
                <img
                  src="img/lancement.png"
                  alt="mission"
                  width="150"
                  className="mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800">
                NOTRE MISSION
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg leading-relaxed text-gray-700">
                <span className="bg-yellow-200 px-2 py-1 rounded-lg">
                  En partenariat avec les parents,
                </span>{" "}
                <span className="font-bold text-yellow-600">
                  accompagner les enfants à acquérir des compétences variées au
                  travers d'expériences et techniques d'apprentissage uniques et
                  personnalisées
                </span>{" "}
                pouvant les permettre d'exceller dans tout ce qu'ils
                entreprendront dans un monde en constante évolution.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="bg-gradient-to-r from-green-100 via-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              NOS OBJECTIFS
            </h2>
            <div className="mx-auto mb-8">
              <img
                src="img/objectif.png"
                alt="objectifs"
                width="250"
                className="mx-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {objectives.map((objective, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {objective}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className=" text-center py-8 mb-12 ">
            <h2 className="text-4xl font-bold">Nos Valeurs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:scale-105 overflow-hidden"
                >
                  <CardHeader className="text-center pb-2">
                    <div
                      className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${value.color}`}
                    >
                      <img
                        src={value.image}
                        alt={value.title}
                        width="100"
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="text-center px-4 pb-6">
                    <h4 className="font-bold text-lg mb-3 text-gray-800 leading-tight">
                      {value.title}
                    </h4>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Footer Wave */}
    </div>
  );
};

export default AboutPage;
