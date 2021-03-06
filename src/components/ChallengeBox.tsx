import React from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
  const contextData = React.useContext(ChallengesContext);
  const { activeChallenge, resetChallenge, completeChallenge } = contextData;

  const countdownContextData = React.useContext(CountdownContext);
  const { resetCountdown } = countdownContextData;

  const handleChallengeSucceeded = () => {
    resetCountdown();
    completeChallenge();
  };

  const handleChallengeFailed = () => {
    resetCountdown();
    resetChallenge();
  };

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img
              src={`icons/${activeChallenge.type}.svg`}
              alt={`${activeChallenge.type}`}
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei :(
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei :)
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
