export default function QuickActions() {
  const actions = [
    "Create Report",
    "Add User",
    "Manage Settings",
    "View Analytics",
  ];

  return (
    <div className="flex flex-col gap-3">
      {actions.map((action, index) => (
        <button
          key={index}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {action}
        </button>
      ))}
    </div>
  );
}