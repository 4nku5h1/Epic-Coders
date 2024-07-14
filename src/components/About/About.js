import { Heading4 } from '../Common/Heading/Heading';
import Page from '../Common/Page/Page';
import Row from '../Common/Row/Row';
import { about } from '../data';

import './styles.scss';
export default function About({ uid }) {
    return (
        <Page className="themer page about-container" uid={uid}>
            <div className="about">
                <div className="left-section">
                    <Heading4 heading={'What we do best'} />
                    <p className="about-paragraph">{about}</p>
                </div>
                <div className="right-section">
                    <Row
                        data={[
                            {
                                title: '10+ Years of development experiance.',
                            },
                            {
                                title: '1000+ Project delivered.',
                            },
                            {
                                title: '1000+ Happy clients.',
                            },
                            {
                                title: '80+ Professional employees.',
                            },
                        ]}
                        containerClass={'row'}
                        itemClass={'rowItem'}
                        child={item => {
                            return (
                                <>
                                    <p>{item.title}</p>
                                </>
                            );
                        }}
                    />
                </div>
            </div>
        </Page>
    );
}
