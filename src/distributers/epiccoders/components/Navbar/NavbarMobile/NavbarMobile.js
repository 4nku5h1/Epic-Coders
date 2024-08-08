import { useState } from 'react';
import Logo from '../../../../../components/Logo/Logo';
import hamburgerLogo from '../../../../../assets/core/hamburger.svg';

import './styles.scss';

export default function NavbarMobile() {
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    return (
        <div className={`navbar-mobile ${isNavMenuOpen ? 'menu-open' : ''}`}>
            <div className="basic">
                <div className="center-logo">
                    <Logo showSubtitle={false} />
                </div>
                <img
                    src={hamburgerLogo}
                    onClick={() => {
                        setIsNavMenuOpen(!isNavMenuOpen);
                    }}
                />
            </div>
            {isNavMenuOpen ? (
                <div className="items">
                    <p>Home</p>
                    <p>Services</p>
                    <p>About</p>
                    <span />
                    <p>Contact us</p>
                </div>
            ) : (
                false
            )}
        </div>
    );
}
