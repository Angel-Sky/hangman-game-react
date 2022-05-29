import './Score.css'
import { useContext } from "react";
import GameContext from "../context/GameContext";

function Score() {
    const [{mistakes, maxMistakes}] = useContext(GameContext);

    return (
        <div id="score">
            Score <b>{mistakes}</b> out of <b>{maxMistakes}</b>
        </div>
    )
}

export default Score;