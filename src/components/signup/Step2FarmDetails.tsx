import { FormInput } from "./FormInput";
import type { FormData } from "./types";

export function Step2FarmDetails({
  formData,
  errors,
  updateField,
}: {
  formData: FormData;
  errors: Partial<Record<keyof FormData, string>>;
  updateField: (field: keyof FormData, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <h3 className="text-base font-semibold text-gray-800 pb-1 border-b border-gray-100">
        Farm Information
      </h3>

      <FormInput
        id="farmName"
        label="Farm Name"
        placeholder="e.g. JFK Poultry"
        value={formData.farmName}
        onChange={(e) => updateField("farmName", e.target.value)}
        error={errors.farmName}
        required
      />

      <FormInput
        id="farmLocation"
        label="Farm Location"
        placeholder="e.g. Lagos, Nigeria"
        value={formData.farmLocation}
        onChange={(e) => updateField("farmLocation", e.target.value)}
        error={errors.farmLocation}
        required
      />

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1.5">
          <label
            htmlFor="farmSize"
            className="block text-sm font-medium text-gray-700 tracking-wide"
          >
            Farm Capacity
          </label>
          <select
            id="farmSize"
            value={formData.farmSize}
            onChange={(e) => updateField("farmSize", e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-gray-900 outline-none transition-all duration-300 bg-white hover:border-gray-300 focus:border-[#0ACA9F] focus:ring-2 focus:ring-[#0ACA9F]/15 cursor-pointer appearance-none"
          >
            <option value="">Select capacity</option>
            <option value="small">1 – 500 birds</option>
            <option value="medium">500 – 5,000 birds</option>
            <option value="large">5,000 – 50,000 birds</option>
            <option value="enterprise">50,000+ birds</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="aqmsInstalled"
            className="block text-sm font-medium text-gray-700 tracking-wide"
          >
            No. of AQMS Installed
          </label>
          <select
            id="aqmsInstalled"
            value={formData.aqmsInstalled}
            onChange={(e) => updateField("aqmsInstalled", e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-gray-900 outline-none transition-all duration-300 bg-white hover:border-gray-300 focus:border-[#0ACA9F] focus:ring-2 focus:ring-[#0ACA9F]/15 cursor-pointer appearance-none"
          >
            <option value="">Select no. of AQMS installed</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="more">more than 10</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="birdType"
            className="block text-sm font-medium text-gray-700 tracking-wide"
          >
            Bird Type
          </label>
          <select
            id="birdType"
            value={formData.birdType}
            onChange={(e) => updateField("birdType", e.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-gray-200 text-sm text-gray-900 outline-none transition-all duration-300 bg-white hover:border-gray-300 focus:border-[#0ACA9F] focus:ring-2 focus:ring-[#0ACA9F]/15 cursor-pointer appearance-none"
          >
            <option value="">Select type</option>
            <option value="broilers">Broilers</option>
            <option value="layers">Layers</option>
            <option value="breeders">Breeders</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        <FormInput
          id="deviceSerialNo"
          label="Device Serial No"
          placeholder="e.g. 123456789"
          value={formData.deviceSerialNo}
          onChange={(e) => updateField("deviceSerialNo", e.target.value)}
          error={errors.farmLocation}
          required
        />
      </div>
    </div>
  );
}
