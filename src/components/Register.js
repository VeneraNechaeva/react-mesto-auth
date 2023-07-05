import React from 'react';

function Register() {


    
    return (
        <form className="register__form" name="register" noValidate="">
            <h2 className="register__title">Регистрация</h2>
            <div className="register__label">
                <input
                    id="email"
                    className="register__field register__field_text_email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    minLength={2}
                    maxLength={40}
                    required=""
                />
                <span className="register__error email-error" />
            </div>
            <div className="register__label">
                <input
                    id="password"
                    className="register__field login__field_text_password"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    minLength={10}
                    maxLength={10}
                    required=""
                />
                <span className="register__error password-error" />
            </div>
            <button className="register__button" type="submit">
                Зарегистрироваться
            </button>
            <p className="register__text">Уже зарегистрированы? Войти</p>
        </form>
    )
}

export default Register;