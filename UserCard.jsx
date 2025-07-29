import React, { useState, useEffect } from "react";

function UserCard() {
  const defaultName = "Ляйсан";
  const [name, setName] = useState(defaultName);

  useEffect(() => {
    console.log("Имя пользователя изменилось:", name);
  }, [name]);

  const resetName = () => {
    setName(defaultName);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", width: "250px" }}>
      <h2>Карточка пользователя</h2>
      <p>Имя: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={resetName} style={{ marginLeft: "10px" }}>
        Сбросить
      </button>
    </div>
  );
}

export default UserCard;
