import React from "react";
import type { Role } from "./types";

export function RoleCard({
  role,
  description,
  selected,
  onClick,
}: {
  role: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full p-4 rounded-xl border-2 text-left transition-all duration-300 cursor-pointer ${
        selected
          ? "border-[#0ACA9F] bg-[#0ACA9F]/5 shadow-md shadow-[#0ACA9F]/10"
          : "border-gray-100 bg-white hover:border-[#0ACA9F]/30 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* */}
        <div className="flex-1 min-w-0">
          <p
            className={`text-sm font-semibold transition-colors duration-300 ${
              selected ? "text-[#0ACA9F]" : "text-gray-800"
            }`}
          >
            {role}
          </p>
          <p className="text-xs text-gray-400 mt-0.5 truncate">{description}</p>
        </div>
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            selected ? "border-[#0ACA9F] bg-[#0ACA9F]" : "border-gray-200"
          }`}
        >
          {selected && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}

export const roleDescriptions: Record<Role, string> = {
  Owner: "",
  "Farm Manager": "",
  Veterinarian: "",
  Supervisor: "",
};
