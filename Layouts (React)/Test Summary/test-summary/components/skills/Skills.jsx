import { useState, useEffect } from 'react';
import styles from './skills.module.css';

export const Skills = () => {
  const [skills, setSkills] = useState([]);

  const getSkills = async () => {
    const response = await fetch('../../public/data.json');
    const skillsData = await response.json();
    setSkills(skillsData);
  };

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <div className={styles.skills}>
      {skills.map((skill, index) => (
        <div
          key={index}
          className={styles.skill}
        >
          <div className={styles.icon_field}>
            <img src={skill.icon}></img>
            <span>{skill.category}</span>
          </div>
          <span className={styles.black_number}>
            {skill.score} / <span className={styles.gray_number}>100</span>
          </span>
        </div>
      ))}
    </div>
  );
};
