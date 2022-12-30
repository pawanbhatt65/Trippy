import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/img5.jpg";
import Trip2 from "../assets/img6.jpg";
import Trip3 from "../assets/img7.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in indonessia"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the"
        />
        <TripData
          image={Trip2}
          heading="Trip in France"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the"
        />
        <TripData
          image={Trip3}
          heading="Trip in indonessia"
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the"
        />
      </div>
    </div>
  );
}

export default Trip;
