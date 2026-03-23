import { useState } from "react";

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(year, month + 1, 1));
  };

  const generateDays = () => {
    const days = [];

    // Empty slots before month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const monthName = date.toLocaleString("default", {
    month: "long",
  });

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-semibold text-lg mb-2">Events</h2>

      {/* Month Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium">
          {monthName} {year}
        </span>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 text-sm text-gray-500 mb-2">
        {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-2 text-sm">
        {generateDays().map((day, i) => (
          <div key={i} className="text-center py-1">
            {day || ""}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={prevMonth}>◀</button>
        <button onClick={nextMonth}>▶</button>
      </div>

      <p className="text-center text-gray-400 text-sm mt-2">
        No holidays this month
      </p>
    </div>
  );
}