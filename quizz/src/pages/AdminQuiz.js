import React, { useState } from "react";
import DotList from "../components/DotList";
import NewQuiz from "../fake-data/newQuiz.json";
import QuizzesList from "../fake-data/quizzes.json";

const AdminQuiz = () => {
  const [quizzes, setQuizzes] = useState(QuizzesList);

  const handleCreateNewQuiz = (newQuiz) => {
    // generate id for new quiz
    const newQuizId = quizzes.length + 1;
    newQuiz.id = newQuizId;

    // add new quiz to existing list
    setQuizzes([...quizzes, newQuiz]);
  };

  return (
    <div id="admin-quiz">
      <h3>Create new quiz</h3>
      <button onClick={() => handleCreateNewQuiz(NewQuiz)}>Create quiz</button>

      <div>
        <h2>Quiz List</h2>

        {/* Dot list component */}
        <ul>
          {quizzes.map((quiz) => (
            <DotList id={quiz.id} title={quiz.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminQuiz;
