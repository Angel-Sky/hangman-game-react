import './Image.css'
import { useState, useContext } from "react";
import GameContext from "../context/GameContext";

import step0 from "../images/step0.png";
import step1 from "../images/step1.png";
import step2 from "../images/step2.png";
import step3 from "../images/step3.png";
import step4 from "../images/step4.png";
import step5 from "../images/step5.png";
import step6 from "../images/step6.png";
import step7 from "../images/step7.png";
import step8 from "../images/step8.png";
import step9 from "../images/step9.png";
import step10 from "../images/step10.png";

function Image() {
    const [gameState] = useContext(GameContext);
    const [img] = useState([step0, step1, step2, step3, step4, step5, step6, step7, step8, step8, step9, step10]);

    return (
        <div id="progrressImg">
            <img src={img[gameState.mistakes]}></img>
        </div>
    );
}

export default Image;