// React Modules
import { useState, useEffect } from "react";

// Components
import Question from "../components/Question";
import DotList from "../components/DotList";

const Quiz = ({ currentQuiz, quizSubmitted, setQuizSubmitted }) => {
  const [answers, setAnswers] = useState({});

  const handleAnswers = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    const allQuestionsAnswered = currentQuiz.questions.every((question) =>
      answers.hasOwnProperty(question.id)
    );

    if (allQuestionsAnswered) {
      setQuizSubmitted(true);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  useEffect(() => {
    if (!quizSubmitted) {
      setAnswers({});
    }
  }, [quizSubmitted]);

  return (
    <div id="quiz">
      <h2>Quiz - {currentQuiz.name}</h2>
      <p>{currentQuiz.description}</p>
      <hr />
      {!quizSubmitted ? (
        <div className="questions">
          <h4>Please answer the following questions:</h4>

          {/* Question component */}
          {currentQuiz.questions.map((question) => (
            <Question question={question} handleAnswers={handleAnswers} />
          ))}

          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="answer-list">
          <h3 style={{ color: "red" }}>Quiz submitted successfully!</h3>
          <h3>Review your answers:</h3>

          {/* Dot list component */}
          <ul>
            {currentQuiz.questions.map((question) => (
              <DotList
                id={question.id}
                title={question.question}
                result={answers}
              />
            ))}
          </ul>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Quiz;
