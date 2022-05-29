import './EndGame.css'
import { useContext } from 'react';
import GameContext from '../context/GameContext';
import { VscRefresh } from 'react-icons/vsc'

function EndGame() {
    const [{ word, isOver }, dispatch] = useContext(GameContext);
    const resetGame = () => {
        dispatch({ type: 'RESET_GAME' });
    }
    return (
        <div id='endGame'>{isOver.result == 'loss'
            ?
            <p>Game Over! The right answer was <b>{word}</b></p>
            :
            <p>You win! Congratulations!</p>
        }
            <p id='playAgain'onClick={resetGame}>Play again? <VscRefresh/></p>
        </div>
    )
}

export default EndGame;