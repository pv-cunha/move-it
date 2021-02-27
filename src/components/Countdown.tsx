import React from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export default function Countdown() {
  const countdownContextData = React.useContext(CountdownContext);
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    time,
    initialTime,
    resetCountdown,
    startCountdown,
  } = countdownContextData;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const progressBarPercentage = 100 - (time / initialTime) * 100;
  console.log(100 - (time / initialTime) * 100);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
              <div className={styles.countdownButtonProgressBar}>
                <div
                  style={{
                    width: `${progressBarPercentage}%`,
                  }}
                ></div>
              </div>
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
