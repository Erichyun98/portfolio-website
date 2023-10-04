import "./Hero.scss";
import Programmer from "../../assets/images/coding-guy.png";
import linkedin from "../../assets/icons/linkedin.png";
import resume from "../../assets/icons/resume.png";
import git from "../../assets/icons/github.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__section">
        <div className="hero__container">
          <div className="hero__info-container">
            <p className="hero__description">
              Hello my name is Eric and I am currently looking for an
              analyst/Development position!
            </p>
            <div className="hero__icons">
              <a
                href="https://www.linkedin.com/in/seungik-hyun/"
                target="blank"
                className="hero__links"
              >
                <img src={linkedin} className="hero__icon" />
              </a>
              <a
                href="../../../public/EH-Resume-2023.docx"
                download="Resume-Eric-Hyun.docx"
                className="hero__links"
              >
                <img src={resume} className="hero__icon" />
              </a>
              <a
                href="https://github.com/Erichyun98"
                target="blank"
                className="hero__links"
              >
                <img src={git} className="hero__icon" />
              </a>
              <a href="#contact" className="hero__button">
                Contact me
              </a>
            </div>
          </div>
          <div className="hero__img-container">
            <img
              src={Programmer}
              alt="Illustration of Coding person"
              className="hero__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
