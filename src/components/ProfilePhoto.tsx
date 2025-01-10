import React from "react";
import "./ProfilePhoto.style.css";

const ProfilePhoto: React.FC = () => {
  return (
    <div className="profile-photo">
      <img src="../../public/profilPicture.jpg" alt="Photo de Profil" />
    </div>
  );
};

export default ProfilePhoto;
