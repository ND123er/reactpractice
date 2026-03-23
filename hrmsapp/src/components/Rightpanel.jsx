import React from "react";
import Calendar from "./Calendar";
import HeadcountChart from "./HeadcountChart";
import Tabs from "./Tabs";
export default function Rightpanel() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r p-4">
        <div className="text-2xl font-bold mb-6 border border-[#cccccc] rounded-[14px] p-4">
          HRM<span className="text-red-500">Snap</span>
        </div>

        <nav className="flex flex-col gap-2">
          <SidebarItem label="Home" active />
          <SidebarItem label="Employees" />
          <SidebarItem label="Inbox" />
          <SidebarItem label="Attendance Tracker" />
          <SidebarItem label="Leave Tracker" />
          <SidebarItem label="Performance Management" />
          <SidebarItem label="Assets" />
          <SidebarItem label="Payroll" />
          <SidebarItem label="Reports" />
        </nav>

        <div className="mt-auto pt-6 border-t">
          <SidebarItem label="Settings" />
          <SidebarItem label="Help" />
          <SidebarItem label="Log Out" />
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">
            Welcome, <span className="font-bold">Kumkum</span>
          </h1>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-3 py-1 text-sm min-w-87.5"
            />
            <button className="w-8.75 h-8.75 bg-white flex justify-center items-center rounded-[7px] border border-[#cccccc]">
              <span><img src="../src/assets/bell.svg" alt=""  className="max-w-4.5"/></span> 
              </button>
            <div className="w-8.75 h-8.75 bg-white flex justify-center items-center rounded-[7px] border border-[#cccccc]">
              <img src="../src/assets/avatar_img.png" alt="" />
              </div>
          </div>
        </header>

        {/* Tabs */}
        {/* <div className="p-4">
          <div className="flex bg-blue-900 rounded-xl overflow-hidden">
            <button className="flex-1 bg-white text-black py-2 font-medium">
              Dashboard
            </button>
            <button className="flex-1 text-white py-2">
              Announcements
            </button>
          </div>
        </div> */}
        <Tabs/>

        
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
    <div className="bg-white p-4 rounded-xl border">
      <div className="flex justify-between mb-3">
        <h2 className="font-semibold">{title}</h2>
        <button className="text-xs border px-2 py-1 rounded">
          This Month
        </button>
      </div>
      {children}
    </div>
  );
}