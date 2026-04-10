import React from "react";
import Calendar from "./Calendar";
import HeadcountChart from "./HeadcountChart";
import StatsGrid from "./StatsGrid";
import DropdownExample from "./DropdownExample";
export default function Dashboard() {
  return (
    <div className="flex flex-col bg-[#f4f7fb]">
       
      {/* Main */}
      <StatsGrid/>
      <div className="flex-1 flex flex-col pt-[20px]">
        <main className="grid grid-cols-1 lg:grid-cols-[1fr_505px] gap-4">
          {/* Left */}
          <div className="w-full space-y-4">
            {/* Headcount */}
            <Card title="Employee Headcount">
              <div className="text-3xl font-bold px-[16px]">111</div>
              <p className="text-sm text-gray-500 mb-4 px-[16px] mb-[12px]">This Month</p>
              {/* Fake chart */}
              <div className="rounded-lg  pl-[16px] pr-[10px] pb-[32px]">
                <HeadcountChart/>
                </div>
            </Card>

            {/* Pending Approvals */}
            <PendingCard title="Pending Leave Approvals">
              <div className="flex items-center justify-between  p-4 border border-[#E2E8F0] bg-white rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#c22bc2] text-white flex items-center justify-center rounded-lg">
                    RO
                  </div>
                  <div>
                    <p className="font-semibold text-[18px] leading-[100%] tracking-[-0.03em] color-[#1A202C]">Rohit Singh original</p>
                    <p className="text-xs text-gray-500">
                      Leave request: 1 day
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-[20px] border h-[32px] border-[#EE5D5080] text-[#4B4A4A] rounded-[8px] bg-[#EE5D5033] flex justify-center items-center">
                    Reject
                  </button>
                  <button className="p-[20px] h-[32px] border border-[#06BF5C] bg-[#d5edd8] text-[#4B4A4A] rounded-[8px] flex justify-center items-center">
                    Approve
                  </button>
                </div>
              </div>
            </PendingCard>
          </div>

          {/* Right */}
          <div className="w-full space-y-4">
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
            {/* <div className="bg-white p-4 flex items-center gap-3 bordered-block">
              <div className="w-10 h-10 bg-blue-900 text-white flex items-center justify-center rounded-full">
                I
              </div>
              <div>
                <p className="font-medium">ihugytdr</p>
                <p className="text-xs text-gray-500">
                  Mar 16, 2026 • Monday
                </p>
              </div>
            </div> */}
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
    <div className="bg-white bordered-block">
      <div className="relative flex items-center justify-between mb-3 px-[16px] py-[24px] min-h-[80px]">
        <h2 className="card-title">{title}</h2>
        {/* <button className="text-xs border border-[#E2E8F0] px-2 py-1 rounded-md">
          This Month
        </button> */}
        <DropdownExample />
        <div className="divider-block"></div>
      </div>
      {children}
    </div>
  );
}

function PendingCard({ title, children }) {
  return (
    <div className="bg-white bordered-block p-2.5">
      <div className="relative flex items-center justify-between mb-3 min-h-[80px]">
        <h2 className="card-title">{title}</h2>
        {/* <button className="text-xs border border-[#E2E8F0] px-2 py-1 rounded-md">
          This Month
        </button> */}
        <div className="divider-block"></div>
      </div>
      {children}
    </div>
  );
}