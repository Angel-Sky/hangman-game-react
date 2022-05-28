import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import Letters from './components/Letters';
import Word from './components/Word';
import Visualize from './components/Visualize'

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
  const refAnswer = useRef();

  const sendClickedLetter = (r) => {
    setClickedLetter(r);
  };

  return (
    <div className="App">
      <h1>Hangman Game</h1>
      <Visualize mistakes={0} />
      <Word answer={randomWord} clickedLetter={clickedLetter} result={refAnswer.current} />
      <Letters word={randomWord} aplhabet={aplhabet} sendClickedLetter={sendClickedLetter} />
    </div>
  );
}

export default App;
