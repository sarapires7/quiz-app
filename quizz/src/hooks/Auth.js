import { useState } from "react";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [employeeUsername, setEmployeeUsername] = useState("");

  const login = (username) => {
    setLoggedIn(true);
    setEmployeeUsername(username);
  };

  const logout = () => {
    setLoggedIn(false);
    setEmployeeUsername("");
  };

  return { loggedIn, employeeUsername, login, logout };
};

export default useAuth;
