import React from "react";
import styles from "./ContactMe.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <section className={styles.contactSection} id="contactSection">
      <h1 className={styles.heading}> Contact Details</h1>

      <div className={styles.contactDetails}>
        <div className={styles.contactInfo}>
          <h1 className={styles.contactInfoHeading}>Contact Information</h1>
          <div className={styles.info}>
            <div className={styles.contact}>
              <div className={styles.address}>
                <h1> Name: Surakanti Rajashekhar</h1>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.address}>
                <h1> Profession: Software Analyst at Capgemini</h1>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.address}>
                <h1> Date Of Birth : 09-04-1997</h1>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.icon}>
                {" "}
                <MdEmail />
              </div>
              <div className={styles.address}>
                <h3 className={styles.icons}>Email</h3>
                <p className={styles.data}> rajashekharsurakanti@gmail.com</p>
              </div>
            </div>
            <div className={styles.contact}>
              <div className={styles.icon}>
                {" "}
                <FaLocationDot />
              </div>
              <div className={styles.address}>
                <h3 className={styles.addressheading}>Address</h3>
                <address className={styles.data}>
                  {" "}
                  1-45, Kacharam, Medipelly, District: Jagityal, Pincode:
                  505453, State: Telangana, India
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <h1>Social Media Platforms</h1>
          <div className={styles.socialMediaLinks}>
            <a
              href="https://www.linkedin.com/in/rajashekharsurakanti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaLinkedin />
              </span>
            </a>
            <a
              href="https://leetcode.com/Rajashekhar55/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <SiLeetcode />
              </span>
            </a>

            <a
              href="https://github.com/SurakantiRajashekhar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
