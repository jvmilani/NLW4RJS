import { useState, useEffect, useContext } from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext'

import styles from '../styles/pages/CountDown.module.css'

let countdownTimeout : NodeJS.Timeout;

export function CountDown(){
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setisActive] = useState(false);
    const [hasFinished, sethasFinished] = useState(false) 

    const minutes = Math.floor(time/60);
    const second = time % 60;

    const [minuteLeft,minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft,secondRight] = String(second).padStart(2, '0').split('');

    function startCountDown(){
        setisActive(true);
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setisActive(false);
        setTime(25 * 60);
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {setTime(time - 1);
            }, 1000)
        }else if(isActive && time == 0){
            setisActive(false);
            sethasFinished(true);
            startNewChallenge(); 
        }

    }, [isActive, time])

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
        {hasFinished ? (
            <button
            disabled
            className={styles.countdownButtonDisabled}>
            Ciclo encerrado
            </button>
        ):(
        <>
        {isActive ? (
            <button
        onClick={resetCountdown}
        className={styles.countdownButtonActive}>
        Abandonar ciclo
        </button>

            ) : (
        <button
        onClick={startCountDown}
        className={styles.countdownButton}>
        Iniciar um ciclo
        </button>
            
        )}
        </>
    )}
        
    </div>
    );
}