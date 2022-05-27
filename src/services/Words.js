const gameWords = [
    'notebook',
    'calculator',
    'machine'
]
const aplhabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


export function randomWord() {
    return gameWords[Math.floor(Math.random() * gameWords.length)]
}

export function lettersToVisualize(word) {
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

    return [...result];
}


