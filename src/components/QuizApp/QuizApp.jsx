import React from 'react';
import Card from "./Card";
import Result from "./Result";
import data from "../../data/movie.json";
import "./QuizApp.css";
import goodImage from './resultimages/good.png';
import averageImage from './resultimages/average.png';
import badImage from './resultimages/bad.png';
import { useState } from 'react';

const quizLength = data.length;

export default function QuizApp() {
  const [quizId, setQuizId] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    isCorrect && setScore(score + 1);
    const newQuizId = quizId + 1;
    (newQuizId < quizLength)
      ? setQuizId(newQuizId)
      : setShowResult(true);
  };

  const handleReset = () => {
    setQuizId(0);
    setScore(0);
    setShowResult(false);
  };

  let image;
  if (score >= 4) {
    image = goodImage;
  } else if (score == 3) {
    image = averageImage;
  } else {
    image = badImage;
  }

  return (
    <>
      {!showResult ? (
        <Card
          data={data}
          quizId={quizId}
          quizLength={quizLength}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result
          score={score}
          quizLength={quizLength}
          handleReset={handleReset}
          image={image} 
        />
      )}
    </>
  );
}
