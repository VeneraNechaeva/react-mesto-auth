import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import headerLogo from '../images/Vector.svg';

function Header() {

    const navigate = useNavigate();
    let location = useLocation();

    const [headerInfo, setHeaderInfo] = useState({});

    // Функция, которая отрисовывает текст ссылки и путь прехода по ней, 
    // в зависимости от url
    useEffect(() => {
        if (location) {
            if (location.pathname === "/signin") {
                setHeaderInfo({ textLink: "Регистрация", pathLink: "/signup" })
            }
            if (location.pathname === "/signup") {
                setHeaderInfo({ textLink: "Войти", pathLink: "/signin" })
            }
            if (location.pathname === "/users/me") {
                setHeaderInfo({ textLink: "Выйти", pathLink: "/signin", onClick: onSignOut })
            }
        }
    }, [location])


    // Переход по кнопке "Выйти"
    // Удаляет JWT из localStorage и затем использует navigate,
    // чтобы направить пользователя обратно к роуту /signin
    function onSignOut() {
        localStorage.removeItem('jwt');
        // navigate('/signin');
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
                {/* <a className="header__link" onClick={headerInfo?.onClick} href={headerInfo?.pathLink}>{headerInfo?.textLink}</a> */}
                <Link className="header__link" onClick={headerInfo?.onClick} to={headerInfo?.pathLink}>{headerInfo?.textLink}</Link>
            </div>
        </header>
    )
}

export default Header;


// если "/signin" отображает "Регистрация"
// если "/signup" отображает "Войти"
// если "/users/me" отображает "email пользователя" и "Выйти"

// "Регистрация" onClick = navigate("/signup")
// "Войти" onClick = navigate("/signin")
// "Выйти" onClick = { onSignOut }

