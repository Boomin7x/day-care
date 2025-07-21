import React, { useState } from "react";
import {
  X,
  Phone,
  Mail,
  User,
  Calendar,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

const VacancesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });
  const [showSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header Section */}
      {/* <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-green-500/30 animate-pulse"></div>
        <div className="relative container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Graines d'Éveil
            </h1>
            <p className="text-xl md:text-2xl opacity-90 font-light">
              Cultivons ensemble l'épanouissement de vos enfants
            </p>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image and Features */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src="img/vacances.jpeg"
                alt="Activités pour enfants"
                className="relative w-full rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
              />
            </div>

            {/* Features Grid */}
          </div>

          {/* Right Column - Program Image and Registration */}
          <div className="space-y-8">
            {/* Program Schedule Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-2 shadow-2xl">
                <img
                  src="img/prog_vacances.jpeg"
                  alt="Programme des vacances"
                  className="w-full rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce">
                Cliquez pour agrandir
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-green-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-2">
                  <User className="w-6 h-6" />
                  Inscription
                </h2>
              </div>

              <div className="p-8">
                {showSuccess && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <AlertDescription className="text-green-800">
                      ✅ Inscription envoyée avec succès ! Nous vous
                      recontacterons bientôt.
                    </AlertDescription>
                  </Alert>
                )}

                <div className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Noms et Prénoms"
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Téléphone"
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="E-mail"
                      required
                      className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-xl"
                  >
                    Je m'inscris 🎯
                  </button>
                </div>

                <div className="mt-6 text-center text-sm text-gray-600">
                  <p>
                    En vous inscrivant, vous acceptez de recevoir des
                    informations sur nos activités.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <Calendar className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">
              Activités Variées
            </h3>
            <p className="text-gray-600 text-sm">
              Des programmes adaptés à chaque tranche d'âge
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <Clock className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">
              Horaires Flexibles
            </h3>
            <p className="text-gray-600 text-sm">
              Adapté aux besoins des parents
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <MapPin className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">Lieu Sécurisé</h3>
            <p className="text-gray-600 text-sm">
              Environnement adapté et sécurisé
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50">
            <Star className="w-8 h-8 text-orange-500 mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">
              Équipe Qualifiée
            </h3>
            <p className="text-gray-600 text-sm">
              Professionnels de la petite enfance
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Program Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <img
                src="img/prog_vacances.jpeg"
                alt="Programme des vacances"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VacancesPage;
