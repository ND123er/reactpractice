import StatCard from "./StatCard";
import { ArrowUp, ArrowDown, Users } from "lucide-react";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      
      <StatCard
        icon={<Users size={20} />}
        title="New Joiners"
        value="11"
        changeIcon={<ArrowUp size={16} className="text-green-500" />}
        change="+12%"
        changeText="vs last month"
      />

      <StatCard
        icon={<Users size={20} />}
        title="Attendance (Today)"
        value="0"
        changeIcon={<ArrowUp size={16} className="text-green-500" />}
        change="+5%"
        changeText="growth"
      />

      <StatCard
        icon={<Users size={20} />}
        title="Employee Strength"
        value="118"
        changeIcon={<ArrowDown size={16} className="text-red-500" />}
        change="-2%"
        changeText="decline"
      />

    </div>
  );
}