// React
import React, { useState } from "react";

function LoginForm({ setLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event) => {
    event.preventDefault();

    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    event.preventDefault();

    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    setLoggedIn(true);
  };

  return (
    <div id="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleChangeUsername}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChangePassword}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
