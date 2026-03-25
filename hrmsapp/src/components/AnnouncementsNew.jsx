import { useState, useRef, useEffect } from "react";
import { Pin, MoreHorizontal } from "lucide-react";

export default function AnnouncementsNew() {
  const [text, setText] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const menuRef = useRef();
const [announcements, setAnnouncements] = useState([]);
  const [pinCounter, setPinCounter] = useState(0);

  // ✅ LOAD from localStorage (runs once on mount)
 useEffect(() => {
  const saved = localStorage.getItem("announcements");
  if (saved) {
    setAnnouncements(JSON.parse(saved));
  } else {
    setAnnouncements([
      {
        id: 1,
        author: "Kumkum Dutta",
        role: "Hr Intern",
        content: "Hi rohit",
        date: "Monday...",
        pinned: true,
        pinOrder: 0,
        visibility: "all",
      },
    ]);
  }
}, []);

  // ✅ SAVE to localStorage (runs whenever announcements change)
  useEffect(() => {
    localStorage.setItem("announcements", JSON.stringify(announcements));
  }, [announcements]);

  // (optional) persist pinCounter
  useEffect(() => {
    const savedCounter = localStorage.getItem("pinCounter");
    if (savedCounter) {
      setPinCounter(Number(savedCounter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pinCounter", pinCounter);
  }, [pinCounter]);
  // const [announcements, setAnnouncements] = useState([
  //   {
  //     id: 1,
  //     author: "Kumkum Dutta",
  //     role: "Hr Intern",
  //     content: "Hi rohit",
  //     date: "Monday, 16th March, 3:04 pm",
  //     pinned: true,
  //     pinOrder: 0,
  //     visibility: "all",
  //   },
  //   {
  //     id: 2,
  //     author: "Kumkum Dutta",
  //     role: "Hr Intern",
  //     content: "Hii",
  //     date: "Thursday, 26th February, 6:08 pm",
  //     pinned: true,
  //     pinOrder: 1,
  //     visibility: "selected",
  //   },
  // ]);


  // close menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
      visibility: "all",
    };

   setAnnouncements((prev) => [newItem, ...prev]);
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

  const handleDelete = (id) => {
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));
    setActiveMenu(null);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditText(item.content);
    setActiveMenu(null);
  };

  const saveEdit = (id) => {
    setAnnouncements((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, content: editText } : a
      )
    );
    setEditingId(null);
  };

  const setVisibility = (id, type) => {
    setAnnouncements((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, visibility: type } : a
      )
    );
    setActiveMenu(null);
  };

  const pinnedItems = announcements
    .filter((a) => a.pinned)
    .sort((a, b) => a.pinOrder - b.pinOrder);

  const normalItems = announcements.filter((a) => !a.pinned);

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-4">
          {/* CREATE */}
          <div className="bg-white p-4 rounded-xl shadow">
            <textarea
              placeholder="Create Announcement"
              className="w-full border rounded-lg p-3"
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
            <div key={item.id} className="bg-white p-4 rounded-xl shadow relative">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{item.author}</h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>

                <div className="flex gap-2 items-center relative">
                  <button onClick={() => togglePin(item.id)}>
                    <Pin
                      size={18}
                      className={
                        item.pinned ? "text-blue-700" : "text-gray-400"
                      }
                    />
                  </button>

                  <button onClick={() => setActiveMenu(item.id)}>
                    <MoreHorizontal size={18} />
                  </button>

                  {/* DROPDOWN */}
                  {activeMenu === item.id && (
                    <div
                      ref={menuRef}
                      className="absolute right-0 top-8 w-52 bg-white border rounded-lg shadow-lg z-10"
                    >
                      <button
                        onClick={() => handleEdit(item)}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Edit Post
                      </button>

                      <button
                        onClick={() => setVisibility(item.id, "all")}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Show for All Employees
                      </button>

                      <button
                        onClick={() =>
                          setVisibility(item.id, "selected")
                        }
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Only for Selected Employees
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                      >
                        Delete Post
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* CONTENT / EDIT MODE */}
              <div className="mt-4">
                {editingId === item.id ? (
                  <>
                    <textarea
                      className="w-full border rounded p-2"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button
                      onClick={() => saveEdit(item.id)}
                      className="mt-2 bg-blue-700 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <p>{item.content}</p>
                )}
              </div>

              {/* VISIBILITY TAG */}
              <div className="mt-2 text-xs text-gray-500">
                {item.visibility === "all"
                  ? "Visible to all employees"
                  : "Visible to selected employees"}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white p-4 rounded-xl shadow h-fit">
          <h2 className="font-semibold mb-4">Pinned Announcements</h2>

          {pinnedItems.map((item) => (
            <div key={item.id} className="border-b pb-3 mb-3">
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
  );
}