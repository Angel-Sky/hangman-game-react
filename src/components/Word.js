import { useState, useEffect, useRef } from 'react';

function Word({ answer, clickedLetter, mistakes, sendMistakes }) {
    const [result, setResult] = useState([]);
    const refGuessedLetters = useRef([]);

    useEffect(() => {
        setResult(innitialWord(answer, clickedLetter));
    }, [clickedLetter])

    function innitialWord(answer, clickedLetter) {
        let arr = answer.split("")
        let firstLetter = answer[0];
        let lastLetter = answer[answer.length - 1];
        let res = []
        arr.forEach(ch => {
            ch == firstLetter || ch == lastLetter || ch == clickedLetter || refGuessedLetters.current.includes(ch) ?
                res.push(ch) && refGuessedLetters.current.push(ch)
                :
                res.push("_ ");
        });
        if (!refGuessedLetters.current.includes(clickedLetter)) {
            sendMistakes(Number(mistakes) + 1);
        }
        return res;
    }

    return (
        <div>{result?.map((x, i) => <span key={i}>{x}</span>)}</div>
    );
}

export default Word;