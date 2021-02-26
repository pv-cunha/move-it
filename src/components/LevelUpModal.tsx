import React from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {
  const challengesContextData = React.useContext(ChallengesContext);
  const { level, closeLevelUpModal } = challengesContextData;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close" />
        </button>
      </div>
    </div>
  );
}
