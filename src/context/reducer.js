const gameWords = [
    'notebook',
    'calculator',
    'machine',
    'cucumber',
    'avenue',
    'zombie',
    'microwave',
    'oxygen',
    'awkward',
    'gossip',
    'icebox',
    'science',
    'salamandra',
    'hippopotamus',
    'ostrich',
    'submarine',
    'rabbit',
    'generation',
    'always',
    'cake'
]

const randomWord = () => { return gameWords[Math.floor(Math.random() * gameWords.length)]; }

const innitialState = {
    word: randomWord(),
    clickedLetter: '',
    allClickedLetters: [],
    mistakes: 0,
    maxMistakes: 10,
    isOver: { status: false, result: 'win' },
    randomLetters: [],
    guessedLetters: []
}

const oldState = JSON.parse(window.localStorage.getItem("HANGMAN_GAME_PROGRESS"));
const finalState = oldState ? oldState : innitialState
finalState.clickedLetter = '';

const gameReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LETTER':
            return { ...state, clickedLetter: action.payload };
        case 'SET_CLICKED_LETTERS': 
            return {...state, allClickedLetters: [...state.allClickedLetters, action.payload]}
        case 'SET_RANDOM_LETTERS':
            return { ...state, randomLetters: [...action.payload] };
        case 'SET_GUESSED_LETTERS':
            return { ...state, guessedLetters: [...state.guessedLetters, action.payload] };
        case 'INCREASE_MISTAKES':
            return { ...state, mistakes: state.mistakes + 1 };
        case 'RESET_MISTAKES':
            return { ...state, mistakes: 0 };
        case 'END_GAME':
            return { ...state, isOver: action.payload };
        case 'RESET_GAME':
            return {
                ...state, word: gameWords[Math.floor(Math.random() * gameWords.length)],
                clickedLetter: '',
                allClickedLetters: [],
                mistakes: 0,
                maxMistakes: 10,
                isOver: { status: false, result: 'win' },
                randomLetters: [],
                guessedLetters: []
            };
        case 'SYNC DATA':
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
};

export {gameReducer, finalState}
