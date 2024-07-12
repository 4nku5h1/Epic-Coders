import Banner from './Banner/Banner';

import Page from '../Common/Page/Page';

import reactNativeLogo from '../../assets/technologies/react-native.png';
import nextLogo from '../../assets/technologies/next.webp';
import flutterLogo from '../../assets/technologies/flutter.webp';
import graphqlLogo from '../../assets/technologies/graphql.png';
import nodeLogo from '../../assets/technologies/node.webp';
import postgressLogo from '../../assets/technologies/postgress.png';
import devopsLogo from '../../assets/technologies/devops.webp';
import springLogo from '../../assets/technologies/spring.svg';

import partnerVercelLogo from '../../assets/partners/vercel.png';
import partnerGithubLogo from '../../assets/partners/github.png';
import partnerAwsLogo from '../../assets/partners/aws.png';

import reactLogo from '../../assets/servicesEpicCoders/react.png';
import mobileDevLogo from '../../assets/servicesEpicCoders/app.png';
import uxLogo from '../../assets/servicesEpicCoders/ux.png';
import fullstackLogo from '../../assets/servicesEpicCoders/fullstack.png';
import businessLogo from '../../assets/servicesEpicCoders/business.png';

import aiLogo from '../../assets/experiance/ai.png';
import designLogo from '../../assets/experiance/design.png';
import realTimeLogo from '../../assets/experiance/realtime.png';
import secureLogo from '../../assets/experiance/secure.png';
import userLogo from '../../assets/experiance/user.png';
import qualityLogo from '../../assets/experiance/quality.png';
import architectureLogo from '../../assets/experiance/architecture.png';

import Row from '../Common/Row/Row';
import './styles.scss';
import { Heading1, Heading2, Heading3, Heading4 } from '../Common/Heading/Heading';
import About from '../About/About';

export default function Home() {
    return (
        <>
            <Page>
                <Banner uid="HOME_BANNER" />
            </Page>
            <Page>
                <Row
                    name="services-row"
                    containerClass={'services-row-container'}
                    data={[
                        {
                            icon: reactLogo,
                            title: 'Web App Development',
                        },
                        {
                            icon: mobileDevLogo,
                            title: 'Mobile App Development',
                        },
                        {
                            icon: uxLogo,
                            title: 'UI/UX Design',
                        },
                        {
                            icon: fullstackLogo,
                            title: 'Full Stack Development',
                        },
                        {
                            icon: businessLogo,
                            title: 'Business Analysis',
                        },
                    ]}
                    child={item => {
                        return (
                            <div className="services-row">
                                <img className="logo" src={item.icon} />
                                <p>{item.title}</p>
                            </div>
                        );
                    }}
                />
            </Page>

            <Page className="service-page">
                <Heading3
                    className="heading-3"
                    heading={'We Deliver Extraordinary Digital Experiences'}
                />
                <Row
                    name="services-row"
                    containerClass={'service-container-row row1'}
                    data={[
                        {
                            icon: aiLogo,
                            title: 'Using AI for now and future',
                        },
                        {
                            icon: designLogo,
                            title: 'Design experience that leaves an impact',
                        },
                    ]}
                    itemClass={'service-how-item'}
                    child={item => (
                        <>
                            <img className="logos" src={item.icon} />
                            <p>{item.title}</p>
                        </>
                    )}
                />
                <Row
                    name="services-row"
                    containerClass={'service-container-row row2'}
                    data={[
                        {
                            icon: qualityLogo,
                            title: 'Standarized approach for speed & quality',
                        },
                        {
                            icon: realTimeLogo,
                            title: 'Real-Time Insights',
                        },
                        {
                            icon: secureLogo,
                            title: 'Secure Solutions',
                        },
                    ]}
                    child={item => {
                        return (
                            <div className="service-how-item">
                                <img className="logos" src={item.icon} />
                                <p>{item.title}</p>
                            </div>
                        );
                    }}
                />
                <Row
                    name="services-row"
                    containerClass={'service-container-row row3'}
                    data={[
                        {
                            icon: userLogo,
                            title: 'User-Centric Design',
                        },
                        {
                            icon: architectureLogo,
                            title: 'Using Agile Methodologies',
                        },
                    ]}
                    itemClass={'service-how-item'}
                    child={item => (
                        <>
                            <img className="logos" src={item.icon} />
                            <p>{item.title}</p>
                        </>
                    )}
                />
            </Page>
            <Page>
                <Heading3 heading={'Certified Partners'} />
                <Row
                    name="services-row"
                    containerClass={'partner-container'}
                    itemClass={'partner-item'}
                    data={[
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
                    child={item => {
                        return (
                            <>
                                <img className="item-logo" src={item.icon} />
                                <p>{item.title}</p>
                            </>
                        );
                    }}
                />
            </Page>
            <Page className="technologies-page">
                <Heading1 heading={'Technologies we use'} />
                <p>
                    We work with cutting-edge technologies Designed to solve your product
                    requirements.
                </p>
                <Row
                    name="services-row"
                    containerClass={'technologies-container'}
                    itemClass={'technologies-item'}
                    data={[
                        {
                            title: 'React Native',
                            icon: reactNativeLogo,
                        },
                        {
                            title: 'Next.js',
                            icon: nextLogo,
                        },
                        {
                            title: 'Flutter',
                            icon: flutterLogo,
                        },
                        {
                            title: 'Spring Boot',
                            icon: springLogo,
                        },
                        {
                            title: 'GraphQL',
                            icon: graphqlLogo,
                        },
                        {
                            title: 'Node.js',
                            icon: nodeLogo,
                        },
                        {
                            title: 'PostgreSQL',
                            icon: postgressLogo,
                        },
                        {
                            title: 'DevOps',
                            icon: devopsLogo,
                        },
                        {
                            title: 'Flutter',
                            icon: flutterLogo,
                        },
                    ]}
                    child={item => {
                        return (
                            <>
                                <img className="item-logo" src={item.icon} />
                                <p>{item.title}</p>
                            </>
                        );
                    }}
                />
            </Page>
            <About uid="ABOUT" />
        </>
    );
}
