export default function StatCard({
  icon,
  title,
  value,
  changeIcon,
  change,
  changeText,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 bordered-block">
      
      {/* Top */}
      <div className="flex items-center gap-2 mb-4">
        <div className="text-blue-600 text-xl">{icon}</div>
        <h3 className="font-medium text-gray-700">{title}</h3>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-end">
        
        {/* Left (Number) */}
        <span className="text-2xl font-bold">{value}</span>

        {/* Right (Change Info) */}
        <div className="flex items-center gap-1 text-sm">
          <span>{changeIcon}</span>
          <span className="font-medium">{change}</span>
          <span className="text-gray-500">{changeText}</span>
        </div>

      </div>
    </div>
  );
}