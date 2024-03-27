import React from "react";
import styles from "./Projects.module.css";

const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
  return (
    <section className={styles.projectSection} id="projectSection">
      <h1 className={styles.heading}>Project details</h1>
      <div className={styles.projectDetails}>
        <h1 className={styles.year}>
          Project Name : {title} | <a href={demo}>demo</a> |{" "}
          <a href={source}>source</a>
        </h1>
        <div className={styles.project}>
          {skills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <span key={id}>{skill} | </span>
              </div>
            );
          })}
          <p>
            {" "}
            &#11044; Developed a fully responsive personal portfolio website
            using React Js
          </p>
          <p>
            {" "}
            &#11044; The portfolio is categorized into sections such as Home,
            Experience, Education, Projects, Skills, Contact, and AboutMe.
          </p>
          <p>
            {" "}
            &#11044; We can find all the details related to the particular
            category by clicking on the corresponding category in the navbar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
