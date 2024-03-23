import React, { useState } from "react";
import DotList from "../components/DotList";
import NewQuizz from "../fake-data/newQuizz.json";
import QuizzesList from "../fake-data/quizzes.json";

const AdminQuizz = () => {
  const [quizzes, setQuizzes] = useState(QuizzesList);

  const handleCreateNewQuizz = (newQuizz) => {
    // generate id for new quizz
    const newQuizzId = quizzes.length + 1;
    newQuizz.id = newQuizzId;

    // add new quizz to existing list
    setQuizzes([...quizzes, newQuizz]);
  };

  return (
    <div id="admin-quizz">
      <h3>Create new quizz</h3>
      <button onClick={() => handleCreateNewQuizz(NewQuizz)}>
        Create quizz
      </button>

      <div>
        <h2>Quizz List</h2>

        {/* Dot list component */}
        <ul>
          {quizzes.map((quizz) => (
            <DotList id={quizz.id} title={quizz.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminQuizz;
