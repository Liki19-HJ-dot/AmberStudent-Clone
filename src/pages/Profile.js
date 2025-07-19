// src/pages/Profile.js
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{padding: "2rem", maxWidth: 700, margin: "auto"}}>
      <h1>My Profile</h1>
      {user ? (
        <div>
          <p><strong>Email:</strong> {user.email}</p>
          {/* Add more user info here */}
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;

