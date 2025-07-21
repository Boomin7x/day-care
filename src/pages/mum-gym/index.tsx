import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MomGymPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validate form data
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: "", phone: "", email: "" });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Hero Section with decorative elements */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 py-8">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full opacity-10 -translate-x-8 -translate-y-8"></div>
        <div className="absolute top-10 right-10 w-24 h-24 bg-white rounded-full opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full opacity-10 translate-x-10 translate-y-10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Maman Gym
          </h1>
          <div className="w-32 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left side - Image */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <img
                src="img/mum-gym-1.jpg"
                alt="mum-gym"
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300 p-4 bg-white"
              />
              {/* Decorative frame effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </div>
          </div>

          {/* Right side - Content and Form */}
          <div className="lg:col-span-6 space-y-8">
            {/* Description Section */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-gray-700 text-justify mb-6">
                  Un moment de préparation en douceur pour renforcer le corps,
                  apprendre à gérer la respiration et aborder sereinement
                  l'accouchement. <br />
                  <br />
                  Un accompagnement personnalisé pour retrouver tonus et
                  bien-être, en respectant le rythme de récupération après la
                  naissance.
                </p>

                {/* Partnership Section */}
                <div className="flex items-center justify-start space-x-3 pt-4 border-t border-gray-200">
                  <span className="font-semibold text-gray-700">
                    En partenariat avec
                  </span>
                  <img
                    src="img/logo_FoRe.png"
                    alt="logo_FoRe"
                    width="100"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Registration Form */}
            <Card className="bg-white border-0 shadow-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-6">
                <CardTitle className="text-2xl font-bold">
                  Inscription
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {/* Success Message */}
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                    <p className="text-green-700 text-center font-medium">
                      🎉 Inscription réussie ! Nous vous contactons bientôt.
                    </p>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Noms et Prénoms"
                      required
                      className="w-full h-14 px-4 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Téléphone"
                      required
                      className="w-full h-14 px-4 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="E-mail"
                      required
                      className="w-full h-14 px-4 border-2 border-gray-200 rounded-lg focus:border-pink-400 focus:outline-none transition-colors duration-300 bg-gray-50 focus:bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`w-full h-14 rounded-lg font-semibold text-lg transition-all duration-300 transform ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105 active:scale-95"
                      } text-white shadow-lg hover:shadow-xl`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Inscription en cours...</span>
                        </span>
                      ) : (
                        "Je m'inscris"
                      )}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blinking promotional text */}
            <div className="text-center">
              <p className="text-pink-600 font-semibold text-lg animate-pulse">
                ✨ Places limitées - Inscrivez-vous dès maintenant ! ✨
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Footer Wave */}
      <div className="relative mt-16">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,50 C300,80 600,20 900,50 C1050,70 1150,30 1200,40 L1200,120 L0,120 Z"
            className="fill-pink-400 opacity-50"
          ></path>
          <path
            d="M0,70 C300,100 600,40 900,70 C1050,90 1150,50 1200,60 L1200,120 L0,120 Z"
            className="fill-purple-400 opacity-30"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default MomGymPage;
