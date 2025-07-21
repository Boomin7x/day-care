import ParentActivityCard from "./parentsActivityCard";
import { motion } from "framer-motion";

// Type definitions
interface Badge {
  text: string;
  bg: string;
}

export interface ParentActivity {
  title: string;
  image: string;
  badge: Badge;
  description: string;
  buttonLabel: string;
  buttonColor: string;
}

const parentActivities: ParentActivity[] = [
  {
    title: "Epanouissements Parent",
    image: "/img/mum-gym.jpg",
    badge: { text: "3+", bg: "bg-yellow-400" },
    description:
      "Des activités variées pour favoriser l'épanouissement des parents, alliant bien-être, partage et développement personnel",
    buttonLabel: "Afficher",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Activités éducatives",
    image: "/img/education_maman.jpg",
    badge: { text: "3+", bg: "bg-yellow-400" },
    description:
      "Ces activités favorisent l'éveil, la socialisation et le développement global des jeunes enfants à travers des jeux, des ateliers sensoriels et des interactions encadrées par des professionnels.",
    buttonLabel: "Afficher",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "Activités Familiales",
    image: "/img/activite_famille.jpg",
    badge: { text: "5+", bg: "bg-yellow-400" },
    description:
      "Elles favorisent l'éveil des enfants et renforcent les liens parents-enfants à travers des jeux, des ateliers créatifs et des moments partagés.",
    buttonLabel: "Afficher",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
];

const ParentActivitySection = () => {
  return (
    <motion.section
      id="parents"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-8 md:py-20 scroll-mt-[4rem] px-2 md:px-4 bg-[url('/img/fond2.jpg')] bg-repeat bg-opacity-10 animate-fade-in"
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl md:text-4xl font-bold text-neutral-800 mb-8 md:mb-12 text-center">
          Activités pour parent
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full">
          {parentActivities?.map((items, i) => {
            return (
              <ParentActivityCard
                key={items?.image + "par"}
                activity={items}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ParentActivitySection;
