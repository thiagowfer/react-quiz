import { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import { Questions } from '../helpers/QuestionBank'
import { FaBackward } from 'react-icons/fa'

function EndScreen() {
  const {score, setScore, setGameState} = useContext(QuizContext)

  const resetQuiz = () => {
    setScore(0)
    setGameState('menu')
  }

  return (
    <div className="endscreen">
        <h2>Quiz Finished</h2>
        <h3>Final score: {score} / {Questions.length}</h3>
        <button className="btn-back" onClick={resetQuiz}> <FaBackward /> Back to Menu</button>
    </div>
  )
}

export default EndScreen