// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const data = [
//   { name: "Week 1", employees: 100 },
//   { name: "Week 2", employees: 102 },
//   { name: "Week 3", employees: 10 },
//   { name: "Week 4", employees: 10 },
// ];

// export default function HeadcountChart() {
//   return (
//     <div
//       className="
//         w-full h-60
//       "
//     >
//       <ResponsiveContainer>
//         {/* <LineChart data={data}>
          
//           <CartesianGrid strokeDasharray="3 3" />

//           <XAxis dataKey="name" />

//           <YAxis />

//           <Tooltip />

//           <Line
//             type="monotone"
//             dataKey="employees"
//             stroke="#3b82f6"
//             strokeWidth={3}
//             dot={{ r: 4 }}
//           />
//         </LineChart> */}
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3"/>

//           <XAxis dataKey="name" axisLine={false} tickLine={false} />

//           <YAxis axisLine={false} tickLine={false} />

//           <Tooltip />

//           <Line
//             type="monotone"
//             dataKey="employees"
//             stroke="#2c466b"
//             fill="#93c5fd"
//             strokeWidth={2}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Week 1", employees: 118 },
  { name: "Week 2", employees: 118 },
  { name: "Week 3", employees: 0 },
  { name: "Week 4", employees: 0 },
];

export default function HeadcountChart() {
  return (
    <div className="w-full h-60">
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#93c5fd" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#93c5fd" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" axisLine={false} tickLine={false} />

          <YAxis axisLine={false} tickLine={false} ticks={[50, 100, 150]} />

          <Tooltip />

          {/* Filled area with gradient */}
          <Area
            type="monotone"
            dataKey="employees"
            stroke="none"
            fill="url(#colorEmployees)"
          />

          {/* Smooth line on top */}
          <Line
            type="monotone"
            dataKey="employees"
            stroke="#2c466b"
            strokeWidth={2}
            dot={{ r: 0 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
