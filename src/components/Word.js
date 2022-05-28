import { useState, useEffect, useRef } from 'react';

function Word({ answer, clickedLetter }) {
    const [result, setResult] = useState([]);
    const [guessedLetters, setGuessedLetters] = useState([]);
   
    useEffect(() => {
        setResult(innitialWord(answer, clickedLetter))
    }, [clickedLetter])

    function innitialWord(answer, clickedLetter) {
        let arr = answer.split("")
        let firstLetter = answer[0];
        let lastLetter = answer[answer.length - 1];
        let res = []
        arr.forEach(ch => {
            ch == firstLetter || ch == lastLetter || ch == clickedLetter || guessedLetters.includes(ch) ?
                res.push(ch) && setGuessedLetters(old => [...old, ch])
            :
                res.push("_ ")
        })
        return res;
    }

    return (
        <div>{result?.map((x, i) => <span key={i}>{x}</span>)}</div>
    );
}

export default Word;