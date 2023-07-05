import React from 'react';
import headerLogo from '../images/Vector.svg';

function Header() {
    return (
        <header className="header page__margin">
            <img
                className="header__logo"
                src={headerLogo}
                alt="сервис Mesto"
            />
            <p className="header__email">venera_nechaeva@mail.ru</p>
            <a className="header__link">Выйти</a>
        </header>
    )
}

export default Header;

