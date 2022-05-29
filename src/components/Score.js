import { useContext } from "react";
import GameContext from "../context/GameContext";

function Score() {
    const [{mistakes, maxMistakes}] = useContext(GameContext);

    return (
        <div>
            Score {mistakes} out of {maxMistakes}
        </div>
    )
}

export default Score;