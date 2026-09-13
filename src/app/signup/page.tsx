"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { FormData } from "@/components/signup/types";
import { StepIndicator } from "@/components/signup/StepIndicator";
import { HeroPanel } from "@/components/signup/HeroPanel";
import { Step1UserInfo } from "@/components/signup/Step1UserInfo";
import { Step2FarmDetails } from "@/components/signup/Step2FarmDetails";
import { Step3Review } from "@/components/signup/Step3Review";

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const pathname = usePathname();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    otherNames: "",
    phone: "",
    email: "",
    password: "",
    role: "",
    farmName: "",
    farmLocation: "",
    farmSize: "",
    aqmsInstalled: "",
    deviceSerialNo: "",
    birdType: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep1 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Must be at least 8 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.farmName.trim()) newErrors.farmName = "Farm name is required";
    if (!formData.farmLocation.trim())
      newErrors.farmLocation = "Farm location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goToStep = (step: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(step);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      goToStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      goToStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // Password Strength
  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = [
    "bg-gray-200",
    "bg-red-400",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-[#0ACA9F]",
  ];

  return (
    <div className="min-h-screen flex bg-[#FAFAFA]">
      {/* Left Hero */}
      <HeroPanel pathname={pathname} />

      {/* Right Form Panel */}
      <div className="flex-1 flex items-center justify-center relative px-6 py-10 lg:px-16">
        {/* Step Indicator (desktop) */}
        <div className="hidden md:block">
          <StepIndicator currentStep={currentStep} totalSteps={3} />
        </div>

        <div className="w-full max-w-lg">
          {/* Mobile Logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <Image
              src="/sare-logo.png"
              alt="SARE Logo"
              width={36}
              height={36}
            />
            <span className="text-lg font-bold text-gray-800">SARE</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              {currentStep === 1 && "Sign up Account"}
              {currentStep === 2 && "Farm Details"}
              {currentStep === 3 && "Review & Confirm"}
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              {currentStep === 1 && "Complete the steps to create your account"}
              {currentStep === 2 && "Tell us about your farm setup"}
              {currentStep === 3 && "Review your information before submitting"}
            </p>
            {/* Step indicator (mobile) */}
            <div className="flex md:hidden items-center gap-2 mt-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    step === currentStep
                      ? "w-8 bg-[#0ACA9F]"
                      : step < currentStep
                        ? "w-4 bg-[#0ACA9F]/50"
                        : "w-4 bg-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div
              className={`transition-all duration-300 ${
                isTransitioning
                  ? "opacity-0 translate-y-3"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {currentStep === 1 && (
                <Step1UserInfo
                  formData={formData}
                  errors={errors}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  passwordStrength={passwordStrength}
                  strengthColors={strengthColors}
                  strengthLabels={strengthLabels}
                  updateField={updateField}
                />
              )}

              {currentStep === 2 && (
                <Step2FarmDetails
                  formData={formData}
                  errors={errors}
                  updateField={updateField}
                />
              )}

              {currentStep === 3 && (
                <Step3Review formData={formData} goToStep={goToStep} />
              )}
            </div>

            {/* Nav Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors cursor-pointer group"
                >
                  <svg
                    className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                type={currentStep === 3 ? "submit" : "button"}
                onClick={currentStep < 3 ? handleNext : undefined}
                className="flex items-center gap-2 px-8 py-3 bg-[#0ACA9F] text-white text-sm font-semibold rounded-xl hover:bg-[#09b88f] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#0ACA9F]/20 hover:shadow-xl hover:shadow-[#0ACA9F]/30 cursor-pointer group"
              >
                {currentStep === 3 ? "Create Account" : "Next"}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    currentStep === 3
                      ? "group-hover:translate-x-0"
                      : "group-hover:translate-x-0.5"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={currentStep === 3 ? "M5 13l4 4L19 7" : "M9 5l7 7-7 7"}
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Mobile Login Link */}
          <p className="text-center text-sm text-gray-400 mt-8 lg:hidden">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#0ACA9F] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
