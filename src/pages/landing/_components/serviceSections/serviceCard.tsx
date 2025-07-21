import React from "react";
import type { Service } from ".";

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className="group flex flex-col relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      {/* Image section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            // Fallback to a placeholder gradient if image fails to load
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling?.classList.remove("hidden");
          }}
        />
        {/* Fallback gradient background */}
        <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600"></div>

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

        {/* Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`${service.badge.bg} text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md`}
          >
            {service.badge.text}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-wide">
          {service.title}
        </h3>

        {/* Description */}
        <div className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[160px]">
          {service.description}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-auto">
          <button
            className={`${service.buttonColor} text-white font-semibold py-2.5 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border-0 focus:outline-none focus:ring-4 focus:ring-opacity-50 w-full`}
          >
            <span className="flex items-center justify-center gap-2">
              {service.buttonLabel}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;
