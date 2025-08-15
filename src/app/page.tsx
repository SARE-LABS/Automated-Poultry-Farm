'use  client'

import { TopNavbar } from "@/components/TopNavbar"
import  {SideNavbar}  from "@/components/Sidebar"
import { OverviewCards } from "@/components/OverviewCards"

export default function Dashboard() {
  return (
    <div className="flex md:h-screen bg-gray-50 overflow-hidden">
      <SideNavbar />
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Overview</h2>
          </div>
          <OverviewCards />
        </main>
      </div>
    </div>
  )
}
