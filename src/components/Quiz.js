import { useState, useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import { Questions } from '../helpers/QuestionBank'
import { FaArrowRight } from 'react-icons/fa'

function Quiz() {
  const {score, setScore, setGameState} = useContext(QuizContext)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [optionChosen, setOptionChosen] = useState('')

  const nextQuestion = () => {
    if(Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)
    }
    setCurrentQuestion(currentQuestion + 1)
  }

  const finishQuiz = () => {
    if(Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1)
    }
    setGameState('endscreen')
  }
  
  return (
    <div className="quiz">
        <h3>Question <span> {Questions[currentQuestion].questionNumber} </span></h3>
        <h3>{Questions[currentQuestion].prompt}</h3>
        <div className="options">
          <button className="btn-question" onClick={() => setOptionChosen('a')}>A - {Questions[currentQuestion].optionA}</button>
          <button className="btn-question" onClick={() => setOptionChosen('b')}>B - {Questions[currentQuestion].optionB}</button>
          <button className="btn-question" onClick={() => setOptionChosen('c')}>C - {Questions[currentQuestion].optionC}</button>
          <button className="btn-question" onClick={() => setOptionChosen('d')}>D - {Questions[currentQuestion].optionD}</button>
        </div>
        {currentQuestion === Questions.length - 1 ? (
          <button className="btn-finish" onClick={finishQuiz}>Finish Quiz</button> 
        ) : (
          <button className="btn-next" onClick={nextQuestion}>Next Question <FaArrowRight /> </button>
        )}
        
    </div>
  )
}

export default Quiz