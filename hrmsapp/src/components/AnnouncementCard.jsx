export default function AnnouncementCard({ title, value, change }) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow flex flex-col gap-2">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
      <span className="text-sm text-green-500">{change}</span>
    </div>
  );
}