import './styles.scss';
import Button from '../../../../../components/Common/Button/Primary/Button';
import Logo from '../../../../../components/Logo/Logo';

export default function NavbarDesktop() {
    return (
        <div className="navbar">
            <div className="items">
                <p>Home</p>
                <span />
                <p>Services</p>
                <p>About</p>
            </div>
            <div className="center-logo">
                <Logo showSubtitle={false} />
            </div>
            <Button
                className="btn-contact-us"
                label={'Contact Us'}
                // onClick={() => scrollToId('FOOTER')}
                type={'SOLID'}
                roundedCorners
                theme="LIGHT"
            />
        </div>
    );
}
