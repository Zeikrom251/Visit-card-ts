import React from "react";
import "./ProfilePhoto.style.css";

const ProfilePhoto: React.FC = () => {
  return (
    <div className="profile-photo">
      <img src="../../public/profil.jpg" alt="Photo de Profil" />
    </div>
  );
};

export default ProfilePhoto;
