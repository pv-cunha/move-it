import React from 'react';
import { ChallengesContext } from './ChallengeContexts';

interface CountdownContextData {
  time: number;
  initialTime: number;
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

interface CountdownProviderProps {
  children: React.ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = React.createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {
  const contextData = React.useContext(ChallengesContext);
  const { startNewChallenge } = contextData;

  const initialTime = 0.05 * 60;

  const [time, setTime] = React.useState(initialTime);
  const [isActive, setIsActive] = React.useState(false);
  const [hasFinished, setHasFinished] = React.useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountdown = () => {
    setIsActive(true);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(initialTime);
  };

  React.useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown,
        time,
        initialTime,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
