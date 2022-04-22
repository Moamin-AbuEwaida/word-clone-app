import React,{useContext} from 'react'
import { AppContext} from '../App';

const Gameover = () => {
    const {gameOver, currAttempt, correctWord}= useContext(AppContext)
  return (
    <div className="gameOver">
        <h3>{gameOver.guessedWord ? 'You got it right' : 'Sorry :/ try again'}</h3>
        <h1>Correct: {correctWord}</h1>
        {gameOver.guessedWord && (<h3>you guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default Gameover