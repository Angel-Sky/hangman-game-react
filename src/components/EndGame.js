import { useEffect, useRef, useContext } from 'react';
import GameContext from '../context/GameContext';

function EndGame() {
    const [{ word, isOver }, dispatch] = useContext(GameContext);

    return (
        <>{isOver.result == 'loss'
            ?
            <p>Game Over! The right answer was <b>{word}</b></p>
            :
            <p>You win! Congratulations!</p>
        }
            <button>Play again</button>
        </>
    )
}

export default EndGame;