import React from "react";
import Calendar from "./Calendar";
import HeadcountChart from "./HeadcountChart";
import Tabs from "./Tabs";
import { useState } from "react";
export default function Rightpanel() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className="
        flex overflow-hidden
        h-screen
        p-4
        bg-[#f4f7fb]
        gap-3
      "
    >
      {/* Sidebar */}
      <aside
        className="
          hidden flex-col
          bg-[#f4f7fb]
          basis-85
          md:flex
        "
      >
        <div
          className="
            flex
            h-17.5
            mb-6 p-4
            text-2xl font-bold
            bg-white
            border border-[#cccccc] rounded-[14px]
            justify-center items-center
          "
        >
          <img
            src="../src/assets/nav_logo.png"
            alt=""
            className="
              max-h-12
            "
          />
        </div>

        {/* <nav className="flex flex-col gap-2 bg-white p-4 border border-[#cccccc] rounded-[14px]">
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
        </nav> */}
        <nav
          className={`
      flex flex-col
      p-4
      bg-white
      border border-[#cccccc] rounded-[14px]
      transition-all
      gap-2 duration-300
      ${collapsed ? "w-[80px]" : "w-full"}
    `}
        >
          <button onClick={() => setCollapsed(!collapsed)}>more</button>

          <SidebarItem
            collapsed={collapsed}
            label="Home"
            active
            icon="../src/assets/download.svg"
          />
          <SidebarItem
            collapsed={collapsed}
            label="Employees"
            icon="../src/assets/2.svg"
          />
          <SidebarItem
            collapsed={collapsed}
            label="Inbox"
            icon="../src/assets/3.svg"
          />
          <SidebarItem
            collapsed={collapsed}
            label="Attendance Tracker"
            icon="../src/assets/4.svg"
          />
          <SidebarItem
            collapsed={collapsed}
            label="Leave Tracker"
            icon="../src/assets/5.svg"
          />
          <SidebarItem
            collapsed={collapsed}
            label="Performance Management"
            icon="../src/assets/6.svg"
          />
          <SidebarItem
            collapsed={collapsed}
            label="Assets"
            icon="../src/assets/7.svg"
          />
          <SidebarItem
            collapsed={collapsed}
            label="Payroll"
            icon="../src/assets/8.svg"
          />
          <SidebarItem
            collapsed={collapsed}
            label="Reports"
            icon="../src/assets/9.svg"
          />

          <div
            className="
      mt-auto pt-6
      border-t
    "
          >
            <SidebarItem
              collapsed={collapsed}
              label="Settings"
              icon="../src/assets/2.svg"
            />
            <SidebarItem
              collapsed={collapsed}
              label="Help"
              icon="../src/assets/2.svg"
            />
            <SidebarItem
              collapsed={collapsed}
              label="Log Out"
              icon="../src/assets/2.svg"
            />
          </div>
        </nav>
      </aside>

      {/* Main */}
      <div
        className="
          flex-1 flex flex-col
          bg-[#f4f7fb]
        "
      >
        {/* Header */}
        <header
          className="
            flex
            h-17.5!
            p-4
            bg-white
            border border-[#cccccc] rounded-[14px]
            justify-between items-center
          "
        >
          <h1
            className="
              text-lg font-semibold
            "
          >
            Welcome,{" "}
            <span
              className="
                font-bold
              "
            >
              Kumkum
            </span>
          </h1>

          <div
            className="
              flex
              items-center gap-3
            "
          >
            <input
              type="text"
              placeholder="Search"
              className="
                min-w-87.5
                px-3 py-1
                text-sm
                border rounded-lg
              "
            />
            <button
              className="
                flex
                w-8.75 h-8.75
                bg-white
                rounded-[7px] border border-[#cccccc]
                justify-center items-center
              "
            >
              <span>
                <img
                  src="../src/assets/bell.svg"
                  alt=""
                  className="
                  max-w-4.5
                "
                />
              </span>
            </button>
            <div
              className="
                flex
                w-8.75 h-8.75
                bg-white
                rounded-[7px] border border-[#cccccc]
                justify-center items-center
              "
            >
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
        <Tabs />
      </div>
    </div>
  );
}

/* Reusable Components */

// function SidebarItem({ label, icon, active }) {
//   return (
//     <div
//       className={`
//         py-3 pl-[48px] pr-3
//         text-sm
//         rounded-lg
//         cursor-pointer
//         ${active ? "bg-blue-900 text-white" : "text-gray-700 hover:bg-gray-100"}
//       `}
//     >
//       <div
//         className="
//           flex
//           gap-[10px] items-center
//         "
//       >
//         <img
//           src={icon}
//           alt={label}
//           className="

//         "
//         />
//         {label}
//       </div>
//     </div>
//   );
// }

// function SidebarItem({ icon, label, active, collapsed }) {
//   return (
//     <div
//       className={`flex items-center gap-3 p-2 rounded-md cursor-pointer ${
//         active ? "bg-[#1A365D] text-white" : "text-gray-700 hover:bg-gray-100"
//       }`}
//     >
//       <img src={icon} className="w-5 h-5" />

//       {/* TEXT */}
//       <span
//         className={`transition-all duration-300 ${
//           collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
//         }`}
//       >
//         {label}
//       </span>
//     </div>
//   );
// }

// function SidebarItem({ icon, label, active, collapsed }) {
//   return (
//     <div
//       className={`
//         py-3 pr-3
//         text-sm
//         rounded-lg
//         cursor-pointer
//         transition-all duration-300
//         ${collapsed ? "pl-0 flex justify-center" : "pl-[48px]"}
//         ${active ? "bg-[#1A365D] text-white" : "text-gray-700 hover:bg-gray-100"}
//       `}
//     >
//       <div
//         className={`
//           flex items-center
//           ${collapsed ? "justify-center" : "gap-[10px]"}
//         `}
//       >
//         <img src={icon} alt={label} className="w-5 h-5" />

//         {/* TEXT */}
//         <span
//           className={`
//             whitespace-nowrap
//             transition-all duration-300
//             ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}
//           `}
//         >
//           {label}
//         </span>
//       </div>
//     </div>
//   );
// }

function SidebarItem({ icon, label, active, collapsed }) {
  return (
    <div
      className={`
        p-3
        text-sm
        rounded-lg
        cursor-pointer
        transition-all duration-300
        ${collapsed ? "flex justify-center" : "pl-[48px]"}
        ${active ? "bg-[#1A365D] text-white" : "text-gray-700 hover:bg-gray-100"}
      `}
    >
      <div
        className={`
          flex items-center
          ${collapsed ? "justify-center" : "gap-[10px]"}
        `}
      >
        <img src={icon} alt={label} className="w-5 h-5 shrink-0" />

        <span
          className={`
            whitespace-nowrap
            transition-all duration-300
            ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}
          `}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div
      className="
        p-4
        bg-white
        rounded-xl border
      "
    >
      <div
        className="
          flex
          mb-3
          justify-between
        "
      >
        <h2
          className="
            font-semibold
          "
        >
          {title}
        </h2>
        <button
          className="
            px-2 py-1
            text-xs
            border border-[#E2E8F0]
            rounded
          "
        >
          This Month
        </button>
      </div>
      {children}
    </div>
  );
}
