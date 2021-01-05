import React, { useState } from "react";
import Question from "./trivia-components/Question";
import CategorySelector from "./trivia-components/CategorySelector";
import ResultModal from "./trivia-components/ResultModal";
import Scoreboard from "./trivia-components/ScoreBoard";
import useTrivia from "./useTrivia";

export default function App() {
  const { question, getQuestion, category, setCategory } = useTrivia();
  const [isCorrect, setIsCorrect] = useState(null);

  function handleQuestionAnswered(answer) {
    const isAnswerCorrect = answer === question.correct_answer;
    setIsCorrect(isAnswerCorrect);
  }

  function handleNextQuestion() {
    setIsCorrect(null);
    getQuestion();
  }

  return (
    <div className="main-trivia-app">
      <div className="trivia-app">
        {/* show the result modal ----------------------- */}
        {isCorrect !== null && (
          <ResultModal
            isCorrect={isCorrect}
            question={question}
            getQuestion={handleNextQuestion}
          />
        )}
        {/* question header ----------------------- */}
        <div className="question-header">
          <CategorySelector category={category} chooseCategory={setCategory} />
          <Scoreboard isCorrect={isCorrect} />
        </div>
        {/* the question itself ----------------------- */}
        <div className="question-main">
          {question && (
            <Question
              question={question}
              answerQuestion={handleQuestionAnswered}
            />
          )}
        </div>
        {/* question footer ----------------------- */}
        <div className="question-footer">
          <button onClick={handleNextQuestion}>Go to next question 👉</button>
        </div>
      </div>
    </div>
  );
}
