import React, { useState } from "react";

function ProfileComponent() {
  const [user, setUser] = useState({
    name: "Natalya",
    age: 23,
    isActive: true,
  });

  const changeName = () => {
    setUser((prev) => ({
      ...prev,
      name: prev.name === "Natalya" ? "Liza" : "Natalya",
    }));
  };

  const increaseAge = () => {
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  };

  const toggleActive = () => {
    setUser((prev) => ({
      ...prev,
      isActive: !prev.isActive,
    }));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User Profile</h2>

      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Status: {user.isActive ? "Active" : "Неактивен"}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={changeName}>Change name</button>
        <button onClick={increaseAge}>Increase age</button>
        <button onClick={toggleActive}>Change status</button>
      </div>
    </div>
  );
}

export default ProfileComponent;
