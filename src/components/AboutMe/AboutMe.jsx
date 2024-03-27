import React from "react";
import styles from "./AboutMe.module.css";
import { Link } from "react-scroll";
import rajashekhar from "./rajashekhar.jpeg";

const AboutMe = ({ setClassName }) => {
  const setHome = () => {
    setClassName("home");
  };
  return (
    <section className={styles.aboutMe} id="aboutMe">
      <div className={styles.aboutImage}>
        <img src={rajashekhar} alt="#" />
      </div>
      <div className={styles.aboutContent} id="aboutContent">
        <h1 className={styles.heading}>
          About <span>Me</span>
        </h1>
        <h1 className={styles.aboutName}>Surakanti Rajashekhar</h1>
        <h3 className={styles.tag}>-Frontend developer</h3>
        <p>
          {" "}
          &#11044;{" "}
          <span>
            {" "}
            Result-driven and detail-oriented Front-End Developer with around 1
            year of experience in designing and implementing responsive and
            user-centric web applications.
          </span>
        </p>
        <p>
          {" "}
          &#11044;{" "}
          <span>
            Developed and maintained front-end components for Zebra
            Technologies, resulting in a 20% improvemnet in page load times.
          </span>
        </p>
        <p>
          {" "}
          &#11044;{" "}
          <span>
            {" "}
            Collaborated on the redesign of landing page, leading to 15%
            increase in the user engagement.
          </span>
        </p>
        <p>
          {" "}
          &#11044;
          <span>
            {" "}
            Implemented responsive features, ensuing optimal user experience on
            the both desktop and mobile devices.
          </span>
        </p>
        <Link to="home" className={styles.knowMore} onClick={setHome}>
          Know More
        </Link>
      </div>
    </section>
  );
};

export default AboutMe;
