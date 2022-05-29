import { useContext } from 'react';
import GameContext from '../context/GameContext';

function EndGame() {
    const [{ word, isOver }, dispatch] = useContext(GameContext);
    const resetGame = () => {
        dispatch({ type: 'RESET_GAME' });
    }
    return (
        <>{isOver.result == 'loss'
            ?
            <p>Game Over! The right answer was <b>{word}</b></p>
            :
            <p>You win! Congratulations!</p>
        }
            <button onClick={resetGame}>Play again</button>
        </>
    )
}

export default EndGame;