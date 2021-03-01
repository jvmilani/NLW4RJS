import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/pages/CountDown.module.css'


export function CountDown(){
    
    const { minutes,
        second,
        hasFinished,
        isActive,
        startCountDown,
        resetCountdown } = useContext(CountdownContext);

    const [minuteLeft,minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft,secondRight] = String(second).padStart(2, '0').split('');



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