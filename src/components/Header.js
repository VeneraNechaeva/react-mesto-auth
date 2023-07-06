import React from 'react';
import { useNavigate } from 'react-router-dom';
import headerLogo from '../images/Vector.svg';

function Header() {

    const navigate = useNavigate();

    // Удаляет JWT из localStorage и затем использует метод history.push,
    // чтобы направить пользователя обратно к роуту /signin
    function onSignOut() {
        localStorage.removeItem('jwt');
        navigate('/signin');
    }

    return (
        <header className="header page__margin">
            <img
                className="header__logo"
                src={headerLogo}
                alt="сервис Mesto"
            />
            <div className="header__tex-conteiner">
                <p className="header__email">email@mail.com</p>
                <a onClick={onSignOut} className="header__link">Выйти</a>
            </div>
        </header>
    )
}

export default Header;

