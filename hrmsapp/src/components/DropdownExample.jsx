import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
export default function DropdownExample() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("This Month");

  const options = ["Today", "This Week", "This Month", "This Year"];

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-row-reverse items-center gap-[15px] text-xs border border-[#E2E8F0] py-2 px-3 rounded-md"
      >
        <FaChevronDown className="w-3 h-3" />
        {selected}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-md z-10">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="px-3 py-2 text-xs cursor-pointer hover:bg-gray-100"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}