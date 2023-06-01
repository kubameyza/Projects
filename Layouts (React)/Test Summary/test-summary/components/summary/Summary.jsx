import styles from './summary.module.css';
import { Skills } from '../skills/Skills';

export const Summary = () => {
  return (
    <div className={styles.summary_section}>
      <h3>Summary</h3>
      <Skills></Skills>
      <button>Continue</button>
    </div>
  );
};
