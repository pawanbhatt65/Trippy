import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Night from "../assets/img1.jpg";
import { Fragment } from "react";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
  return (
    <Fragment>
      <Navbar />
      <Hero cName="hero hero-mid" heroImg={Night} title="Service" />
      <Trip />
      <Footer />
    </Fragment>
  );
}

export default Service;
