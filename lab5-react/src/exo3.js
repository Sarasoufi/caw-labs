import React, { useState } from "react";

function Exo3() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      const newUser = { id: Date.now(), username, password };
      setUsers([...users, newUser]);

      
      setUsername("");
      setPassword("");
    } else {
      alert("Please fill both username and password");
    }
  };

 
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Authentication Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>Users List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "5px" }}>
            {user.username} - {user.password}{" "}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exo3;
