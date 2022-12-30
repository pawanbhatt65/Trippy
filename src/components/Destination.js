import "./DestinationStyle.css";
import DestinationData from "./DestinationData";
import Mountain1 from "../assets/img3.jpg";
import Mountain2 from "../assets/img4.jpg";
import Mountain3 from "../assets/img5.jpg";
import Mountain4 from "../assets/img6.jpg";

function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity</p>

      <DestinationData
        cName="first-des"
        heading="Taal Vollcano, Batangas"
        text="            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit
            amet..', comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et
            Malorum' by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        cName="first-des first-des-reverse"
        heading="Mt.DAguldul, Batangas"
        text="            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit
            amet..', comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et
            Malorum' by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
}

export default Destination;
