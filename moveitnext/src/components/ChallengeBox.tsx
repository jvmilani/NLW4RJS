import { useContext } from "react";
import styles from '../styles/pages/ChallengeBox.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext'

export function ChallengeBox(){
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

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
        onClick={resetChallenge}
        >
        Falhei
        </button>
        <button
        className={styles.completeBtn}
        type="button"
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