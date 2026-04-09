import { useState } from "react";
import Dashboard from "./Dashboard";
import Announcements from "./Announcements";
import AnnouncementsNew from "./AnnouncementsNew";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="relative overflow-y-scroll no-scrollbar bg-[#f4f7fb] z-20">
      {/* Tabs */}
      <div className="pl-0 p-[12px] pt-0 sticky top-0 inset-x-0 z-10 bg-[#f4f7fb]">
      <div className="flex bg-[#274066] rounded-[14px] p-2 gap-2">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex-1 flex items-center justify-center gap-3 px-4 py-2 h-12.5 rounded-[7px] border border-[#637691] ${
            activeTab === "dashboard"
              ? "bg-white text-black"
              : "bg-[#2F4A7A] text-[#DFDFDF]"
          }`}
        >
          <img src="src/assets/tab1.svg" className="w-5 h-5" />
          <span className="tab-title">Dashboard</span>
        </button>

        <button
          onClick={() => setActiveTab("announcements")}
          className={`flex-1 flex items-center justify-center gap-3 px-4 py-2 h-12.5 rounded-[7px] border border-[#637691] ${
            activeTab === "announcements"
              ? "bg-white text-black"
              : "bg-[#2F4A7A] text-[#DFDFDF]"
          }`}
        >
           <img src="src/assets/announcementicon.png" className="w-5 h-5" />
          <span className="tab-title">Announcements</span>
        </button>
      </div>
      </div>

      {/* Content */}
      <div className="bg-[#f4f7fb]">
        {activeTab === "dashboard" ? (
          <Dashboard />
        ) : (
          <div className="p-4 bg-white rounded-xl shadow">
           <AnnouncementsNew />
          </div>
        )}
      </div>
    </div>
  );
}