import './Word.css'
import { useState, useEffect, useRef, useContext } from 'react';
import GameContext from '../context/GameContext';

function Word() {
    const [{ word, clickedLetter, mistakes, maxMistakes, guessedLetters }, dispatch] = useContext(GameContext);
    const [result, setResult] = useState(['_ ']);
    const refGuessedLetters = useRef([guessedLetters]);
    const refResult = useState(['_ ']);

    useEffect(() => {
        setResult(renderWord());
        if (mistakes == maxMistakes - 1) {
            dispatch({ type: 'END_GAME', payload: { status: true, result: 'loss' } });
        }
        if (!refResult.current.includes("_ ")) {
            dispatch({ type: 'END_GAME', payload: { status: true, result: 'win' } });
            dispatch({ type: 'RESET_MISTAKES' }); //so that the character can start smiling
        }

    }, [clickedLetter])

    function renderWord() {
        let arr = word.split("")
        let firstLetter = word[0];
        let lastLetter = word[word.length - 1];
        let res = []
        arr.forEach(ch => {
            if (ch == firstLetter || ch == lastLetter || ch == clickedLetter || guessedLetters.includes(ch)) {
                res.push(ch);
                refGuessedLetters.current.push(ch);
                if (!guessedLetters.includes(ch)) {
                    dispatch({ type: 'SET_GUESSED_LETTERS', payload: ch })
                }
            } else {
                res.push("_ ");
            }

        });
        // if (!refGuessedLetters.current.includes(clickedLetter) && clickedLetter !== "") {
        //     dispatch({ type: 'INCREASE_MISTAKES', payload: mistakes + 1 });
        // }
        refResult.current = res;

        return res;
    }

    return (
        <div id="word">{result?.map((x, i) => <span key={i}>{x}</span>)}</div>
    );
}

export default Word;