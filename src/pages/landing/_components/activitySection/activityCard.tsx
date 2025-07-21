import { useState } from "react";
import type { Activity } from ".";
interface ActivityCardProps {
  activity: Activity;
  index: number;
}
const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "slideInUp 0.8s ease-out forwards",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/60 transition-all duration-700 group-hover:from-slate-900/60 group-hover:to-slate-800/40" />
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url('${activity.image}')`,
            filter: "sepia(20%) saturate(1.2) brightness(1.1)",
          }}
        />

        {/* Floating Badge */}
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-md text-xs font-semibold text-white ${
            activity.badge.bg
          } backdrop-blur-sm bg-opacity-90 transition-transform duration-300 ${
            isHovered ? "scale-110" : ""
          }`}
        >
          {activity.badge.text}
        </div>

        {/* Icon Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`transform transition-all duration-500 ${
              isHovered ? "scale-110 rotate-6" : ""
            }`}
          >
            {activity.icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-gray-800 transition-colors duration-300">
            {activity.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {activity.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            className={`w-full py-3 px-6 rounded-lg text-white font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 ${activity.buttonColor} shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-30 focus:ring-current`}
          >
            <span className="flex items-center justify-center gap-2">
              {activity.buttonLabel}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      <div
        className={`absolute -bottom-1 -right-1 w-20 h-20 ${
          activity.badge.bg
        } rounded-full opacity-5 transition-transform duration-500 ${
          isHovered ? "scale-150" : ""
        }`}
      />
    </div>
  );
};

export default ActivityCard;
