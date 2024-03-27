import React from "react";
import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.educationSection} id="education">
      <h2 className={styles.heading}>
        Education Details
      </h2>
      <div className={styles.educationDetails}>
        <div className={styles.education}>
          <div className={styles.educationYear}>
            <h3 className={styles.year}>2019 - 2022</h3>
            <h2>Master Of Computer Applications (MCA)</h2>
            <h3>College: Aurora's PG College, Ramanthapur, Hyderabad</h3>
            <h3>Specialization: Computer Applications</h3>
            <h3>CGPA: 7.79</h3>
          </div>
          <div className={styles.educationYear}>
            <h3 className={styles.year}>2015 - 2018</h3>
            <h2>Bachelor of Science (Bsc)</h2>
            <h3>College: Nizam Collge, Basheerbagh, Hyderabad</h3>
            <h3>Specialization: Mathematics, Physics, Electronics</h3>
            <h3>CGPA: 6.23</h3>
          </div>
        </div>
        <div className={styles.education}>
          <div className={styles.educationYear}>
            <h3 className={styles.year}>2013 - 2015</h3>
            <h2>Intermediate</h2>
            <h3>College: SR Junior College, Karimnagar</h3>
            <h3>Specialization: Mathematics, Physics, Chemistry</h3>
            <h3>Percentage: 94%</h3>
          </div>

          <div className={styles.educationYear}>
            <h3 className={styles.year}>2012- 2013</h3>
            <h2>SSC</h2>
            <h3>College: ZPHS Venkatraopet, Venkatraopet</h3>
            <h3>Specialization: Mathematics, Physics, Social</h3>
            <h3>GPA: 9.2</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
