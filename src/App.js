import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useReducer, useEffect, useState } from 'react';
import GameContext from './context/GameContext';
import Letters from './components/Letters';
import Word from './components/Word';
import Image from './components/Image'
import Score from './components/Score'
import EndGame from './components/EndGame'
import {gameReducer, finalState } from './context/reducer';

function App() {
    const [gameState, dispatch] = useReducer(gameReducer, finalState);

    useEffect(() => {
        window.localStorage.setItem("HANGMAN_GAME_PROGRESS", JSON.stringify(gameState))
    }, [gameState])

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
