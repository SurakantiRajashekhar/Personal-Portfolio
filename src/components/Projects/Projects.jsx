import React from "react";
import projects from "./Projectss.json";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
