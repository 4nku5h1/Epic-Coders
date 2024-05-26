import Button from "../../Common/Button/Primary/Button";
import { scrollToId } from "../../Common/helper";
import "./styles.scss";

export default function Stats() {
  const StatsCard = ({ title, description }) => {
    return (
      <div className="stats-card">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
  };
  return (
    <div className="page stats">
      <div className="cards container">
        <StatsCard
          title={"5 +"}
          description={"YEARS OF DEVELOPMENT EXPERIANCE"}
        />
        <StatsCard title={"500 +"} description={"PROJECT DELIVERED"} />
        <StatsCard title={"500 +"} description={"HAPPY CLINTS"} />
        <StatsCard title={"80 +"} description={"PROFESSIONAL EMPLOYEES"} />
      </div>
      <Button label={"CONTACT US"} onClick={() => scrollToId("FOOTER")} />
    </div>
  );
}
