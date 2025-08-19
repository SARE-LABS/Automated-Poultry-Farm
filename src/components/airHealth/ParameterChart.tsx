"use client";

import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";


export const ParameterChart = ({ currentReading }: { currentReading: number }) => {
    const value = currentReading; // percentage
    interface GetColorFn {
        (val: number): string;
    }

    const getColor: GetColorFn = (val) => {
        if (val < 40) return "#FF0000";   // critical
        if (val < 70) return "#FFA500";   // fair
        return "#0FC99F";                 // good
    };

    interface GetRemainingColorFn {
        (color: string): string;
    }

    const getRemainingColor: GetRemainingColorFn = (color) => color + "20"; 

    const mainColor = getColor(value);
    const remainingColor = getRemainingColor(mainColor);

    const data = [
        {
            name: "Progress",
            value: value,
            fill: mainColor,
        },
    ];
    return (
        <RadialBarChart
            width={200}
            height={200}
            cx="50%"
            cy="50%"
            innerRadius="80%"
            outerRadius="100%"
            barSize={20}
            data={data}
            startAngle={270}
            endAngle={-90}
        >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" background={{ fill: remainingColor }} />

            {/* Center Label */}
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
