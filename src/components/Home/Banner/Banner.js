import Button from "../../Common/Button/Primary/Button";
import { scrollToId } from "../../Common/helper";
import Logo from "../../Logo/Logo";

import "./styles.scss";

export default function Banner({ uid }) {
  return (
    <div className="text-banner" id={uid}>
      <div className="banner-logo-container">
        <Logo size={10} showSubtitle={false} />
      </div>
      <section className="banner-section-bas">
        <h2>Build.</h2>
        <h2>Accelerate.</h2>
        <h2>Scale.</h2>
      </section>
      <section>
        <h3>Design & Engineering studio</h3>
        <h3>with a user-first & AI approach.</h3>
      </section>
      <Button
        className="btn-contact-us"
        label={"CONTACT US"}
        onClick={() => scrollToId("FOOTER")}
      />
    </div>
  );
}
