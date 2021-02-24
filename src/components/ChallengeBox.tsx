import React from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
  const contextData = React.useContext(ChallengesContext);

  const hasChallengeActive = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasChallengeActive ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="Body" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
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
