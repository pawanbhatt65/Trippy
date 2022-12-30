import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Night from "../assets/img1.jpg";
import { Fragment } from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function About() {
  return (
    <Fragment>
      <Navbar />
      <Hero cName="hero hero-mid" heroImg={Night} title="About" />
      <AboutUs />
      <Footer />
    </Fragment>
  );
}

export default About;
