import { FormInput } from "./FormInput";
import { RoleCard, roleDescriptions } from "./RoleCard";
import type { FormData, Role } from "./types";

export function Step1UserInfo({
  formData,
  errors,
  showPassword,
  setShowPassword,
  passwordStrength,
  strengthColors,
  strengthLabels,
  updateField,
}: {
  formData: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
  passwordStrength: number;
  strengthColors: string[];
  strengthLabels: string[];
  updateField: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <h3 className="text-base font-semibold text-gray-800 pb-1 border-b border-gray-100">
        User Information
      </h3>

      {/* Full Name */}
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          id="firstName"
          label="First Name"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => updateField("firstName", e.target.value)}
          error={errors.firstName}
          required
        />
        <FormInput
          id="otherNames"
          label="Other Names"
          placeholder="Other Names"
          value={formData.otherNames}
          onChange={(e) => updateField("otherNames", e.target.value)}
        />
      </div>

      {/* Phone */}
      <FormInput
        id="phone"
        label="Phone Number"
        type="tel"
        placeholder="+234 800 000 0000"
        value={formData.phone}
        onChange={(e) => updateField("phone", e.target.value)}
        error={errors.phone}
        required
      />

      {/* Email */}
      <FormInput
        id="email"
        label="Email Address"
        type="email"
        placeholder="nurain@gmail.com"
        value={formData.email}
        onChange={(e) => updateField("email", e.target.value)}
        error={errors.email}
        required
      />

      {/* Password */}
      <div className="space-y-1.5">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 tracking-wide"
        >
          Password<span className="text-red-400 ml-0.5">*</span>
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Min. 8 characters"
            value={formData.password}
            onChange={(e) => updateField("password", e.target.value)}
            className={`w-full h-11 px-4 pr-12 rounded-xl border text-sm text-gray-900 placeholder-gray-300 outline-none transition-all duration-300 bg-white ${
              errors.password
                ? "border-red-400 ring-2 ring-red-100"
                : "border-gray-200 hover:border-gray-300 focus:border-[#0ACA9F] focus:ring-2 focus:ring-[#0ACA9F]/15 focus:shadow-sm"
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            {showPassword ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {errors.password}
          </p>
        )}
        {/* Password strength bar */}
        {formData.password && (
          <div className="flex items-center gap-2 mt-2">
            <div className="flex gap-1 flex-1">
              {[1, 2, 3, 4].map((level) => (
                <div
                  key={level}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    level <= passwordStrength
                      ? strengthColors[passwordStrength]
                      : "bg-gray-100"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-400">
              {strengthLabels[passwordStrength]}
            </span>
          </div>
        )}
      </div>

      {/* Role Selection */}
      <div className="space-y-2.5">
        <label className="block text-sm font-medium text-gray-700 tracking-wide">
          Role
          <span className="text-[12px]">(Optional)</span>
        </label>
        <div className="grid grid-cols-2 gap-2.5">
          {(
            [
              "Owner",
              "Farm Manager",
              "Veterinarian",
              "Supervisor",
            ] as Role[]
          ).map((role) => (
            <RoleCard
              key={role}
              role={role}
              description={roleDescriptions[role]}
              // icon={roleIcons[role]}
              selected={formData.role === role}
              onClick={() => updateField("role", role)}
            />
          ))}
        </div>
        {errors.role && (
          <p className="text-xs text-red-500 flex items-center gap-1">
            <svg
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {errors.role}
          </p>
        )}
      </div>
    </div>
  );
}
