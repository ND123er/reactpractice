import React from "react";

const ProfileCard = ({ name, role, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p>{role}</p>
      <button className="follow-btn cursor-pointer">Follow</button>
    </div>
  );
};

export default ProfileCard;