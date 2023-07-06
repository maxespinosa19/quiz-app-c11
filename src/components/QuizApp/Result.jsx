
export default function Result({score, handleReset, quizLength}){
    return(
    <div className="quiz-card" >
        <h3> Result </h3>
        <p>Your score {score} out of {quizLength}</p>
        <button onClick = {handleReset}>Restart</button>
    </div>
    )
}