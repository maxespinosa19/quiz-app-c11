const imageUri = process.env.PUBLIC_URL + '/images/';

export default function Card({ data, quizId, quizLength, handleAnswer }) {

  return(
    <div className="quiz-card">
      
      <h2>Guess The Movie </h2>
      
      <img src={imageUri + data[quizId].image} alt="" />

      <ul>
        {
          data[quizId].options.map(
            (element,index) => {

              return(
                <li key={index}
                  onClick={ () => {handleAnswer(element.isCorrect)} }>{element.answer}</li>
              );
            }
          )
        }
      </ul>
      <p className="number">({quizId + 1}/{quizLength})</p>
    </div>
  );
};
