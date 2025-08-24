
// ParameterCard.tsx
// -------------------------------------------------------------
// This component displays a single air quality parameter (e.g., CO2, NH3, etc.)
// and its current reading for the SARE Automated Poultry Farm system.
// It provides a quick visual summary of the parameter's status using color coding
// and a radial chart, helping farm managers assess air quality at a glance.
//
// Key features:
// - Shows parameter name and current reading
// - Uses color coding: red (critical), orange (fair), green (good)
// - Radial chart visualizes the reading as a percentage
// - Status message (Critical/Fair/Good) with matching color and background
// -------------------------------------------------------------
import { ParameterCardProp } from "./AirHealthType" // Props type for parameter card
import { ParameterChart } from "./ParameterChart"   // Radial chart for parameter value

export const ParameterCard = ({ name, currentReading }: ParameterCardProp) => {
    // Determine status message based on reading value
    const message = currentReading < 40 ? "Critical" : currentReading < 70 ? "Fair" : "Good";

    // Returns color for main status (red/orange/green)
    interface GetColorFn {
        (val: number): string;
    }
    const getColor: GetColorFn = (val) => {
        if (val < 40) return "#FF0000";   // critical
        if (val < 70) return "#FFA500";   // fair
        return "#0FC99F";                 // good
    };

    // Returns faded color for status background
    interface GetRemainingColorFn {
        (color: string): string;
    }
    const getRemainingColor: GetRemainingColorFn = (color) => color + "20";

    const mainColor = getColor(currentReading);
    const remainingColor = getRemainingColor(mainColor);

    return (
        <div className="flex flex-col p-4 bg-[#FFFFFF] border-2 border-[#0FC99F45]  w-[280px] h-[300px] justify-between hover:shadow-md duration-200 rounded-[10px]">
            {/* Header: parameter name and info icon */}
            <div className="flex justify-between items-center mb-4 ">
                <span className="text-[18px] text-[#000000CC]">{name}</span>
                {/* Info icon for additional details (optional) */}
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 19.75C15.1086 19.75 19.25 15.6086 19.25 10.5C19.25 5.39137 15.1086 1.25 10 1.25C4.89137 1.25 0.75 5.39137 0.75 10.5C0.75 15.6086 4.89137 19.75 10 19.75Z" stroke="black" strokeOpacity="0.48" strokeWidth="1.5" />
                    <path d="M10 10.313V15.313" stroke="black" strokeOpacity="0.48" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M10 8.18799C10.6904 8.18799 11.25 7.62834 11.25 6.93799C11.25 6.24763 10.6904 5.68799 10 5.68799C9.30964 5.68799 8.75 6.24763 8.75 6.93799C8.75 7.62834 9.30964 8.18799 10 8.18799Z" fill="black" fillOpacity="0.48" />
                </svg>
            </div>
            {/* Radial chart for parameter value */}
            <div className="w-full h-max flex justify-center">
                <ParameterChart currentReading={currentReading} />
            </div>
            {/* Status message with color-coded background */}
            <div className={`rounded-full p-2 w-[100px] h-[37px] flex justify-center items-center`} style={{ backgroundColor: remainingColor }}>
                <span className={`text-[14px] font-medium`} style={{ color: mainColor }}>{message}</span>
            </div>
        </div>
    )
}
