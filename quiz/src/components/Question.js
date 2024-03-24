import React from "react";
import SelectBox from "./SelectBox";

const Question = ({ question, handleAnswers }) => {
  return (
    <div key={question.id}>
      <p>{question.question}</p>

      {/* Select component*/}
      <SelectBox
        id={question.id}
        options={question.options}
        handleChangeOption={handleAnswers}
      />
    </div>
  );
};

export default Question;
