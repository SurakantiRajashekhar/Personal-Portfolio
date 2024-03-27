import React from "react";
import styles from "./Skills.module.css";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiJquery } from "react-icons/si";
import { FaJava, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import mongodb from "./mongodb.png";
import html from "./html.jpeg";
import express from "./express.png";
import mysql from "./mysql.png";

const Skills = () => {
  return (
    <section className={styles.skillsSection} id="skillsSection">
      <h1 className={styles.heading}> Technical and Professional Skills</h1>
      <div className={styles.skills}>
        <div className={styles.technical}>
          <h1>Technical Skills</h1>
          <div className={styles.technicalSkills}>
            <div className={styles.row}>
              <div className={styles.mySkills}>
                <img src={html} alt="html" className={styles.icons} />
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
              <div className={styles.mySkills}>
                <IoLogoCss3 className={styles.css} />
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
              <div className={styles.mySkills}>
                <FaBootstrap className={styles.bootstrap} />
                <h3>Bootstrap</h3>
                <p>Experienced</p>
              </div>
              <div className={styles.mySkills}>
                <SiJavascript className={styles.javascript} />
                <h3>Javascript</h3>
                <p>Experienced</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.mySkills}>
                <FaJava className={styles.java} />
                <h3>Java</h3>
                <p>Skilled</p>
              </div>

              <div className={styles.mySkills}>
                <FaReact className={styles.react} />
                <h3>React js</h3>
                <p>Experienced</p>
              </div>

              <div className={styles.mySkills}>
                <SiJquery className={styles.jquery} />
                <h3>jQuery</h3>
                <p>Experienced</p>
              </div>

              <div className={styles.mySkills}>
                <IoLogoNodejs className={styles.node} />
                <h3>Node Js</h3>
                <p>Skiled</p>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.mySkills}>
                <img src={express} alt="express" className={styles.icons} />
                <h3>Express Js</h3>
                <p>Skilled</p>
              </div>

              <div className={styles.mySkills}>
                <img src={mongodb} alt="mongodb" className={styles.icons} />
                <h3>MongoDB</h3>
                <p>Skilled</p>
              </div>

              <div className={styles.mySkills}>
                <img src={mysql} alt="mysql" className={styles.icons} />
                <h3>MySQL</h3>
                <p>Experienced</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.professional}>
          <div>
            <h1>Professional Skills</h1>
          </div>
          <div className={styles.professionalSkills}>
            <h3>
              <span> &#11044; Strong Analytical and Problem solving</span>
            </h3>
            <h3>
              <span>
                &#11044; Strong Verbal and Written commnunication skills
              </span>
            </h3>
            <h3>
              <span> &#11044; Active Listener</span>
            </h3>
            <h3>
              <span> &#11044; Team Work</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
