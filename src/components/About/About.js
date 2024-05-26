import roseImage from "../../assets/background/rose.webp";
import AnimatedItems from "../Common/Motion/AnimatedItems";
import Stats from "../Home/Stats/Stats";
import { about, clientDescription, clientNames } from "../data";

import "./styles.scss";
export default function About({ uid }) {
  return (
    <div className="themer page content">
      <div className="container" id={uid}>
        <h3 className="about-heading small-capital-heading">WHAT WE DO BEST</h3>
        <p className="about-paragraph paragraph">{about}</p>

        <Stats />
        {/* TODO ADD Web deve and other services cards */}
        <div className="spacer" />
        <h3 className="about-heading small-capital-heading">TRUSTED CLIENTS</h3>
        <p className="about-paragraph paragraph">{clientDescription}</p>
        <AnimatedItems
          animate={true}
          data={clientNames}
          child={(item) => <span>{item}</span>}
        />
      </div>
    </div>
  );
}
