import React from "react";
import styles from "./Home.module.css";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import image from "./rajashekhar.jpeg";
import resume from "./Rajashekhar_Surakanti_Resume.pdf.pdf";

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <div className={styles.homeContent}>
        <h3>Hello, I am</h3>
        <h1>Surakanti Rajashekhar</h1>
        <h3>
          And, I'm a<span> Frontend developer</span>
        </h3>
        <p>I'm a Front-End web developer with over 1 year of experience.</p>

        <div className={styles.socialMedia}>
          <a
            href="https://www.linkedin.com/in/rajashekharsurakanti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              {" "}
              <FaLinkedin />
            </span>
          </a>
          <a
            href="https://leetcode.com/Rajashekhar55/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <SiLeetcode />{" "}
            </span>
          </a>

          <a
            href="https://github.com/SurakantiRajashekhar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              {" "}
              <FaGithub />{" "}
            </span>
          </a>
        </div>
        <a
          href={resume}
          download="rajashekhar_resume.pdf"
          className={styles.resume}
        >
          Download Resume
        </a>
      </div>

      <div className={styles.image}>
        <img src={image} alt="#" />
      </div>
    </div>
  );
};

export default Home;
