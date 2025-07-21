import React from "react";
import { motion } from "framer-motion";
import type { Atout } from ".";

const AtoutCard: React.FC<{ atout: Atout; index: number }> = ({
  atout,
  index,
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100/50 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/30 hover:-translate-y-1"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.08 }}
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative p-6">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-all duration-500 transform group-hover:scale-110"></div>
            <motion.div
              className="relative w-16 h-16 bg-gray-50 rounded-lg border border-gray-100 p-3 group-hover:border-gray-200 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={atout.icon}
                alt={atout.title}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  // Fallback to a gradient if image fails
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove(
                    "hidden"
                  );
                }}
              />
              {/* Fallback gradient */}
              <div className="hidden absolute inset-2 bg-gradient-to-br from-blue-400 to-indigo-600 rounded opacity-20"></div>
            </motion.div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center text-gray-800 font-semibold text-sm leading-snug group-hover:text-gray-900 transition-colors duration-300">
          {atout.title}
        </h3>
      </div>

      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
    </motion.div>
  );
};

export default AtoutCard;
