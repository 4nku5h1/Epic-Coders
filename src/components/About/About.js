import AnimatedItems from '../Common/Motion/AnimatedItems';
import Stats from '../Common/Row/Row';
import { about, clientDescription, clientNames } from '../data';

import './styles.scss';
export default function About({ uid }) {
    return (
        <div className="themer page content">
            <div className="container" id={uid}>
                <h2>What we do best</h2>
                <p className="about-paragraph paragraph">{about}</p>

                <Stats
                    data={[
                        {
                            title: '5 +',
                            description: 'Years of development experiance',
                        },
                        {
                            title: '500 +',
                            description: 'Project delivered',
                        },
                        {
                            title: '500 +',
                            description: 'Happy clients',
                        },
                        {
                            title: '80 +',
                            description: 'Professional employees',
                        },
                    ]}
                />
                <div className="spacer" />
                <h2>Trusted Clients</h2>
                <p className="about-paragraph paragraph">{clientDescription}</p>
                <AnimatedItems
                    animate={true}
                    data={clientNames}
                    child={item => <span>{item}</span>}
                />
            </div>
        </div>
    );
}
