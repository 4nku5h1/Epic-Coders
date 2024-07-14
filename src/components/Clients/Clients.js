import { Heading2 } from '../Common/Heading/Heading';
import AnimatedItems from '../Common/Motion/AnimatedItems';
import Page from '../Common/Page/Page';
import { clientDescription, clientNames } from '../data';
import './styles.scss';

import imgClients from '../../assets/clients.svg';

export default function About({ uid }) {
    return (
        <Page className="page clients-page" uid={uid}>
            <Heading2 heading={'Our Trusted Clients'} className={'heading-2'} />
            <p className="about-paragraph">{clientDescription}</p>{' '}
            <AnimatedItems
                animate={true}
                data={clientNames}
                child={item => <span>{item}</span>}
                containerClassName={'clientsName-container'}
                className={'clientName'}
            />
        </Page>
    );
}
