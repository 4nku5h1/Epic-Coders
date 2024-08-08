import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import NavbarMobile from './NavbarMobile/NavbarMobile';

export default function Navbar() {
    if (isBrowser) return <NavbarDesktop />;
    return <NavbarMobile />;
}
