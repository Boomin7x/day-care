import React from "react";
import ActivityCard from "./activityCard";
import { motion } from "framer-motion";
// Type definitions
interface Badge {
  text: string;
  bg: string;
}

export interface Activity {
  title: string;
  image: string;
  icon: React.ReactNode;
  badge: Badge;
  description: string;
  buttonLabel: string;
  buttonColor: string;
}

const activities: Activity[] = [
  {
    title: "Activités Spirituelles",
    image: "/img/baby-faith.jpg",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h18a3 3 0 1 0-3-3" />
      </svg>
    ),
    badge: { text: "Spiritualité", bg: "bg-yellow-400" },
    description:
      "Un moment de calme et d'émerveillement pour éveiller les petits cœurs à la spiritualité en Christ par des histoires, chants et des coutumes simples.",
    buttonLabel: "Afficher",
    buttonColor: "bg-yellow-400 hover:bg-yellow-500",
  },
  {
    title: "Activités Intellectuelles",
    image: "/img/baby-cooker.jpg",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
        <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
      </svg>
    ),
    badge: { text: "Cognitif", bg: "bg-blue-400" },
    description:
      "Des activités ludiques et éducatifs pour stimuler la curiosité, la logique et l'éveil intellectuel des tout-petits.",
    buttonLabel: "Afficher",
    buttonColor: "bg-blue-400 hover:bg-blue-500",
  },
  {
    title: "Activités linguistiques",
    image: "img/baby-speaker.jpg",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
        <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
      </svg>
    ),
    badge: { text: "Linguistique", bg: "bg-green-400" },
    description:
      "Des jeux et histoires pour nourrir l'amour des mots, enrichir le vocabulaire et éveiller la communication chez les petits.",
    buttonLabel: "Afficher",
    buttonColor: "bg-green-400 hover:bg-green-500",
  },
  {
    title: "Activités Motrices",
    image: "/img/baby-gym.jpg",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
        <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
      </svg>
    ),
    badge: { text: "Moteur", bg: "bg-purple-400" },
    description:
      "Jeux et parcours pour développer la coordination, l'équilibre et la confiance en soi, en bougeant avec plaisir !",
    buttonLabel: "Afficher",
    buttonColor: "bg-purple-400 hover:bg-purple-500",
  },
  {
    title: "Activités de vie quotidienne",
    image: "/img/baby-hygiene.jpg",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
        <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
      </svg>
    ),
    badge: { text: "Quotidien", bg: "bg-pink-400" },
    description:
      "Des activités joyeuses pour explorer son corps, développer les sens et grandir en pleine santé dans la connaissance des règle d'hygiène!",
    buttonLabel: "Afficher",
    buttonColor: "bg-pink-400 hover:bg-pink-500",
  },
  {
    title: "Activités sociale",
    image: "/img/baby-sociale.jpg",
    icon: (
      <svg
        className="w-16 h-16 mb-2 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
        <path d="M12 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16l-3-2-3 2 3-2 3 2z" />
      </svg>
    ),
    badge: { text: "Social", bg: "bg-orange-400" },
    description:
      "Jeux et moments partagés pour apprendre la coopération, l'empathie et le vivre-ensemble en douceur.",
    buttonLabel: "Afficher",
    buttonColor: "bg-orange-400 hover:bg-orange-500",
  },
];
const ActivitySection = () => {
  return (
    <motion.section
      id="enfants"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`py-8 md:py-20 px-2 md:px-4 scroll-mt-[4rem] bg-[url("data:image/svg+xml,%3Csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle%20cx='10'%20cy='10'%20r='4'%20fill='%23FACC15'%20fill-opacity='0.18'/%3E%3Crect%20x='24'%20y='24'%20width='8'%20height='8'%20rx='2'%20fill='%2316A34A'%20fill-opacity='0.13'/%3E%3C/svg%3E")] bg-repeat animate-fade-in`}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center drop-shadow-lg">
          <span className="text-green-700">Activités pour enfant</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full">
          {activities?.map((items, i) => (
            <ActivityCard key={items?.image} activity={items} index={i} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ActivitySection;
