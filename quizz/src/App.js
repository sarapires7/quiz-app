// React Modules
import React, { useState, useEffect } from "react";

// Components
import LoginForm from "./components/LoginForm";

// Fake Data
import QuizzesList from "./fake-data/quizzes.json";

// Custom Hooks
import useAuth from "./hooks/Auth";

// Styles
import "./App.css";

function App() {
  const { loggedIn, login, logout } = useAuth();

  const [currentQuizz, setCurrentQuizz] = useState({});
  const [awsersList, setAwsersList] = useState([]);

  useEffect(() => {
    const quizzes = QuizzesList;
    setCurrentQuizz(quizzes.filter((quizz) => quizz.active));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ? (
          // Quizz component
          <>
            <h1>Quizz</h1>
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
