import React from "react";
import DotList from "../components/DotList";

const Resume = ({ questions, answers }) => {
  return (
    <div className="answer-list">
      <h3 style={{ color: "red" }}>Quiz submitted successfully!</h3>
      <h3>Review your answers:</h3>
      <ul>
        {questions.map((question) => (
          <DotList
            id={question.id}
            title={question.question}
            result={answers}
          />
        ))}
      </ul>
    </div>
  );
};

export default Resume;
