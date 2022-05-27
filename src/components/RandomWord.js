const gameWords = [
    'notebook',
    'calculator',
    'machine'
]

export function randomWord() {
    return gameWords[Math.floor(Math.random() * gameWords.length)]
}



