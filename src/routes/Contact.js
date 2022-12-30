import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Night from "../assets/img2.jpg";
import { Fragment } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <Fragment>
      <Navbar />
      <Hero
        cName="hero hero-mid"
        heroImg={Night}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </Fragment>
  );
}

export default Contact;
