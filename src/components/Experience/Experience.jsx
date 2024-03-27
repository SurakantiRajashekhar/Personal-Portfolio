import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="experience">
      <div className={styles.experienceSection}>
        <h1 className={styles.heading}>Experience</h1>
        <div className={styles.experienceDetails}>
          <h1 className={styles.year}>06-April-2022 to Present</h1>
          <div className={styles.experience}>
            <h2> Company Name: Capgemini Technology Services India Limited</h2>
            <h3> Designation: Analyst / Software Engineer</h3>
            <h3> Role: Front end Developer</h3>
            <address> 
              Office Address: Capgemini - Bangalore 560066, India EPIP Phase 2,
              Whitefield.
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
