import React, { useState, useEffect } from "react";
import Login from "./components/Login";

import "./App.css";
import UsersList from "./components/UsersList";
import Home from "./components/Home";

function App() {
  const [users, setUsers] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const storedUsers = localStorage.getItem("isLoggedIn");
    if (storedUsers === "true") {
      setIsLogged(true);
    }

    return () => {};
  }, []);

  const addUser = (userEmail, userPassword) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          email: userEmail,
          password: userPassword,
          id: Math.random().toString(),
        },
      ];
    });
    setIsLogged(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logoutHandler = () => {
    setIsLogged(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <div className="App">
      {isLogged ? (
        <>
          <Home onClick={logoutHandler} />
          <UsersList users={users}  />
        </>
      ) : (
        <Login onAddUser={addUser} />
      )}
    </div>
  );
}

export default App;
