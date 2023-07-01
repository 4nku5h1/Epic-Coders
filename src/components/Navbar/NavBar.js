import React from 'react';
import './styles.scss'

export default function Navbar() {
    return (
        <div className='navbar' id='navbar'>
            <div className='nav-logo'>
                <h2>GRAPHIC<span>NIX</span></h2>
            </div>
            <span>GRAPHICNIX © 2023</span>
            <button className='button lets-talk'>Let's Talk</button>
        </div>
    )
}
//   <span>SERVICES</span>
{/* <span>CONTACT</span> */ }