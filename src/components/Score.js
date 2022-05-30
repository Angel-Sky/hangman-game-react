import './Score.css'
import { useContext, useEffect, useState } from "react";
import GameContext from "../context/GameContext";
import { Progress } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Score() {
    const [{ mistakes, maxMistakes }] = useContext(GameContext);
    const [progressColor, setProgressColor] = useState('success')

    useEffect(() => {
        if (mistakes <= 5) {
            setProgressColor('success')
        } else if (mistakes > 5 && mistakes <= 7) {
            setProgressColor('warning')
        } else {
            setProgressColor('danger')
        }
    }, [mistakes])

    return (
        <div className='row justify-content-md-center'>
            <div id="score" className='col-6 text-center'>
                <div> Score <b>{mistakes}</b> out of <b>{maxMistakes}</b></div>
                <Progress striped value={100 - mistakes * 10} color={progressColor} />
            </div>
        </div>
    )
}

export default Score;