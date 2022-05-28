import { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';

function Letters({ word, aplhabet, sendClickedLetter }) {
    const [randomLetters, setRandomLetters] = useState([]);
    const refNewLetter = useRef();

    useEffect(() => {
        let result = new Set();
        let n = word.length;
        (n < 5) ? n = 10 : n = n * 2;
        word
            .split("")
            .forEach(l => result.add(l));

        let diffLetters = aplhabet.filter(x => !(result.has(x))); //letters that are not included into the current word
        result.delete(word[0]); //remove first letter 
        result.delete(word[word.length - 1]); //remove last letter

        let uniqueLength = word.length - result.size;

        for (let i = 0; i < n - uniqueLength; i++) {
            let randomLetter = diffLetters[Math.floor(Math.random() * diffLetters.length)]
            while (result.has(randomLetter)) { //in case the random generated char is already into the collection
                randomLetter = diffLetters[Math.floor(Math.random() * diffLetters.length)]
            }
            result.add(randomLetter);
        }

        setRandomLetters([...result])
    }, [])

    useEffect(() => {
        console.log('changed', refNewLetter);
    }, [refNewLetter]);

    function updateLetter(char) {
        refNewLetter.current = char;
    }


    async function handleCharClick(e) {
        e.preventDefault();
        let char = e.target.innerHTML;
        updateLetter(char);
        await sendClickedLetter(refNewLetter.current);
    }

    return (
        <div>{randomLetters.map((x, i) =>
            <Button variant="info"
                onClick={handleCharClick}
                key={i}>
                {x}
            </Button>)}
        </div>
    );
}

export default Letters;