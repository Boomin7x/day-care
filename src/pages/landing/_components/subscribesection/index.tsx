import { useState, useEffect } from "react";
import { Calendar, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const enrollmentDates = [
    {
      date: "09 Juin 2025",
      service: "La Garderie",
      icon: <Users className="w-5 h-5" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      date: "09 Juin 2025",
      service: "Spéciale vacances",
      icon: <Star className="w-5 h-5" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      date: "08 Septembre 2025",
      service: "La Crèche et les autres services",
      icon: <Calendar className="w-5 h-5" />,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative py-20 px-4 flex items-center bg-[url('/img/fond_apropo.png')] bg-no-repeat bg-cover justify-center min-h-[60vh] animate-fade-in"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div
          className={`relative z-10 max-w-5xl w-full mx-auto transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Card */}
          <Card className="bg-white/70 backdrop-blur-xl shadow-2xl border border-white/20 rounded-lg">
            <CardContent className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl  font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
                  Inscrivez-vous pour la prochaine rentrée
                </h1>
                <p className="text-lg  text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Vous pouvez dès à présent procéder à la préinscription de
                  votre enfant. Les inscriptions sont possibles tout au long de
                  l'année.
                </p>
              </div>

              {/* Enrollment Dates Section */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
                  Dates des rentrées
                </h3>

                <div className="grid ">
                  {enrollmentDates.map((item, index) => (
                    <Card
                      key={index}
                      className={`group relative bg-white  transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100 rounded-none first:rounded-t-md last:rounded-b-md ${
                        activeCard === index
                          ? "ring-2 ring-yellow-400 ring-opacity-60"
                          : ""
                      }`}
                      onMouseEnter={() => setActiveCard(index)}
                      onMouseLeave={() => setActiveCard(null)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} text-white shadow-lg  transition-transform duration-300`}
                            >
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-xl font-bold text-gray-800 mb-1">
                                {item.date}
                              </div>
                              <div className="text-gray-600 font-medium">
                                {item.service}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="group  bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-6 px-8 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 min-w-[160px] rounded-lg">
                  <span>Tarifs</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button
                  variant="secondary"
                  className="group bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-bold py-6 px-8 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 min-w-[160px] rounded-lg"
                >
                  <span>Inscription</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Events Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500"></div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px), radial-gradient(circle at 80% 50%, white 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
              backgroundPosition: "0 0, 30px 30px",
            }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Card className="inline-block bg-white/10 backdrop-blur-sm border-white/20 rounded-md">
            <CardContent className="p-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-pulse">
                Nos évènements à venir
              </h2>
              <div className="h-1 bg-white/30 rounded-full mx-auto"></div>
              <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
                Découvrez tous nos évènements spéciaux et activités programmées
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
