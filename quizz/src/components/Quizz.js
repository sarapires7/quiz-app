import { useState } from "react";
import Question from "./Question";

const Quizz = ({ currentQuizz }) => {
  const [answers, setAnswers] = useState([]);

  const handleAnswers = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  return (
    <div id="quizz">
      <h2>{currentQuizz.name}</h2>
      <p>{currentQuizz.description}</p>
      <hr />
      <div className="questions">
        <h4>Please answer the following questions:</h4>

        {/* Question components */}
        {currentQuizz.questions.map((question) => (
          <Question question={question} handleAnswers={handleAnswers} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Quizz;
