import { useContext } from "react";
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from "../contexts/CountdownContext";



import styles from '../styles/pages/ChallengeBox.module.css';

export function ChallengeBox(){
    const { activeChallenge, resetChallenge, completeChallenges } = useContext(ChallengesContext);
    const { resetCountdown, } = useContext(CountdownContext);

    function handleChallengeSucceded() {
        completeChallenges();
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return(
        <div className={styles.challengeBoxContainer}>
        { activeChallenge ? (
        <div className={styles.challengeActive}>
        <header>Ganhe {activeChallenge.amount}xp</header>

        <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
        </main>

        <footer>
        <button 
        type="button"
        className={styles.failedBtn}
        onClick={handleChallengeFailed}
        >
        Falhei
        </button>
        <button
        className={styles.completeBtn}
                            type="button"
                            onClick={handleChallengeSucceded}
        >
        Completei
        </button>
        </footer>
        </div>

        ):(
        
        <div className={styles.challengeNotA}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
        <img src="icons/level-up.svg" alt="Level up"/>
        Avance de level completando desafios.
        </p>
        </div>
        )
        }


        </div>
    )
}

function Countdowncontext(Countdowncontext: any): {} {
    throw new Error("Function not implemented.");
}
