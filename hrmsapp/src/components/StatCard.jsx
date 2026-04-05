export default function StatCard({
  icon,
  title,
  value,
  changeIcon,
  change,
  changeText,
}) {
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl shadow pt-[24px] pr-[8px] pb-[12px] pl-[16px] bordered-block min-h-[163px]">
      
      {/* Top */}
      <div className="flex items-center gap-2 pb-[36px]">
        <div className="text-blue-600 text-xl">{icon}</div>
        <h3 className="card-title">{title}</h3>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-end">
        
        {/* Left (Number) */}
        <span className="card-num">{value}</span>

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