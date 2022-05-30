import './Letters.css'
import { useEffect, useRef, useContext } from 'react';
import GameContext from '../context/GameContext';
const aplhabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function Letters() {
    const [{ word, randomLetters, allClickedLetters }, dispatch] = useContext(GameContext);
    const refNewLetter = useRef();
    const refRandomLetters = useRef([...randomLetters]);

    useEffect(() => {
        if (randomLetters.length == 0) {
            generateLetters();
        } 
    }, [])

    function generateLetters() {
        let result = new Set();
        let n = word.length;
        (n < 5) ? n = 10 : n = n * 2;
        word
            .split("")
            .forEach(l => result.add(l));

        let diffLetters = aplhabet.filter(x => !(result.has(x))); //letters that are not included into the current word
        result.delete(word[0]); //remove first letter 
        result.delete(word[word.length - 1]); //remove last letter

        while (result.size < n) {
            let randomLetter = diffLetters[Math.floor(Math.random() * diffLetters.length)]
            result.add(randomLetter);
        }
        let shuffle = shuffleLetters(Array.from(result))
        console.log(shuffle)
        refRandomLetters.current = shuffle
        dispatch({ type: 'SET_RANDOM_LETTERS', payload: shuffle });
    }

    function handleCharClick(e) {
        e.preventDefault();
        refNewLetter.current = e.target.innerHTML;
        dispatch({ type: 'SET_LETTER', payload: refNewLetter.current });
        dispatch({ type: 'SET_CLICKED_LETTERS', payload: refNewLetter.current });
    }

    function shuffleLetters(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <div id='letters'>{
            refRandomLetters.current?.map((letter, i) =>
                <>
                    {allClickedLetters.includes(letter) ?
                        <button className='btn-letter' disabled={true} key={i}>
                            {letter}
                        </button>
                        :
                        <button className='btn-letter' onClick={handleCharClick} key={i}>
                            {letter}
                        </button>
                    }
                </>
            )
        }
        </div>
    );
}

export default Letters;