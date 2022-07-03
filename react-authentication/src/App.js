import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  // we use this to store inputed data
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  // we set all the needed functionality

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log('Logged in')
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      setError('Details do not match!');
    }
  };

  

  const Logout = () => {
    setUser({ name: '', email: ''});
  };

  return (
    <div className="App">
      {/* setting basic conditions */}
      {/* condition ? for true : for false */}
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Log out</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
