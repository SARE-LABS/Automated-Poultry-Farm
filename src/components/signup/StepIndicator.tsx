import React from "react";

export function StepIndicator({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <React.Fragment key={step}>
            {i > 0 && (
              <div
                className={`w-[2px] h-6 transition-colors duration-500 ${
                  isCompleted ? "bg-[#0ACA9F]" : "bg-gray-200"
                }`}
              />
            )}
            <div
              className={`relative flex items-center justify-center w-9 h-9 rounded-full text-sm font-semibold transition-all duration-500 ${
                isActive
                  ? "bg-[#0ACA9F] text-white shadow-lg shadow-[#0ACA9F]/30 scale-110"
                  : isCompleted
                    ? "bg-[#0ACA9F] text-white"
                    : "bg-gray-100 text-gray-400 border border-gray-200"
              }`}
            >
              {isCompleted ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                step
              )}
              {isActive && (
                <span className="absolute inset-0 rounded-full animate-ping bg-[#0ACA9F]/20" />
              )}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
