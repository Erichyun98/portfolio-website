import "./Work.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Work() {
  return (
    <section className="work" id="work">
      <div className="work__section">
        <h2 className="work__title">
          Work Experience <br />& Education
        </h2>
        <div className="work__combined">
          <Carousel showThumbs={false}>
            <div className="work__container work__container--border">
              <p className="work__main">Work Experience</p>
              <div className="work__individual">
                <p className="work__description">
                  TD Bank - Personal banking Advisor
                </p>
                <p className="work__date">May 2022 - Present</p>
                <ul className="work__info">
                  <li className="work__details">
                    Provided exceptional customer expereince by offering
                    personalized reccomendation based on financial
                    circumstances.
                  </li>
                  <li className="work__details">
                    Utilized different tools and guidelines to apply for
                    different financial products such as line of credit, and
                    loan.
                  </li>
                </ul>
              </div>
              <div className="work__individual">
                <p className="work__description">Sunwoo Global Inc.</p>
                <p className="work__date">January 2021 - December 2022</p>
                <ul className="work__info">
                  <li className="work__details">
                    Connected with various customers and suppliers to process
                    sale orders and adress any inquiries.
                  </li>
                  <li className="work__details">
                    Manged warehouse logistics and provided detailed repots on
                    daily activies to employees and supervisors.
                  </li>
                </ul>
              </div>
            </div>
            <div className="work__container work__container--bottom">
              <p className="work__main">Education</p>
              <div className="work__individual">
                <p className="work__description">
                  BrainStation - Web Development
                </p>
                <p className="work__date">Graduated April - 2022</p>
                <ul className="work__info">
                  <li className="work__details">Full-Stack Coding BootCamp.</li>
                  <li className="work__details">
                    Succesfully completed a program that focuses on Full-Stack
                    Web development that utilizes tools such as JavaScript,
                    React, Node.js and MySQL.
                  </li>
                </ul>
              </div>
              <div className="work__individual">
                <p className="work__description">
                  Wilfrid Laurier University - Economics
                </p>
                <p className="work__date">Graduated December - 2021</p>
                <ul className="work__info">
                  <li className="work__details">
                    Lazaridis School of Business and Economics.
                  </li>
                  <li className="work__details">
                    Bachelor&apos;s of Arts and specialized in Economics and
                    management.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Work;
