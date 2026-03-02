import React, { useEffect, useState } from "react";
import ProfileCard from "./component/ProfileCard";
import "./App.css";
//profile card creation calling API
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div className="container max-w-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
      {users.map((user) => (
        <ProfileCard
          key={user.id}
          name={user.name}
          role={user.company.name}
          image={`https://i.pravatar.cc/150?img=${user.id}`}
        />
      ))}
      </div>
    </div>
  );
}

export default App;