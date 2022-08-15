import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (username, year) => {
    setUserList((prev) => {
      return [
        ...prev,
        { name: username, age: year, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
