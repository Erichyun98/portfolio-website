import "./Tech.scss";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import sass from "../../assets/icons/sass.png";
import javascript from "../../assets/icons/js.png";
import reactIcon from "../../assets/icons/react-icon.png";
import reactroute from "../../assets/icons/react-router.png";
import reduxicon from "../../assets/icons/redux.png";
import node from "../../assets/icons/node-js.png";
import git from "../../assets/icons/github(2).png";
import express from "../../assets/icons/express.png";
import npm from "../../assets/icons/npm.png";
import heroku from "../../assets/icons/heroku.png";

function Tech() {
  return (
    <section className="tech" id="tech">
      <div className="tech__section">
        <h2 className="tech__title">My Tech Stack</h2>
        <div className="tech__container">
          <div className="tech__icon-box">
            <img src={html} className="tech__icon" alt="html icon" />
          </div>
          <div className="tech__icon-box">
            <img src={css} className="tech__icon" alt="css icon" />
          </div>
          <div className="tech__icon-box">
            <img
              src={javascript}
              className="tech__icon"
              alt="javascript icon"
            />
          </div>
          <div className="tech__icon-box">
            <img src={sass} className="tech__icon" alt="sass icon" />
          </div>
          <div className="tech__icon-box">
            <img src={reactIcon} className="tech__icon" alt="react icon" />
          </div>
          <div className="tech__icon-box">
            <img
              src={reactroute}
              className="tech__icon"
              alt="react route icon"
            />
          </div>
          <div className="tech__icon-box">
            <img src={reduxicon} className="tech__icon" alt="redux icon" />
          </div>
          <div className="tech__icon-box">
            <img src={node} className="tech__icon" alt="node icon" />
          </div>
          <div className="tech__icon-box">
            <img src={git} className="tech__icon" alt="github icon" />
          </div>
          <div className="tech__icon-box">
            <img src={express} className="tech__icon" alt="express icon" />
          </div>
          <div className="tech__icon-box">
            <img src={npm} className="tech__icon" alt="npm icon" />
          </div>
          <div className="tech__icon-box">
            <img src={heroku} className="tech__icon" alt="heroku icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
