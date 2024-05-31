import Button from '../../Common/Button/Primary/Button';
import { Heading2 } from '../../Common/Heading/Heading';
import { scrollToId } from '../../Common/helper';

import './styles.scss';

export default function Banner({ uid }) {
    return (
        <div className="text-banner" id={uid}>
            <div className="banner-logo-container"></div>
            <section className="banner-section-bas">
                <Heading2 heading={'Design & '} />
                <Heading2 heading={'Engineering studio.'} />
            </section>
            <section>
                <h3>With a user-first & AI approach.</h3>
            </section>
            <Button
                className="btn-contact-us"
                label={'Contact Us'}
                onClick={() => scrollToId('FOOTER')}
                type={'SOLID'}
                roundedCorners
            />
        </div>
    );
}
