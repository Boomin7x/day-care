import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Star, Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50">
      {/* Header Section with background image */}
      <div
        className="relative overflow-hidden px-2 md:px-4 py-12 md:py-24"
        style={{
          backgroundImage: "url('img/fond2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-yellow-500/80"></div> */}

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 text-6xl">🧸</div>
          <div className="absolute top-8 right-8 text-4xl">🌟</div>
          <div className="absolute bottom-4 left-12 text-5xl">🎈</div>
          <div className="absolute bottom-8 right-4 text-4xl">🦋</div>
        </div>

        <div className="relative z-10 max-w-4xl  mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mt-8  mb-4 font-rounded">
            Contactez-nous
          </h1>
          <p className="text-xl  max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions sur notre
            garderie
          </p>
        </div>

        {/* Cloud decoration at bottom */}
        <div className="absolute top-0 -mb-1">
          <img
            src="img/bg_nuage_bas_home.png"
            alt="Decoration nuages"
            className="w-full h-auto"
            style={{ display: "block" }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-4 py-8 md:py-12 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-t-lg">
                <CardTitle className="text-xl md:text-2xl font-bold flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Nous vous contacterons très bientôt.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600"
                    >
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Nom *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Votre nom"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-green-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Prénom *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Votre prénom"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-green-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Téléphone *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+237 xxx xxx xxx"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-green-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-gray-700"
                        >
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-green-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Parlez-nous de vos besoins, l'âge de votre enfant, vos questions..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="border-2 border-gray-200 rounded-xl focus:border-green-400 focus:ring-green-400 resize-none"
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full h-12 bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-base md:text-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Envoi en cours...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer le message
                        </div>
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4 md:space-y-8">
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-t-lg">
                <CardTitle className="text-lg md:text-xl font-bold flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Nos coordonnées
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Adresse
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Bonamoussadi Denver
                      <br />
                      <span className="italic">
                        (villa après celle d'ETO'O)
                      </span>
                      <br />
                      <span className="font-semibold">Douala</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a
                      href="mailto:graineseveil25@gmail.com"
                      className="text-blue-600 hover:text-blue-800 transition-colors text-sm"
                    >
                      graineseveil25@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Téléphone
                    </h4>
                    <div className="space-y-1">
                      <a
                        href="tel:+237671988316"
                        className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      >
                        +237 671 98 83 16
                      </a>
                      <a
                        href="tel:+237655902055"
                        className="block text-blue-600 hover:text-blue-800 transition-colors text-sm"
                      >
                        +237 655 90 20 55
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-yellow-50">
              <CardContent className="p-4 md:p-6">
                <div className="text-center space-y-4">
                  <div className="flex justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <h3 className="font-bold text-gray-800">
                    Garderie de confiance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Plus de 50 familles nous font confiance pour leurs petits
                    trésors
                  </p>
                  <div className="flex justify-center space-x-4 text-xs text-gray-500">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700"
                    >
                      Agréé
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-700"
                    >
                      Personnel qualifié
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-700"
                    >
                      Sécurisé
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Contact Info & Map */}
          <div className="space-y-4 md:space-y-8 col-span-1 lg:col-span-3">
            {/* Contact Information */}

            {/* Map */}
            <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-t-lg">
                <CardTitle className="text-lg md:text-xl font-bold flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Localisation
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4339.852935030551!2d9.730291304222831!3d4.088918649169679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1744192579684!5m2!1sfr!2scm"
                  className="w-full h-64 rounded-b-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
