import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useReducer } from 'react';
import GameContext from './context/GameContext';
import Letters from './components/Letters';
import Word from './components/Word';
import Image from './components/Image'
import Score from './components/Score'
import EndGame from './components/EndGame'

const gameWords = [
    'notebook',
    'calculator',
    'machine'
]
const aplhabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const randomWord = () => { return gameWords[Math.floor(Math.random() * gameWords.length)]; }

function App() {
    const gameReducer = (state, action) => {
        switch (action.type) {
            case 'SET_LETTER':
                return { ...state, clickedLetter: action.payload };
            case 'SET_RANDOM_LETTERS':
                return { ...state, randomLetters: [action.payload] };
            case 'SET_GUESSED_LETTERS':
                return { ...state, guessedLetters: state.guessedLetters.add(action.payload) };
            case 'INCREASE_MISTAKES':
                return { ...state, mistakes: state.mistakes + 1 };
            case 'RESET_MISTAKES':
                return { ...state, mistakes: 0 };
            case 'END_GAME':
                return { ...state, isOver: action.payload };
            case 'RESET_GAME':
                return {
                    ...state, word: gameWords[Math.floor(Math.random() * gameWords.length)],
                    clickedLetter: '',
                    mistakes: -1,
                    maxMistakes: 10,
                    isOver: { status: false, result: 'win' },
                    randomLetters: [],
                    guessedLetters: new Set()
                }
            default:
                return state;
        }
    };
    const [gameState, dispatch] = useReducer(gameReducer, {
        word: randomWord(),
        clickedLetter: '',
        mistakes: -2,
        maxMistakes: 10,
        isOver: { status: false, result: 'win' },
        randomLetters: [],
        guessedLetters: new Set()
    });


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
                    <Letters aplhabet={aplhabet} />
                }
            </div>
        </GameContext.Provider>
    );
}

export default App;
