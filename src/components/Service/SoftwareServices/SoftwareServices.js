import { services } from "../../data";
import { servicesConfig } from "../../Common/Themer/config/pageConfig";
import { scrollToId } from "../../Common/helper";

import ImageCompare from "../../Common/ImageCompare/ImageCompare";
import MaterialPage from "../../Common/MaterialPage/MaterialPage";
import Spacer from "../../Common/Spacer/Spacer";
import MaterialPageData from "../../Common/MaterialPageData/MaterialPageData";

import "./styles.scss";

export default function SoftwareServices() {
  const serviceIds = Object.keys(servicesConfig).filter((id) =>
    id.includes("SERVICE")
  );
  serviceIds.shift();
  return (
    <div className="services-page themer">
      <Spacer className="spacer" />
      <MaterialPageData
        uid="SERVICE-OVERVIEW"
        data={services}
        heading="Software Services"
        paragraph="Embark on a journey of innovation with our software development expertise. Our seasoned team turns your ideas into functional solutions, employing cutting-edge technology to drive your success. Experience tailored development that meets your unique needs and propels your business forward."
        dataHeading="Image Editing"
        buttonOptions={{
          label: "CONTACT US",
          onClick: () => scrollToId("FOOTER"),
        }}
      />
      {services.map((data, index) => {
        const { title, description, imageBeforeOverview, imageAfterOverview } =
          data;
        const id = serviceIds[index];
        return (
          <MaterialPage
            uid={id}
            imageOptions={{
              default: false,
              child: (
                <ImageCompare
                  imageBeforeOverview={imageBeforeOverview}
                  imageAfterOverview={imageAfterOverview}
                  scrollTo={0}
                />
              ),
            }}
            title={title}
            description={description}
            buttonOptions={{ label: "Explore More", path: `${data.path}` }}
          />
        );
      })}
    </div>
  );
}
