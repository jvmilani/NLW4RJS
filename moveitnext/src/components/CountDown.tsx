import { useState, useEffect } from 'react';
import styles from '../styles/pages/CountDown.module.css'

export function CountDown(){
    const [time, setTime] = useState(20 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time/60);
    const second = time % 60;

    const [minuteLeft,minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft,secondRight] = String(second).padStart(2, '0').split('');

    function startCountDown(){
        setActive(true);
    }

    useEffect(() => {
        if(active && time > 0){
            setTimeout(() => {setTime(time - 1);
            }, 1000)
        }

    }, [active, time])

    return(
        <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        <button
        onClick={startCountDown}
        className={styles.countdownButton}>
            Iniciar um ciclo
        </button>
    </div>
    );
}