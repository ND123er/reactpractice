import React from "react";
import Calendar from "./Calendar";
import HeadcountChart from "./HeadcountChart";
import StatsGrid from "./StatsGrid";
export default function Dashboard() {
  return (
    <div className="flex flex-col p-4 bg-[#f4f7fb]">
      {/* Main */}
      <StatsGrid/>
      <div className="flex-1 flex flex-col pt-[20px]">
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left */}
          <div className="lg:col-span-2 space-y-4">
            {/* Headcount */}
            <Card title="Employee Headcount">
              <div className="text-3xl font-bold">111</div>
              <p className="text-sm text-gray-500 mb-4">This Month</p>

              {/* Fake chart */}
              <div className="bg-gradient-to-t from-blue-200 to-blue-100 rounded-lg">
                <HeadcountChart/>
                </div>
            </Card>

            {/* Pending Approvals */}
            <Card title="Pending Leave Approvals">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 text-white flex items-center justify-center">
                    RO
                  </div>
                  <div>
                    <p className="font-medium">Rohit Singh</p>
                    <p className="text-xs text-gray-500">
                      Leave request: 1 day
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="px-3 py-1 border border-red-300 text-red-500 rounded-md">
                    Reject
                  </button>
                  <button className="px-3 py-1 border border-green-400 text-green-600 rounded-md">
                    Approve
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {/* Calendar */}
            {/* <Card title="Events">
              <div className="grid grid-cols-7 text-center text-sm gap-2">
                {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
                  <div key={d} className="font-medium">{d}</div>
                ))}

                {[...Array(31)].map((_, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-full hover:bg-blue-100 cursor-pointer"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </Card> */}
            <Calendar />

            {/* Event Card */}
            <div className="bg-white p-4 flex items-center gap-3 bordered-block">
              <div className="w-10 h-10 bg-blue-900 text-white flex items-center justify-center rounded-full">
                I
              </div>
              <div>
                <p className="font-medium">ihugytdr</p>
                <p className="text-xs text-gray-500">
                  Mar 16, 2026 • Monday
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* Reusable Components */

function SidebarItem({ label, active }) {
  return (
    <div
      className={`px-3 py-2 rounded-lg cursor-pointer text-sm ${
        active
          ? "bg-blue-900 text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {label}
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white p-4 bordered-block">
      <div className="flex justify-between mb-3">
        <h2 className="card-title">{title}</h2>
        <button className="text-xs border px-2 py-1 rounded">
          This Month
        </button>
      </div>
      {children}
    </div>
  );
}