import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Heart,
} from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

const Footer: React.FC = () => {
  const quickLinks: FooterLink[] = [
    { label: "Accueil", href: "/" },
    { label: "A Propos de Nous", href: "/apropos" },
    { label: "Contacts", href: "/contacts" },
  ];

  const serviceLinks: FooterLink[] = [
    { label: "Nos Services", href: "/services" },
    { label: "Pour Enfants", href: "/programs#enfants" },
    { label: "Pour Parents", href: "/programs#parents" },
    { label: "Mum-gym", href: "/mum-gym" },
    { label: "Spéciale vacances", href: "/vacances" },
  ];

  const socialLinks: SocialLink[] = [
    {
      platform: "Facebook",
      href: "https://web.facebook.com/profile.php?id=61572952787147",
      icon: <Facebook size={24} />,
    },
    {
      platform: "Instagram",
      href: "#",
      icon: <Instagram size={24} />,
    },
    {
      platform: "LinkedIn",
      href: "#",
      icon: <Linkedin size={24} />,
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Copyright Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium">
                <Heart size={16} className="text-yellow-400" />© Graines d'Eveil
                2025
                {/* <Heart size={16} className="text-yellow-400" /> */}
              </span>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <a href="/">
                  <img
                    src="/img/logo_en_blanc.png"
                    alt="Graines d'Eveil Logo"
                    className="h-16 w-auto object-contain mb-6"
                  />
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                  <Mail
                    size={18}
                    className="mt-0.5 text-green-400 group-hover:text-yellow-400 transition-colors duration-200"
                  />
                  <div>
                    <p className="text-sm text-gray-400">Email:</p>
                    <a
                      href="mailto:graineseveil25@gmail.com"
                      className="hover:text-green-400 transition-colors duration-200"
                    >
                      graineseveil25@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                  <Phone
                    size={18}
                    className="mt-0.5 text-green-400 group-hover:text-yellow-400 transition-colors duration-200"
                  />
                  <div>
                    <p className="text-sm text-gray-400">Téléphone:</p>
                    <div className="space-y-1">
                      <a
                        href="tel:+237671988316"
                        className="block hover:text-green-400 transition-colors duration-200"
                      >
                        +237 671 98 83 16
                      </a>
                      <a
                        href="tel:+237655902055"
                        className="block hover:text-green-400 transition-colors duration-200"
                      >
                        +237 655 90 20 55
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                  <MapPin
                    size={18}
                    className="mt-0.5 text-green-400 group-hover:text-yellow-400 transition-colors duration-200"
                  />
                  <div>
                    <p className="text-sm text-gray-400">Adresse:</p>
                    <p className="hover:text-green-400 transition-colors duration-200">
                      Bonamoussadi Denver
                      <br />
                      Douala
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Liens Rapides
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1 inline-block group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Nos Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1 inline-block group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white relative">
                Suivez-nous
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
              </h3>

              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Restez connectés avec nous sur nos réseaux sociaux pour ne rien
                manquer de nos actualités et événements.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-500/25"
                    title={social.platform}
                  >
                    <div className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {social.icon}
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {social.platform}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 animate-pulse" />
                <span>for children's future</span>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Politique de confidentialité
                </a>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  Mentions légales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
