import type { FormData } from "./types";

export function Step3Review({
  formData,
  goToStep,
}: {
  formData: FormData;
  goToStep: (step: number) => void;
}) {
  return (
    <div className="space-y-5">
      <h3 className="text-base font-semibold text-gray-800 pb-1 border-b border-gray-100">
        Review Your Information
      </h3>

      {/* User Info Card */}
      <div className="bg-gray-50/80 p-5 space-y-3 border border-gray-100">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-gray-700">
            Account Details
          </h4>
          <button
            type="button"
            onClick={() => goToStep(1)}
            className="text-xs text-[#0ACA9F] hover:underline font-medium cursor-pointer"
          >
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
          <div>
            <span className="text-gray-400 text-xs">Name</span>
            <p className="text-gray-800 font-medium">
              {formData.firstName} {formData.otherNames}
            </p>
          </div>
          <div>
            <span className="text-gray-400 text-xs">Role</span>
            <p className="text-gray-800 font-medium">{formData.role}</p>
          </div>
          <div>
            <span className="text-gray-400 text-xs">Email</span>
            <p className="text-gray-800 font-medium">{formData.email}</p>
          </div>
          <div>
            <span className="text-gray-400 text-xs">Phone</span>
            <p className="text-gray-800 font-medium">{formData.phone}</p>
          </div>
        </div>
      </div>

      {/* Farm Info Card */}
      <div className="bg-gray-50/80 p-5 space-y-3 border border-gray-100">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-gray-700">Farm Details</h4>
          <button
            type="button"
            onClick={() => goToStep(2)}
            className="text-xs text-[#0ACA9F] hover:underline font-medium cursor-pointer"
          >
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
          <div>
            <span className="text-gray-400 text-xs">Farm Name</span>
            <p className="text-gray-800 font-medium">
              {formData.farmName || "—"}
            </p>
          </div>
          <div>
            <span className="text-gray-400 text-xs">Location</span>
            <p className="text-gray-800 font-medium">
              {formData.farmLocation || "—"}
            </p>
          </div>
          <div>
            <span className="text-gray-400 text-xs">Capacity</span>
            <p className="text-gray-800 font-medium capitalize">
              {formData.farmSize || "—"}
            </p>
          </div>
          <div>
            <span className="text-gray-400 text-xs">Bird Type</span>
            <p className="text-gray-800 font-medium capitalize">
              {formData.birdType || "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Terms */}
      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="terms"
          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#0ACA9F] focus:ring-[#0ACA9F] cursor-pointer accent-[#0ACA9F]"
        />
        <label
          htmlFor="terms"
          className="text-xs text-gray-500 leading-relaxed cursor-pointer"
        >
          I agree to the{" "}
          <span className="text-[#0ACA9F] hover:underline font-medium">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-[#0ACA9F] hover:underline font-medium">
            Privacy Policy
          </span>
        </label>
      </div>
    </div>
  );
}
