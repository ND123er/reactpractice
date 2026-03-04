import React from "react";
import ProfileCard from "./component/ProfileCard";
import profiles from "../data";
import "./App.css";
// React Basics & JSX
function App() {
  return (
    <div className="container">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          role={profile.role}
          image={profile.image}
        />
      ))}
    </div>
  );
}

export default App;