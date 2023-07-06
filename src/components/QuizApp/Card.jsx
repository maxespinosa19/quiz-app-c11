export default function Card({data, quizId, quizLength}){
return(
    <div className="quiz-card">
        <p>{quizId + 1}/{quizLength}</p>
        <h3>{data[quizId].question}</h3>
        <ul>
            {
                data[quizId].options.map(
                    (element,index) => {
                        
                        return(
                        <li key ={index}>{element.answer}</li>
                        )
                    }
                )
            }
        </ul>
    </div>
)
}