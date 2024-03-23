import { useState } from "react";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [employeeUsername, setEmployeeUsername] = useState("");
  const [quizzSubmitted, setQuizzSubmitted] = useState(false);

  const login = (username) => {
    setLoggedIn(true);
    setEmployeeUsername(username);
  };

  const logout = () => {
    setLoggedIn(false);
    setEmployeeUsername("");
    setQuizzSubmitted(false);
  };

  return {
    loggedIn,
    employeeUsername,
    login,
    logout,
    quizzSubmitted,
    setQuizzSubmitted,
  };
};

export default useAuth;
