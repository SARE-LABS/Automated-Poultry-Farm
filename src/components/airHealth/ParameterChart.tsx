
"use client";

// ParameterChart.tsx
// -------------------------------------------------------------
// This component renders a radial bar chart for a single air quality parameter
// in the SARE Automated Poultry Farm system. It visually represents the parameter's
// current reading as a percentage, using color coding to indicate status.
//
// Key features:
// - Radial bar chart (Recharts) for parameter value
// - Color coding: red (critical), orange (fair), green (good)
// - Center label shows percentage value
// - Used inside ParameterCard for quick status visualization
// -------------------------------------------------------------
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

export const ParameterChart = ({ currentReading }: { currentReading: number }) => {
    const value = currentReading; // percentage value for chart

    // Returns color for main status (red/orange/green)
    interface GetColorFn {
        (val: number): string;
    }
    const getColor: GetColorFn = (val) => {
        if (val < 40) return "#FF0000";   // critical
        if (val < 70) return "#FFA500";   // fair
        return "#0FC99F";                 // good
    };

    // Returns faded color for chart background
    interface GetRemainingColorFn {
        (color: string): string;
    }
    const getRemainingColor: GetRemainingColorFn = (color) => color + "20"; 

    const mainColor = getColor(value);
    const remainingColor = getRemainingColor(mainColor);

    // Chart data for Recharts
    const data = [
        {
            name: "Progress",
            value: value,
            fill: mainColor,
        },
    ];

    return (
        <RadialBarChart
            width={180}
            height={180}
            cx="50%"
            cy="50%"
            innerRadius="80%"
            outerRadius="100%"
            barSize={20}
            data={data}
            startAngle={270}
            endAngle={-90}
            className="outline-0 focus:outline-none border-0"
        >
            {/* Hide axis ticks for clean look */}
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            {/* Main radial bar with color-coded value */}
            <RadialBar dataKey="value" background={{ fill: remainingColor }} stroke="none"/>

            {/* Center label: shows percentage value */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={32}
                fontWeight="medium"
                fill={'#000000'}
            >
                {`${value}%`}
            </text>
        </RadialBarChart>
    );
}
