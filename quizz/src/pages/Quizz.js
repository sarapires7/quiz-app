import { useState } from "react";
import Question from "../components/Question";
import DotList from "../components/DotList";

const Quizz = ({ currentQuizz, quizzSubmitted, setQuizzSubmitted }) => {
  const [answers, setAnswers] = useState([]);

  const handleAnswers = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    const allQuestionsAnswered = currentQuizz.questions.every((question) =>
      answers.hasOwnProperty(question.id)
    );

    if (allQuestionsAnswered) {
      setQuizzSubmitted(true);
    } else {
      alert("Please answer all questions before submitting.");
    }
  };

  return (
    <div id="quizz">
      <h2>{currentQuizz.name}</h2>
      <p>{currentQuizz.description}</p>
      <hr />
      {!quizzSubmitted ? (
        <div className="questions">
          <h4>Please answer the following questions:</h4>

          {/* Question component */}
          {currentQuizz.questions.map((question) => (
            <Question question={question} handleAnswers={handleAnswers} />
          ))}

          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="answer-list">
          <h3 style={{ color: "red" }}>Quizz submitted successfully!</h3>
          <h3>Review your answers:</h3>

          {/* Dot list component */}
          <DotList list={currentQuizz.questions} result={answers} />
        </div>
      )}
      <hr />
    </div>
  );
};

export default Quizz;
