import React from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/CompletedChallenges.module.css';

export default function CompletedChallenges() {
  const contextData = React.useContext(ChallengesContext);
  const { challengesCompleted } = contextData;

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
