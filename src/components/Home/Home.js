import Banner from "./Banner/Banner";
import ImageGridBanner from "../Common/ImageGridBanner/ImageGridBanner";
import About from "../About/About";

import softwareDevelopment from "../../assets/home/softwareDevelopment.jpg";

import MaterialPage from "../Common/MaterialPage/MaterialPage";

import "./styles.scss";
import DetailsIconSection from "../Common/DetailsIconSection/DetailsIconSection";
import Page from "../Common/Page/Page";
import DetailsSection from "../Common/DetailsSection/DetailsSection";

import reactNativeLogo from "../../assets/technologies/react-native.png";
import nextLogo from "../../assets/technologies/next.webp";
import flutterLogo from "../../assets/technologies/flutter.webp";
import graphqlLogo from "../../assets/technologies/graphql.png";
import nodeLogo from "../../assets/technologies/node.webp";
import postgressLogo from "../../assets/technologies/postgress.png";
import devopsLogo from "../../assets/technologies/devops.webp";
import springLogo from "../../assets/technologies/spring.svg";

import partnerVercelLogo from "../../assets/partners/vercel.png";
import partnerGithubLogo from "../../assets/partners/github.png";
import partnerAwsLogo from "../../assets/partners/aws.png";

export default function Home() {
  return (
    <>
      <Page fullViewHeight>
        <Banner uid="HOME_BANNER" />
      </Page>

      <Page>
        <DetailsSection
          uid="SERVICE-HOW-SECTION"
          heading={"We Deliver Extraordinary Digital Experiences."}
          items={[
            "Using AI for now and future",
            "Design experience that leaves an impact",
            "Architecture that scales to millions",
            "Standarized approach for speed & quality",
            "Real-Time Insights",
            "Secure Solutions",
            "User-Centric Design",
            "Using Agile Methodologies",
          ]}
          containerClass={"service-how-container"}
          itemClass={"service-how-item"}
        />
      </Page>
      <Page>
        <DetailsIconSection
          uid="PARTNERS-SECTION"
          heading={"Certified Partners"}
          items={[
            {
              icon: partnerVercelLogo,
            },
            {
              icon: partnerGithubLogo,
            },
            {
              icon: partnerAwsLogo,
            },
            {
              icon: partnerVercelLogo,
            },
            {
              icon: partnerGithubLogo,
            },
            {
              icon: partnerAwsLogo,
            },
          ]}
          containerClass={"partner-container"}
          itemClass={"partner-item"}
        />
      </Page>
      <Page>
        <DetailsIconSection
          uid="TECHNOLOGY-SECTION"
          // heading={"Technologies"}
          paragraph={
            "We work with cutting-edge technologies Designed to solve your product requirements. "
          }
          items={[
            {
              title: "React Native",
              icon: reactNativeLogo,
            },
            {
              title: "Next.js",
              icon: nextLogo,
            },
            {
              title: "Flutter",
              icon: flutterLogo,
            },
            {
              title: "Spring Boot",
              icon: springLogo,
            },
            {
              title: "GraphQL",
              icon: graphqlLogo,
            },
            {
              title: "Node.js",
              icon: nodeLogo,
            },
            {
              title: "PostgreSQL",
              icon: postgressLogo,
            },
            {
              title: "DevOps",
              icon: devopsLogo,
            },
            {
              title: "Flutter",
              icon: flutterLogo,
            },
          ]}
          itemClass={"technologies-item"}
        />
      </Page>

      {/* <MaterialPage
        uid={"SERVICE-SOFTWARE"}
        imageOptions={{ default: true, image: softwareDevelopment }}
        title={"Software Development"}
        description={
          "Embark on a journey of innovation with our software development expertise. Our seasoned team turns your ideas into functional solutions, employing cutting-edge technology to drive your success. Experience tailored development that meets your unique needs and propels your business forward."
        }
        buttonOptions={{
          label: "Explore More",
          path: "software-development-services",
        }}
      /> */}
      <ImageGridBanner uid="GALLERY" />
      <About uid="ABOUT" />
    </>
  );
}
