import Button from "../../Common/Button/Primary/Button";
import { scrollToId } from "../../Common/helper";
import "./styles.scss";

export default function Stats({data}) {
  const StatsCard = ({ logo, title, description }) => {
    return (
      <div className="stats-card">
        <img id="SERVICE-DETAILS-BANNER" className="banner" src={logo} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  return (
    <div className="page stats">
      <div className="cards container">
        {data.map((item)=><StatsCard {...item}/>)}
      </div>
      <Button label={"Contact Us"} onClick={() => scrollToId("FOOTER")} type={"SOLID"} roundedCorners/>
    </div>
  );
}
