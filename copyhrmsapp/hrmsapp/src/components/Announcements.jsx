import { useState } from "react";
import { Pin, MoreHorizontal } from "lucide-react";

export default function Announcements() {
  const [text, setText] = useState("");
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      author: "Kumkum Dutta",
      role: "Hr Intern",
      content: "Hi rohit",
      date: "Monday, 16th March, 3:04 pm",
      pinned: true,
      pinOrder: 0,
    },
    {
      id: 2,
      author: "Kumkum Dutta",
      role: "Hr Intern",
      content: "Hii",
      date: "Thursday, 26th February, 6:08 pm",
      pinned: true,
      pinOrder: 1,
    },
  ]);

  const [pinCounter, setPinCounter] = useState(2);

  const handlePost = () => {
    if (!text.trim()) return;

    const newItem = {
      id: Date.now(),
      author: "Kumkum Dutta",
      role: "Hr Intern",
      content: text,
      date: new Date().toLocaleString(),
      pinned: false,
      pinOrder: null,
    };

    setAnnouncements([newItem, ...announcements]);
    setText("");
  };

  const togglePin = (id) => {
    setAnnouncements((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.pinned) {
            return { ...item, pinned: false, pinOrder: null };
          } else {
            const updated = {
              ...item,
              pinned: true,
              pinOrder: pinCounter,
            };
            setPinCounter((p) => p + 1);
            return updated;
          }
        }
        return item;
      })
    );
  };

  const pinnedItems = announcements
    .filter((a) => a.pinned)
    .sort((a, b) => a.pinOrder - b.pinOrder);

  const normalItems = announcements.filter((a) => !a.pinned);

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 bg-blue-800 text-white p-3 rounded-xl text-center font-semibold">
          Dashboard
        </div>
        <div className="flex-1 bg-gray-200 p-3 rounded-xl text-center font-semibold">
          Announcements
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-4">
          {/* Create */}
          <div className="bg-white p-4 rounded-xl shadow">
            <textarea
              placeholder="Create Announcement"
              className="w-full border rounded-lg p-3 resize-none focus:outline-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="flex justify-end mt-3">
              <button
                onClick={handlePost}
                className="bg-blue-800 text-white px-5 py-2 rounded-lg"
              >
                Post →
              </button>
            </div>
          </div>

          {/* FEED */}
          {[...pinnedItems, ...normalItems].map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{item.author}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                  <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => togglePin(item.id)}>
                    <Pin
                      size={18}
                      className={
                        item.pinned ? "text-blue-700" : "text-gray-400"
                      }
                    />
                  </button>
                  <MoreHorizontal size={18} />
                </div>
              </div>

              <p className="mt-4">{item.content}</p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-4 rounded-xl shadow h-fit">
          <h2 className="font-semibold text-lg mb-4">
            Pinned Announcements
          </h2>

          {pinnedItems.length === 0 && (
            <p className="text-gray-400 text-sm">No pinned items</p>
          )}

          <div className="space-y-4">
            {pinnedItems.map((item) => (
              <div key={item.id} className="border-b pb-3">
                <h4 className="font-medium">{item.author}</h4>
                <p className="text-sm text-gray-600">{item.content}</p>

                <button className="text-blue-700 text-sm mt-1">
                  See Announcement →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}