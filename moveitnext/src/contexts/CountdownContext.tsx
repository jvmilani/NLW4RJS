import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData{
  minutes: number;
  second: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps{
  children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout : NodeJS.Timeout;


export function CountdownProvider({ children }: CountdownProviderProps) {

  const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [isActive, setisActive] = useState(false);
    const [hasFinished, sethasFinished] = useState(false) 

    const minutes = Math.floor(time/60);
    const second = time % 60;
    function startCountDown(){
      setisActive(true);
  }

  function resetCountdown(){
      clearTimeout(countdownTimeout);
      setisActive(false);
      setTime(25 * 60);
      sethasFinished(false)
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

  return (
    <CountdownContext.Provider value={{
      minutes,
      second,
      hasFinished,
      isActive,
      startCountDown,
      resetCountdown
    }}>
      {children}
    </CountdownContext.Provider>
  )
}