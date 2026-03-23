import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Week 1", employees: 100 },
  { name: "Week 2", employees: 102 },
  { name: "Week 3", employees: 110 },
  { name: "Week 4", employees: 111 },
];

export default function HeadcountChart() {
  return (
    <div
      className="
        w-full h-60
      "
    >
      <ResponsiveContainer>
        {/* <LineChart data={data}>
          
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="employees"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart> */}
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis dataKey="name" axisLine={false} tickLine={false} />

          <YAxis axisLine={false} tickLine={false} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="employees"
            stroke="#2563eb"
            fill="#93c5fd"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
