import React from 'react';

import { Link } from 'react-router-dom';
import { scrollToId } from '../../Common/helper';
import Logo from '../../Logo/Logo';

import './styles.scss';

export default function NavDesktop({ actions = [] }) {
    function NavAction(action) {
        return (
            <Link to={action.path}>
                <span
                    onClick={() => {
                        if (action?.id) {
                            setTimeout(() => {
                                scrollToId(action.id);
                            }, 200);
                        }
                    }}
                >
                    {action.name}
                </span>
            </Link>
        );
    }
    return (
        <div className="navbar" id="navbar">
            <Logo size={24} showSubtitle={false}></Logo>
            <div className="nav-items">
                {actions.map(act => (
                    <NavAction {...act} />
                ))}
            </div>
        </div>
    );
}
