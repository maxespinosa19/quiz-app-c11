
import "./QuizApp.css";
import "./Result.css"

export default function Result({score, handleReset, quizLength, image}){
    return(
    <div className="quiz-card" >
        <div className="results">
        <h3> Result </h3>
        <p>Your score {score} out of {quizLength}</p>
     
        <img  src={image} alt="Score Image" className ="result-image" />
        
        <button onClick = {handleReset}>Restart</button>
        </div>
    </div>
    )
}