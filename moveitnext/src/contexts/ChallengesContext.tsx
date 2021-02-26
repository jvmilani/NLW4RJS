import { createContext, useState, ReactNode } from 'react';
import challenges from "../challenges.json";

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;
    challengeCompleted: number;
    activeChallenge: Challenge ;
     levelUp: () => void;
     startNewChallenge: () => void;
     resetChallenge: () => void;
}

interface challengeProviderProps{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}:challengeProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(32);
    const [challengeCompleted, setchallengeCompleted] = useState(0);
    const [activeChallenge, setactiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level + 1) * 4,2)

    function levelUp() {
        setlevelup(level+1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        console.log(challenge);
        setactiveChallenge(challenge);
    }

    function resetChallenge() {
        setactiveChallenge(null);        
    }

    return(
        
    <ChallengesContext.Provider 
    value={{
    level,
    currentExperience,
    experienceToNextLevel,
    challengeCompleted,
    levelUp,
    startNewChallenge,
    activeChallenge,
    resetChallenge
    }}>
        {children}
    </ChallengesContext.Provider>

    )
    
}