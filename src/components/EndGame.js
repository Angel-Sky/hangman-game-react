function EndGame({ answer, result }) {
    console.log(result)
    return (
        <>{result == 'loss'
            ?
            <p>Game Over! The right answer was <b>{answer}</b></p>
            :
            <p>You win!</p>
        } </>
    )
}

export default EndGame;