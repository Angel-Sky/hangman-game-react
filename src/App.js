import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useRef } from 'react';
import Letters from './components/Letters';
import Word from './components/Word';
import Visualize from './components/Visualize'
import Score from './components/Score'

const gameWords = [
    // 'notebook',
    'calculator',
    // 'machine'
]
const aplhabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];

function App() {
    const [clickedLetter, setClickedLetter] = useState('');
    const [guessedLetters, setGuessedLetters] = useState(new Set());
    const [mistakes, setMistakes] = useState(-1);
    const [maxMistakes] = useState(10);
    const refAnswer = useRef();
    console.log(mistakes)
    const sendClickedLetter = (r) => {
        setClickedLetter(r);
    };

    const sendMistakes = (r) => {
        setMistakes(r);
    }

    return (
        <div className="App">
            <h1>Hangman Game</h1>
            <Score mistakes={mistakes} maxMistakes={maxMistakes} />
            <Visualize mistakes={mistakes} />
            <Word answer={randomWord} clickedLetter={clickedLetter} result={refAnswer.current} mistakes={mistakes} sendMistakes={sendMistakes} />
            <Letters word={randomWord} aplhabet={aplhabet} sendClickedLetter={sendClickedLetter} />
        </div>
    );
}

export default App;
