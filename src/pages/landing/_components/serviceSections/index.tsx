import React from "react";
import ServiceCard from "./serviceCard";
import { motion } from "framer-motion";

interface Badge {
  text: string;
  bg: string;
}

export interface Service {
  title: string;
  icon: React.ReactNode;
  image: string;
  badge: Badge;
  description: React.ReactNode;
  buttonLabel: string;
  buttonColor: string;
}

const services: Service[] = [
  {
    title: "EN CRÈCHE",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 21V9.5a2 2 0 0 1 1-1.73l7-4.2a2 2 0 0 1 2 0l7 4.2A2 2 0 0 1 21 9.5V21" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    image: "/img/creche.png",
    badge: { text: "3+", bg: "bg-yellow-400" },
    description: (
      <>
        Nous accueillons vos enfants de <b>07h30 à 18h</b> et les répartissant
        en 03 sections:
        <ul className="list-disc pl-5 my-2">
          <li>
            <b>Beginner:</b> 0 à 09 mois
          </li>
          <li>
            <b>Intermediate:</b> 10 à 23 mois
          </li>
          <li>
            <b>Advanced:</b> 24 à 36 mois
          </li>
        </ul>
        Nous accompagnons vos enfants dans leur <b>développement holistique</b>{" "}
        au travers de multiple activités.
      </>
    ),
    buttonLabel: "Afficher",
    buttonColor: "bg-yellow-400 hover:bg-yellow-500",
  },
  {
    title: "EN GARDERIE",
    image: "/img/garderie.png",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21v-2a4.5 4.5 0 0 1 9 0v2" />
      </svg>
    ),
    badge: { text: "24/7", bg: "bg-green-500" },
    description: (
      <>
        Nous accueillons vos enfants selon le besoin:
        <ul className="list-disc pl-5 my-2">
          <li>
            <b>Une heure</b>
          </li>
          <li>
            <b>La journée</b>
          </li>
          <li>
            <b>La semaine</b>
          </li>
          <li>
            <b>Le week-end</b>
          </li>
          <li>
            <b>La Nuité</b>
          </li>
        </ul>
        Dans un environnement gardé par un <b>agent de sécurité compétent</b> et
        sous <b>Caméras de sécurité</b>
      </>
    ),
    buttonLabel: "Afficher",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "HALTE - GARDERIE",
    image: "/img/halte-garderie.png",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    badge: { text: "Accompagnement", bg: "bg-yellow-300" },
    description: (
      <>
        Cette offre est idéale
        <ul className="list-disc pl-5 my-2">
          <li>
            Pour le parent qui a besoin pour son enfant inscrit en maternelle un
            accompagnement de <b>sécurité</b>, de <b>soutien</b> pour l'aide au
            devoir, de <b>developper les dons et les talents</b>.
          </li>
        </ul>
      </>
    ),
    buttonLabel: "Afficher",
    buttonColor: "bg-yellow-300 hover:bg-yellow-400",
  },
  {
    title: "ENFANTS À BESOINS SPECIAUX",
    image: "/img/besoins-speciaux.png",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21v-2a4.5 4.5 0 0 1 9 0v2" />
        <path d="M16 11.13a4 4 0 0 1 0 1.74" />
      </svg>
    ),
    badge: { text: "Soutien", bg: "bg-sky-400" },
    description: (
      <>
        <ul className="list-disc pl-5 my-2">
          <li>
            <b>Enfants avec trouble de l'apprentissage</b>
          </li>
          <li>
            <b>Enfants troubles émotionnels et comportementaux</b>
          </li>
          <li>
            <b>
              Enfants avec une déficience intellectuelle légère, modérée ou
              sévère
            </b>
          </li>
        </ul>
      </>
    ),
    buttonLabel: "Afficher",
    buttonColor: "bg-sky-400 hover:bg-sky-500",
  },
  {
    title: "ACTIVITÉS PÉRISCOLAIRES",
    image: "/img/periscolaire-2.png",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <path d="M3 10v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10" />
        <path d="M8 14h8M8 18h8" />
      </svg>
    ),
    badge: { text: "Ateliers", bg: "bg-green-500" },
    description: (
      <>
        Nous accueillons vos enfants scolarisés chez <b>Graines d'Eveil</b> ou
        non en fin de journée après l'école. et proposons des ateliers :
        <ul className="list-disc pl-5 my-2">
          <li>
            <b>Artistiques</b>
          </li>
          <li>
            <b>Sportifs</b>
          </li>
          <li>
            <b>Lecture</b>
          </li>
        </ul>
        et un service d' <b>aide aux devoirs</b>.
      </>
    ),
    buttonLabel: "Afficher",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
];
const ServiceSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-col items-center py-12 px-2 animate-fade-in">
        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-12 text-center">
          Ce que nous proposons
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 container mx-auto px-2 md:px-0">
          {services?.map((items) => (
            <ServiceCard key={items.title} service={items} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;
