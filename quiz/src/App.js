// React Modules
import React, { useState, useEffect } from "react";

// Components
import LoginForm from "./components/LoginForm";

// Pages
import Quiz from "./pages/Quiz";
import AdminQuiz from "./pages/AdminQuiz";

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
    quizSubmitted,
    setQuizSubmitted,
  } = useAuth();

  const [currentQuiz, setCurrentQuiz] = useState({});

  useEffect(() => {
    let activeQuiz = quizzes.filter((quiz) => quiz.active === true);
    setCurrentQuiz(activeQuiz[0]);
  }, [quizzes]);

  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ? (
          // Quiz component
          <>
            <h1>Welcome {employeeUsername}</h1>
            {employeeUsername !== "admin" ? (
              <Quiz
                currentQuiz={currentQuiz}
                quizSubmitted={quizSubmitted}
                setQuizSubmitted={setQuizSubmitted}
              />
            ) : (
              <AdminQuiz />
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
