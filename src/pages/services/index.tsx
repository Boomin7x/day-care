import ServiceSection from "../landing/_components/serviceSections";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <div className="flex flex-col">
      <ServiceSection />
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
    </div>
  );
};

export default ServicesPage;
