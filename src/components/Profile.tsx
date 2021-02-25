import React from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const contextData = React.useContext(ChallengesContext);
  const { level } = contextData;

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pv-cunha.png" alt="Paulo Victor" />
      <div>
        <strong>Paulo Victor</strong>
        <p>
          <img src="icons/level.svg" alt="Level up" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
