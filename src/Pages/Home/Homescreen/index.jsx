import HeroSection from "../HeroSection";
import About from "../About";
import Projects from "../Projects"
import Contact from "../Contact"
import Footer from "../Footer"


export default function Home() {
  return (
    <>
      <div className="container">
        <HeroSection />
        <About />
        <Projects />
        <Contact />
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </>
  );
}