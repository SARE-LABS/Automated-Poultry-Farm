
// AirHealthChart.tsx
// -------------------------------------------------------------
// This component displays the overall air health score for the poultry farm.
// It is part of the SARE Automated Poultry Farm system, which provides real-time
// monitoring and analytics for farm conditions. The air health score is a key metric
// derived from various air quality parameters (CO2, NH3, TVOC, temperature, humidity)
// and visualized for easy assessment by farm managers.
//
// The chart includes:
// - A summary section showing the current air health score and its change percentage.
// - An arrow icon indicating the trend (up/down) in air health.
// - A modal chart (HealthChartModal) for detailed weekly/daily air health trends.
//
// Styling uses Tailwind CSS for a modern, responsive UI.
// -------------------------------------------------------------
import { AirQualityDataProps } from "./AirHealthType" // Type for air quality data structure
import { HealthChartModal } from "./HealthChartModal" // Modal chart for detailed air health trends


// AirHealthChart: Main air health summary and chart section
export const AirHealthChart = () => {
  // TODO: Integrate dynamic air health score and percentage change from live data
  // For now, values are hardcoded for UI demonstration
  return (
    <div className="w-[900px] h-[400px] border-2 rounded-xl flex flex-col mt-3 ml-4 pt-4 border-[#0FC99F45]">
      {/* Header section: Air Health Score and trend */}
      <div className="flex flex-col gap-2 px-4 mb-4">
        <span className="text-[#000000B3] text-[18px] font-normal">Air Health Score</span>
        <div className="flex justify-center items-center w-max gap-2">
          {/* Main air health score (should be dynamic) */}
          <span className="text-[#000000] text-[32px] font-medium">90%</span>
          {/* Percentage change and trend arrow (should be dynamic) */}
          <span className="text-[#0FC99F] text-[11.3px] font-medium flex items-center gap-1">
            40%
            {/* Upward trend arrow SVG (color matches theme) */}
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.23502 8.85381L5.57049 4.51834L8.3362 7.28405C9.13581 5.70797 10.4548 4.45611 12.0705 3.73988L13.8304 2.95628M13.8304 2.95628L10.0152 1.49121M13.8304 2.95628L12.3659 6.7715" stroke="#0FC99F" strokeWidth="1.28458" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      {/* Chart section: Weekly/daily air health trends */}
      <div className="flex-1 h-[350px]">
        {/* HealthChartModal renders a Recharts area chart for air health trends */}
        <HealthChartModal />
      </div>
    </div>
  )
}
