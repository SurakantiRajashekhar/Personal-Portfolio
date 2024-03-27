import { Link } from "react-scroll";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";

const Header = ({ setClassName, activeClass }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    return () => localStorage.removeItem("activeClass");
  }, []);

  return (
    <nav>
      <p>
        <span>R</span>ajashekhar
      </p>

      <div className={`  ${menuOpen ? styles.menuOpen : styles.menuClose}`}>
        {menuOpen ? (
          <IoCloseSharp className={styles.menuIcon} onClick={toggleMenu} />
        ) : (
          <IoMenuSharp className={styles.menuIcon} onClick={toggleMenu} />
        )}

        <ul className={styles.header}>
          <li
            className={activeClass === "home" ? styles.active : ""}
            onClick={() => setClassName("home")}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={20}
            >
              <span
                className={activeClass === "home" ? styles.active : ""}
                onClick={() => setClassName("home")}
              >
                Home
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-160}
              duration={20}
            >
              <span
                className={activeClass === "experience" ? styles.active : ""}
                onClick={() => {
                  setClassName("experience");
                }}
              >
                Experience
              </span>
            </Link>
          </li>

          <li
            className={activeClass === "education" ? styles.active : ""}
            onClick={() => setClassName("education")}
          >
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-90}
              duration={20}
            >
              <span
                className={activeClass === "education" ? styles.active : ""}
                onClick={() => setClassName("education")}
              >
                Education
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-120}
              duration={20}
            >
              <span
                className={activeClass === "projects" ? styles.active : ""}
                onClick={() => setClassName("projects")}
              >
                Projects
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="skillsSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={20}
            >
              <span
                className={activeClass === "skills" ? styles.active : ""}
                onClick={() => setClassName("skills")}
              >
                Skills
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="contactSection"
              spy={true}
              smooth={true}
              offset={-100}
              duration={20}
            >
              <span
                className={activeClass === "contact" ? styles.active : ""}
                onClick={() => setClassName("contact")}
              >
                Contact
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-80}
              duration={20}
            >
              <span
                className={activeClass === "about" ? styles.active : ""}
                onClick={() => setClassName("about")}
              >
                About
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
