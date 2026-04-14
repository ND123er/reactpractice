import React from "react";
import Calendar from "./Calendar";
import HeadcountChart from "./HeadcountChart";
import Tabs from "./Tabs";
export default function Rightpanel() {
  return (
    <div className="flex h-screen overflow-hidden p-4 gap-3 bg-[#f4f7fb]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col basis-85 bg-[#f4f7fb]">
        <div className="flex justify-center items-center text-2xl font-bold mb-6 border border-[#cccccc] rounded-[14px] p-4 bg-white h-17.5">
          <img src="../src/assets/nav_logo.png" alt="" className="max-h-12" />
        </div>

        <nav className="flex flex-col gap-2 bg-white p-4 border border-[#cccccc] rounded-[14px]">
          <button>more</button>
          <SidebarItem label="Home" active icon="../src/assets/download.svg"/>
          <SidebarItem label="Employees" icon="../src/assets/2.svg"/>
          <SidebarItem label="Inbox" icon="../src/assets/3.svg"/>
          <SidebarItem label="Attendance Tracker" icon="../src/assets/4.svg"/>
          <SidebarItem label="Leave Tracker" icon="../src/assets/5.svg"/>
          <SidebarItem label="Performance Management" icon="../src/assets/6.svg"/>
          <SidebarItem label="Assets" icon="../src/assets/7.svg"/>
          <SidebarItem label="Payroll" icon="../src/assets/8.svg"/>
          <SidebarItem label="Reports" icon="../src/assets/9.svg"/>
          <div className="mt-auto pt-6 border-t">
          <SidebarItem label="Settings" icon="../src/assets/2.svg"/>
          <SidebarItem label="Help" icon="../src/assets/2.svg"/>
          <SidebarItem label="Log Out" icon="../src/assets/2.svg"/>
        </div>
        </nav>

        
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col bg-[#f4f7fb]">
        {/* Header */}
        <header className="bg-white border p-4 flex justify-between items-center border-[#cccccc] rounded-[14px] h-17.5!">
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

function SidebarItem({ label,icon, active }) {
  return (
    <div
      className={`py-3 pl-[48px] pr-3 rounded-lg cursor-pointer text-sm ${
        active
          ? "bg-blue-900 text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <div className="flex gap-[10px] items-center">
      <img src={icon} alt={label} className="" />
      {label}
      </div>
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