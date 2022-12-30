import "./HeroStyle.css";
import { Fragment } from "react";

function Hero(props) {
  return (
    <Fragment>
      <div className={props.cName}>
        <img alt="heroImg" src={props.heroImg}></img>

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Hero;
