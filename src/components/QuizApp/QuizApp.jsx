import "./QuizApp.css"
import { useState } from "react"
import Result from "./Result"
import Card from "./Card"
import data from "../../data/Quiz.json"

const quizLength = data.length
export default function QuizApp(){
    const [quizId, setQuizId] = useState(0)
    const [score, setScore] = useState(0)
    const[showResult,setShowResult] = useState(false)

    const handleAnswer= () => {

    }
    const handleReset = () => {

    }



   
    return(
        <>
        {
            !showResult
            ? <Card
            data={data}
            quizId= {quizId}
            quizLength = {quizLength}
             />
            : <Result
            score={score}
            quizLength={quizLength} 
            />
        }
        </>
    )

}
