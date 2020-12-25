import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { axios } from "./axios";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);
  const getUsers = async () => {
    const response = await axios.get("/users").catch((err) => {
      console.error(err);
    });
    if (response && response.data) setUsers(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <div
        className="m-5 border border-success rounded"
        style={{ color: "white" }}
      >
        <h3>List of Users</h3>
      </div>
      <UserList users={users} />
    </div>
  );
}

export default App;
