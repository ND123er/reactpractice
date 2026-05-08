import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "./Calendar";
import HeadcountChart from "./HeadcountChart";
import Tabs from "./Tabs";
import Bottomgrid from "./bottomgrid";
export default function Rightpanel() {
   const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  return (
    <div
      
    >
      {/* Sidebar */}
      <div className="
        flex overflow-hidden
        p-4
        bg-[#f4f7fb]
        gap-3
      ">
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
            p-4
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

      
      </aside>
       <header
          className="
            flex flex-1
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
                min-w-87.5 min-h-[40px]
                px-3 py-1
                text-sm
                border border-[#e2e8f0] rounded-lg
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
            {/* <div
              className="
                flex
                w-8.75 h-8.75
                bg-white
                rounded-[7px] border border-[#cccccc]
                justify-center items-center
              "
            >
              <img src="../src/assets/avatar_img.png" alt="" />
            </div> */}
              <div
    onClick={() => setOpen(!open)}
    className="
      flex
      w-8.75 h-8.75
      bg-white
      rounded-[7px] border border-[#cccccc]
      justify-center items-center
      cursor-pointer
      relative
    "
  >
    <img src="../src/assets/avatar_img.png" alt="" />
  </div>

  {open && (
    <div
      className="
        absolute
        right-4
        top-16
        w-32
        bg-white
        border
        rounded-md
        shadow-md
        z-50
      "
    >
      <button
        onClick={handleLogout}
        className="
          w-full text-left px-4 py-2
          hover:bg-gray-100 text-sm
        "
      >
        Logout
      </button>
    </div>
  )}
          </div>
        </header>
        </div>
  <div className="flex gap-3 p-4 pt-0 h-screen">
    <Bottomgrid/>
      <div
        className="
          flex-1 flex flex-col
          bg-[#f4f7fb]
        "
      >
        <Tabs />
      </div>
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
