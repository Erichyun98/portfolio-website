import "./Navigation.scss";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  const navRef = useRef();

  const handleButtonClick = () => {
    navRef.current.classList.toggle("navigation__responsive");
  };

  return (
    <nav className="navigation">
      <section className="navigation__section">
        <h1 className="navigation__title">ERIC HYUN</h1>
        <ul className="navigation__lists" ref={navRef}>
          <li className="navigation__list">
            <a
              href="#"
              className="navigation__link"
              onClick={handleButtonClick}
            >
              Home
            </a>
          </li>
          <li className="navigation__list">
            <a
              href="#about"
              className="navigation__link"
              onClick={handleButtonClick}
            >
              About
            </a>
          </li>
          <li className="navigation__list">
            <a
              href="#work"
              className="navigation__link"
              onClick={handleButtonClick}
            >
              Work
            </a>
          </li>
          <li className="navigation__list">
            <a
              href="#tech"
              className="navigation__link"
              onClick={handleButtonClick}
            >
              Tech
            </a>
          </li>
          <li className="navigation__list">
            <a
              href="#project"
              className="navigation__link"
              onClick={handleButtonClick}
            >
              Projects
            </a>
          </li>
          <li className="navigation__list">
            <a
              href="#contact"
              className="navigation__link"
              onClick={handleButtonClick}
            >
              Contact
            </a>
          </li>
          <button onClick={handleButtonClick} className="navigation__button">
            <FaTimes className="navigation__close" />
          </button>
        </ul>
        <button onClick={handleButtonClick} className="navigation__button">
          <FaBars className="navigation__bars" />
        </button>
      </section>
    </nav>
  );
}

export default Navigation;
