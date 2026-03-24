export default function ActivityItem({ title, time }) {
  return (
    <div className="flex justify-between items-center border-b pb-2">
      <p className="text-gray-700">{title}</p>
      <span className="text-sm text-gray-400">{time}</span>
    </div>
  );
}