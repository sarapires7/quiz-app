import { useState } from "react";
import Employees from "../fake-data/user.json";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [employeeUsername, setEmployeeUsername] = useState("");
  const [quizzSubmitted, setQuizzSubmitted] = useState(false);

  const login = (username) => {
    const employees = Employees;
    const validEmployee = employees.some((user) => user.username === username);

    if (validEmployee) {
      setLoggedIn(true);
      setEmployeeUsername(username);
    } else {
      alert("sorry only employees can access. Check the entered fields.");
    }
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
