// React Modules
import { useState, useEffect } from "react";

// Components
import Question from "../components/Question";
import Resume from "../components/Resume";

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
          {currentQuiz.questions.map((question) => (
            <Question question={question} handleAnswers={handleAnswers} />
          ))}

          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <Resume questions={currentQuiz.questions} answers={answers} />
      )}
      <hr />
    </div>
  );
};

export default Quiz;
