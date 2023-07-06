import { useState } from "react";
import Card from "./Card";
import Result from "./Result";
import data from "../../data/movie.json";
import "./QuizApp.css";

const quizLength = data.length;

export default function QuizApp () {
  const [quizId, setQuizId] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    
    /* If the answer is correct, increment the score by 1.
      eg) if (isCorrect) setScore(score + 1); */
    isCorrect && setScore(score + 1);

    /* Increment the quizId by 1 once the user clicks on an answer. */
    const newQuizId = quizId + 1;

    /* If the quizId is less than the quizLength
     then set the quizId to the newQuizId.
     If not show results. */
    (newQuizId < quizLength) 
      ? setQuizId(newQuizId)
      : setShowResult(true);
  };

  const handleReset = () => {
    setQuizId(0);
    setScore(0);
    setShowResult(false);
  };
  
  return(
    <>
    {
      !showResult
        ? <Card
            data={data}
            quizId={quizId}
            quizLength={quizLength}
            handleAnswer={handleAnswer} />

        : <Result
            score={score}
            quizLength={quizLength}
            handleReset={handleReset} />
    }
    </>
  );
};
