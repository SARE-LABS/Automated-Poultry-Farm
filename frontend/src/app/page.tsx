// "use  client";
// import React from "react";
import { AirHealthChart } from "@/components/airHealth/AirHealthChart";

import { TopNavbar } from "@/components/TopNavbar";
import { SideNavbar } from "@/components/Sidebar";
import { OverviewCards } from "@/components/OverviewCards";
import { ParameterCard } from "@/components/airHealth/ParameterCard";

export default function Dashboard() {
  const parameterData = [
    { name: "Air health", value: 90, },
    { name: "CO2", value: 67, },
    { name: "NH3", value: 20, },
    { name: "TVOC", value: 50, },
    { name: "Temperature", value: 22, },
    { name: "Humidity", value: 60, },
  ];

  return (
    <>
      {/* <div className=""></div> */}
      <div className="flex md:h-screen bg-white overflow-hidden border-1 border-[#D4D4D4]">
        <SideNavbar />
        <div className="flex-1 flex flex-col overflow-scroll">
          <TopNavbar />
          <main className="flex-1 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Overview
              </h2>
            </div>
            <OverviewCards />
          </main>
          <div className="flex-1 flex flex-col gap-4">
            <AirHealthChart />
            <div className="w-full h-max flex flex-wrap px-4 gap-4 md:justify-start justify-center">
              {
              parameterData.map((param, index) => (
                <ParameterCard key={index} name={param.name} currentReading={param.value} />
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
