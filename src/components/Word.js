import { useState, useEffect, useRef } from 'react';

function Word({ answer, clickedLetter, mistakes, maxMistakes, sendMistakes, sendGameStatus }) {
    const [result, setResult] = useState(['_ ']);
    const refGuessedLetters = useRef([]);
    const refResult = useState(['_ ']);
    useEffect(() => {
        setResult(innitialWord(answer, clickedLetter));
        if (mistakes == maxMistakes - 1) {
            sendGameStatus({status: true, result: 'loss'})
        }
        if (!refResult.current.includes("_ ")) {
            console.log("win")
            sendGameStatus({status: true, result: 'win'})
        }
        
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
        refResult.current = res;
        return res;
    }

    return (
        <div>{result?.map((x, i) => <span key={i}>{x}</span>)}</div>
    );
}

export default Word;