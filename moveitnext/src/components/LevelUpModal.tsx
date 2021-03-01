import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/pages/LevelUpModal.module.css'

export function LevelUpModal() {

  const {level, closeModalLevel} = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns!!!</strong>
        <p>Você alcançou um novo nível</p>

        <button type="button"
          onClick={closeModalLevel}>
          <img src="/icons/close.svg" alt="Fechar Modal"/>
        </button>
      </div>
    </div>
  )
  
}