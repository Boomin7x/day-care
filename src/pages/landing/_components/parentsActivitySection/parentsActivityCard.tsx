import React, { useState } from "react";
import type { ParentActivity } from ".";
import { Button } from "../../../../components/ui/button";

interface ParentActivityCardProps {
  activity: ParentActivity;
  index: number;
}
const ParentActivityCard: React.FC<ParentActivityCardProps> = ({
  activity,
  index,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="group relative flex flex-col bg-white/80 backdrop-blur-xl border border-white/20 rounded-lg shadow overflow-hidden transform transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-sky-500/25 cursor-pointer"
      style={{
        animationDelay: `${index * 150}ms`,
        animation:
          "fadeInScale 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-56 shrink-0 overflow-hidden">
        {/* Dynamic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/70 via-sky-800/50 to-transparent transition-all duration-700 group-hover:from-sky-900/50 group-hover:via-sky-800/30 z-10" />

        {/* Image */}
        <div
          className="absolute inset-0 bg-center bg-cover transition-all duration-1000 group-hover:scale-110"
          style={{
            backgroundImage: `url('${activity.image}')`,
          }}
        />

        {/* Floating Badge */}
        <div
          className={`absolute top-6 left-6 z-20 px-4 py-2 rounded-lg text-sm font-bold text-white ${
            activity.badge.bg
          } backdrop-blur-md bg-opacity-90 transition-all duration-500 ${
            isHovered ? "scale-110 rotate-3" : ""
          } shadow-lg`}
        >
          {activity.badge.text} ans
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16 transition-transform duration-700 group-hover:scale-150" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-sky-400/20 to-transparent rounded-full translate-y-12 -translate-x-12 transition-transform duration-700 group-hover:scale-125" />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col flex-1  p-8 space-y-6">
        {/* Title */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-sky-700 transition-all duration-300">
            {activity.title}
          </h3>

          {/* Accent line */}
          <div
            className={`h-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full transition-all duration-500 ${
              isHovered ? "w-20" : "w-12"
            }`}
          />
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors duration-300">
          {activity.description}
        </p>

        {/* Action Button */}
        <div className="pt-4 flex-1 flex flex-col">
          <Button
            className={`group/btn w-full py-6 px-6 mt-auto  rounded text-white font-semibold text-base transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] ${activity.buttonColor} shadow-lg hover:shadow-xl relative overflow-hidden`}
          >
            {/* Button background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

            <span className="relative flex items-center justify-center gap-3">
              {activity.buttonLabel}
              <svg
                className={`w-5 h-5 transition-all duration-500 ${
                  isHovered ? "translate-x-2 rotate-12" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Button>
        </div>

        {/* Background decorative elements */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sky-100 rounded-full opacity-30 transition-transform duration-700 group-hover:scale-150" />
        <div className="absolute top-4 -right-2 w-16 h-16 bg-gradient-to-br from-sky-200 to-sky-300 rounded-full opacity-20 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-45" />
      </div>

      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-sky-200/50 transition-colors duration-500" />
    </div>
  );
};

export default ParentActivityCard;
