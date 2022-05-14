import { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import { Questions } from '../helpers/QuestionBank'
import { FcQuestions } from 'react-icons/fc'
import { FaCheck } from 'react-icons/fa'

function MainMenu() {
  const {gameState, setGameState} = useContext(QuizContext)

  return (
    <div className="menu">
        <FcQuestions size={50} />
        <h1>  Quiz App </h1>
        <h4>Answer <span> {Questions.length} </span> questions and see your score</h4>
        <button className="btn-start" onClick={() => {setGameState('quiz')}}> <FaCheck /> Start Quiz</button>
    </div>
  )
}

export default MainMenu