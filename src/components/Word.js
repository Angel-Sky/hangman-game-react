import { useState, useEffect, useRef } from 'react';

function Word({answer, clickedLetter}) {
    const [result, setResult] = useState([]);
    const [guessedLetters, setGuessedLetters] = useState(new Set());
    // const [remnant, setRemnant] = useState([]);
    const refAnswer = useRef();
    console.log(clickedLetter)
    useEffect(() => {
        console.log(clickedLetter)
        console.log(refAnswer.current)
        loadWord()
    }, [clickedLetter])

    function loadWord() {
        let res = [];
        let firstLetter = answer[0];
        let lastLetter = answer[answer.length - 1];
        res.push(firstLetter);
        let remnant = answer.slice(1, answer.length - 1).split("")
        setGuessedLetters(prev => prev.add(firstLetter).add(lastLetter));
        // setRemnant(a)
        console.log(remnant)

        if (remnant.includes(clickedLetter)) {
            setGuessedLetters(prev => prev.add(clickedLetter));
        }
        remnant.forEach(ch => {
            if (guessedLetters.has(ch)) {
                res.push(ch);
            } else {
                res.push("_ ")
            }
        });

        res.push(lastLetter)
        refAnswer.current = [...res]
        setResult([...res])
        // return res;
    }
    return (
        <div>{refAnswer.current?.map((x, i) => <span key={i}>{x}</span>)}</div> 
    );
}

export default Word;