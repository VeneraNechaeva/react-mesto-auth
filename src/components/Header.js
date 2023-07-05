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
            <div className="header__tex-conteiner">
                <p className="header__email">email@mail.com</p>
                <a className="header__link">Выйти</a>
            </div>
        </header>
    )
}

export default Header;

