import React, { createContext, useState, ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import challenges from "../challenges.json";
import { LevelUpModal } from "../components/LEvelUpModal";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengeCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenges: () => void;
  closeModalLevel: () => void;
}

interface challengeProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children,...rest }: challengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengeCompleted, setchallengeCompleted] = useState(rest.challengeCompleted ?? 0);

  const [activeChallenge, setactiveChallenge] = useState(null);
  const [isModalOpen, setisModalOpen] = useState(false);
  
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengeCompleted", String(challengeCompleted));
  }, [level, currentExperience, challengeCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setisModalOpen(true);
  }

  function closeModalLevel() {
    setisModalOpen(false);
  }

  function startNewChallenge(): void {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setactiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo Desafio 📌");
      body: `Valendo ${challenge.amount}xp`;
    }
  }

  function resetChallenge() {
    setactiveChallenge(null);
  }

  function completeChallenges() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setactiveChallenge(null);
    setchallengeCompleted(challengeCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        challengeCompleted,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenges,
        closeModalLevel,
        
      }}
    >
      {children}
      { isModalOpen && <LevelUpModal/> }
    </ChallengesContext.Provider>
  );
}
