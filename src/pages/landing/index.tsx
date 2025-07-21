import { motion } from "framer-motion";
import AtousSection from "./_components/AtousSection";
import HeroSection from "./_components/HeroSection";
import ActivitySection from "./_components/activitySection";
import ModernGarderieSections from "./_components/modernGadenerieSection";
import ParentActivitySection from "./_components/parentsActivitySection";
import ServiceSection from "./_components/serviceSections";
import ModernEventsCards from "./_components/specialProgramSection";
import SubscribeSection from "./_components/subscribesection";

// Types for InfoCard props
// interface InfoCardProps {
//   imageAlt?: string;
//   imageSrc?: string | null;
//   icon?: React.ReactNode;
//   title: string;
//   badge?: { text: string; bg: string };
//   description: React.ReactNode;
//   buttonLabel?: string;
//   buttonColor?: string;
//   onClick?: () => void;
//   alignment?: "vertical" | "horizontal";
// }

// Card component for reuse with framer-motion
// const InfoCard: React.FC<InfoCardProps> = ({
//   imageAlt,
//   imageSrc,
//   icon,
//   title,
//   badge,
//   description,
//   buttonLabel,
//   buttonColor,
//   onClick,
//   alignment = "vertical",
// }) => (
//   <motion.div
//     className={
//       alignment === "horizontal"
//         ? "bg-white rounded-2xl border border-border overflow-hidden flex flex-col md:flex-row md:h-64 h-auto"
//         : "bg-white rounded-2xl border border-border overflow-hidden flex flex-col"
//     }
//     whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
//     initial={{ opacity: 0, y: 40 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, amount: 0.2 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//   >
//     {/* Image/Icon Section */}
//     {alignment === "horizontal" ? (
//       <div className="relative w-full md:w-1/3 h-48 md:h-auto flex-shrink-0 flex items-center justify-center bg-gray-100">
//         {imageSrc ? (
//           <motion.img
//             src={imageSrc}
//             alt={imageAlt}
//             className="object-cover absolute inset-0 w-full h-full rounded-l-2xl md:rounded-l-2xl md:rounded-t-none rounded-t-2xl"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           />
//         ) : icon ? (
//           icon
//         ) : (
//           <span className="text-gray-400 text-4xl">Image</span>
//         )}
//       </div>
//     ) : (
//       <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center">
//         {imageSrc ? (
//           <motion.img
//             src={imageSrc}
//             alt={imageAlt}
//             className="object-cover absolute inset-0 w-full h-full rounded-t-2xl"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           />
//         ) : icon ? (
//           icon
//         ) : (
//           <span className="text-gray-400 text-4xl">Image</span>
//         )}
//       </div>
//     )}
//     {/* Content Section */}
//     <div
//       className={
//         alignment === "horizontal"
//           ? "flex-1 flex flex-col justify-center p-4 md:p-6 gap-2 md:gap-4 min-w-0"
//           : "p-4 md:p-6 flex-1 flex flex-col justify-between"
//       }
//     >
//       <div
//         className={
//           alignment === "horizontal"
//             ? "flex items-center gap-2 mb-2"
//             : "flex items-center flex-col gap-2 mb-2"
//         }
//       >
//         <h3
//           className={
//             alignment === "horizontal"
//               ? "text-base md:text-lg font-bold flex-1"
//               : "text-base md:text-lg font-bold flex-1 text-center"
//           }
//         >
//           {title}
//         </h3>
//         {badge && (
//           <span
//             className={`text-white text-xs font-bold px-2 py-1 rounded ${badge.bg}`}
//           >
//             {badge.text}
//           </span>
//         )}
//       </div>
//       <div
//         className={
//           alignment === "horizontal"
//             ? "text-gray-700 mb-2 md:mb-4 line-clamp-4 text-sm md:text-base"
//             : "text-gray-700 mb-2 md:mb-4 text-sm md:text-base"
//         }
//         dangerouslySetInnerHTML={
//           description ? { __html: description } : { __html: "" }
//         }
//       />
//       {buttonLabel && (
//         <motion.button
//           className={`font-semibold px-4 py-2 rounded transition w-full md:w-auto mt-2 md:mt-0 ${buttonColor}`}
//           whileTap={{ scale: 0.96 }}
//           whileHover={{ scale: 1.03 }}
//           onClick={onClick}
//         >
//           {buttonLabel}
//         </motion.button>
//       )}
//     </div>
//   </motion.div>
// );

const LandingPage = () => {
  return (
    <>
      {/* Sticky Header */}
      <HeroSection />
      {/* <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-border shadow-sm py-4 px-6 flex items-center justify-center animate-fade-in"
      >
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <a href="#services" className="hover:text-primary transition">
            Services
          </a>
          <a href="#atouts" className="hover:text-primary transition">
            Atouts
          </a>
          <a href="#activites" className="hover:text-primary transition">
            Activités
          </a>
          <a href="#inscription" className="hover:text-primary transition">
            Inscription
          </a>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </nav>
      </motion.header> */}
      {/* Hero Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative bg-[url(/img/enfant3.jfif)] bg-no-repeat bg-cover bg-[0_50%] min-h-[40vh] md:min-h-[60vh] flex items-center justify-center px-2 md:px-4 animate-fade-in"
      >
        <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-0" />
        <div className="relative z-10 max-w-2xl w-full flex flex-col rounded-xl md:bg-gradient-to-tr from-black/20 to-gray-800/20 md:backdrop-blur-lg items-center text-center gap-4 md:gap-6 py-8 md:py-16 px-2">
          <h2 className="text-lg md:text-2xl font-semibold text-primary-foreground/90 tracking-wide drop-shadow-md">
            Bienvenue
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground drop-shadow-lg leading-tight mb-2 md:mb-4">
            Graines d'Eveil
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/90 max-w-md mx-auto mb-2 md:mb-4">
            Centre d'Accueil et de Développement Holistique pour Petits Enfants
          </p>
          <Button className="mt-2 md:mt-4 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full transition-transform hover:scale-105 w-full md:w-auto font-semibold bg-primary text-primary-foreground/90">
            Là où les rêves prennent racine
          </Button>
        </div>
      </motion.section> */}

      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex justify-center items-center py-6 px-4 bg-accent/40 animate-fade-in"
      >
        <div className="bg-primary text-primary-foreground rounded-xl px-8 py-4 shadow-md text-xl font-semibold flex items-center gap-3">
          <span className="inline-block w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>
          La Garderie est <span className="font-bold">OUVERTE</span>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-8 md:py-16 px-2 md:px-4 bg-background animate-fade-in"
      >
        <div className="flex flex-col md:flex-row items-center container mx-auto gap-12">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Education inclusive & Pédagogie interactive
              </h1>
              <div className="w-24 h-1 bg-secondary rounded-full mb-2" />
            </div>
            <div className="flex flex-col gap-4 text-lg text-foreground/80">
              <p>
                <strong>
                  Le Centre d'Accueil et de Developpement Holistique pour Petits
                  Enfants GRAINES D'EVEIL
                </strong>{" "}
                a été fondé en 2025 par{" "}
                <strong>Mme Diana KENTOH Epse TANKOU</strong> afin d'offrir des
                services Garde d'Enfants de haute qualité en structures tout en
                accompagnant les parents dans leur rôle éducatif au quotidien.
              </p>
              <p>
                <strong>GRAINES D'EVEIL</strong> a mis en place un environnement
                propice au développement global et au bien-être des enfants agés
                de <strong>0 à 6 ans</strong>.
              </p>
              <p>
                Nos éducatrices qualifiées et bienveillantes accompagnent les
                enfants neuro-typiques ainsi que ceux ayant des besoins
                spécifiques au quotidien, pour les aider à construire leur
                personnalité et à développer leur plein potentiel.
              </p>
              <p>
                Notre objectif est de soutenir l'épanouissement de chaque
                enfant, quelles que soient ses capacités et ses besoins, pour
                qu'il devienne un individu conscient, équilibré et heureux;
                source de fierté pour les parents. Nous développons chez les
                enfants ces différents aspects :
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-base md:text-lg font-semibold bg-muted/60 rounded-lg p-4 mt-2">
                <li>Spirituel</li>
                <li>Cognitif</li>
                <li>Social</li>
                <li>Affectif</li>
                <li>Moteur</li>
                <li>Linguistique</li>
                <li>Intellectuel</li>
                <li>Sensoriel</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex flex-col relative h-[350px] md:h-[400px] lg:h-[450px] w-full max-w-md">
            <img
              className="object-cover absolute inset-0 w-full h-full rounded-2xl shadow-xl border border-border"
              src="/img/apropos.jpg"
              alt="Enfants à la garderie"
            />
          </div>
        </div>
        <img
          src="/img/nuage_bg.webp"
          className="w-full mt-12 opacity-80"
          alt="Nuage décoratif"
        />
      </motion.section> */}
      <ModernGarderieSections />
      {/* Nos Atouts Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 px-4 bg-gradient-to-tl from-accent/40 to-background animate-fade-in"
      >
        <div className="flex flex-col gap-6 items-center container mx-auto mt-8">
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-8">
            Nos Atouts
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full">
            {atouts.map((atout, idx) => (
              <InfoCard
                key={idx}
                imageAlt={atout.title}
                icon={
                  <img
                    src={"/" + atout.icon}
                    alt=""
                    className="object-cover w-[5rem] "
                  />
                }
                title={atout.title}
                badge={undefined}
                description={undefined}
                buttonLabel={undefined}
                buttonColor={undefined}
                onClick={undefined}
              />
            ))}
          </div>
          <Button className="text-lg px-8 py-4 rounded-full shadow-md mt-8 transition-transform hover:scale-105 w-full sm:w-auto">
            Je veux mieux connaitre Graines d'Eveil
          </Button>
        </div>
      </motion.section> */}
      <AtousSection />
      <ServiceSection />
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto flex flex-col items-center py-12 px-2 animate-fade-in">
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-12 text-center">
            Ce que nous proposons
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 w-full">
            {services.map((service, idx) => (
              <InfoCard
                key={idx}
                imageAlt={service.title}
                imageSrc={service.image} // No specific image for these cards
                icon={service.icon}
                title={service.title}
                badge={service.badge}
                description={service.description}
                buttonLabel={service.buttonLabel}
                buttonColor={service.buttonColor}
                onClick={() => alert(`${service.title} button clicked`)} // Placeholder for onClick
              />
            ))}
          </div>
        </div>
      </motion.section> */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto flex flex-col items-center py-16 px-2 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center relative inline-block">
            <span className="bg-[#e9d2db] px-4 py-1 rounded-md relative z-10">
              Services additionnels
            </span>
            <span
              className="absolute left-0 right-0 bottom-0 h-2 bg-yellow-100 z-0 rounded-md"
              style={{ top: "60%" }}
            ></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl items-end">
            {/* Transport */}
            <div className="flex flex-col items-center">
              <img src="/img/icon/ecole-bus.png" alt="" width="120" />
              <div className="border-t border-gray-200 w-full my-2"></div>
              <div className="text-lg font-bold text-center">Transport</div>
            </div>
            {/* Service de Garde prolongé */}
            <div className="flex flex-col items-center">
              <img src="/img/icon/periscolaire.png" alt="" width="120" />

              <div className="border-t border-gray-200 w-full my-2"></div>
              <div className="text-lg font-bold text-center">
                Service de Garde prolongé
              </div>
            </div>
            {/* Coiffure Fillette */}
            <div className="flex flex-col items-center">
              <img src="/img/icon/coiffure.png" alt="" width="120" />
              <div className="border-t border-gray-200 w-full my-2"></div>
              <div className="text-lg font-bold text-center">
                Coiffure Fillette
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/nuage_bg.webp"
          className="w-full mt-12 opacity-80"
          alt="Nuage décoratif"
        />
      </motion.section>
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 px-4 bg-[url('/img/fond3.jpg')] bg-cover bg-no-repeat animate-fade-in"
      >
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">
            Activités pour enfant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
            {activities.map((activity, idx) => (
              <InfoCard
                key={idx}
                imageAlt={activity.title}
                imageSrc={activity.image}
                // icon={activity.icon}
                title={activity.title}
                badge={activity.badge}
                description={activity.description}
                buttonLabel={activity.buttonLabel}
                buttonColor={activity.buttonColor}
                onClick={() => alert(`${activity.title} button clicked`)} // Placeholder for onClick
              />
            ))}
          </div>
        </div>
      </motion.section> */}
      <ActivitySection />
      <ParentActivitySection />
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-20 px-4 bg-[url('/img/fond2.jpg')] bg-repeat bg-opacity-10 animate-fade-in"
      >
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-12 text-center">
            Activités pour parent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
            {parentActivities.map((activity, idx) => (
              <InfoCard
                key={idx}
                imageAlt={activity.title}
                imageSrc={activity.image}
                title={activity.title}
                badge={activity.badge}
                description={activity.description}
                buttonLabel={activity.buttonLabel}
                buttonColor={activity.buttonColor}
                onClick={() => alert(`${activity.title} button clicked`)}
              />
            ))}
          </div>
          <Button className="mt-10 bg-sky-400 text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-sky-500 transition text-lg w-full sm:w-auto">
            Toutes nos activités ...
          </Button>
        </div>
      </motion.section> */}
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative py-20 px-4 flex items-center bg-[url('/img/fond_apropo.png')] justify-center min-h-[60vh] animate-fade-in"
      >

        <div className="relative z-10 max-w-4xl w-full mx-auto bg-white/80 backdrop-blur-sm rounded shadow-xl p-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Inscrivez-vous pour la prochaine rentrée
          </h2>
          <p className="text-lg text-center mb-6">
            Vous pouvez dès à présent procéder à la préinscription de votre
            enfant. Les inscriptions sont possibles tout au long de l’année.
          </p>
          <div className="w-full mb-6">
            <div className="text-lg font-semibold mb-2 text-center">
              Dates des rentrées:
            </div>
            <ol className="bg-white rounded shadow divide-y divide-gray-200">
              <li className="p-4">
                <span className="font-bold">09 Juin 2025</span>
                <br />
                <span className="text-gray-600">La Garderie</span>
              </li>
              <li className="p-4">
                <span className="font-bold">09 Juin 2025</span>
                <br />
                <span className="text-gray-600">Spéciale vacances</span>
              </li>
              <li className="p-4">
                <span className="font-bold">08 Septembre 2025</span>
                <br />
                <span className="text-gray-600">
                  la Crèche et les autres services
                </span>
              </li>
            </ol>
          </div>
          <div className="flex gap-4 mt-2">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded shadow transition w-full sm:w-auto">
              Tarifs
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded shadow transition w-full sm:w-auto">
              Inscription
            </Button>
          </div>
        </div>
      </motion.section>
      <div className="w-full mb-10">
        <div className="bg-yellow-700 py-6 w-full flex justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-bold animate-pulse text-white text-center">
            Nos évènements à venir
          </h2>
        </div>
      </div> */}
      <SubscribeSection />
      <ModernEventsCards />
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="py-8 md:py-16 px-2 md:px-4 animate-fade-in"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {events.map((event, idx) => (
            <InfoCard
              key={idx}
              imageAlt={event.title}
              imageSrc={event.image}
              icon={event.icon}
              title={event.title}
              badge={event.badge}
              description={event.description}
              buttonLabel={event.buttonLabel}
              buttonColor={event.buttonColor}
              onClick={() => alert(`${event.title} button clicked`)} // Placeholder for onClick
              alignment="horizontal"
            />
          ))}
        </div>
      </motion.section> */}
      {/* Footer */}
    </>
  );
};

export default LandingPage;
