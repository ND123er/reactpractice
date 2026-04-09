import { useState } from "react";
export default function Bottomgrid() {
        const [collapsed, setCollapsed] = useState(false);
  return (
    //  <aside
    //         className="
    //           hidden flex-col
    //           bg-[#f4f7fb]
    //           basis-85
    //           md:flex
    //         "
    //       >
    
    //         <nav
    //           className={`
    //       flex flex-col
    //       p-4
    //       bg-white
    //       border border-[#cccccc] rounded-[14px]
    //       transition-all
    //       gap-2 duration-300
    //       ${collapsed ? "w-[80px]" : "w-full"}
    //     `}
    //         >
    //           <button onClick={() => setCollapsed(!collapsed)}>more</button>
    
    //           <SidebarItem
    //             collapsed={collapsed}
    //             label="Home"
    //             active
    //             icon="../src/assets/download.svg"
    //           />
    //           <SidebarItem
    //             collapsed={collapsed}
    //             label="Employees"
    //             icon="../src/assets/2.svg"
    //           />
    //           <SidebarItem
    //             collapsed={collapsed}
    //             label="Inbox"
    //             icon="../src/assets/3.svg"
    //           />
    //           <SidebarItem
    //             collapsed={collapsed}
    //             label="Attendance Tracker"
    //             icon="../src/assets/4.svg"
    //           />
    //           <SidebarItem
    //             collapsed={collapsed}
    //             label="Leave Tracker"
    //             icon="../src/assets/5.svg"
    //           />
    //           <SidebarItem
    //             collapsed={collapsed}
    //             label="Performance Management"
    //             icon="../src/assets/6.svg"
    //           />
    //           <SidebarItem
    //             collapsed={collapsed}
    //             label="Assets"
    //             icon="../src/assets/7.svg"
    //           />
    //           <SidebarItem
    //             collapsed={collapsed}
    //             label="Payroll"
    //             icon="../src/assets/8.svg"
    //           />
    //           <SidebarItem
    //             collapsed={collapsed}
    //             label="Reports"
    //             icon="../src/assets/9.svg"
    //           />
    
    //           <div
    //             className="
    //       mt-auto pt-6
    //       border-t
    //     "
    //           >
    //             <SidebarItem
    //               collapsed={collapsed}
    //               label="Settings"
    //               icon="../src/assets/2.svg"
    //             />
    //             <SidebarItem
    //               collapsed={collapsed}
    //               label="Help"
    //               icon="../src/assets/2.svg"
    //             />
    //             <SidebarItem
    //               collapsed={collapsed}
    //               label="Log Out"
    //               icon="../src/assets/2.svg"
    //             />
    //           </div>
    //         </nav>
    //       </aside>
    <aside
  className={`
    hidden md:flex flex-col
    bg-[#f4f7fb]
    transition-all duration-300
    ${collapsed ? "w-[80px]" : "basis-85"}
  `}
>
  <nav
    className="
      flex flex-col
      p-4
      bg-white
      border border-[#cccccc] rounded-[14px]
      gap-2
      h-full
    "
  >
    <button onClick={() => setCollapsed(!collapsed)}>more</button>

    <SidebarItem collapsed={collapsed} label="Home" active icon="../src/assets/download.svg" />
    <SidebarItem collapsed={collapsed} label="Employees" icon="../src/assets/2.svg" />
    <SidebarItem collapsed={collapsed} label="Inbox" icon="../src/assets/3.svg" />
    <SidebarItem collapsed={collapsed} label="Attendance Tracker" icon="../src/assets/4.svg" />
    <SidebarItem collapsed={collapsed} label="Leave Tracker" icon="../src/assets/5.svg" />
    <SidebarItem collapsed={collapsed} label="Performance Management" icon="../src/assets/6.svg" />
    <SidebarItem collapsed={collapsed} label="Assets" icon="../src/assets/7.svg" />
    <SidebarItem collapsed={collapsed} label="Payroll" icon="../src/assets/8.svg" />
    <SidebarItem collapsed={collapsed} label="Reports" icon="../src/assets/9.svg" />

    <div className="pt-6 border-t">
      <SidebarItem collapsed={collapsed} label="Settings" icon="../src/assets/2.svg" />
      <SidebarItem collapsed={collapsed} label="Help" icon="../src/assets/2.svg" />
      <SidebarItem collapsed={collapsed} label="Log Out" icon="../src/assets/2.svg" />
    </div>
  </nav>
</aside>
  );
}
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
        ${active ? "bg-[#1A365D] text-white" : "text-black hover:bg-gray-100"}
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
            text-[13px] font-semibold
            ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}
          `}
        >
          {label}
        </span>
      </div>
    </div>
  );
}