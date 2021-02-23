import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/pv-cunha.png" alt="Paulo Victor"/>
      <div>
        <strong>Paulo Victor</strong>
        <p>
          <img src="icons/level.svg" alt="Level up"/>
          Level 1
        </p>
      </div>
    </div>
  );
}