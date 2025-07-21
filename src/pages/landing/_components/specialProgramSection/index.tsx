import { useState } from "react";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export default function ModernEventsCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const events = [
    {
      title: "Séance Prénatale et postnatale",
      image: "/img/mum-gym-1.jpg",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
          <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
        </svg>
      ),
      badge: { text: "Santé", bg: "bg-emerald-500" },
      description:
        "Des exercices adaptés pour accompagner en toute sécurité le corps avant et après bébé.",
      buttonLabel: "Afficher",

      buttonColor: "bg-blue-600 hover:bg-blue-700",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Spéciale vacances",
      image: "/img/vacances-1.jpg",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
          <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
        </svg>
      ),
      badge: { text: "Vacances", bg: "bg-blue-500" },
      description:
        "Des enfants funs et futés. Les vacances autrement. Du 09 Juin au 29 août 2025 : art oratoire, arts plastiques, Danse/Karaté.",
      buttonLabel: "Afficher",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      gradient: "from-blue-500 to-purple-600",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-slate-50 p-2 md:p-8 md:pt-24">
      {/* Header */}
      {/* <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Nos Événements
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos programmes spécialement conçus pour accompagner votre
            famille
          </p>
        </div>
      </div> */}

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 px-0">
          {events.map((event, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer rounded-lg border-0 ${
                hoveredCard === index ? "ring-2 ring-blue-400/30" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Header with Gradient Overlay */}
              <div className="relative w-full aspect-[6/7] overflow-hidden min-h-[220px] md:min-h-0">
                {/* Placeholder gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-90`}
                ></div>

                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 object-cover w-full h-full"
                />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                {/* Icon Container */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4">
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-lg">
                    {event.icon}
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4">
                  <span
                    className={`${event.badge.bg} text-white px-2.5 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium shadow-lg backdrop-blur-sm`}
                  >
                    {event.badge.text}
                  </span>
                </div>

                {/* Floating Action Button */}
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>

              <CardContent className="p-4 md:p-8">
                {/* Title */}
                <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-2 md:mb-4 text-xs md:text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>Flexible</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Sur site</span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-gray-600 leading-relaxed mb-4 md:mb-6 line-clamp-3 text-xs md:text-base"
                  dangerouslySetInnerHTML={{ __html: event.description }}
                />

                {/* Action Button */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                  <Button
                    className={`${event.buttonColor} text-white font-semibold px-4 md:px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group/btn w-full md:w-auto`}
                  >
                    <span>{event.buttonLabel}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>

                  {/* Progress Indicator */}
                  <div className="hidden md:flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500 font-medium">
                      Disponible
                    </span>
                  </div>
                </div>
              </CardContent>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-sm"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="px-6 md:px-8 py-3 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group w-full md:w-auto"
          >
            <span className="mr-2">Voir plus d'événements</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </div>
      </div>
    </div>
  );
}
