import React from "react";
import "./ProfilePhoto.style.css";
import Photo from "../assets/profil.jpg";

const ProfilePhoto: React.FC = () => {
  return (
    <div className="profile-photo">
      <img src={Photo} alt="Photo de Profil" />
    </div>
  );
};

export default ProfilePhoto;
