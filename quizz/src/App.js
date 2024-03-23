// React Modules
import React, { useState, useEffect } from "react";

// Components
import LoginForm from "./components/LoginForm";

// Pages
import Quizz from "./pages/Quizz";
import AdminQuizz from "./pages/AdminQuizz";

// Fake Data
import QuizzesList from "./fake-data/quizzes.json";

// Custom Hooks
import useAuth from "./hooks/Auth";

// Styles
import "./App.css";

function App() {
  const quizzes = QuizzesList;
  const {
    loggedIn,
    employeeUsername,
    login,
    logout,
    quizzSubmitted,
    setQuizzSubmitted,
  } = useAuth();

  const [currentQuizz, setCurrentQuizz] = useState({});

  useEffect(() => {
    let activeQuizz = quizzes.filter((quizz) => quizz.active === true);
    setCurrentQuizz(activeQuizz[0]);
  }, [quizzes]);

  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ? (
          // Quizz component
          <>
            <h1>Welcome {employeeUsername}</h1>
            {employeeUsername !== "admin" ? (
              <Quizz
                currentQuizz={currentQuizz}
                quizzSubmitted={quizzSubmitted}
                setQuizzSubmitted={setQuizzSubmitted}
              />
            ) : (
              <AdminQuizz />
            )}

            <button type="button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          // Login form component
          <LoginForm login={login} />
        )}
      </header>
    </div>
  );
}

export default App;
