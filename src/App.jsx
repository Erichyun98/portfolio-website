import "./styles/_global.scss";
import "./App.scss";
import Navigation from "../src/components/Navigation/Navigation";
import Hero from "../src/components/Hero/Hero.jsx";
import AboutMe from "../src/components/AboutMe/AboutMe.jsx";
import Tech from "../src/components/Tech/Tech.jsx";
import Work from "../src/components/Work/Work.jsx";
import Projects from "../src/components/Projects/Projects.jsx";
import Contact from "../src/components/Contact/Contact.jsx";
import Footer from "../src/components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AboutMe />
        <Work />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
