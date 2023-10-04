import "./projects.scss";
import instock from "../../assets/images/instock.png";
import brainflix from "../../assets/images/brainflix-mock.png";
import sunwoo from "../../assets/images/sunwoo-global-img.png";

function Projects() {
  return (
    <section className="project" id="project">
      <div className="project__section">
        <h2 className="project__title">Projects</h2>
        <div className="project__container">
          <div className="project__item">
            <img src={instock} alt="project image" className="project__img" />
            <p className="project__info">Instock</p>
            <p className="project__detail">
              Inventory management and tracking application.
            </p>
            <button className="project__button">
              <a href="#" className="project__link">
                View Project
              </a>
            </button>
          </div>
          <div className="project__item">
            <img src={brainflix} alt="project image" className="project__img" />
            <p className="project__info">Brainflix</p>
            <p className="project__detail">
              Responsive video streaming website.
            </p>
            <button className="project__button">
              <a
                href="https://github.com/Erichyun98/Eric-Hyun-brainflix"
                className="project__link"
                target="blank"
              >
                View Project
              </a>
            </button>
          </div>
          <div className="project__item">
            <img src={sunwoo} alt="project image" className="project__img" />
            <p className="project__info">Sunwoo Global Inc.</p>
            <p className="project__detail">
              E-commerce Website for SG Inc. In Progress.
            </p>
            <button className="project__button">
              <a
                href="https://sunwoo-global.netlify.app/"
                target="blank"
                className="project__link"
              >
                View Project
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
