import styles from './result.module.css';

export const Result = () => {
  return (
    <div className={styles.result}>
      <h3 className={styles.title}>Your Result</h3>
      <div className={styles.score}>
        <h2>76</h2>
        <p>of 100</p>
      </div>
      <h3>Great</h3>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};
