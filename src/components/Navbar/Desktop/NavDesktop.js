import React from 'react';

import './styles.scss'
import { Link } from 'react-router-dom';
import { scrollToId } from '../../Common/helper';
import Logo from '../../Logo/Logo';

export default function NavDesktop({ actions = [] }) {
    function NavAction(action) {
        return (
            <Link to={action.path}>
                <span onClick={() => {
                    if (action?.id) {
                        setTimeout(() => {
                            scrollToId(action.id);
                        }, 200)
                    }
                }}>{action.name}</span>
            </Link>
        )
    }
    return (
        <div className='navbar' id='navbar'>
            <div className='nav-logo'>
            <Logo size={10} showSubtitle={false}></Logo>
            </div>
            <div className='nav-items'>
                {actions.map((act) => <NavAction {...act} />)}
            </div>
        </div>
    )
}