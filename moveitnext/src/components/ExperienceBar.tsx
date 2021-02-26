import { useContext } from "react";
import {ChallengesContext} from '../contexts/ChallengesContext'

import styles from "../styles/pages/ExperienceBar.module.css";


export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    const percentNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    console.log(percentNextLevel)

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width:`${percentNextLevel}%`}}/>

                <span className={styles.currentExperience} style={{ left:`${percentNextLevel}%`}}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}