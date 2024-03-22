// React
import React, { useState, useEffect } from "react";

// Components
import LoginForm from "./components/LoginForm";

// Fake Data
import QuizzesList from "./fake-data/quizzes.json";

// Styles
import "./App.css";

function App() {
  const [currentQuizz, setCurrentQuizz] = useState({});
  const [awsersList, setAwsersList] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const quizzes = QuizzesList;
    setCurrentQuizz(quizzes.filter((quizz) => quizz.active));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quizz</h1>
        {loggedIn ? (
          // Quizz component
          <>
            <p>show quizz</p>
            <button type="button" onClick={() => setLoggedIn(false)}>
              Logout
            </button>
          </>
        ) : (
          // Login form component
          <LoginForm setLoggedIn={setLoggedIn} />
        )}
      </header>
    </div>
  );
}

export default App;
