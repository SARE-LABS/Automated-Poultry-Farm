
"use client";

// HealthChartModal.tsx
// -------------------------------------------------------------
// This component renders a detailed area chart of air health trends
// for the SARE Automated Poultry Farm system. It uses Recharts to
// visualize weekly air health scores, helping farm managers track
// changes and spot patterns in air quality over time.
//
// Key features:
// - Responsive area chart for weekly air health scores
// - Gradient fill for visual emphasis
// - Custom grid, axis, and tooltip styling for clarity
// - Data is currently hardcoded for UI demonstration; integrate with
//   real air health data for production use.
// -------------------------------------------------------------
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const HealthChartModal = () => {
    // Example weekly air health data (replace with real data from backend)
    const data = [
      { name: 'Mon', uv: 76, pv: 2400, amt: 2400 },
      { name: 'Tue', uv: 30, pv: 1398, amt: 2210 },
      { name: 'Wed', uv: 89, pv: 9800, amt: 2290 },
      { name: 'Thu', uv: 45, pv: 3908, amt: 2000 },
      { name: 'Fri', uv: 66, pv: 4800, amt: 2181 },
      { name: 'Sat', uv: 99, pv: 3800, amt: 2500 },
      { name: 'Sun', uv: 49, pv: 4300, amt: 2100 },
    ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={900}
          height={350}
          data={data}
          margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
        >
          {/* Gradient fill for area chart */}
          <defs>
            <linearGradient id="myGradient" x1="0" y1="0" x2="0" y2="2">
              <stop offset="10%" stopColor="#0FC99F" stopOpacity={0.8}/>
              <stop offset="30%" stopColor="#67B5DC" stopOpacity={0.01}/>
            </linearGradient>
          </defs>
          {/* Grid lines: horizontal only for clarity */}
          <CartesianGrid strokeDasharray="5 5" horizontal={true} vertical={false} />
          {/* X axis: days of week */}
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#00000066", fontSize: 14, fontWeight: "light" }} tickMargin={10} />
          {/* Y axis: air health score (%) */}
          <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `${value}%`} tick={{ fill: "#00000066", fontSize: 14, fontWeight: "light" }} tickMargin={15} />
          {/* Tooltip: shows value on hover */}
          <Tooltip />
          {/* Area: main air health trend line */}
          <Area type="monotone" dataKey="uv" stroke="#0FC99F" fill="url(#myGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    );
}
