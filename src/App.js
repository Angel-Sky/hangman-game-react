import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useReducer } from 'react';
import GameContext from './context/GameContext';
import Letters from './components/Letters';
import Word from './components/Word';
import Image from './components/Image'
import Score from './components/Score'
import EndGame from './components/EndGame'
import { innitialState, gameReducer } from './context/reducer';

function App() {
    const [gameState, dispatch] = useReducer(gameReducer, innitialState);

    return (
        <GameContext.Provider value={[gameState, dispatch]}>
            <div className="App">
                <h1>Hangman Game</h1>
                <Score />
                <Image />
                <Word />
                {gameState.isOver.status
                    ?
                    <EndGame />
                    :
                    <Letters />
                }
            </div>
        </GameContext.Provider>
    );
}

export default App;
