import { useState } from "react";
import Card from "./Card";
import Result from "./Result";
import data from "../../data/movie.json";
import "./QuizApp.css";

const quizLength = data.length;

export default function QuizApp() {
  const [questionId, setQuestionId] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const newQuestionId = questionId + 1;

    (newQuestionId < quizLength) 
      ? setQuestionId(newQuestionId)
      : setShowResult(true);
  }

  const handleReset = () => {
    setQuestionId(0);
    setScore(0);
    setShowResult(false);
  }

  return (
    <>
      <h2>Quiz App</h2>
      {showResult
        ? <Result
            quizLength={quizLength}
            score={score}
            handleReset={handleReset} />
        : <Card 
            data={data}
            quizLength={quizLength}
            questionId={questionId}
            handleAnswer={handleAnswer} />
      }
    </>
  );
};