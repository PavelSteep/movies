import React from 'react';
import './Header.css';

function Header({ onCloseLoginForm }) {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="wrap">
                    <a href="!#" className="brand-logo">
                        <img src={process.env.PUBLIC_URL+'/logo.png'} className='head__logo' alt='logo' />
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="!#" onClick={onCloseLoginForm}>
                            <i className="far fa-user"></i> Login
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
