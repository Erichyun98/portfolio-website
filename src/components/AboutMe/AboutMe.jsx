import "./AboutMe.scss";
import pic from "../../assets/images/965.jpeg";

function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="about__section">
        <h2 className="about__title">Who am I?</h2>
        <div className="about__container">
          <div className="about__img-container">
            <img src={pic} alt="image of portfolio" className="about__img" />
          </div>
          <p className="about__info">
            Hello, my name is Eric Hyun. I have a background in economics and
            recently graduated from a web development bootcamp. I enjoy building
            responsive websites and learning about new technologies. I am
            currently working on few projects, so please feel free to go check
            them out!
          </p>
        </div>
        <div className="about__secondary">
          <h3 className="about__title">Goals & Interests</h3>
          <p className="about__info">
            As a professional with a dual background in Economics and coding, my
            primary goal is to secure a dynamic role as an analyst or developer.
            Drawing from my comprehensive understanding of economic principles
            and hands-on experience in coding, I am eager to contribute to a
            forward-thinking team where I can effectively fuse these skill sets.
            My aim is to engage in impactful projects that leverage data-driven
            insights and innovative technological solutions, thereby driving
            growth and excellence in the field.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
