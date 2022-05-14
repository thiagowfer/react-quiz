import "./App.css";
import {useState} from 'react'
import MainMenu from './components/MainMenu'
import EndScreen from './components/EndScreen'
import Quiz from './components/Quiz'
import {QuizContext} from './helpers/Contexts'

function App() {  
  const [gameState, setGameState] = useState('menu')
  const [score, setScore] = useState(0)

  return (
    <div>
      <div className="app">
        <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
          {gameState === 'menu' && <MainMenu />}
          {gameState === 'quiz' && <Quiz />}
          {gameState === 'endscreen' && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;
