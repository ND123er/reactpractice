import { useState } from "react";
import Dashboard from "./Dashboard";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="relative overflow-y-scroll no-scrollbar bg-[#f4f7fb] z-20">
      {/* Tabs */}
      <div className=" p-4 sticky top-0 inset-x-0 z-10 bg-[#f4f7fb]">
      <div className="flex bg-blue-900 rounded-xl p-1">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`flex-1 px-6 py-2 rounded-lg ${
            activeTab === "dashboard"
              ? "bg-white text-black"
              : "text-white"
          }`}
        >
          Dashboard
        </button>

        <button
          onClick={() => setActiveTab("announcements")}
          className={`flex-1 px-6 py-2 rounded-lg ${
            activeTab === "announcements"
              ? "bg-white text-black"
              : "text-white"
          }`}
        >
          Announcements
        </button>
      </div>
      </div>

      {/* Content */}
      <div className=" px-4 mt-4 bg-[#f4f7fb]">
        {activeTab === "dashboard" ? (
          <Dashboard />
        ) : (
          <div className="p-4 bg-white rounded-xl shadow">
            Announcements content here...
          </div>
        )}
      </div>
    </div>
  );
}