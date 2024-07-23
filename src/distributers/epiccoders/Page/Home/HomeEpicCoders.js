import Button from '../../../../components/Common/Button/Primary/Button';
import Container from '../../../../components/Common/Container/Container';
import Row from '../../../../components/Common/Row/Row';

import partnerVercelLogo from '../../../../assets/partners/vercel.png';
import partnerGithubLogo from '../../../../assets/partners/github.png';
import partnerAwsLogo from '../../../../assets/partners/aws.png';
import './home.scss';

import service1 from '../../../../assets/epiccoders/services/1.png';
import service2 from '../../../../assets/epiccoders/services/2.png';
import service3 from '../../../../assets/epiccoders/services/3.png';
import service4 from '../../../../assets/epiccoders/services/4.png';
import faster from '../../../../assets/epiccoders/services/5.png';

import reactNativeLogo from '../../../../assets/technologies/react-native.png';
import nextLogo from '../../../../assets/technologies/next.webp';
import flutterLogo from '../../../../assets/technologies/flutter.webp';
import graphqlLogo from '../../../../assets/technologies/graphql.png';
import nodeLogo from '../../../../assets/technologies/node.webp';
import postgressLogo from '../../../../assets/technologies/postgress.png';
import devopsLogo from '../../../../assets/technologies/devops.webp';
import springLogo from '../../../../assets/technologies/spring.svg';
import ContainerSlider from '../../../../components/Common/ContainerSlider/ContainerSlider';
export default function HomeEpicCoders() {
    function ContactButton({ theme }) {
        return (
            <Button
                className="btn-contact-us"
                label={'Contact Us'}
                // onClick={() => scrollToId('FOOTER')}
                type={'SOLID'}
                roundedCorners
                theme={theme}
            />
        );
    }
    function Rating() {
        return <div className="rating">Rated 5/5 on Many.</div>;
    }
    return (
        <>
            <Container className={'container-1 background'}>
                <div className="section1 flex-column-center">
                    <h1>A Design and development studio</h1>
                    <p className="opacity-white-text">
                        We create stunning, custom Webflow websites that combine beautiful design
                        with seamless functionality.
                    </p>
                    <ContactButton theme={'LIGHT'} />
                    <Rating />
                </div>
            </Container>
            <Container className="container-2">
                <h2>Webflow agency services</h2>
                <p className="opacity-dark-text">
                    Explore our services, from web design to Webflow development, for an exceptional
                    online presence.
                </p>
            </Container>

            <Container className="container-3">
                <Row
                    containerClass={'row'}
                    itemClass={'card background'}
                    data={[
                        {
                            heading: 'Web Development',
                            paragraph:
                                'Building custom, high-performance websites to meet your business needs.',
                            backgroundImage: service1,
                        },
                        {
                            heading: 'Mobile App Development',
                            paragraph:
                                'Building custom, high-performance apps to meet your business needs.',
                            backgroundImage: service2,
                        },
                        {
                            heading: 'UI/UX Design',
                            paragraph:
                                'Creating visually stunning, user-friendly designs that engage your audience.',
                            backgroundImage: service3,
                        },
                        {
                            heading: 'Full Stack Development',
                            paragraph:
                                'Building custom, high-performance websites with Webflow to meet your business needs.',
                            backgroundImage: service4,
                        },
                    ]}
                    child={item => {
                        return (
                            <>
                                <h3>{item.heading}</h3>
                                <p className="opacity-white-text card-paragraph">
                                    {item.paragraph}
                                </p>
                                <img className="item-logo" src={item.backgroundImage} />
                            </>
                        );
                    }}
                ></Row>
            </Container>
            <Container className="container-4" contentHorizontalAlign="left">
                <h2>Our clients.</h2>
                <p className="opacity-dark-text">
                    Here are some forward thinking companies we had pleasure working with.
                </p>
                <Row
                    // Todo add logo
                    containerClass={'row'}
                    itemClass={'card'}
                    data={[
                        'PROMAN',
                        'Geek For Geeks',
                        'BIMRA 4x4',
                        'Newton School',
                        'Zenpact',
                        'FOX MORTGAGE',
                        'E-Cart',
                        'CITI BANK',
                        'AIG INSURANCE',
                        'GREEN STREET',
                        'WOW',
                        'RENTOMOJO',
                        'HEALTHIFY',
                        '24 SEVEN',
                        'T&T',
                        'Apple',
                    ]}
                    child={item => {
                        return <p>{item}</p>;
                    }}
                ></Row>
            </Container>
            <Container className={'container-5 background'}>
                <div className="left">
                    <h2>What our clients are saying</h2>
                    <ContactButton theme={'LIGHT'} />
                </div>
                <div className="right">
                    <ContainerSlider>
                        <div className="card-testimonial">
                            <h4>Logo</h4>
                            <p className="testimonial-para">
                                "Juno has been a trustworthy part of the team for a few years now. I
                                will always rehire them for future work when needed and I highly
                                recommend that you work with them if you’re looking for a studio
                                that cares about the craft."
                            </p>
                            <h5>Dexter Washington</h5>
                            <p className="opacity-white-text">Crafted Studios</p>
                        </div>
                        <div className="card-testimonial">
                            <h4>Logo</h4>
                            <p className="testimonial-para">
                                "Juno has been a trustworthy part of the team for a few years now. I
                                will always rehire them for future work when needed and I highly
                                recommend that you work with them if you’re looking for a studio
                                that cares about the craft."
                            </p>
                            <h5>Dexter Washington</h5>
                            <p className="opacity-white-text">Crafted Studios</p>
                        </div>
                    </ContainerSlider>
                </div>
            </Container>
            <Container className="container-6" contentHorizontalAlign="center">
                <h2>Technologies we use</h2>
                <p className="opacity-dark-text">
                    We work with cutting-edge technologies designed to solve your product
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
            </Container>
            <Container className={'container-7 background'} contentHorizontalAlign="left">
                <h2>Why choose Epic coders</h2>
                <div className="service-why-section">
                    <Row
                        containerClass={'service-why-left-container'}
                        itemClass="why-card"
                        data={[
                            {
                                icon: 'userLogo',
                                heading: 'User-Centric Design',
                                description:
                                    'Webflow offers unparalleled design freedom, allowing you to create unique, visually stunning websites without limitations. ',
                            },
                            {
                                icon: 'architectureLogo',
                                heading: 'Using Agile Methodologies',
                                description:
                                    'Webflow offers unparalleled design freedom, allowing you to create unique, visually stunning websites without limitations. ',
                            },
                            {
                                icon: 'userLogo',
                                heading: 'User-Centric Design',
                                description:
                                    'Webflow offers unparalleled design freedom, allowing you to create unique, visually stunning websites without limitations. ',
                            },
                            {
                                icon: 'architectureLogo',
                                heading: 'Using Agile Methodologies',
                                description:
                                    'Webflow offers unparalleled design freedom, allowing you to create unique, visually stunning websites without limitations. ',
                            },
                        ]}
                        child={item => (
                            <>
                                <img className="logos" src={item.icon} />
                                <h3>{item.heading}</h3>
                                <p className="opacity-white-text card-paragraph">
                                    {item.description}
                                </p>
                            </>
                        )}
                    />

                    <div className="service-why-right-container">
                        <h3>Take control of your online presence</h3>
                        <img className="logos" src={faster} />
                        <ContactButton theme={'LIGHT'} />
                    </div>
                </div>
            </Container>
            <Container className="container-8" contentHorizontalAlign="left">
                <h2>Ready to scale your </h2>
                <h2>project to the next level?</h2>
                <p className="opacity-dark-text">
                    Let's take your project to new heights, reach out and see how we can help you.
                </p>

                <ContactButton theme={'DARK'} />
                <Rating />
                <div className={'footer background'}>
                    {/* Todo Footer */}
                    <div>
                        <h4>Epic coders</h4>
                    </div>
                </div>
            </Container>
        </>
    );
}
